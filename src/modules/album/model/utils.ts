import Fuse from "fuse.js";
import { Album } from "../model";

const albumFuse = new Fuse<Album>([], {
  keys: ["artist"],
  threshold: 0.0,
  ignoreLocation: true,
});

export const searchAlbums = (albums: Album[], query: string): Album[] => {
  albumFuse.setCollection(albums);
  const searchResult = albumFuse.search(query);
  return Array.from(new Set(searchResult.map(({ item }) => item)));
};

export const mergeAlbumsWithFavoriteAlbums = (
  albums: Album[],
  favoriteAlbums: Album[]
) => {
  const result = [...albums];
  for (const favoriteAlbum of favoriteAlbums) {
    const existingAlbum = result.find((album) => album.id == favoriteAlbum.id);
    if (existingAlbum) {
      existingAlbum.setIsFavorite(true, favoriteAlbum.addedToFavoritesAt);
    } else {
      favoriteAlbum.setExclude(true);
      result.push(favoriteAlbum);
    }
  }
  return result;
};
