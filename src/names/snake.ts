import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS, SIZES } from 'names';
import { SnakeTypes } from 'types';

// Durations
export const MOVE_INTERVAL = 100;

// Sizes
export const GAME_CONTAINER_WIDTH =
  SIZES.DEVICE_WIDTH - SIZES.CONTENT_MARGIN * 2;
export const SEPARATOR_SIZE = 2;
export const GRID_SIZE_X = 16;
export const CELL_SIDE_SIZE = Math.floor(
  (GAME_CONTAINER_WIDTH - SEPARATOR_SIZE * (GRID_SIZE_X - 1)) / GRID_SIZE_X,
);
export const GRID_SIZE_Y = Math.floor(
  SIZES.GAME_BOARD_HEIGHT / (CELL_SIDE_SIZE + SEPARATOR_SIZE),
);

export const GRID_MATRIX = new Array(GRID_SIZE_Y)
  .fill(0)
  .map(() => new Array(GRID_SIZE_X).fill(0));

export const STYLES_GRID_CELL_BY_VALUE: Record<
  SnakeTypes.CellValueType,
  ViewStyle
> = StyleSheet.create({
  0: {
    width: CELL_SIDE_SIZE,
    height: CELL_SIDE_SIZE,
    backgroundColor: COLORS.HEAVY_METAL,
  },
});

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
