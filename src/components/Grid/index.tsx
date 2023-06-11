import React, { memo } from 'react';
import { View } from 'react-native';

import { GridTypes } from 'types';

import RowCells from './RowCells';

type Props<T extends number> = {
  separatorSize: number;
  matrix: GridTypes.Matrix<T>;
  stylesByValue: GridTypes.StylesByValue<T>;
};

const Grid = <T extends number>({
  matrix,
  stylesByValue,
  separatorSize,
}: Props<T>) => {
  return (
    <View>
      {matrix.map((row, index) => {
        const isLast = index === matrix.length - 1;
        const separatorStyle = { height: separatorSize, width: '100%' };

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

export default memo(Grid);
