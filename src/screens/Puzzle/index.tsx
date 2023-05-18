import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, EDGES, SIZES, TYPOGRAPHY } from 'names';
import { ButtonText, NavBar } from 'components';
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
    }, 100);
  };

  const moveUp = () => {
    if (canMoveUp()) {
      const slidedGroupedCells = slideTiles(groupedCells.byColumn);

      updateGroupedCells(slidedGroupedCells);
    }
  };

  const moveDown = () => {
    if (canMoveDown()) {
      const slidedGroupedCells = slideTiles(groupedCells.byReversedColumn);

      updateGroupedCells(slidedGroupedCells);
    }
  };

  const moveRight = () => {
    if (canMoveRight()) {
      const slidedGroupedCells = slideTiles(groupedCells.byReversedRow);

      updateGroupedCells(slidedGroupedCells);
    }
  };
  const moveLeft = () => {
    if (canMoveLeft()) {
      const slidedGroupedCells = slideTiles(groupedCells.byRow);

      updateGroupedCells(slidedGroupedCells);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={EDGES.TOP_AND_BOTTOM}>
      <NavBar title="2048" />
      <View style={styles.contentContainer}>
        <View>
          <Grid />
          <Tiles cells={cells} />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <ButtonText
          title="left"
          textType={TYPOGRAPHY.TYPES.DISPLAY}
          onPress={moveLeft}
        />
        <ButtonText
          title="bottom"
          textType={TYPOGRAPHY.TYPES.DISPLAY}
          onPress={moveDown}
        />
        <ButtonText
          title="top"
          textType={TYPOGRAPHY.TYPES.DISPLAY}
          onPress={moveUp}
        />
        <ButtonText
          title="right"
          textType={TYPOGRAPHY.TYPES.DISPLAY}
          onPress={moveRight}
        />
      </View>
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
  footerContainer: {
    height: 50,
    width: '100%',
    backgroundColor: COLORS.CEDAR,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
