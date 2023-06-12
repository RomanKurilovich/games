import React, { memo, PropsWithChildren, useMemo, useRef } from 'react';
import {
  Gesture,
  GestureDetector,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

import { GESTURE } from 'names';

type Props = {
  onSwipe: (direction: GESTURE.DIRECTION) => void;
};

const getDirection = (event: PanGestureHandlerEventPayload) => {
  if (Math.abs(event.translationX) > Math.abs(event.translationY)) {
    if (event.translationX > 0) {
      return GESTURE.DIRECTION.RIGHT;
    } else {
      return GESTURE.DIRECTION.LEFT;
    }
  } else {
    if (event.translationY > 0) {
      return GESTURE.DIRECTION.DOWN;
    } else {
      return GESTURE.DIRECTION.UP;
    }
  }
};

const GestureContainer = ({ children, onSwipe }: PropsWithChildren<Props>) => {
  const isCalled = useRef(false);

  const gesture = useMemo(
    () =>
      Gesture.Pan()
        .runOnJS(true)
        .minDistance(20)
        .onUpdate((event) => {
          if (
            isCalled.current ||
            (event.translationY === 0 && event.translationX === 0)
          ) {
            return;
          }

          onSwipe(getDirection(event));

          isCalled.current = true;
        })
        .onEnd(() => {
          isCalled.current = false;
        }),
    [onSwipe],
  );

  return <GestureDetector gesture={gesture}>{children}</GestureDetector>;
};

export default memo(GestureContainer);
