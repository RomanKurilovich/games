import React, { memo, useMemo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { COLORS } from 'names';

type Props = {
  style: StyleProp<ViewStyle>;
};

const Cell = ({ style }: Props) => {
  const containerStyles = useMemo(() => [styles.container, style], [style]);

  return <View style={containerStyles} />;
};

export default memo(Cell);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.HEAVY_METAL,
  },
});
