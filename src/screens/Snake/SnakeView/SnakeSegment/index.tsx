import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { COLORS, SNAKE } from 'names';
import { CellAbsolute } from 'components';

type Props = {
  x: number;
  y: number;
};

const SnakeSegment = ({ x, y }: Props) => {
  return (
    <CellAbsolute
      x={x}
      y={y}
      separatorSize={SNAKE.SEPARATOR_SIZE}
      cellSideSize={SNAKE.CELL_SIDE_SIZE}
      style={styles.container}
    />
  );
};

export default memo(SnakeSegment);

const styles = StyleSheet.create({
  container: {
    width: SNAKE.CELL_SIDE_SIZE,
    height: SNAKE.CELL_SIDE_SIZE,
    backgroundColor: COLORS.PARIS_WHITE,
    position: 'absolute',
  },
});
