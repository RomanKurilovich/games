import React, { memo, useCallback, useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { GestureContainer } from 'components';
import { COLORS, GESTURE, STATUSES, TETRIS } from 'names';
import { TetrisTypes } from 'types';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import StoreService from 'store/StoreService';
import {
  canMove,
  generateTetromino,
  getFilledRows,
  removeRows,
  rotateMatrix,
} from 'helpers/tetris';
import {
  gameBoardSelector,
  statusSelector,
  tetrominoSelector,
} from 'store/tetris/selectors';
import {
  setGameBoardAction,
  setScoreAction,
  setStatusAction,
  setTetrominoAction,
} from 'store/tetris/actions';

import MatrixGrid from '../MatrixGrid';
import Tetromino from '../Tetromino';

const GameBoard = () => {
  const dispatch = useAppDispatch();

  const status = useAppSelector(statusSelector);
  const gameBoard = useAppSelector(gameBoardSelector);
  const tetromino = useAppSelector(tetrominoSelector);

  useEffect(() => {
    if (status === STATUSES.GAME_STATUSES.IN_PROGRESS) {
      const intervalId = setInterval(() => {
        moveDown();
      }, 500);

      return () => {
        clearInterval(intervalId);
        setStatus(STATUSES.GAME_STATUSES.IS_PAUSED);
      };
    }
  }, [status]);

  const setStatus = (updatedStatus: STATUSES.GAME_STATUSES) => {
    dispatch(setStatusAction(updatedStatus));
  };

  const setTetromino = (updatedTetromino: TetrisTypes.Tetromino) => {
    dispatch(setTetrominoAction(updatedTetromino));
  };

  const setGameBoard = (updatedGameBoard: TetrisTypes.Matrix) => {
    dispatch(setGameBoardAction(updatedGameBoard));
  };

  const setScore = (updatedScore: TetrisTypes.Score) => {
    dispatch(setScoreAction(updatedScore));
  };

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

  const moveDown = () => {
    // It is necessary to get data from the store at the time of the call
    // Because the function is passed as a callback to the interval
    const state = StoreService.getState();

    const { tetromino: actualTetromino, gameBoard: actualGameBoard } =
      state.tetris;
    const updatedTetromino = {
      ...actualTetromino,
      row: actualTetromino.row + 1,
    };

    if (!canMove(actualGameBoard, updatedTetromino)) {
      placeTetromino();

      return;
    }

    setTetromino(updatedTetromino);
  };

  const placeTetromino = () => {
    // It is necessary to get data from the store at the time of the call
    // Because the function is passed as a callback to the interval
    const state = StoreService.getState();

    const {
      tetromino: actualTetromino,
      gameBoard: actualGameBoard,
      score: actualScore,
    } = state.tetris;
    const matrixSize = actualTetromino.matrix.length;

    // Need for deep clone, because actualGameBoard is a matrix
    let updatedGameBoard = JSON.parse(JSON.stringify(actualGameBoard));

    for (let row = 0; row < matrixSize; row++) {
      for (let column = 0; column < matrixSize; column++) {
        if (!actualTetromino.matrix[row][column]) {
          continue;
        }

        const cellRow = actualTetromino.row + row;
        const cellColumn = actualTetromino.column + column;

        if (cellRow < TETRIS.GAME_IS_OVER_POSITION_ROW) {
          setStatus(STATUSES.GAME_STATUSES.IS_OVER);
          Alert.alert('Game over', '');

          return;
        }

        updatedGameBoard[cellRow][cellColumn] = 1;
      }
    }

    const filledRows = getFilledRows(updatedGameBoard);
    const randomTetromino = generateTetromino();

    if (filledRows.length) {
      updatedGameBoard = removeRows(updatedGameBoard, filledRows);

      setScore(actualScore + filledRows.length);
    }

    setGameBoard(updatedGameBoard);
    setTetromino(randomTetromino);
  };

  const rotateTetromino = () => {
    const rotatedMatrix = rotateMatrix(tetromino.matrix);
    const updatedTetromino = { ...tetromino, matrix: rotatedMatrix };

    if (!canMove(gameBoard, updatedTetromino)) {
      return;
    }

    setTetromino(updatedTetromino);
  };

  const moveLeft = () => {
    const updatedTetromino = { ...tetromino, column: tetromino.column - 1 };
    if (!canMove(gameBoard, updatedTetromino)) {
      return;
    }

    setTetromino(updatedTetromino);
  };

  const moveRight = () => {
    const updatedTetromino = { ...tetromino, column: tetromino.column + 1 };

    if (!canMove(gameBoard, updatedTetromino)) {
      return;
    }

    setTetromino(updatedTetromino);
  };

  return (
    <GestureContainer onSwipe={handleSwipe} waitEndGesture>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <MatrixGrid
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
