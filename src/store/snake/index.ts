import { createSlice } from '@reduxjs/toolkit';

import { SnakeTypes } from 'types';
import { STATUSES, SNAKE, GESTURE } from 'names';
import { getRandomFoodPosition } from 'helpers/snake';

type SliceState = {
  direction: GESTURE.DIRECTION;
  snake: SnakeTypes.Snake;
  food: SnakeTypes.Coordinate;
  status: STATUSES.GAME_STATUSES;
  score: number;
  maxScore: number;
};

const initialState: SliceState = {
  direction: GESTURE.DIRECTION.RIGHT,
  snake: SNAKE.SNAKE_INITIAL_POSITION,
  food: getRandomFoodPosition(SNAKE.BOUNDARIES.xMax, SNAKE.BOUNDARIES.yMax),
  status: STATUSES.GAME_STATUSES.NOT_INIT,
  score: 0,
  maxScore: 0,
};

const snakeSlice = createSlice({
  name: 'snake',
  initialState,
  reducers: {
    setSnake: (state, action) => {
      state.snake = action.payload;
    },
    setDirection: (state, action) => {
      state.direction = action.payload;
    },
    setFood: (state, action) => {
      state.food = action.payload;
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

export default snakeSlice;
