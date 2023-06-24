import useSWR from "swr";
import { iTunesRSSClient } from "@/shared/infrastructure";
import { mapAlbumDTOToAlbum } from "./mappers";
import { AlbumRepository, TopAlbumsResponseDTO } from "./types";

export const albumRepository: AlbumRepository = {
  getTopAlbums: async (limit: number) => {
    const topAlbumsResponseDTO = await iTunesRSSClient
      .get(`topalbums/limit=${limit}/json`)
      .json<TopAlbumsResponseDTO>();

    const albums = topAlbumsResponseDTO.feed.entry.map(mapAlbumDTOToAlbum);

    return albums;
  },
};

export const useTopAlbumsQuery = (limit: number) => {
  return useSWR(
    ["top-albums", limit],
    ([_, limit]) => albumRepository.getTopAlbums(limit),
    { suspense: true }
  );
};
