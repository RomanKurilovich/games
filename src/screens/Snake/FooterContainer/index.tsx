import React, { useCallback } from 'react';
import { Footer } from 'components';
import { STATUSES } from 'names';

const FooterContainer = () => {
  const handlePausePress = useCallback(() => {
    setStatus(STATUSES.GAME_STATUSES.IS_PAUSED);
  }, []);

  const handleStartPress = useCallback(() => {
    setStatus(STATUSES.GAME_STATUSES.IN_PROGRESS);
  }, []);

  const handleRestartPress = useCallback(() => {
    dispatch(resetAction());
  }, []);

  return <Footer />;
};
