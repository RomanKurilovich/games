import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from 'names';

const Cell = () => <View style={styles.container} />;

export default memo(Cell);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.HEAVY_METAL,
    borderRadius: 8,
    flex: 1,
  },
});
