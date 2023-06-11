import React, { memo } from 'react';
import { View } from 'react-native';

import { TetrisTypes } from 'types';

import RowCells from './RowCells';

type Props = {
  matrix: TetrisTypes.Matrix;
  separatorSize: number;
  stylesByValue: TetrisTypes.CellStyles;
};

const MatrixGrid = ({ matrix, stylesByValue, separatorSize }: Props) => {
  return (
    <View>
      {matrix.map((row, index) => {
        const isLast = index === matrix.length - 1;
        const separatorStyle = { marginBottom: separatorSize };

        return (
          <View key={`row-${index}`}>
            <RowCells
              cells={row}
              stylesByValue={stylesByValue}
              separatorSize={separatorSize}
            />
            {!isLast ? <View style={separatorStyle} /> : null}
          </View>
        );
      })}
    </View>
  );
};

export default memo(MatrixGrid);
