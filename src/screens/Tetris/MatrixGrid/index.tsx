import React, { memo } from 'react';
import { View } from 'react-native';
import RowCells from 'screens/Tetris/Grid/RowCells';

const Grid = ({ matrix, stylesByValue }) => {
  return (
    <View>
      {matrix.map((row, index) => (
        <>
          <RowCells cells={row} stylesByValue={stylesByValue} />
          {index !== matrix.length - 1 ? (
            <View style={{ marginBottom: 1 }} />
          ) : null}
        </>
      ))}
    </View>
  );
};

export default memo(Grid);
