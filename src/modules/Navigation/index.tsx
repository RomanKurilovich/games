import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import { ROUTES } from 'names';
import { NavigationTypes } from 'types';
import GameOver from 'screens/Modals/GameOver';

import { navigationRef } from './actions';
import GamesStackNavigator from './Stacks/Games';

const SCREEN_OPTIONS: StackNavigationOptions = {
  headerShown: false,
};

const SCREEN_OPTIONS_MODALS_GROUP: StackNavigationOptions = {
  presentation: 'transparentModal',
};

const RootStack = createStackNavigator<NavigationTypes.RootStackParamList>();

const Navigator = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator screenOptions={SCREEN_OPTIONS}>
          <RootStack.Screen
            name={ROUTES.MAIN_ROUTES.GAMES_STACK}
            component={GamesStackNavigator}
          />
          <RootStack.Group screenOptions={SCREEN_OPTIONS_MODALS_GROUP}>
            <RootStack.Screen
              name={ROUTES.MAIN_ROUTES.GAME_OVER_MODAL}
              component={GameOver}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
