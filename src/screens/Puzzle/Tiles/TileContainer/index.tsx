import React, { memo, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { FadeOut, Layout, StretchInX } from 'react-native-reanimated';

import { PuzzleTypes } from 'types';

import Tile from '../Tile';
import {
  CELL_SIDE_SIZE,
  getSpaces,
  TILE_ENTERING_DURATION,
  TILE_EXITING_DURATION,
  TILE_MOVEMENT_TIME,
} from '../../names';

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
      entering={StretchInX.duration(TILE_ENTERING_DURATION)}
      exiting={FadeOut.duration(TILE_EXITING_DURATION)}
      layout={Layout.duration(TILE_MOVEMENT_TIME)}
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
