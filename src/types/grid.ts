import { StyleProp, ViewStyle } from 'react-native';

export type RowCells<T> = Array<T>;

export type Matrix<T> = Array<RowCells<T>>;

export type StylesByValue<T extends number> = Record<T, StyleProp<ViewStyle>>;
