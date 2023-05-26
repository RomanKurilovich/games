import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, EDGES, SIZES } from 'names';
import { NavBar } from 'components';
import { PuzzleTypes } from 'types';
import {
  cellsSelector,
  scoreSelector,
  setCells as setCellsAction,
  setScore as setScoreAction,
} from 'store/puzzle';

import { addRandomTile, INIT_CELLS } from './helpers';
import Header from './Header';
import GameBoard from './GameBoard';

const Puzzle = () => {
  const dispatch = useDispatch();

  const cells = useSelector(cellsSelector);
  const score = useSelector(scoreSelector);

  const setCells = useCallback((cells: PuzzleTypes.Cells) => {
    dispatch(setCellsAction(cells));
  }, []);

  const setScore = useCallback((updatedScore: number) => {
    dispatch(setScoreAction(updatedScore));
  }, []);

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
