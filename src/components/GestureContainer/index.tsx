import React, { memo, PropsWithChildren, useMemo } from 'react';
import {
  Gesture,
  GestureDetector,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

import { GESTURE } from 'names';

type Props = {
  waitEndGesture: boolean;
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

const GestureContainer = ({
  children,
  onSwipe,
  waitEndGesture,
}: PropsWithChildren<Props>) => {
  const gesture = useMemo(
    () =>
      Gesture.Pan()
        .runOnJS(true)
        .onUpdate((event) => {
          if (waitEndGesture) {
            return;
          }

          onSwipe(getDirection(event));
        })
        .onEnd((event) => {
          if (!waitEndGesture) {
            return;
          }

          onSwipe(getDirection(event));
        }),
    [onSwipe, waitEndGesture],
  );

  return <GestureDetector gesture={gesture}>{children}</GestureDetector>;
};

export default memo(GestureContainer);
