import React, { Fragment, memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { SIZES, STATUSES } from 'names';
import { ButtonPrimary } from 'components';

type Props = {
  status: STATUSES.GAME_STATUSES;
  onPausePress: () => void;
  onRestartPress: () => void;
  onStartPress: () => void;
};

const Footer = ({
  onPausePress,
  onStartPress,
  onRestartPress,
  status,
}: Props) => {
  const footerContent = useMemo(() => {
    if (status === STATUSES.GAME_STATUSES.NOT_INIT) {
      return (
        <View style={styles.buttonContainer}>
          <ButtonPrimary title="Start" onPress={onStartPress} />
        </View>
      );
    }

    if (status === STATUSES.GAME_STATUSES.IN_PROGRESS) {
      return (
        <View style={styles.buttonContainer}>
          <ButtonPrimary title="Pause" onPress={onPausePress} />
        </View>
      );
    }

    if (status === STATUSES.GAME_STATUSES.IS_PAUSED) {
      return (
        <Fragment>
          <View style={styles.buttonContainer}>
            <ButtonPrimary title="Start" onPress={onStartPress} />
          </View>
          <View style={styles.blank} />
          <View style={styles.buttonContainer}>
            <ButtonPrimary title="Restart" onPress={onRestartPress} />
          </View>
        </Fragment>
      );
    }

    if (status === STATUSES.GAME_STATUSES.IS_OVER) {
      return (
        <View style={styles.buttonContainer}>
          <ButtonPrimary title="Restart" onPress={onRestartPress} />
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
