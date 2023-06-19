import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { NavigationTypes } from 'types';
import { COLORS, TYPOGRAPHY, ROUTES } from 'names';
import { AppText, ButtonPrimary } from 'components';
import { goBack } from 'modules/Navigation/actions';

type Props = StackScreenProps<
  NavigationTypes.RootStackParamList,
  ROUTES.MAIN_ROUTES.GAME_OVER_MODAL
>;

const GameOver = ({ route }: Props) => {
  const { score, maxScore } = route.params;

  const handleOutSidePress = () => {
    goBack();
  };

  const handleClosePress = () => {
    goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={handleOutSidePress}
        activeOpacity={1}
      ></TouchableOpacity>
      <View style={styles.modelContainer}>
        <View style={styles.headerContainer}>
          <AppText type={TYPOGRAPHY.TYPES.DISPLAY}>Game Is Over</AppText>
        </View>
        <AppText type={TYPOGRAPHY.TYPES.DISPLAY} style={styles.score}>
          Max Score: {maxScore}
        </AppText>
        <AppText type={TYPOGRAPHY.TYPES.DISPLAY} style={styles.score}>
          Score: {score}
        </AppText>
        <View style={styles.buttonContainer}>
          <ButtonPrimary title="Close" onPress={handleClosePress} />
        </View>
      </View>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backContainer: {
    flex: 1,
    width: '100%',
  },
  modelContainer: {
    width: 300,
    position: 'absolute',
    backgroundColor: COLORS.NANDOR,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: COLORS.CORDUROY,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  score: {
    lineHeight: 45,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
