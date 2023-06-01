import React, { memo, useCallback, useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { SnakeTypes } from 'types';
import { GestureContainer, Grid } from 'components';
import { COLORS, SNAKE, STATUSES, GESTURE } from 'names';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import {
  canMove,
  checkEatsFood,
  checkGameOver,
  getRandomFoodPosition,
} from 'helpers/snake';
import {
  directionSelector,
  foodSelector,
  scoreSelector,
  snakeSelector,
  statusSelector,
} from 'store/snake/selectors';
import {
  setDirectionAction,
  setFoodAction,
  setScoreAction,
  setSnakeAction,
  setStatusAction,
} from 'store/snake/actions';

import SnakeView from '../SnakeView';
import Food from '../Food';

const GameBoard = () => {
  const dispatch = useAppDispatch();

  const score = useAppSelector(scoreSelector);
  const status = useAppSelector(statusSelector);
  const snake = useAppSelector(snakeSelector);
  const food = useAppSelector(foodSelector);
  const direction = useAppSelector(directionSelector);

  useEffect(() => {
    if (status === STATUSES.GAME_STATUSES.IN_PROGRESS) {
      const intervalId = setInterval(() => {
        moveSnake();
      }, SNAKE.MOVE_INTERVAL);

      return () => clearInterval(intervalId);
    }
  }, [direction, snake, status]);

  const setSnake = (updatedSnake: SnakeTypes.Snake) => {
    dispatch(setSnakeAction(updatedSnake));
  };

  const setStatus = (updatedStatus: STATUSES.GAME_STATUSES) => {
    dispatch(setStatusAction(updatedStatus));
  };

  const setDirection = (updatedDirection: GESTURE.DIRECTION) => {
    dispatch(setDirectionAction(updatedDirection));
  };

  const setFood = (updatedFood: SnakeTypes.Coordinate) => {
    dispatch(setFoodAction(updatedFood));
  };

  const setScore = (updatedScore: number) => {
    dispatch(setScoreAction(updatedScore));
  };

  const moveSnake = () => {
    const snakeHead = snake[0];
    const updatedHead = { ...snakeHead };

    switch (direction) {
      case GESTURE.DIRECTION.UP:
        updatedHead.y -= 1;
        break;
      case GESTURE.DIRECTION.DOWN:
        updatedHead.y += 1;
        break;
      case GESTURE.DIRECTION.LEFT:
        updatedHead.x -= 1;
        break;
      case GESTURE.DIRECTION.RIGHT:
        updatedHead.x += 1;
        break;
      default:
        break;
    }

    if (checkGameOver(updatedHead, SNAKE.BOUNDARIES, snake)) {
      setStatus(STATUSES.GAME_STATUSES.IS_OVER);
      Alert.alert('Game over', '');

      return;
    }

    if (checkEatsFood(updatedHead, food)) {
      const randomFoodPosition = getRandomFoodPosition(
        SNAKE.BOUNDARIES.xMax,
        SNAKE.BOUNDARIES.yMax,
      );

      setSnake([updatedHead, ...snake]);
      setScore(score + 1);
      setFood(randomFoodPosition);
    } else {
      setSnake([updatedHead, ...snake.slice(0, -1)]);
    }
  };

  const handleSwipe = useCallback(
    (updatedDirection: GESTURE.DIRECTION) => {
      if (status === STATUSES.GAME_STATUSES.IN_PROGRESS) {
        if (canMove(updatedDirection, direction)) {
          setDirection(updatedDirection);
        }
      }
    },
    [direction, status],
  );

  return (
    <GestureContainer onSwipe={handleSwipe} waitEndGesture={false}>
      <View style={styles.container}>
        <View>
          <Grid
            numberCellsY={SNAKE.GRID_SIZE_Y}
            numberCellsX={SNAKE.GRID_SIZE_X}
            separatorSize={SNAKE.SEPARATOR_SIZE}
            cellStyles={styles.cell}
          />
          <SnakeView snake={snake} />
          <Food x={food.x} y={food.y} />
        </View>
      </View>
    </GestureContainer>
  );
};

export default memo(GameBoard);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  cell: {
    width: SNAKE.CELL_SIDE_SIZE,
    height: SNAKE.CELL_SIDE_SIZE,
    backgroundColor: COLORS.HEAVY_METAL,
  },
});
