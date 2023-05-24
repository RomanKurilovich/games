import { SIZES } from 'names';
import { DEVICE_WIDTH } from 'helpers/sizes';

export const TILE_MOVEMENT_TIME = 100;
export const TILE_EXITING_DURATION = 100;
export const TILE_ENTERING_DURATION = 150;

export const GAME_CONTAINER_WIDTH = DEVICE_WIDTH - SIZES.CONTENT_MARGIN * 2;

export const SEPARATOR_SIZE = 6;

export const GRID_SIZE = 4;

export const CELLS_COUNT = GRID_SIZE ** 2;

export const CELL_SIDE_SIZE =
  (GAME_CONTAINER_WIDTH - SEPARATOR_SIZE * (GRID_SIZE - 1)) / GRID_SIZE;

export const getSpaces = (x: number, y: number) => {
  return {
    left: (SEPARATOR_SIZE + CELL_SIDE_SIZE) * x,
    top: (SEPARATOR_SIZE + CELL_SIDE_SIZE) * y,
  };
};
