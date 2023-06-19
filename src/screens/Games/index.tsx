import React, { useCallback } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import { NavigationTypes } from 'types';
import { ButtonPrimary } from 'components';
import { COLORS, ROUTES, SIZES } from 'names';

import Social from './Social';

type Props = NavigationTypes.GamesScreenProps<ROUTES.MAIN_ROUTES.GAMES>;

const Games = ({ navigation }: Props) => {
  const goToSnake = useCallback(() => {
    navigation.navigate(ROUTES.MAIN_ROUTES.SNAKE);
  }, [navigation]);

  const goToPuzzle = useCallback(() => {
    navigation.navigate(ROUTES.MAIN_ROUTES.PUZZLE);
  }, [navigation]);

  const goToTetris = useCallback(() => {
    navigation.navigate(ROUTES.MAIN_ROUTES.TETRIS);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <ButtonPrimary title="2048" onPress={goToPuzzle} />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonPrimary title="Snake" onPress={goToSnake} />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonPrimary title="Tetris" onPress={goToTetris} />
        </View>
      </View>
      <View style={styles.socialContainer}>
        <Social />
      </View>
    </View>
  );
};

export default Games;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  socialContainer: {
    position: 'absolute',
    bottom:
      Platform.OS === 'ios'
        ? initialWindowMetrics?.insets.bottom || SIZES.CONTENT_MARGIN
        : SIZES.CONTENT_MARGIN,
    right: SIZES.CONTENT_MARGIN,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.NANDOR,
  },
  buttonContainer: {
    width: 200,
    margin: 10,
  },
});
