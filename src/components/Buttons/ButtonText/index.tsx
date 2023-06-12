import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { AppText } from 'components';
import { TYPOGRAPHY } from 'names';

type Props = {
  title: string;
  onPress: () => void;
  textType?: TYPOGRAPHY.TYPES;
};

const ButtonText = ({ title, onPress, textType }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <AppText type={textType}>{title}</AppText>
  </TouchableOpacity>
);

export default memo(ButtonText);
