import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS, SNAKE } from 'names';
import { getSpaces } from 'helpers/sizes';

type Props = {
  x: number;
  y: number;
};

const Food = ({ x, y }: Props) => {
  const { left, top } = getSpaces(
    x,
    y,
    SNAKE.SEPARATOR_SIZE,
    SNAKE.CELL_SIDE_SIZE,
  );

  const containerStyles = useMemo(
    () => [styles.container, { left, top }],
    [left, top],
  );

  return <View style={containerStyles} />;
};

export default memo(Food);

const styles = StyleSheet.create({
  container: {
    width: SNAKE.CELL_SIDE_SIZE,
    height: SNAKE.CELL_SIDE_SIZE,
    backgroundColor: COLORS.PARIS_WHITE,
    position: 'absolute',
  },
});
