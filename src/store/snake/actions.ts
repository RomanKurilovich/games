import { GESTURE, SNAKE, STATUSES } from 'names';
import { StoreTypes } from 'types';
import { getRandomFoodPosition } from 'helpers/snake';

import snakeSlice from '../snake';

export const resetAction = () => (dispatch: StoreTypes.AppDispatch) => {
  const randomFoodPosition = getRandomFoodPosition(
    SNAKE.BOUNDARIES.xMax,
    SNAKE.BOUNDARIES.yMax,
  );

  dispatch(setSnakeAction(SNAKE.SNAKE_INITIAL_POSITION));
  dispatch(setFoodAction(randomFoodPosition));
  dispatch(setStatusAction(STATUSES.GAME_STATUSES.NOT_INIT));
  dispatch(setDirectionAction(GESTURE.DIRECTION.RIGHT));
  dispatch(setScoreAction(0));
};

export const {
  setSnake: setSnakeAction,
  setDirection: setDirectionAction,
  setFood: setFoodAction,
  setStatus: setStatusAction,
  setScore: setScoreAction,
} = snakeSlice.actions;
