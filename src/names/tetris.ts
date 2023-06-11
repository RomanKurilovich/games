import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS, SIZES } from 'names';
import { TetrisTypes } from 'types';

// Durations
export const MOVE_INTERVAL = 500;

// Sizes
export const GAME_CONTAINER_WIDTH =
  SIZES.DEVICE_WIDTH - SIZES.CONTENT_MARGIN * 2;
export const SEPARATOR_SIZE = 2;
export const GRID_SIZE_X = 11;
export const CELL_SIDE_SIZE = Math.floor(
  (GAME_CONTAINER_WIDTH - SEPARATOR_SIZE * (GRID_SIZE_X - 1)) / GRID_SIZE_X,
);
export const GRID_SIZE_Y = Math.floor(
  SIZES.GAME_BOARD_HEIGHT / (CELL_SIDE_SIZE + SEPARATOR_SIZE),
);

export const BOUNDARIES = {
  xMin: 0,
  xMax: GRID_SIZE_X - 1,
  yMin: 0,
  yMax: GRID_SIZE_Y - 1,
};

export const TETROMINO_START_POSITION_ROW = -2;
export const GAME_IS_OVER_POSITION_ROW = 1;

export const INIT_BOARD = new Array(GRID_SIZE_Y)
  .fill(0)
  .map(() => new Array(GRID_SIZE_X).fill(0));

export const TETROMINO_NAMES = ['I', 'J', 'L', 'O', 'S', 'Z', 'T'] as const;

export const STYLES_GRID_CELL_BY_VALUE: Record<TetrisTypes.Cell, ViewStyle> =
  StyleSheet.create({
    0: {
      width: CELL_SIDE_SIZE,
      height: CELL_SIDE_SIZE,
      backgroundColor: COLORS.HEAVY_METAL,
    },
    1: {
      width: CELL_SIDE_SIZE,
      height: CELL_SIDE_SIZE,
      backgroundColor: COLORS.PARIS_WHITE,
    },
  });

export const STYLES_TETROMINO_CELL_BY_VALUE: Record<
  TetrisTypes.Cell,
  ViewStyle
> = StyleSheet.create({
  0: {
    width: CELL_SIDE_SIZE,
    height: CELL_SIDE_SIZE,
  },
  1: {
    width: CELL_SIDE_SIZE,
    height: CELL_SIDE_SIZE,
    backgroundColor: COLORS.PARIS_WHITE,
  },
});

export const TETROMINOES: {
  [key in TetrisTypes.TetrominoName]: TetrisTypes.Matrix;
} = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
};
