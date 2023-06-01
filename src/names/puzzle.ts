import _ from 'lodash';

import { SIZES } from 'names';

export const TILE_MOVEMENT_TIME = 100;
export const TILE_EXITING_DURATION = 100;
export const TILE_ENTERING_DURATION = 150;

export const GAME_CONTAINER_WIDTH =
  SIZES.DEVICE_WIDTH - SIZES.CONTENT_MARGIN * 2;

export const SEPARATOR_SIZE = 6;

export const GRID_SIZE = 4;

export const CELLS_COUNT = GRID_SIZE ** 2;

export const CELL_SIDE_SIZE =
  (GAME_CONTAINER_WIDTH - SEPARATOR_SIZE * (GRID_SIZE - 1)) / GRID_SIZE;

export const INIT_CELLS = _.times(CELLS_COUNT).map((value, index) => ({
  x: index % GRID_SIZE,
  y: Math.floor(index / GRID_SIZE),
  tiles: [],
  index,
}));
