import { createSlice } from '@reduxjs/toolkit';

import { PuzzleTypes } from 'types';
import { PUZZLE } from 'names';
import { addRandomTile } from 'helpers/puzzle';

type SliceState = {
  cells: PuzzleTypes.Cells;
  score: number;
  maxScore: number;
};

const initialState: SliceState = {
  cells: addRandomTile(PUZZLE.INIT_CELLS),
  score: 0,
  maxScore: 0,
};

const puzzleSlice = createSlice({
  name: 'puzzle',
  initialState,
  reducers: {
    setCells: (state, action) => {
      state.cells = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;

      if (state.maxScore < action.payload) {
        state.maxScore = action.payload;
      }
    },
  },
});

export default puzzleSlice;
