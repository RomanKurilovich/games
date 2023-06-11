import { useCallback, useEffect, useMemo } from 'react';

import { PuzzleTypes } from 'types';
import { PUZZLE } from 'names';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { showGameOverAlert } from 'helpers/alerts';
import {
  addRandomTile,
  getFunctionCheckMovement,
  getGroupedCells,
  mergeCells,
  slideTiles,
} from 'helpers/puzzle';
import { cellsSelector, scoreSelector } from 'store/puzzle/selectors';
import { setCellsAction, setScoreAction } from 'store/puzzle/actions';

export const useLogics = () => {
  const dispatch = useAppDispatch();

  const cells = useAppSelector(cellsSelector);
  const score = useAppSelector(scoreSelector);

  const groupedCells = useMemo(() => getGroupedCells(cells), [cells]);

  const { canMoveUp, canMoveDown, canMoveLeft, canMoveRight } = useMemo(
    () => getFunctionCheckMovement(groupedCells),
    [groupedCells],
  );

  useEffect(() => {
    const freeCells = cells.filter((cell) => !cell.tiles.length);
    const cellsForMerge = cells.filter((cell) => cell.tiles.length > 1);
    const allCellsFilledAndMerged = !freeCells.length && !cellsForMerge.length;

    if (allCellsFilledAndMerged) {
      const canMove =
        canMoveLeft() || canMoveRight() || canMoveUp() || canMoveDown();

      if (!canMove) {
        showGameOverAlert();
      }
    }
  }, [cells]);

  const setCells = useCallback((cells: PuzzleTypes.Cells) => {
    dispatch(setCellsAction(cells));
  }, []);

  const setScore = useCallback((updatedScore: number) => {
    dispatch(setScoreAction(updatedScore));
  }, []);

  const processGroupedCells = (cellsGroup: PuzzleTypes.CellsGroup) =>
    cellsGroup.reduce((accumulator, group) => {
      return [...accumulator, ...group];
    }, []);

  const updateScore = (cellsForMerge: PuzzleTypes.Cells) => {
    const updatedScore = cellsForMerge.reduce(
      (accumulator, cellForMerge) =>
        accumulator + cellForMerge.tiles[0].value * 2,
      score,
    );

    setScore(updatedScore);
  };

  const updateGroupedCells = (cellsGroup: PuzzleTypes.CellsGroup) => {
    const formattedCells = processGroupedCells(cellsGroup);
    const updatedCells = addRandomTile(formattedCells);

    setCells(updatedCells);

    setTimeout(() => {
      const cellsForMerge = updatedCells.filter(
        (cell) => cell.tiles.length > 1,
      );

      if (cellsForMerge.length) {
        const mergedCells = mergeCells(updatedCells, cellsForMerge);

        updateScore(cellsForMerge);
        setCells(mergedCells);
      }
    }, PUZZLE.TILE_MOVEMENT_TIME);
  };

  const moveUp = useCallback(() => {
    if (canMoveUp()) {
      const slidedGroupedCells = slideTiles(groupedCells.byColumn);

      updateGroupedCells(slidedGroupedCells);
    }
  }, [groupedCells]);

  const moveDown = useCallback(() => {
    if (canMoveDown()) {
      const slidedGroupedCells = slideTiles(groupedCells.byReversedColumn);

      updateGroupedCells(slidedGroupedCells);
    }
  }, [groupedCells]);

  const moveRight = useCallback(() => {
    if (canMoveRight()) {
      const slidedGroupedCells = slideTiles(groupedCells.byReversedRow);

      updateGroupedCells(slidedGroupedCells);
    }
  }, [groupedCells]);

  const moveLeft = useCallback(() => {
    if (canMoveLeft()) {
      const slidedGroupedCells = slideTiles(groupedCells.byRow);

      updateGroupedCells(slidedGroupedCells);
    }
  }, [groupedCells]);

  return { moveUp, moveDown, moveLeft, moveRight };
};
