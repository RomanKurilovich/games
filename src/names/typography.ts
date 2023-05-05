import { StyleSheet } from 'react-native';
import { COLORS } from 'names/index';

const FONT = {
  TEKO_LIGHT: 'Teko-Light',
  TEKO_REGULAR: 'Teko-Regular',
  TEKO_MEDIUM: 'Teko-Medium',
  TEKO_SEMIBOLD: 'Teko-Semibold',
  TEKO_BOLD: 'Teko-Bold',
};

export enum TYPES {
  CAPTION = 'CAPTION',
  CAPTION_EMPHASIZED = 'CAPTION_EMPHASIZED',
  SUBHEAD = 'SUBHEAD',
  SUBHEAD_EMPHASIZED = 'SUBHEAD_EMPHASIZED',
  BODY = 'BODY',
  BODY_EMPHASIZED = 'BODY_EMPHASIZED',
  TITLE = 'TITLE',
  TITLE_EMPHASIZED = 'TITLE_EMPHASIZED',
  DISPLAY = 'DISPLAY',
}

export const STYLES = StyleSheet.create({
  [TYPES.CAPTION]: {
    fontSize: 12,
    fontFamily: FONT.TEKO_REGULAR,
    color: COLORS.PARIS_WHITE,
  },
  [TYPES.CAPTION_EMPHASIZED]: {
    fontSize: 12,
    fontFamily: FONT.TEKO_SEMIBOLD,
    color: COLORS.PARIS_WHITE,
  },
  [TYPES.SUBHEAD]: {
    fontSize: 14,
    fontFamily: FONT.TEKO_REGULAR,
    color: COLORS.PARIS_WHITE,
  },
  [TYPES.SUBHEAD_EMPHASIZED]: {
    fontSize: 14,
    fontFamily: FONT.TEKO_SEMIBOLD,
    color: COLORS.PARIS_WHITE,
  },
  [TYPES.BODY]: {
    fontSize: 16,
    fontFamily: FONT.TEKO_REGULAR,
    color: COLORS.PARIS_WHITE,
  },
  [TYPES.BODY_EMPHASIZED]: {
    fontSize: 16,
    fontFamily: FONT.TEKO_SEMIBOLD,
    color: COLORS.PARIS_WHITE,
  },
  [TYPES.TITLE]: {
    fontSize: 20,
    fontFamily: FONT.TEKO_REGULAR,
    color: COLORS.PARIS_WHITE,
  },
  [TYPES.TITLE_EMPHASIZED]: {
    fontSize: 20,
    fontFamily: FONT.TEKO_SEMIBOLD,
    color: COLORS.PARIS_WHITE,
  },
  [TYPES.DISPLAY]: {
    fontSize: 34,
    fontFamily: FONT.TEKO_BOLD,
    color: COLORS.PARIS_WHITE,
  },
});
