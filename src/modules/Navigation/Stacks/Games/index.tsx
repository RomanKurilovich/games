import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { ROUTES } from 'names';
import { NavigationTypes } from 'types';
import Puzzle from 'screens/Puzzle';
import Snake from 'screens/Snake';
import Tetris from 'screens/Tetris';
import Games from 'screens/Games';

const SCREEN_OPTIONS: StackNavigationOptions = {
  headerShown: false,
};

const GamesStack = createStackNavigator<NavigationTypes.GamesStackParamList>();

const GamesStackNavigator = () => (
  <GamesStack.Navigator screenOptions={SCREEN_OPTIONS}>
    <GamesStack.Screen
      name={ROUTES.MAIN_ROUTES.GAMES}
      component={Games}
    ></GamesStack.Screen>
    <GamesStack.Screen
      name={ROUTES.MAIN_ROUTES.SNAKE}
      component={Snake}
    ></GamesStack.Screen>
    <GamesStack.Screen
      name={ROUTES.MAIN_ROUTES.PUZZLE}
      component={Puzzle}
    ></GamesStack.Screen>
    <GamesStack.Screen
      name={ROUTES.MAIN_ROUTES.TETRIS}
      component={Tetris}
    ></GamesStack.Screen>
  </GamesStack.Navigator>
);

export default GamesStackNavigator;
