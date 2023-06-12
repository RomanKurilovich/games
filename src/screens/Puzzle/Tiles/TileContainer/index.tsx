import React, { memo, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { Layout, ZoomIn, ZoomOut } from 'react-native-reanimated';

import { PuzzleTypes } from 'types';
import { PUZZLE } from 'names';
import { getSpaces } from 'helpers/sizes';

import Tile from '../Tile';

type Props = {
  cell: PuzzleTypes.Cell;
  value: number;
};

const TileContainer = ({ cell, value }: Props) => {
  const { left, top } = useMemo(
    () =>
      getSpaces(cell.x, cell.y, PUZZLE.SEPARATOR_SIZE, PUZZLE.CELL_SIDE_SIZE),
    [cell.x, cell.y],
  );
  const containerStyles = useMemo(
    () => [styles.container, { left, top }],
    [left, top],
  );

  return (
    <Animated.View
      style={containerStyles}
      entering={ZoomIn.duration(PUZZLE.TILE_ENTERING_DURATION)}
      exiting={ZoomOut.duration(PUZZLE.TILE_EXITING_DURATION)}
      layout={Layout.duration(PUZZLE.TILE_MOVEMENT_TIME)}
    >
      <Tile value={value} />
    </Animated.View>
  );
};

export default memo(TileContainer);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: PUZZLE.CELL_SIDE_SIZE,
    height: PUZZLE.CELL_SIDE_SIZE,
  },
});
