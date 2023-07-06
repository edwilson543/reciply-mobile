import {MMKV} from 'react-native-mmkv';

import {StorageKey} from './constants';

const storageConfig = {
  id: 'global-mmkv-storage',
  encryptionKey: 'some-key', // TODO -> use a secret key in an env var
};

const storage = new MMKV(storageConfig);

export function getValueForKey(key: StorageKey): string | undefined {
  /** Get value from storage with the given key.
   * For now this simply assumes all values are strings. */
  return storage.getString(key);
}

export function setValueForKey(key: StorageKey, value: string): void {
  /** Put the value in storage with the given key. */
  return storage.set(key, value);
}

export function deleteValueForKey(key: StorageKey): void {
  /** Delete the stored value with the given key. */
  storage.delete(key);
}
