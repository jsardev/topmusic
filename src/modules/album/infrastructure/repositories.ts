import { Repository } from "@/shared/infrastructure";
import { TopAlbumsRepositoryFilters } from "./types";
import { Album } from "../model";
import { albumsClient } from "./api";
import { favoriteAlbumsClient } from "./storage";

export const topAlbumsRepository: Repository<
  Album,
  TopAlbumsRepositoryFilters
> = {
  getAll: async (filters) => {
    const topAlbumsResponseDTO = await albumsClient.getTopAlbums(filters);
    return topAlbumsResponseDTO.feed.entry.map((entry, index) =>
      Album.fromRSSAlbumDTO(entry, index + 1)
    );
  },
  saveAll: () => {
    throw new Error("not implemented");
  },
};

export const favoriteAlbumsRepository: Repository<Album> = {
  getAll: async () => {
    const favoriteAlbums = await favoriteAlbumsClient.getAll();
    return favoriteAlbums?.map(Album.fromFavoriteAlbumDTO) || [];
  },
  saveAll: async (albums: Album[]) => {
    await favoriteAlbumsClient.saveAll(albums);
  },
};
