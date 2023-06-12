import { PUZZLE } from 'names';
import { StoreTypes } from 'types';
import { addRandomTile } from 'helpers/puzzle';

import puzzleSlice from '../puzzle';

export const resetAction = () => (dispatch: StoreTypes.AppDispatch) => {
  const cellsWithRandomTile = addRandomTile(PUZZLE.INIT_CELLS);

  dispatch(setCellsAction(cellsWithRandomTile));
  dispatch(setScoreAction(0));
};

export const { setCells: setCellsAction, setScore: setScoreAction } =
  puzzleSlice.actions;
