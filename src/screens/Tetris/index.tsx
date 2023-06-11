import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavBar, ScorePanel } from 'components';
import { COLORS, EDGES, SIZES } from 'names';

import { useAppSelector } from 'hooks/redux';
import { maxScoreSelector, scoreSelector } from 'store/tetris/selectors';
import GameBoard from 'screens/Tetris/GameBoard';
import FooterContainer from 'screens/Tetris/FooterContainer';

const Tetris = () => {
  const score = useAppSelector(scoreSelector);
  const maxScore = useAppSelector(maxScoreSelector);

  return (
    <SafeAreaView style={styles.container} edges={EDGES.TOP_AND_BOTTOM}>
      <NavBar title="Tetris" />
      <View style={styles.contentContainer}>
        <ScorePanel score={score} maxScore={maxScore} />
        <GameBoard />
        <FooterContainer />
      </View>
    </SafeAreaView>
  );
};

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
