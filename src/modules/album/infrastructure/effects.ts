import { localForageOneWaySyncEffect } from "@/shared/infrastructure";
import { FAVORITE_ALBUMS_STORAGE_KEY } from "./storage";
import { Album } from "../model";

export const favoriteAlbumsLocalForageSyncEffect = localForageOneWaySyncEffect<
  Album[]
>(FAVORITE_ALBUMS_STORAGE_KEY, {
  filter: (albums) => albums.filter((album) => album.isFavorite),
});
