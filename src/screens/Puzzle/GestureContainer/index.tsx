import React, { memo, PropsWithChildren, useMemo } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

type Props = {
  swipeRight: () => void;
  swipeLeft: () => void;
  swipeTop: () => void;
  swipeBottom: () => void;
};

const GestureContainer = ({
  children,
  swipeRight,
  swipeLeft,
  swipeTop,
  swipeBottom,
}: PropsWithChildren<Props>) => {
  const gesture = useMemo(
    () =>
      Gesture.Pan()
        .runOnJS(true)
        .onEnd((e) => {
          if (Math.abs(e.translationX) > Math.abs(e.translationY)) {
            if (e.translationX > 0) {
              swipeRight();
            } else {
              swipeLeft();
            }
          } else {
            if (e.translationY > 0) {
              swipeBottom();
            } else {
              swipeTop();
            }
          }
        }),
    [swipeBottom, swipeLeft, swipeRight, swipeTop],
  );

  return <GestureDetector gesture={gesture}>{children}</GestureDetector>;
};

export default memo(GestureContainer);
