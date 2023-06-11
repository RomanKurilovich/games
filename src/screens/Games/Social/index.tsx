import React, { memo, useCallback } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { SOCIALS } from 'names';
import { openUrl } from 'helpers/urls';
import Github from 'assets/icons/social/github.svg';
import LinkedIn from 'assets/icons/social/linkedIn.svg';
import Telegram from 'assets/icons/social/telegram.svg';

const ICON_SIZE = 45;

const Social = () => {
  const handleGithubPress = useCallback(async () => {
    await openUrl(SOCIALS.LINKS.GITHUB);
  }, []);

  const handleLinkedInPress = useCallback(async () => {
    await openUrl(SOCIALS.LINKS.LINKED_IN);
  }, []);

  const handleTelegramPress = useCallback(async () => {
    await openUrl(SOCIALS.LINKS.TELEGRAM);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleGithubPress}
        style={styles.socialContainer}
      >
        <Github width={ICON_SIZE} height={ICON_SIZE} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleLinkedInPress}
        style={styles.socialContainer}
      >
        <LinkedIn width={ICON_SIZE} height={ICON_SIZE} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleTelegramPress}
        style={styles.socialContainer}
      >
        <Telegram width={ICON_SIZE} height={ICON_SIZE} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Social);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  socialContainer: {
    padding: 5,
  },
});
