import { createSelector } from '@reduxjs/toolkit';

import { StoreTypes } from 'types';

const snakeStateSelector = (state: StoreTypes.RootState) => state.snake;

export const snakeSelector = createSelector(
  snakeStateSelector,
  (state) => state.snake,
);

export const foodSelector = createSelector(
  snakeStateSelector,
  (state) => state.food,
);

export const directionSelector = createSelector(
  snakeStateSelector,
  (state) => state.direction,
);

export const statusSelector = createSelector(
  snakeStateSelector,
  (state) => state.status,
);

export const scoreSelector = createSelector(
  snakeStateSelector,
  (state) => state.score,
);

export const maxScoreSelector = createSelector(
  snakeStateSelector,
  (state) => state.maxScore,
);
