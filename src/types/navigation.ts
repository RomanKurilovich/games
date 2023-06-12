import { NavigatorScreenParams } from '@react-navigation/native';

import { ROUTES } from 'names';

export type RootStackParamList = {
  [ROUTES.MAIN_ROUTES.GAMES_STACK]: NavigatorScreenParams<GamesStackParamList>;
};

export type GamesStackParamList = {
  [ROUTES.MAIN_ROUTES.GAMES]: undefined;
  [ROUTES.MAIN_ROUTES.PUZZLE]: undefined;
  [ROUTES.MAIN_ROUTES.SNAKE]: undefined;
  [ROUTES.MAIN_ROUTES.TETRIS]: undefined;
};
