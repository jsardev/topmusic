import { replaceItemAtIndex } from "@/shared/utils/array";
import { useEffect } from "react";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { Album } from "../model";
import {
  albumsQuery,
  albumsState,
  filteredAlbumsQuery,
} from "./state";

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
