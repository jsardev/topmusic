import { atom, selector, selectorFamily } from "recoil";

import { Album } from "../model";
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
    return albums.filter((album) => album.isFavorite);
  },
});

export const albumsFilterState = atom<string>({
  key: "albumsFilterState",
  default: "",
});

export const filteredAlbumsState = selector({
  key: "filteredAlbumsState",
  get: ({ get }) => {
    const albums = get(albumsState);
    const albumsFilter = get(albumsFilterState);
    const favoriteAlbums = get(favoriteAlbumsQuery);
    // TODO: Sync Recoil with url state
    const isFavoritesRouteActive = false;

    const albumsToFilter = isFavoritesRouteActive ? favoriteAlbums : albums;
    albumFuse.setCollection(albumsToFilter);
    const searchResult = albumFuse.search(albumsFilter);

    return Array.from(new Set(searchResult.map(({ item }) => item)));
  },
});
