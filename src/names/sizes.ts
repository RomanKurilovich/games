import { Dimensions, Platform } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } =
  Dimensions.get('window');

export const CONTENT_MARGIN = 16;

export const NAVBAR_HEIGHT = 56;

export const SCORE_VIEW_HEIGHT = 56;

export const BUTTON_HEIGHT = 56;

export const FOOTER_TOP_MARGIN = 16;

export const GAME_BOARD_HEIGHT = Math.floor(
  DEVICE_HEIGHT -
    CONTENT_MARGIN * 2 -
    BUTTON_HEIGHT -
    SCORE_VIEW_HEIGHT -
    NAVBAR_HEIGHT -
    FOOTER_TOP_MARGIN -
    (Platform.OS === 'ios'
      ? (initialWindowMetrics?.insets.top || 0) +
        (initialWindowMetrics?.insets.bottom || 0)
      : 0),
);
