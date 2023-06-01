import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { TYPOGRAPHY } from 'names';
import { AppText } from 'components';

type Props = {
  score: number;
  maxScore: number;
};

const ScorePanel = ({ score, maxScore }: Props) => (
  <View style={styles.container}>
    <AppText type={TYPOGRAPHY.TYPES.DISPLAY}>{`Max: ${maxScore}`}</AppText>
    <AppText type={TYPOGRAPHY.TYPES.DISPLAY}>{`Score: ${score}`}</AppText>
  </View>
);

export default memo(ScorePanel);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
