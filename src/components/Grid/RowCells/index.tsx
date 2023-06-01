import React, { memo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import _ from 'lodash';

import CellContainer from '../CellContainer';

type Props = {
  numberCells: number;
  separatorSize: number;
  cellStyles: StyleProp<ViewStyle>;
};

const RowCells = ({ numberCells, separatorSize, cellStyles }: Props) => (
  <View style={styles.container}>
    {_.times(numberCells).map((item, index) => {
      const isLast = index === numberCells - 1;

      return (
        <CellContainer
          key={`column-${index}`}
          isLast={isLast}
          style={cellStyles}
          separatorSize={separatorSize}
        />
      );
    })}
  </View>
);

export default memo(RowCells);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
