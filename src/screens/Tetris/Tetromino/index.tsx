import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { TETRIS } from 'names';
import { TetrisTypes } from 'types';
import { getSpaces } from 'helpers/sizes';

import MatrixGrid from '../MatrixGrid';

type Props = {
  tetromino: TetrisTypes.Tetromino;
};

const Tetromino = ({ tetromino }: Props) => {
  const { left, top } = getSpaces(
    tetromino.column,
    tetromino.row,
    TETRIS.SEPARATOR_SIZE,
    TETRIS.CELL_SIDE_SIZE,
  );

  const containerStyles = useMemo(
    () => [styles.container, { left, top }],
    [left, top],
  );

  return (
    <View style={containerStyles}>
      <MatrixGrid
        matrix={tetromino.matrix}
        separatorSize={TETRIS.SEPARATOR_SIZE}
        stylesByValue={TETRIS.STYLES_TETROMINO_CELL_BY_VALUE}
      />
    </View>
  );
};

export default memo(Tetromino);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});
