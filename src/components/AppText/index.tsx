import React, { memo, PropsWithChildren, useMemo } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

import { TYPOGRAPHY } from 'names';

type Props = {
  type?: TYPOGRAPHY.TYPES;
  style?: StyleProp<TextStyle>;
};

const AppText: React.FC<PropsWithChildren<Props>> = ({
  children,
  type = TYPOGRAPHY.TYPES.BODY,
  style,
}) => {
  const containerStyle = useMemo(
    () => (style ? [TYPOGRAPHY.STYLES[type], style] : TYPOGRAPHY.STYLES[type]),
    [style, type],
  );

  return <Text style={containerStyle}>{children}</Text>;
};

export default memo(AppText);
