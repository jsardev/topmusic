import { atom, selector } from "recoil";
import Fuse from "fuse.js";

import { Album } from "../model";

const fuse = new Fuse<Album>([], {
  keys: ["artist"],
  threshold: 0.0,
  ignoreLocation: true,
});

export const albumsState = atom<Album[]>({
  key: "albumsState",
  default: [],
  effects: [
    ({ onSet }) => {
      onSet((albums) => {
        fuse.setCollection(albums);
      });
    },
  ],
});

export const albumsFilterState = atom<string>({
  key: "albumsFilterState",
  default: "",
});

export const filteredAlbumsState = selector({
  key: "filteredAlbumsState",
  get: ({ get }) => {
    const albumsFilter = get(albumsFilterState);
    const searchResult = fuse.search(albumsFilter);
    return Array.from(new Set(searchResult.map(({ item }) => item)));
  },
});
