import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, EDGES, SIZES } from 'names';
import { NavBar } from 'components';
import { PuzzleTypes } from 'types';

import Grid from './Grid';
import Tiles from './Tiles';
import {
  addRandomTile,
  getFunctionCheckMovement,
  getGroupedCells,
  INIT_CELLS,
  mergeCells,
  slideTiles,
} from './helpers';
import GestureContainer from './GestureContainer';

const Puzzle = () => {
  const [cells, setCells] = useState(addRandomTile(INIT_CELLS));

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
            onPress: () => setCells(addRandomTile(INIT_CELLS)),
          },
        ]);
      }
    }
  }, [cells]);

  const processGroupedCells = (cellsGroup: PuzzleTypes.CellsGroup) =>
    cellsGroup.reduce((accumulator, group) => {
      return [...accumulator, ...group];
    }, []);

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

        setCells(mergedCells);
      }
    }, 60);
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
    <SafeAreaView style={styles.container} edges={EDGES.TOP_AND_BOTTOM}>
      <NavBar title="2048" />
      <GestureContainer
        swipeRight={moveRight}
        swipeLeft={moveLeft}
        swipeBottom={moveDown}
        swipeTop={moveUp}
      >
        <View style={styles.contentContainer}>
          <View>
            <Grid />
            <Tiles cells={cells} />
          </View>
        </View>
      </GestureContainer>
    </SafeAreaView>
  );
};
export default Puzzle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.NANDOR,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.CONTENT_MARGIN,
  },
});
