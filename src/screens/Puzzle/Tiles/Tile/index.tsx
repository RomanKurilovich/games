import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS, TYPOGRAPHY } from 'names';
import { AppText } from 'components';

const getTileBackgroundByValue = (value: number) => {
  const redColorShade = 0;
  const greenColorShade = 240 - Math.log2(value) * 15;
  const blueColorShade = 245;

  return `rgb(${redColorShade}, ${greenColorShade}, ${blueColorShade})`;
};

type Props = {
  value: number;
};

const Tile = ({ value }: Props) => {
  const color = useMemo(() => getTileBackgroundByValue(value), [value]);
  const containerStyles = useMemo(
    () => [styles.container, { backgroundColor: color }],
    [color],
  );

  return (
    <View style={containerStyles}>
      <AppText type={TYPOGRAPHY.TYPES.DISPLAY} style={styles.text}>
        {value}
      </AppText>
    </View>
  );
};

export default memo(Tile);

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.CEDAR,
  },
});
