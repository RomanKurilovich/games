import React, { Fragment, memo } from 'react';

import { SnakeTypes } from 'types';

import SnakeSegment from './SnakeSegment';

type Props = {
  snake: SnakeTypes.Snake;
};

const SnakeView = ({ snake }: Props) => {
  return (
    <Fragment>
      {snake.map((segment, index) => (
        <SnakeSegment coordinate={segment} key={index} />
      ))}
    </Fragment>
  );
};

export default memo(SnakeView);
