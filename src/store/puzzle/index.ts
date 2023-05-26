import { createSelector, createSlice } from '@reduxjs/toolkit';

import { PuzzleTypes, StoreTypes } from 'types';
import { cellsWithRandomTile } from 'screens/Puzzle/helpers';

type SliceState = {
  cells: PuzzleTypes.Cells;
  score: number;
};

const initialState: SliceState = {
  cells: cellsWithRandomTile,
  score: 0,
};

const puzzleSlice = createSlice({
  name: 'puzzle',
  initialState,
  reducers: {
    setCells: (state, actions) => {
      state.cells = actions.payload;
    },
    setScore: (state, actions) => {
      state.score = actions.payload;
    },
  },
});

const puzzleStateSelector = (state: StoreTypes.RootState) => state.puzzle;

export const cellsSelector = createSelector(
  puzzleStateSelector,
  (state) => state.cells,
);

export const scoreSelector = createSelector(
  puzzleStateSelector,
  (state) => state.score,
);

const { actions } = puzzleSlice;

export const { setCells, setScore } = actions;

export default puzzleSlice;
