import { MMKV } from 'react-native-mmkv';
import { Storage } from 'redux-persist';

const mmkvStorage = new MMKV();

export const storage: Storage = {
  getItem(key) {
    const value = mmkvStorage.getString(key);

    return Promise.resolve(value);
  },
  setItem(key, value) {
    mmkvStorage.set(key, value);

    return Promise.resolve(true);
  },
  removeItem(key) {
    mmkvStorage.delete(key);

    return Promise.resolve();
  },
};
