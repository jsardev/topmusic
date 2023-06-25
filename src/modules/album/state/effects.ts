import { localForageOneWaySyncEffect } from "@/shared/state/effects";
import { FAVORITE_ALBUMS_STORAGE_KEY } from "../infrastructure";
import { Album } from "../model";

export const favoriteAlbumsLocalForageSyncEffect = localForageOneWaySyncEffect<
  Album[]
>(FAVORITE_ALBUMS_STORAGE_KEY, {
  filter: (albums) => albums.filter((album) => album.isFavorite),
});
