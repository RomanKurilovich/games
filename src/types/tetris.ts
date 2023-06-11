import { TETRIS } from 'names';

export type TetrominoNames = typeof TETRIS.TETROMINO_NAMES;
export type TetrominoName = TetrominoNames[number];

export type Tetromino = {
  row: number;
  column: number;
  name: TetrominoName;
  matrix: Matrix;
};

export type Matrix = Array<RowCells>;

export type Cell = 0 | 1;

export type RowCells = Array<Cell>;

export type Score = number;

export type CellStyles = typeof TETRIS.STYLES_GRID_CELL_BY_VALUE;
