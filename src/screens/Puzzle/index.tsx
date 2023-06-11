import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, EDGES, SIZES } from 'names';
import { NavBar } from 'components';

import Footer from './Footer';
import GameBoard from './GameBoard';
import ScorePanelContainer from './ScorePanelContainer';

const Puzzle = () => {
  return (
    <SafeAreaView style={styles.container} edges={EDGES.TOP_AND_BOTTOM}>
      <NavBar title="2048" />
      <View style={styles.contentContainer}>
        <ScorePanelContainer />
        <GameBoard />
        <Footer />
      </View>
    </SafeAreaView>
  );
};
export default Puzzle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.NANDOR,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: SIZES.CONTENT_MARGIN,
  },
});
