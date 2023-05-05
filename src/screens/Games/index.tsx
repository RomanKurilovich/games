import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { COLORS, ROUTES, TYPOGRAPHY } from 'names';
import { ButtonPrimary, ButtonSecondary, ButtonText } from 'components';
import { GamesStackParamList } from 'types/navigation';

type Props = StackScreenProps<GamesStackParamList, ROUTES.MAIN_ROUTES.GAMES>;

const Games: React.FC<Props> = ({ navigation }) => {
  const goToSnake = () => {
    navigation.navigate(ROUTES.MAIN_ROUTES.SNAKE);
  };

  const goToPuzzle = () => {
    navigation.navigate(ROUTES.MAIN_ROUTES.PUZZLE);
  };

  const goToTetris = () => {
    navigation.navigate(ROUTES.MAIN_ROUTES.TETRIS);
  };

  return (
    <View style={styles.container}>
      <ButtonText
        onPress={goToSnake}
        textType={TYPOGRAPHY.TYPES.DISPLAY}
        title="Snake"
      />
      <View style={styles.buttonContainer}>
        <ButtonPrimary title="Puzzle" onPress={goToPuzzle} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonSecondary title="Tetris" onPress={goToTetris} />
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
