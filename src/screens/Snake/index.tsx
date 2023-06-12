import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, EDGES, SIZES } from 'names';
import { NavBar } from 'components';

import GameBoard from './GameBoard';
import FooterContainer from './FooterContainer';
import ScorePanelContainer from './ScorePanelContainer';

const Snake = () => (
  <SafeAreaView style={styles.container} edges={EDGES.TOP_AND_BOTTOM}>
    <NavBar title="Snake" />
    <View style={styles.contentContainer}>
      <ScorePanelContainer />
      <GameBoard />
      <FooterContainer />
    </View>
  </SafeAreaView>
);

export default Snake;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.NANDOR,
  },
  contentContainer: {
    flex: 1,
    margin: SIZES.CONTENT_MARGIN,
  },
});
