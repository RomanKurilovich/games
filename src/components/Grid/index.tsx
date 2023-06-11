import React, { memo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import _ from 'lodash';

import RowCells from './RowCells';

type Props = {
  numberCellsX: number;
  numberCellsY: number;
  separatorSize: number;
  cellStyles: StyleProp<ViewStyle>;
};

const Grid = ({
  numberCellsX,
  numberCellsY,
  separatorSize,
  cellStyles,
}: Props) => (
  <View>
    {_.times(numberCellsY).map((item, index) => {
      const isLast = index === numberCellsY - 1;
      const separatorStyle = { marginBottom: separatorSize };

      return (
        <View key={`row-${index}`}>
          <RowCells
            numberCells={numberCellsX}
            separatorSize={separatorSize}
            cellStyles={cellStyles}
          />
          {!isLast ? <View style={separatorStyle} /> : null}
        </View>
      );
    })}
  </View>
);

export default memo(Grid);
