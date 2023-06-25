import { Album } from "../model";
import { FavoriteAlbumDTO, RSSAlbumDTO } from "./types";

export const mapRSSAlbumDTOToAlbum = (rssAlbumDTO: RSSAlbumDTO): Album => {
  return new Album(
    rssAlbumDTO.id.attributes["im:id"],
    rssAlbumDTO["im:artist"].label
  );
};

export const mapFavoriteAlbumDTOTOAlbum = (
  favoriteAlbumDTO: FavoriteAlbumDTO
): Album => {
  return new Album(favoriteAlbumDTO.id, favoriteAlbumDTO.artist);
};
