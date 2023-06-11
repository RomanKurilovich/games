import { createSelector } from '@reduxjs/toolkit';

import { StoreTypes } from 'types';

const tetrisStateSelector = (state: StoreTypes.RootState) => state.tetris;

export const gameBoardSelector = createSelector(
  tetrisStateSelector,
  (state) => state.gameBoard,
);

export const tetrominoSelector = createSelector(
  tetrisStateSelector,
  (state) => state.tetromino,
);

export const statusSelector = createSelector(
  tetrisStateSelector,
  (state) => state.status,
);

export const scoreSelector = createSelector(
  tetrisStateSelector,
  (state) => state.score,
);

export const maxScoreSelector = createSelector(
  tetrisStateSelector,
  (state) => state.maxScore,
);
