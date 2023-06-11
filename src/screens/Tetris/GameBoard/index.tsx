import React, { memo, useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { GestureContainer, Grid } from 'components';
import { COLORS, GESTURE, STATUSES, TETRIS } from 'names';
import { useAppSelector } from 'hooks/redux';
import {
  gameBoardSelector,
  statusSelector,
  tetrominoSelector,
} from 'store/tetris/selectors';

import Tetromino from '../Tetromino';
import { useLogics } from './useLogics';

const GameBoard = () => {
  const status = useAppSelector(statusSelector);
  const gameBoard = useAppSelector(gameBoardSelector);
  const tetromino = useAppSelector(tetrominoSelector);

  const { moveDown, moveLeft, moveRight, rotateTetromino } = useLogics();

  useEffect(() => {
    if (status === STATUSES.GAME_STATUSES.IN_PROGRESS) {
      const intervalId = setInterval(() => {
        moveDown();
      }, TETRIS.MOVE_INTERVAL);

      return () => clearInterval(intervalId);
    }
  }, [status, tetromino.row]);

  const handleSwipe = useCallback(
    (direction: GESTURE.DIRECTION) => {
      if (status !== STATUSES.GAME_STATUSES.IN_PROGRESS) {
        return;
      }

      switch (direction) {
        case GESTURE.DIRECTION.UP:
          rotateTetromino();

          break;
        case GESTURE.DIRECTION.DOWN:
          moveDown();

          break;
        case GESTURE.DIRECTION.LEFT:
          moveLeft();

          break;
        case GESTURE.DIRECTION.RIGHT:
          moveRight();

          break;
      }
    },
    [tetromino, gameBoard, status],
  );

  return (
    <GestureContainer onSwipe={handleSwipe} waitEndGesture>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Grid
            matrix={gameBoard}
            stylesByValue={TETRIS.STYLES_GRID_CELL_BY_VALUE}
            separatorSize={TETRIS.SEPARATOR_SIZE}
          />
          <Tetromino tetromino={tetromino} />
        </View>
      </View>
    </GestureContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.NANDOR,
  },
  contentContainer: {
    overflow: 'hidden',
  },
});

export default memo(GameBoard);
