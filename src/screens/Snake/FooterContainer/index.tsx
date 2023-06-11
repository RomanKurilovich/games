import React, { memo, useCallback } from 'react';

import { Footer } from 'components';
import { STATUSES } from 'names';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { resetAction, setStatusAction } from 'store/snake/actions';
import { statusSelector } from 'store/snake/selectors';

const FooterContainer = () => {
  const dispatch = useAppDispatch();

  const status = useAppSelector(statusSelector);

  const setStatus = (updatedStatus: STATUSES.GAME_STATUSES) => {
    dispatch(setStatusAction(updatedStatus));
  };

  const handlePausePress = useCallback(() => {
    setStatus(STATUSES.GAME_STATUSES.IS_PAUSED);
  }, []);

  const handleStartPress = useCallback(() => {
    setStatus(STATUSES.GAME_STATUSES.IN_PROGRESS);
  }, []);

  const handleRestartPress = useCallback(() => {
    dispatch(resetAction());
  }, []);

  return (
    <Footer
      status={status}
      onRestartPress={handleRestartPress}
      onStartPress={handleStartPress}
      onPausePress={handlePausePress}
    />
  );
};

export default memo(FooterContainer);
