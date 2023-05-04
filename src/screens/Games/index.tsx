import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { ROUTES } from 'names';
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
      <TouchableOpacity onPress={goToSnake}>
        <Text>Snake</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToPuzzle}>
        <Text>Puzzle</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToTetris}>
        <Text>Tetris</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Games;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
