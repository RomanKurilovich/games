import React, { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

import { SIZES } from 'names';
import { ButtonPrimary } from 'components';
import { useAppDispatch } from 'hooks/redux';
import { resetAction } from 'store/puzzle/actions';

const Footer = () => {
  const dispatch = useAppDispatch();

  const handleRestartPress = useCallback(() => {
    dispatch(resetAction());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ButtonPrimary title="Restart" onPress={handleRestartPress} />
      </View>
    </View>
  );
};

export default memo(Footer);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blank: {
    width: SIZES.CONTENT_MARGIN,
  },
});
