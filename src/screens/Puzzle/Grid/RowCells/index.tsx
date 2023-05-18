import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import _ from 'lodash';

import { GRID_SIZE } from '../../sizes';
import CellContainer from '../CellContainer';

const RowCells = () => (
  <View style={styles.container}>
    {_.times(GRID_SIZE).map((item, index) => {
      const isLast = index === GRID_SIZE - 1;

      return <CellContainer isLast={isLast} key={`cell-${index}`} />;
    })}
  </View>
);

export default memo(RowCells);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
