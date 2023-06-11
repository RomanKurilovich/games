import React, { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

import { GESTURE, PUZZLE } from 'names';
import { GestureContainer, Grid } from 'components';
import { useAppSelector } from 'hooks/redux';
import { cellsSelector } from 'store/puzzle/selectors';

import Tiles from '../Tiles';
import { useLogics } from './useLogics';

const GameBoard = () => {
  const cells = useAppSelector(cellsSelector);

  const { moveLeft, moveUp, moveRight, moveDown } = useLogics();

  const handleSwipe = useCallback(
    (direction: GESTURE.DIRECTION) => {
      switch (direction) {
        case GESTURE.DIRECTION.UP:
          moveUp();

          break;
        case GESTURE.DIRECTION.DOWN:
          moveDown();

          break;
        case GESTURE.DIRECTION.LEFT:
          moveLeft();

          break;
        case GESTURE.DIRECTION.RIGHT:
          moveRight();

          break;
      }
    },
    [moveDown, moveLeft, moveRight, moveUp],
  );

  return (
    <GestureContainer onSwipe={handleSwipe} waitEndGesture={true}>
      <View style={styles.gridContainer}>
        <View>
          <Grid
            matrix={PUZZLE.GRID_MATRIX}
            separatorSize={PUZZLE.SEPARATOR_SIZE}
            stylesByValue={PUZZLE.STYLES_GRID_CELL_BY_VALUE}
          />
          <Tiles cells={cells} />
        </View>
      </View>
    </GestureContainer>
  );
};

export default memo(GameBoard);

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
