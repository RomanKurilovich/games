import React, { memo } from 'react';

import { ScorePanel } from 'components';
import { useAppSelector } from 'hooks/redux';
import { maxScoreSelector, scoreSelector } from 'store/snake/selectors';

const ScorePanelContainer = () => {
  const score = useAppSelector(scoreSelector);
  const maxScore = useAppSelector(maxScoreSelector);

  return <ScorePanel score={score} maxScore={maxScore} />;
};

export default memo(ScorePanelContainer);
