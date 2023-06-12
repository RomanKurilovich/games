import React, { memo, useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { getSpaces } from 'helpers/sizes';

type Props = {
  x: number;
  y: number;
  cellSideSize: number;
  separatorSize: number;
  style: StyleProp<ViewStyle>;
};

const CellAbsolute = ({ x, y, cellSideSize, separatorSize, style }: Props) => {
  const { left, top } = useMemo(
    () => getSpaces(x, y, separatorSize, cellSideSize),
    [cellSideSize, separatorSize, x, y],
  );
  const containerStyles = useMemo(
    () => [style, { left, top }],
    [left, style, top],
  );

  return <View style={containerStyles} />;
};

export default memo(CellAbsolute);
