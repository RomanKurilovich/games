import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS, TYPOGRAPHY } from 'names';
import { AppText } from 'components';

type Props = {
  value: number;
};

const Tile = ({ value }: Props) => (
  <View style={styles.container}>
    <AppText type={TYPOGRAPHY.TYPES.DISPLAY} style={styles.text}>
      {value}
    </AppText>
  </View>
);

export default memo(Tile);

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PARIS_WHITE,
  },
  text: {
    color: COLORS.NANDOR,
  },
});
