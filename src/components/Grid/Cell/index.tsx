import React, { memo, useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

type Props = {
  isLast: boolean;
  separatorSize: number;
  style: StyleProp<ViewStyle>;
};

const Cell = ({ isLast, style, separatorSize }: Props) => {
  const containerStyles = useMemo(
    () => [style, !isLast && { marginRight: separatorSize }],
    [isLast, separatorSize, style],
  );

  return <View style={containerStyles} />;
};

export default memo(Cell);
