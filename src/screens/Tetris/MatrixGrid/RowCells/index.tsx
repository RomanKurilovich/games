import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { TetrisTypes } from 'types';
import { CellContainer } from 'components';

type Props = {
  separatorSize: number;
  cells: TetrisTypes.RowCells;
  stylesByValue: TetrisTypes.CellStyles;
};

const RowCells = ({ cells, stylesByValue, separatorSize }: Props) => {
  return (
    <View style={styles.container}>
      {cells.map((item, index) => {
        const isLast = index === cells.length - 1;

        return (
          <CellContainer
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
