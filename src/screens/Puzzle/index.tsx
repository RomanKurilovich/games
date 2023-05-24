import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, EDGES, SIZES } from 'names';
import { NavBar } from 'components';

import { addRandomTile, INIT_CELLS } from './helpers';

import Header from 'screens/Puzzle/Header';
import GameBoard from 'screens/Puzzle/GameBoard';

const Puzzle = () => {
  const [cells, setCells] = useState(addRandomTile(INIT_CELLS));
  const [score, setScore] = useState(0);

  const restart = useCallback(() => {
    setCells(addRandomTile(INIT_CELLS));
    setScore(0);
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={EDGES.TOP_AND_BOTTOM}>
      <NavBar title="2048" />
      <View style={styles.contentContainer}>
        <Header score={score} restart={restart} />
        <GameBoard
          cells={cells}
          score={score}
          setCells={setCells}
          setScore={setScore}
          restart={restart}
        />
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
    paddingHorizontal: SIZES.CONTENT_MARGIN,
  },
});
