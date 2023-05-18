import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, EDGES, TYPOGRAPHY } from 'names';
import { AppText, NavBar } from 'components';

const Tetris = () => (
  <SafeAreaView style={styles.container} edges={EDGES.TOP_AND_BOTTOM}>
    <NavBar title="Tetris" />
    <View style={styles.contentContainer}>
      <AppText type={TYPOGRAPHY.TYPES.DISPLAY}>In Developing...</AppText>
    </View>
  </SafeAreaView>
);

export default Tetris;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.NANDOR,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
