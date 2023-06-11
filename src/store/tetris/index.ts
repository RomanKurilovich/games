import { createSlice } from '@reduxjs/toolkit';

import { TetrisTypes } from 'types';
import { STATUSES } from 'names';
import { generateTetromino } from 'helpers/tetris';
import { INIT_BOARD } from 'names/tetris';

type SliceState = {
  gameBoard: TetrisTypes.Matrix;
  tetromino: TetrisTypes.Tetromino;
  status: STATUSES.GAME_STATUSES;
  score: number;
  maxScore: number;
};

const initialState: SliceState = {
  gameBoard: INIT_BOARD,
  tetromino: generateTetromino(),
  status: STATUSES.GAME_STATUSES.NOT_INIT,
  score: 0,
  maxScore: 0,
};

const tetrisSlice = createSlice({
  name: 'tetris',
  initialState,
  reducers: {
    setGameBoard: (state, action) => {
      state.gameBoard = action.payload;
    },
    setTetromino: (state, action) => {
      state.tetromino = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;

      if (state.maxScore < action.payload) {
        state.maxScore = action.payload;
      }
    },
  },
});

export default tetrisSlice;
