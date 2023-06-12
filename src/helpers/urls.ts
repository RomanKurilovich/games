import { Linking } from 'react-native';

export const openUrl = async (url: string) => {
  await Linking.openURL(url);
};
