import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS, SIZES } from 'names';
import { PuzzleTypes } from 'types';

// Durations
export const TILE_MOVEMENT_TIME = 120;
export const TILE_EXITING_DURATION = 150;
export const TILE_ENTERING_DURATION = 200;

// Sizes
export const GAME_CONTAINER_WIDTH =
  SIZES.DEVICE_WIDTH - SIZES.CONTENT_MARGIN * 2;
export const SEPARATOR_SIZE = 6;
export const GRID_SIZE = 4;
export const CELLS_COUNT = GRID_SIZE ** 2;
export const CELL_SIDE_SIZE =
  (GAME_CONTAINER_WIDTH - SEPARATOR_SIZE * (GRID_SIZE - 1)) / GRID_SIZE;

export const STYLES_GRID_CELL_BY_VALUE: Record<
  PuzzleTypes.CellValueType,
  ViewStyle
> = StyleSheet.create({
  0: {
    width: CELL_SIDE_SIZE,
    height: CELL_SIDE_SIZE,
    borderRadius: 4,
    backgroundColor: COLORS.HEAVY_METAL,
  },
});

export const GRID_MATRIX = new Array(GRID_SIZE)
  .fill(0)
  .map(() => new Array(GRID_SIZE).fill(0));

export const INIT_CELLS = [...new Array(CELLS_COUNT)].map((value, index) => ({
  x: index % GRID_SIZE,
  y: Math.floor(index / GRID_SIZE),
  tiles: [],
  index,
}));
