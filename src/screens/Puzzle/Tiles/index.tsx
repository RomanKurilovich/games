import React, { memo, useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { PuzzleTypes } from 'types';

import TileContainer from './TileContainer';

type Props = {
  cells: PuzzleTypes.Cells;
};

const Tiles = ({ cells }: Props) => {
  const tiles = useMemo(
    () =>
      cells.reduce(
        (accumulator: PuzzleTypes.Tiles, cell) => [
          ...accumulator,
          ...cell.tiles,
        ],
        [],
      ),
    [cells],
  );

  const getCellByTile = useCallback(
    (tile: PuzzleTypes.Tile) =>
      cells.find((cell) => cell.tiles.includes(tile))!,
    [cells],
  );

  return (
    <View style={styles.container}>
      {tiles.map((tile) => (
        <TileContainer
          cell={getCellByTile(tile)}
          value={tile.value}
          key={tile.id}
        />
      ))}
    </View>
  );
};

export default memo(Tiles);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});
