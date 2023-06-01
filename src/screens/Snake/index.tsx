import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, EDGES, SIZES } from 'names';
import { NavBar, ScorePanel } from 'components';
import { useAppSelector } from 'hooks/redux';
import { maxScoreSelector, scoreSelector } from 'store/snake/selectors';

import Footer from './Footer';
import GameBoard from './GameBoard';

const Snake = () => {
  const score = useAppSelector(scoreSelector);
  const maxScore = useAppSelector(maxScoreSelector);

  return (
    <SafeAreaView style={styles.container} edges={EDGES.TOP_AND_BOTTOM}>
      <NavBar title="Snake" />
      <View style={styles.contentContainer}>
        <ScorePanel score={score} maxScore={maxScore} />
        <GameBoard />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

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
