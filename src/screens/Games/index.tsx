import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { COLORS, ROUTES } from 'names';
import { ButtonPrimary } from 'components';
import { NavigationTypes } from 'types';

type Props = StackScreenProps<
  NavigationTypes.GamesStackParamList,
  ROUTES.MAIN_ROUTES.GAMES
>;

const Games: React.FC<Props> = ({ navigation }) => {
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
  );
};

export default Games;

const styles = StyleSheet.create({
  container: {
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
