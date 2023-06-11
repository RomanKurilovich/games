import React, { memo, useCallback } from 'react';

import { STATUSES } from 'names';
import { Footer } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { statusSelector } from 'store/tetris/selectors';
import { resetAction, setStatusAction } from 'store/tetris/actions';

const FooterContainer = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(statusSelector);

  const setStatus = (updatedStatus: STATUSES.GAME_STATUSES) => {
    dispatch(setStatusAction(updatedStatus));
  };

  const handleRestartPress = useCallback(() => {
    dispatch(resetAction());
  }, []);

  const handleStartPress = useCallback(() => {
    setStatus(STATUSES.GAME_STATUSES.IN_PROGRESS);
  }, []);

  const handlePausePress = useCallback(() => {
    setStatus(STATUSES.GAME_STATUSES.IS_PAUSED);
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
