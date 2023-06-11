import React, { Fragment, memo, useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { SIZES, STATUSES } from 'names';
import { ButtonPrimary } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { resetAction, setStatusAction } from 'store/snake/actions';
import { statusSelector } from 'store/snake/selectors';

const Footer = () => {
  const dispatch = useAppDispatch();

  const status = useAppSelector(statusSelector);

  const setStatus = useCallback((updatedStatus: STATUSES.GAME_STATUSES) => {
    dispatch(setStatusAction(updatedStatus));
  }, []);

  const handlePausePress = useCallback(() => {
    setStatus(STATUSES.GAME_STATUSES.IS_PAUSED);
  }, []);

  const handleStartPress = useCallback(() => {
    setStatus(STATUSES.GAME_STATUSES.IN_PROGRESS);
  }, []);

  const handleRestartPress = useCallback(() => {
    dispatch(resetAction());
  }, []);

  const footerContent = useMemo(() => {
    if (status === STATUSES.GAME_STATUSES.NOT_INIT) {
      return (
        <View style={styles.buttonContainer}>
          <ButtonPrimary title="Start" onPress={handleStartPress} />
        </View>
      );
    }

    if (status === STATUSES.GAME_STATUSES.IN_PROGRESS) {
      return (
        <View style={styles.buttonContainer}>
          <ButtonPrimary title="Pause" onPress={handlePausePress} />
        </View>
      );
    }

    if (status === STATUSES.GAME_STATUSES.IS_PAUSED) {
      return (
        <Fragment>
          <View style={styles.buttonContainer}>
            <ButtonPrimary title="Start" onPress={handleStartPress} />
          </View>
          <View style={styles.blank} />
          <View style={styles.buttonContainer}>
            <ButtonPrimary title="Restart" onPress={handleRestartPress} />
          </View>
        </Fragment>
      );
    }

    if (status === STATUSES.GAME_STATUSES.IS_OVER) {
      return (
        <View style={styles.buttonContainer}>
          <ButtonPrimary title="Restart" onPress={handleRestartPress} />
        </View>
      );
    }
  }, [status]);

  return <View style={styles.container}>{footerContent}</View>;
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
