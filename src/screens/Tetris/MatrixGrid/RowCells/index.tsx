import React, { memo } from 'react';
import { View } from 'react-native';
import _ from 'lodash';
import CellContainer from 'screens/Tetris/Grid/CellContainer';

const RowCells = ({ cells, stylesByValue }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {cells.map((item, index) => {
        // const isLast = index === numberCells - 1;

        return (
          <CellContainer
            key={`column-${index}`}
            isLast={false}
            style={stylesByValue[item]}
            separatorSize={1}
          />
        );
      })}
    </View>
  );
};

export default memo(RowCells);
