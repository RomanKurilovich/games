import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavBar } from 'components';
import { COLORS, EDGES, SIZES } from 'names';

import GameBoard from './GameBoard';
import FooterContainer from './FooterContainer';
import ScorePanelContainer from './ScorePanelContainer';

const Tetris = () => (
  <SafeAreaView style={styles.container} edges={EDGES.TOP_AND_BOTTOM}>
    <NavBar title="Tetris" />
    <View style={styles.contentContainer}>
      <ScorePanelContainer />
      <GameBoard />
      <FooterContainer />
    </View>
  </SafeAreaView>
);

export default Tetris;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.NANDOR,
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 1,
    margin: SIZES.CONTENT_MARGIN,
  },
});
