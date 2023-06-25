import { Album } from "../model";
import { FavoriteAlbumDTO, RSSAlbumDTO } from "./types";

export const mapRSSAlbumDTOToAlbum = (rssAlbumDTO: RSSAlbumDTO): Album => {
  return new Album({
    id: rssAlbumDTO.id.attributes["im:id"],
    artist: rssAlbumDTO["im:artist"].label,
    isFavorite: false,
    exclude: false,
  });
};

export const mapFavoriteAlbumDTOTOAlbum = (
  favoriteAlbumDTO: FavoriteAlbumDTO
): Album => {
  return new Album({
    ...favoriteAlbumDTO,
    isFavorite: true,
  });
};
