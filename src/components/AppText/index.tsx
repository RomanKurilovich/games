import React, { memo, PropsWithChildren, useMemo } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

import { TYPOGRAPHY } from 'names';

type Props = {
  type?: TYPOGRAPHY.TYPES;
  style?: StyleProp<TextStyle>;
};

const AppText = ({
  children,
  type = TYPOGRAPHY.TYPES.BODY,
  style,
}: PropsWithChildren<Props>) => {
  const containerStyles = useMemo(
    () => (style ? [TYPOGRAPHY.STYLES[type], style] : TYPOGRAPHY.STYLES[type]),
    [style, type],
  );

  return <Text style={containerStyles}>{children}</Text>;
};

export default memo(AppText);
