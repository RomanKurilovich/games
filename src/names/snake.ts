import { SIZES } from 'names';

export const GAME_CONTAINER_WIDTH =
  SIZES.DEVICE_WIDTH - SIZES.CONTENT_MARGIN * 2;

export const SEPARATOR_SIZE = 2;

export const GRID_SIZE_X = 18;
export const GRID_SIZE_Y = 22;

export const CELL_SIDE_SIZE = Math.floor(
  (GAME_CONTAINER_WIDTH - SEPARATOR_SIZE * (GRID_SIZE_X - 1)) / GRID_SIZE_X,
);

export const BOUNDARIES = {
  xMin: 0,
  xMax: GRID_SIZE_X - 1,
  yMin: 0,
  yMax: GRID_SIZE_Y - 1,
};

export const SNAKE_INITIAL_POSITION = [
  { x: 5, y: 3 },
  { x: 4, y: 3 },
  { x: 3, y: 3 },
];

export const MOVE_INTERVAL = 100;
