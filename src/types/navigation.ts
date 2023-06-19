import { StackScreenProps } from '@react-navigation/stack';

import { ROUTES } from 'names';
import { CompositeScreenProps } from '@react-navigation/native';

export type RootStackParamList = {
  [ROUTES.MAIN_ROUTES.GAMES_STACK]: StackScreenProps<GamesStackParamList>;
  [ROUTES.MAIN_ROUTES.GAME_OVER_MODAL]: {
    score: number;
    maxScore: number;
  };
};

export type GamesStackParamList = {
  [ROUTES.MAIN_ROUTES.GAMES]: undefined;
  [ROUTES.MAIN_ROUTES.PUZZLE]: undefined;
  [ROUTES.MAIN_ROUTES.SNAKE]: undefined;
  [ROUTES.MAIN_ROUTES.TETRIS]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type GamesScreenProps<T extends keyof GamesStackParamList> =
  CompositeScreenProps<
    StackScreenProps<GamesStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
