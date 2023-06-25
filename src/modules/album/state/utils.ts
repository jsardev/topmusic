import Fuse from "fuse.js";
import { Album } from "../model";

export const albumFuse = new Fuse<Album>([], {
  keys: ["artist"],
  threshold: 0.0,
  ignoreLocation: true,
});

export const mergeAlbumsWithFavoriteAlbums = (
  albums: Album[],
  favoriteAlbums: Album[]
) => {
  const result = [...albums];
  for (const favoriteAlbum of favoriteAlbums) {
    const existingAlbum = result.find((album) => album.id == favoriteAlbum.id);
    if (existingAlbum) {
      existingAlbum.setIsFavorite(true);
    } else {
      favoriteAlbum.setExclude(true);
      result.push(favoriteAlbum);
    }
  }
  return result;
};
