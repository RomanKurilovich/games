import React, { memo, useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { GestureContainer, Grid } from 'components';
import { COLORS, SNAKE, STATUSES, GESTURE } from 'names';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { canMove } from 'helpers/snake';
import {
  directionSelector,
  foodSelector,
  snakeSelector,
  statusSelector,
} from 'store/snake/selectors';
import { setDirectionAction } from 'store/snake/actions';

import SnakeView from '../SnakeView';
import Food from '../Food';
import { useLogics } from './useLogics';

const GameBoard = () => {
  const dispatch = useAppDispatch();

  const status = useAppSelector(statusSelector);
  const snake = useAppSelector(snakeSelector);
  const food = useAppSelector(foodSelector);
  const direction = useAppSelector(directionSelector);

  const { moveSnake } = useLogics();

  const setDirection = (updatedDirection: GESTURE.DIRECTION) => {
    dispatch(setDirectionAction(updatedDirection));
  };

  useEffect(() => {
    if (status === STATUSES.GAME_STATUSES.IN_PROGRESS) {
      const intervalId = setInterval(() => {
        moveSnake();
      }, SNAKE.MOVE_INTERVAL);

      return () => clearInterval(intervalId);
    }
  }, [status]);

  const handleSwipe = useCallback(
    (updatedDirection: GESTURE.DIRECTION) => {
      if (status === STATUSES.GAME_STATUSES.IN_PROGRESS) {
        if (canMove(updatedDirection, snake)) {
          setDirection(updatedDirection);
        }
      }
    },
    [direction, status, snake],
  );

  return (
    <GestureContainer onSwipe={handleSwipe} waitEndGesture={false}>
      <View style={styles.container}>
        <View>
          <Grid
            matrix={SNAKE.GRID_MATRIX}
            separatorSize={SNAKE.SEPARATOR_SIZE}
            stylesByValue={SNAKE.STYLES_GRID_CELL_BY_VALUE}
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
