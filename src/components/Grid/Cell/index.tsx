import React, { memo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

type Props = {
  style: StyleProp<ViewStyle>;
};

const Cell = ({ style }: Props) => <View style={style} />;

export default memo(Cell);
