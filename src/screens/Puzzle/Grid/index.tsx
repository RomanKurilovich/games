import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import _ from 'lodash';

import { SEPARATOR_SIZE, GRID_SIZE } from '../names';
import RowCells from './RowCells';

const Grid = () => (
  <View>
    {_.times(GRID_SIZE).map((item, index) => {
      const isLast = index === GRID_SIZE - 1;

      return (
        <View key={`row-${index}`}>
          <RowCells />
          {!isLast ? <View style={styles.separator} /> : null}
        </View>
      );
    })}
  </View>
);

export default memo(Grid);

const styles = StyleSheet.create({
  separator: {
    marginTop: SEPARATOR_SIZE,
  },
});
