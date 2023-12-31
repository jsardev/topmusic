import { atom, selector, selectorFamily } from "recoil";

import { Album } from "../model";
import {
  favoriteAlbumsRepository,
  topAlbumsRepository,
  TopAlbumsRepositoryFilters,
  favoriteAlbumsLocalForageSyncEffect,
} from "../infrastructure";
import {
  filterAndSortFavoriteAlbums,
  mergeAlbumsWithFavoriteAlbums,
  searchAlbums,
} from "./utils";
import { filterState } from "@/modules/view";

export const albumsState = atom<Album[]>({
  key: "albumsState",
  default: [],
  effects: [favoriteAlbumsLocalForageSyncEffect],
});

export const albumsQuery = selectorFamily({
  key: "albumsQuery",
  get: (filters: Readonly<TopAlbumsRepositoryFilters>) => async () => {
    const albums = await topAlbumsRepository.getAll(filters);
    const favoriteAlbums = await favoriteAlbumsRepository.getAll();
    return mergeAlbumsWithFavoriteAlbums(albums, favoriteAlbums);
  },
});

export const topAlbumsQuery = selector({
  key: "topAlbumsQuery",
  get: ({ get }) => {
    const albums = get(albumsState);
    return albums.filter((album) => !album.exclude);
  },
});

export const albumByIdQuery = selectorFamily({
  key: "albumByIdQuery",
  get:
    (id: string) =>
    ({ get }) => {
      const albums = get(albumsState);
      return albums.find((album) => album.id === id);
    },
});

export const favoriteAlbumsQuery = selector({
  key: "favoriteAlbumsState",
  get: ({ get }) => {
    const albums = get(albumsState);
    return filterAndSortFavoriteAlbums(albums);
  },
});

interface FilteredAlbumsQueryOptions {
  showOnlyFavorites: boolean;
}

export const filteredAlbumsQuery = selectorFamily({
  key: "filteredAlbumsState",
  get:
    ({ showOnlyFavorites }: Readonly<FilteredAlbumsQueryOptions>) =>
    ({ get }) => {
      const albums = get(topAlbumsQuery);
      const filter = get(filterState);
      const favoriteAlbums = get(favoriteAlbumsQuery);
      const albumsToFilter = showOnlyFavorites ? favoriteAlbums : albums;

      if (filter) {
        return searchAlbums(albumsToFilter, filter);
      }

      return albumsToFilter;
    },
});
