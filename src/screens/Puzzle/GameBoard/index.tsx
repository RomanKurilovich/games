import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { PuzzleTypes } from 'types';

import {
  addRandomTile,
  getFunctionCheckMovement,
  getGroupedCells,
  mergeCells,
  slideTiles,
} from '../helpers';
import { TILE_MOVEMENT_TIME } from '../names';
import GestureContainer from '../GestureContainer';
import Grid from '../Grid';
import Tiles from '../Tiles';

type Props = {
  cells: PuzzleTypes.Cells;
  score: number;
  restart: () => void;
  setCells: (cells: PuzzleTypes.Cells) => void;
  setScore: (score: number) => void;
};

const GameBoard = ({ cells, setCells, score, setScore, restart }: Props) => {
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
        Alert.alert('Game over', '', [
          {
            text: 'restart',
            onPress: restart,
          },
        ]);
      }
    }
  }, [cells]);

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
    }, TILE_MOVEMENT_TIME);
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

  return (
    <GestureContainer
      swipeRight={moveRight}
      swipeLeft={moveLeft}
      swipeBottom={moveDown}
      swipeTop={moveUp}
    >
      <View style={styles.gridContainer}>
        <View>
          <Grid />
          <Tiles cells={cells} />
        </View>
      </View>
    </GestureContainer>
  );
};

export default memo(GameBoard);

const styles = StyleSheet.create({
  gridContainer: {
    alignItems: 'center',
  },
});
