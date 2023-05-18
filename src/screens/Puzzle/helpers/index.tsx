import _ from 'lodash';
import uuid from 'react-native-uuid';

import { PuzzleTypes } from 'types';
import { CELLS_COUNT, GRID_SIZE } from '../sizes';

const canMoveTile = (toCell: PuzzleTypes.Cell, fromCell: PuzzleTypes.Cell) => {
  const cellIsFree = !toCell.tiles.length;
  const cellCanMerge =
    toCell.tiles.length === 1 &&
    fromCell.tiles.length === 1 &&
    fromCell.tiles[0].value === toCell.tiles[0].value;

  return cellIsFree || cellCanMerge;
};

const canMoveInGroup = (group: PuzzleTypes.Cells) => {
  return group.some((cell, index) => {
    if (index === 0) {
      return false;
    }

    if (!cell.tiles.length) {
      return false;
    }

    const targetCell = group[index - 1];

    return canMoveTile(targetCell, cell);
  });
};

const canMove = (groupedCells: PuzzleTypes.CellsGroup) =>
  groupedCells.some((group) => canMoveInGroup(group));

export const INIT_CELLS = _.times(CELLS_COUNT).map((value, index) => ({
  x: index % GRID_SIZE,
  y: Math.floor(index / GRID_SIZE),
  tiles: [],
  index,
}));

export const createTile = (value?: number) => ({
  id: uuid.v4() as string,
  value: value || Math.random() > 0.7 ? 4 : 2,
});

export const addRandomTile = (cells: PuzzleTypes.Cells) => {
  const freeCells = cells.filter((cell) => !cell.tiles.length);
  const randomFreeCellIndex =
    freeCells[Math.floor(Math.random() * freeCells.length)].index;
  const createdTile = createTile();

  return cells.map((cell) => {
    if (cell.index !== randomFreeCellIndex) {
      return cell;
    }

    return { ...cell, tiles: [createdTile] };
  });
};

export const getGroupedCells = (cells: PuzzleTypes.Cells) => {
  const byColumn = cells.reduce(
    (groupedCells: PuzzleTypes.CellsGroup, cell) => {
      groupedCells[cell.x] = groupedCells[cell.x] || [];
      groupedCells[cell.x][cell.y] = cell;

      return groupedCells;
    },
    [],
  );

  const byRow = cells.reduce((groupedCells: PuzzleTypes.CellsGroup, cell) => {
    groupedCells[cell.y] = groupedCells[cell.y] || [];
    groupedCells[cell.y][cell.x] = cell;

    return groupedCells;
  }, []);

  const byReversedColumn = byColumn.map((column) => [...column].reverse());

  const byReversedRow = byRow.map((column) => [...column].reverse());

  return {
    byColumn,
    byRow,
    byReversedColumn,
    byReversedRow,
  };
};

const slideTilesInGroup = (group: PuzzleTypes.Cells) => {
  let updatedGroup = [group[0]];

  for (let i = 1; i < group.length; i++) {
    if (!group[i].tiles.length) {
      updatedGroup.push(group[i]);

      continue;
    }

    // Cell with tile
    const currentCell = group[i];

    // Place to move tile
    let targetCell;
    let j = i - 1;

    while (j >= 0 && canMoveTile(updatedGroup[j], currentCell)) {
      targetCell = updatedGroup[j];
      j--;
    }

    if (!targetCell) {
      updatedGroup.push(group[i]);

      continue;
    }

    const indexUpdatedCell = _.findIndex(updatedGroup, targetCell);
    const updatedTargetCell = {
      ...targetCell,
      tiles: [...targetCell.tiles, ...currentCell.tiles],
    };
    const updatedCurrentCell = { ...currentCell, tiles: [] };

    updatedGroup.splice(
      indexUpdatedCell,
      1,
      updatedTargetCell,
      updatedCurrentCell,
    );
  }

  return updatedGroup;
};

export const slideTiles = (groupedCells: PuzzleTypes.CellsGroup) =>
  groupedCells.map((group) => slideTilesInGroup(group));

export const getFunctionCheckMovement = (
  groupedCells: PuzzleTypes.GroupedCells,
) => {
  const { byColumn, byRow, byReversedColumn, byReversedRow } = groupedCells;
  const canMoveUp = () => {
    return canMove(byColumn);
  };

  const canMoveDown = () => {
    return canMove(byReversedColumn);
  };

  const canMoveLeft = () => {
    return canMove(byRow);
  };

  const canMoveRight = () => {
    return canMove(byReversedRow);
  };

  return { canMoveUp, canMoveDown, canMoveLeft, canMoveRight };
};

export const mergeCells = (
  cells: PuzzleTypes.Cells,
  cellsForMerge: PuzzleTypes.Cells,
) =>
  cells.map((cell) => {
    const needMergeCurrentCell = !!_.find(cellsForMerge, cell);

    if (needMergeCurrentCell) {
      const currentTile = cell.tiles[0];

      return {
        ...cell,
        tiles: [{ ...currentTile, value: currentTile.value * 2 }],
      };
    }

    return cell;
  });
