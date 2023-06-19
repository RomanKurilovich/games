import { useNavigation } from '@react-navigation/native';

import { NavigationTypes, SnakeTypes } from 'types';
import { ROUTES, SNAKE, STATUSES } from 'names';
import { useAppDispatch } from 'hooks/redux';
import StoreService from 'store/StoreService';
import {
  checkEatsFood,
  checkGameOver,
  getNextPosition,
  getRandomFoodPosition,
} from 'helpers/snake';
import {
  setFoodAction,
  setScoreAction,
  setSnakeAction,
  setStatusAction,
} from 'store/snake/actions';

type Navigation =
  NavigationTypes.GamesScreenProps<ROUTES.MAIN_ROUTES.SNAKE>['navigation'];

export const useLogics = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<Navigation>();

  const setSnake = (updatedSnake: SnakeTypes.Snake) => {
    dispatch(setSnakeAction(updatedSnake));
  };

  const setStatus = (updatedStatus: STATUSES.GAME_STATUSES) => {
    dispatch(setStatusAction(updatedStatus));
  };

  const setFood = (updatedFood: SnakeTypes.Coordinate) => {
    dispatch(setFoodAction(updatedFood));
  };

  const setScore = (updatedScore: number) => {
    dispatch(setScoreAction(updatedScore));
  };

  const moveSnake = () => {
    // It is necessary to get data from the store at the time of the call
    // Because the function is passed as a callback to the interval
    const state = StoreService.getState();

    const {
      snake: actualSnake,
      direction: actualDirection,
      food: actualFood,
      score: actualScore,
      maxScore: actualMaxScore,
    } = state.snake;
    const snakeHead = actualSnake[0];

    const updatedHead = getNextPosition(snakeHead, actualDirection);

    if (checkGameOver(updatedHead, SNAKE.BOUNDARIES, actualSnake)) {
      setStatus(STATUSES.GAME_STATUSES.IS_OVER);

      navigation.navigate(ROUTES.MAIN_ROUTES.GAME_OVER_MODAL, {
        score: actualScore,
        maxScore: actualMaxScore,
      });

      return;
    }

    if (checkEatsFood(updatedHead, actualFood)) {
      const randomFoodPosition = getRandomFoodPosition(
        SNAKE.BOUNDARIES.xMax,
        SNAKE.BOUNDARIES.yMax,
      );

      setSnake([updatedHead, ...actualSnake]);
      setScore(actualScore + 1);
      setFood(randomFoodPosition);
    } else {
      setSnake([updatedHead, ...actualSnake.slice(0, -1)]);
    }
  };

  return { moveSnake };
};
