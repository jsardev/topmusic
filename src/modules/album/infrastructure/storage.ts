import localForage from "localforage";
import { FavoriteAlbumDTO } from "./types";
import { Album } from "../model";

export const FAVORITE_ALBUMS_STORAGE_KEY = "favoriteAlbumsState";

export const favoriteAlbumsClient = {
  getAll: () =>
    localForage.getItem<FavoriteAlbumDTO[]>(FAVORITE_ALBUMS_STORAGE_KEY),
  saveAll: (albums: Album[]) =>
    localForage.setItem<Album[]>(FAVORITE_ALBUMS_STORAGE_KEY, albums),
};
