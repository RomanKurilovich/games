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
import StoreService from 'store/StoreService';
import {
  directionSelector,
  foodSelector,
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

  const status = useAppSelector(statusSelector);
  const snake = useAppSelector(snakeSelector);
  const food = useAppSelector(foodSelector);
  const direction = useAppSelector(directionSelector);

  useEffect(() => {
    const intervalId = setInterval(() => {
      moveSnake();
    }, SNAKE.MOVE_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

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
    const state = StoreService.getState();
    const {
      snake: actualSnake,
      direction: actualDirection,
      status: actualStatus,
      food: actualFood,
      score: actualScore,
    } = state.snake;

    if (actualStatus !== STATUSES.GAME_STATUSES.IN_PROGRESS) {
      return;
    }

    const snakeHead = actualSnake[0];
    const updatedHead = { ...snakeHead };

    switch (actualDirection) {
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

    if (checkGameOver(updatedHead, SNAKE.BOUNDARIES, actualSnake)) {
      setStatus(STATUSES.GAME_STATUSES.IS_OVER);
      Alert.alert('Game over', '');

      return;
    }

    if (checkEatsFood(updatedHead, actualFood)) {
      const randomFoodPosition = getRandomFoodPosition(
        SNAKE.BOUNDARIES.xMax,
        SNAKE.BOUNDARIES.yMax,
      );

      setSnake([updatedHead, ...actualSnake]);
      setScore(actualScore + 1);
      setFood(randomFoodPosition);
    } else {
      setSnake([updatedHead, ...actualSnake.slice(0, -1)]);
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
