import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  albumsFilterState,
  albumsQuery,
  albumsState,
  filteredAlbumsQuery,
} from "../state";
import { replaceItemAtIndex } from "@/shared/utils/array";

type AlbumNonMethodKeys =
  | "id"
  | "artist"
  | "isFavorite"
  | "addedToFavoritesAt"
  | "exclude";

export type AlbumWithoutMethods = Pick<Album, AlbumNonMethodKeys>;

export class Album {
  id: string;
  artist: string;
  isFavorite: boolean;
  addedToFavoritesAt?: number;
  exclude: boolean;

  constructor({
    id,
    artist,
    isFavorite,
    addedToFavoritesAt,
    exclude,
  }: AlbumWithoutMethods) {
    this.id = id;
    this.artist = artist;
    this.isFavorite = isFavorite;
    this.addedToFavoritesAt =
      addedToFavoritesAt ?? this.computeAddedToFavoritesAt(isFavorite);
    this.exclude = exclude;
  }

  setIsFavorite(isFavorite: boolean, addedToFavoritesAt?: number) {
    this.isFavorite = isFavorite;
    this.addedToFavoritesAt =
      addedToFavoritesAt ?? this.computeAddedToFavoritesAt(isFavorite);
  }

  setExclude(exclude: boolean) {
    this.exclude = exclude;
  }

  private computeAddedToFavoritesAt(isFavorite: boolean) {
    return isFavorite === true ? Date.now() : undefined;
  }
}

export type FavoritedAlbum = Album &
  Required<Pick<Album, "addedToFavoritesAt">>;

const DEFAULT_TOP_ALBUMS_LIMIT = 100;

interface UseTopAlbumsOptions {
  limit?: number;
  showOnlyFavorites?: boolean;
}

export const useTopAlbums = ({
  limit = DEFAULT_TOP_ALBUMS_LIMIT,
  showOnlyFavorites = false,
}: UseTopAlbumsOptions) => {
  const albumsQueryValue = useRecoilValue(albumsQuery({ limit }));
  const [albums, setAlbums] = useRecoilState(albumsState);
  const filteredAlbums = useRecoilValue(
    filteredAlbumsQuery({ showOnlyFavorites })
  );

  useEffect(() => {
    if (!albums.length) {
      setAlbums(albumsQueryValue);
    }
  }, [albums.length, albumsQueryValue, setAlbums]);

  return {
    albums: filteredAlbums,
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
      const updatedAlbum = new Album({
        ...album,
        isFavorite: !album.isFavorite,
      });
      return replaceItemAtIndex<Album>(albums, albumIndex, updatedAlbum);
    });
  };
};
