import { iTunesRSSClient } from "@/shared/infrastructure/api";
import { RSSTopAlbumsResponseDTO, TopAlbumsRepositoryFilters } from "./types";

export const albumsClient = {
  getTopAlbums: ({ limit }: TopAlbumsRepositoryFilters) =>
    iTunesRSSClient
      .get(`topalbums/limit=${limit}/json`)
      .json<RSSTopAlbumsResponseDTO>(),
};
