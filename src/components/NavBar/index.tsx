import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { COLORS, SIZES, TYPOGRAPHY } from 'names';
import { AppText } from 'components';
import { goBack } from 'modules/Navigation/actions';
import ArrowLeft from 'assets/icons/arrows/arrowLeft.svg';

type Props = {
  title: string;
};

const NavBar = ({ title }: Props) => (
  <View style={styles.navBar}>
    <TouchableOpacity onPress={goBack}>
      <ArrowLeft fill={COLORS.NANDOR} height={30} width={30} />
    </TouchableOpacity>
    <AppText type={TYPOGRAPHY.TYPES.DISPLAY} style={styles.title}>
      {title}
    </AppText>
    <View style={styles.lastView} />
  </View>
);

export default memo(NavBar);

const styles = StyleSheet.create({
  navBar: {
    height: 56,
    width: '100%',
    backgroundColor: COLORS.PARIS_WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: SIZES.CONTENT_MARGIN,
  },
  title: {
    color: COLORS.NANDOR,
  },
  lastView: {
    width: 30,
  },
});
