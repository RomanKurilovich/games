import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const goBack = () => {
  const ref = navigationRef.current;

  if (ref?.canGoBack()) {
    ref?.goBack();
  }
};
