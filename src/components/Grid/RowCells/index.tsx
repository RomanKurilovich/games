import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { GridTypes } from 'types';

import Cell from '../Cell';

type Props<T extends number> = {
  separatorSize: number;
  cells: GridTypes.RowCells<T>;
  stylesByValue: GridTypes.StylesByValue<T>;
};

const RowCells = <T extends number>({
  cells,
  stylesByValue,
  separatorSize,
}: Props<T>) => {
  return (
    <View style={styles.container}>
      {cells.map((item, index) => {
        const isLast = index === cells.length - 1;

        return (
          <Cell
            key={`column-${index}`}
            isLast={isLast}
            style={stylesByValue[item]}
            separatorSize={separatorSize}
          />
        );
      })}
    </View>
  );
};

export default memo(RowCells);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
