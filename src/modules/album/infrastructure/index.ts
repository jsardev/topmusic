import { Repository, iTunesRSSClient } from "@/shared/infrastructure";
import { mapFavoriteAlbumDTOTOAlbum, mapRSSAlbumDTOToAlbum } from "./mappers";
import {
  TopAlbumsRepositoryFilters,
  RSSTopAlbumsResponseDTO,
  FavoriteAlbumDTO,
} from "./types";
import localForage from "localforage";
import { Album } from "../model";

export const FAVORITE_ALBUMS_STORAGE_KEY = "favoriteAlbumsState";

export const topAlbumsRepository: Repository<
  Album,
  TopAlbumsRepositoryFilters
> = {
  getAll: async ({ limit }) => {
    const topAlbumsResponseDTO = await iTunesRSSClient
      .get(`topalbums/limit=${limit}/json`)
      .json<RSSTopAlbumsResponseDTO>();

    return topAlbumsResponseDTO.feed.entry.map(mapRSSAlbumDTOToAlbum);
  },
  saveAll: () => {
    throw new Error("not implemented");
  },
};

export const favoriteAlbumsRepository: Repository<Album> = {
  getAll: async () => {
    const favoriteAlbums = await localForage.getItem<FavoriteAlbumDTO[]>(
      FAVORITE_ALBUMS_STORAGE_KEY
    );
    return favoriteAlbums?.map(mapFavoriteAlbumDTOTOAlbum) || [];
  },
  saveAll: async (albums: Album[]) => {
    await localForage.setItem<Album[]>(FAVORITE_ALBUMS_STORAGE_KEY, albums);
  },
};

