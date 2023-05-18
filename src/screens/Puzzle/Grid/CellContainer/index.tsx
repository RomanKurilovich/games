import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { SEPARATOR_SIZE, CELL_SIDE_SIZE } from '../../sizes';
import Cell from '../Cell';

type Props = {
  isLast: boolean;
};

const CellContainer = ({ isLast }: Props) => {
  const containerStyles = useMemo(
    () => [styles.cellContainer, !isLast && styles.separator],
    [isLast],
  );

  return (
    <View style={containerStyles}>
      <Cell />
    </View>
  );
};

export default memo(CellContainer);

const styles = StyleSheet.create({
  cellContainer: {
    width: CELL_SIDE_SIZE,
    height: CELL_SIDE_SIZE,
  },
  separator: {
    marginRight: SEPARATOR_SIZE,
  },
});
