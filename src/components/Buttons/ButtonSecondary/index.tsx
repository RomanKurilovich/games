import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { AppText } from 'components';
import { COLORS, TYPOGRAPHY } from 'names';

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
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.CORDUROY,
    borderRadius: 8,
  },
  title: {
    color: COLORS.PARIS_WHITE,
  },
});
