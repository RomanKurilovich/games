import { StoreTypes } from 'types';
import { STATUSES, TETRIS } from 'names';
import { generateTetromino } from 'helpers/tetris';

import tetrisSlice from '../tetris';

export const resetAction = () => (dispatch: StoreTypes.AppDispatch) => {
  dispatch(setTetrominoAction(generateTetromino()));
  dispatch(setGameBoardAction(TETRIS.INIT_BOARD));
  dispatch(setScoreAction(0));
  dispatch(setStatusAction(STATUSES.GAME_STATUSES.NOT_INIT));
};

export const {
  setTetromino: setTetrominoAction,
  setGameBoard: setGameBoardAction,
  setScore: setScoreAction,
  setStatus: setStatusAction,
} = tetrisSlice.actions;
