import { replaceItemAtIndex } from "@/shared/utils/array";
import { useEffect } from "react";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { Album } from "../model";
import {
  albumByIdQuery,
  albumsQuery,
  albumsState,
  filteredAlbumsQuery,
} from "./state";

const DEFAULT_TOP_ALBUMS_LIMIT = 100;

interface UseInitializeAlbumsOptions {
  limit?: number;
}

const useInitializeAlbums = ({
  limit = DEFAULT_TOP_ALBUMS_LIMIT,
}: UseInitializeAlbumsOptions = {}) => {
  const albumsQueryValue = useRecoilValue(albumsQuery({ limit }));
  const [albums, setAlbums] = useRecoilState(albumsState);

  useEffect(() => {
    if (!albums.length) {
      setAlbums(albumsQueryValue);
    }
  }, [albums.length, albumsQueryValue, setAlbums]);
};

type UseTopAlbumsOptions = UseInitializeAlbumsOptions & {
  showOnlyFavorites?: boolean;
};

export const useTopAlbums = ({
  limit,
  showOnlyFavorites = false,
}: UseTopAlbumsOptions = {}) => {
  useInitializeAlbums({ limit });

  const filteredAlbums = useRecoilValue(
    filteredAlbumsQuery({ showOnlyFavorites })
  );

  return {
    albums: filteredAlbums,
  };
};

export const useAlbumById = (id: string): Album | undefined => {
  useInitializeAlbums();

  return useRecoilValue(albumByIdQuery(id));
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
