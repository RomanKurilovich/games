import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { AppText } from 'components';
import { COLORS, SIZES, TYPOGRAPHY } from 'names';

type Props = {
  title: string;
  onPress: () => void;
};

const ButtonSecondary = ({ title, onPress }: Props) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <AppText type={TYPOGRAPHY.TYPES.DISPLAY} style={styles.title}>
      {title}
    </AppText>
  </TouchableOpacity>
);

export default memo(ButtonSecondary);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SIZES.BUTTON_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.CORDUROY,
    borderRadius: 4,
  },
  title: {
    color: COLORS.PARIS_WHITE,
  },
});
