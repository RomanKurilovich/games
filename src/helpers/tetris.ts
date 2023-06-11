import { TetrisTypes } from 'types';
import { TETRIS } from 'names';

export const getRandomElement = (array: TetrisTypes.TetrominoNames) => {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

export const generateTetromino = () => {
  const name = getRandomElement(TETRIS.TETROMINO_NAMES);
  const matrix = TETRIS.TETROMINOES[name];

  const row = TETRIS.TETROMINO_START_POSITION_ROW;
  const column = Math.floor((TETRIS.GRID_SIZE_X - matrix.length) / 2);

  return { row, column, matrix, name };
};

export const rotateMatrix = (matrix: TetrisTypes.Matrix) => {
  const rotatedMatrix: TetrisTypes.Matrix = [];
  for (let i = 0; i < matrix.length; i++) {
    rotatedMatrix[i] = [];

    for (let j = 0; j < matrix.length; j++) {
      rotatedMatrix[i][j] = matrix[matrix.length - j - 1][i];
    }
  }

  return rotatedMatrix;
};

export const canMove = (
  gameBoard: TetrisTypes.Matrix,
  tetromino: TetrisTypes.Tetromino,
) => {
  const matrixSize = tetromino.matrix.length;

  for (let row = 0; row < matrixSize; row++) {
    for (let column = 0; column < matrixSize; column++) {
      if (!tetromino.matrix[row][column]) {
        continue;
      }

      if (isCellOutSide(tetromino, row, column)) {
        return false;
      }

      if (isCollides(gameBoard, tetromino, row, column)) {
        return false;
      }
    }
  }

  return true;
};

export const isCollides = (
  gameBoard: TetrisTypes.Matrix,
  tetromino: TetrisTypes.Tetromino,
  row: number,
  column: number,
) => {
  return gameBoard[tetromino.row + row]?.[tetromino.column + column];
};

const dropRowAbove = (gameBoard: TetrisTypes.Matrix, rowToDelete: number) => {
  const updatedGameBoard = [...gameBoard];

  for (let row = rowToDelete; row > 0; row--) {
    updatedGameBoard[row] = updatedGameBoard[row - 1];
  }

  updatedGameBoard[0] = new Array(TETRIS.GRID_SIZE_X).fill(0);

  return updatedGameBoard;
};

export const getFilledRows = (gameBoard: TetrisTypes.Matrix) => {
  const filledRows = [];

  for (let row = 0; row < gameBoard.length; row++) {
    if (gameBoard[row].every((cell) => !!cell)) {
      filledRows.push(row);
    }
  }

  return filledRows as TetrisTypes.RowCells;
};

export const removeRows = (
  gameBoard: TetrisTypes.Matrix,
  rows: TetrisTypes.RowCells,
) => {
  let updatedGameBoard = [...gameBoard];

  for (let i = 0; i < rows.length; i++) {
    updatedGameBoard = dropRowAbove(updatedGameBoard, rows[i]);
  }

  return updatedGameBoard;
};

export const isCellOutSide = (
  tetromino: TetrisTypes.Tetromino,
  row: number,
  column: number,
) => {
  return (
    tetromino.column + column < TETRIS.BOUNDARIES.xMin ||
    tetromino.column + column > TETRIS.BOUNDARIES.xMax ||
    tetromino.row + row > TETRIS.BOUNDARIES.yMax
  );
};
