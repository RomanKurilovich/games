import React, { memo, useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import Cell from '../Cell';

type Props = {
  isLast: boolean;
  separatorSize: number;
  style: StyleProp<ViewStyle>;
};

const CellContainer = ({ isLast, style, separatorSize }: Props) => {
  const containerStyles = useMemo(
    () => [style, !isLast && { marginRight: separatorSize }],
    [isLast, separatorSize, style],
  );

  return (
    <View style={containerStyles}>
      <Cell style={containerStyles} />
    </View>
  );
};

export default memo(CellContainer);
