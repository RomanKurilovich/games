import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { SnakeTypes } from 'types';
import { COLORS, SNAKE } from 'names';
import { getSpaces } from 'helpers/sizes';

type Props = {
  coordinate: SnakeTypes.Coordinate;
};

const SnakeSegment = ({ coordinate }: Props) => {
  const { left, top } = getSpaces(
    coordinate.x,
    coordinate.y,
    SNAKE.SEPARATOR_SIZE,
    SNAKE.CELL_SIDE_SIZE,
  );

  const containerStyles = useMemo(
    () => [styles.segment, { left, top }],
    [left, top],
  );

  return <View style={containerStyles} />;
};

export default memo(SnakeSegment);

const styles = StyleSheet.create({
  segment: {
    width: SNAKE.CELL_SIDE_SIZE,
    height: SNAKE.CELL_SIDE_SIZE,
    backgroundColor: COLORS.PARIS_WHITE,
    position: 'absolute',
  },
});
