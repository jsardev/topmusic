import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  albumsFilterState,
  albumsQuery,
  albumsState,
  filteredAlbumsState,
} from "../state";
import { replaceItemAtIndex } from "@/shared/utils/array";

export class Album {
  id: string;
  artist: string;
  isFavorite: boolean;
  exclude: boolean;

  constructor(id: string, artist: string, isFavorite = false, exclude = false) {
    this.id = id;
    this.artist = artist;
    this.isFavorite = isFavorite;
    this.exclude = exclude;
  }

  setIsFavorite(value: boolean) {
    this.isFavorite = value;
  }

  setExclude(value: boolean) {
    this.exclude = value;
  }
}

const DEFAULT_TOP_ALBUMS_LIMIT = 100;

export const useTopAlbums = (limit: number = DEFAULT_TOP_ALBUMS_LIMIT) => {
  const albumsQueryValue = useRecoilValue(albumsQuery({ limit }));
  const [albums, setAlbums] = useRecoilState(albumsState);
  const albumsFilter = useRecoilValue(albumsFilterState);
  const filteredAlbums = useRecoilValue(filteredAlbumsState);

  useEffect(() => {
    if (!albums.length) {
      setAlbums(albumsQueryValue);
    }
  }, [albums.length, albumsQueryValue, setAlbums]);

  return {
    albums: albumsFilter.length > 0 ? filteredAlbums : albums,
  };
};

export const useAlbumsFilter = () => {
  const [albumsFilter, setAlbumsFilter] = useRecoilState(albumsFilterState);

  return {
    albumsFilter,
    setAlbumsFilter,
  };
};

export const useToggleAlbumIsFavorite = (album: Album) => {
  const setAlbums = useSetRecoilState(albumsState);

  return () => {
    setAlbums((albums) => {
      const albumIndex = albums.findIndex((albumItem) => albumItem === album);
      const updatedAlbum = new Album(album.id, album.artist, !album.isFavorite);
      return replaceItemAtIndex<Album>(albums, albumIndex, updatedAlbum);
    });
  };
};
