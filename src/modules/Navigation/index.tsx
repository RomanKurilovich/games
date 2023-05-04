import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { ROUTES } from 'names';
import { NavigationTypes } from 'types';

import GamesStackNavigator from './Stacks/Games';

const SCREEN_OPTIONS: StackNavigationOptions = {
  headerShown: false,
};

const RootStack = createStackNavigator<NavigationTypes.RootStackParamList>();

const Navigator = () => (
  <GestureHandlerRootView style={styles.container}>
    <NavigationContainer>
      <RootStack.Navigator screenOptions={SCREEN_OPTIONS}>
        <RootStack.Screen
          name={ROUTES.MAIN_ROUTES.GAMES_STACK}
          component={GamesStackNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  </GestureHandlerRootView>
);

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
