import React, { memo, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { Layout, StretchInX } from 'react-native-reanimated';

import { PuzzleTypes } from 'types';

import Tile from '../Tile';
import { CELL_SIDE_SIZE, getSpaces } from '../../sizes';

type Props = {
  cell: PuzzleTypes.Cell;
  value: number;
};

const TileContainer = ({ cell, value }: Props) => {
  const spaces = useMemo(() => getSpaces(cell.x, cell.y), [cell.x, cell.y]);
  const containerStyles = useMemo(
    () => [styles.container, { left: spaces.left, top: spaces.top }],
    [spaces],
  );

  return (
    <Animated.View
      style={containerStyles}
      entering={StretchInX.duration(200)}
      layout={Layout.duration(100)}
    >
      <Tile value={value} />
    </Animated.View>
  );
};

export default memo(TileContainer);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: CELL_SIDE_SIZE,
    height: CELL_SIDE_SIZE,
  },
});
