import { AtomEffect } from "recoil";
import localForage from "localforage";

interface LocalForageOneWaySyncEffectOptions<T> {
  filter?: (value: T) => T;
}

export const localForageOneWaySyncEffect =
  <T>(
    key: string,
    options: LocalForageOneWaySyncEffectOptions<T>
  ): AtomEffect<T> =>
  ({ onSet }) => {
    onSet((newValue, _, isReset) => {
      isReset
        ? localForage.removeItem(key)
        : localForage.setItem(
            key,
            options.filter ? options.filter(newValue) : newValue
          );
    });
  };
