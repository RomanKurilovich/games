import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppText, ButtonText } from 'components';
import { TYPOGRAPHY } from 'names';

type Props = {
  score: number;
  restart: () => void;
};

const Header = ({ score, restart }: Props) => (
  <View style={styles.headerContainer}>
    <AppText type={TYPOGRAPHY.TYPES.DISPLAY}>{`Score: ${score}`}</AppText>
    <ButtonText
      title="Reset"
      onPress={restart}
      textType={TYPOGRAPHY.TYPES.DISPLAY}
    />
  </View>
);

export default memo(Header);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
