import { createSelector } from '@reduxjs/toolkit';

import { StoreTypes } from 'types';

const puzzleStateSelector = (state: StoreTypes.RootState) => state.puzzle;

export const cellsSelector = createSelector(
  puzzleStateSelector,
  (state) => state.cells,
);

export const scoreSelector = createSelector(
  puzzleStateSelector,
  (state) => state.score,
);

export const maxScoreSelector = createSelector(
  puzzleStateSelector,
  (state) => state.maxScore,
);
