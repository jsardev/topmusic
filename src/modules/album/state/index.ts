import { atom, selector, selectorFamily } from "recoil";

import { Album, FavoritedAlbum } from "../model";
import {
  favoriteAlbumsRepository,
  topAlbumsRepository,
} from "../infrastructure";
import { TopAlbumsRepositoryFilters } from "../infrastructure/types";
import { albumFuse, mergeAlbumsWithFavoriteAlbums } from "./utils";
import { favoriteAlbumsLocalForageSyncEffect } from "./effects";

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

export const favoriteAlbumsQuery = selector({
  key: "favoriteAlbumsState",
  get: ({ get }) => {
    const albums = get(albumsState);
    return albums
      .filter((album): album is FavoritedAlbum => album.isFavorite)
      .sort((a, b) => b.addedToFavoritesAt - a.addedToFavoritesAt);
  },
});

export const albumsFilterState = atom<string>({
  key: "albumsFilterState",
  default: "",
});

interface FilteredAlbumsQueryOptions {
  showOnlyFavorites: boolean;
}

export const filteredAlbumsQuery = selectorFamily({
  key: "filteredAlbumsState",
  get:
    ({ showOnlyFavorites }: Readonly<FilteredAlbumsQueryOptions>) =>
    ({ get }) => {
      const albums = get(albumsState);
      const albumsFilter = get(albumsFilterState);
      const favoriteAlbums = get(favoriteAlbumsQuery);

      const albumsToFilter = showOnlyFavorites ? favoriteAlbums : albums;

      if (albumsFilter) {
        albumFuse.setCollection(albumsToFilter);
        const searchResult = albumFuse.search(albumsFilter);
        return Array.from(new Set(searchResult.map(({ item }) => item)));
      }

      return albumsToFilter;
    },
});
