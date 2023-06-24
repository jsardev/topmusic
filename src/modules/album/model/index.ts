import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { albumsFilterState, albumsState, filteredAlbumsState } from "../state";
import { useTopAlbumsQuery } from "../infrastructure";

export interface Album {
  id: string;
  artist: string;
}

const DEFAULT_TOP_ALBUMS_LIMIT = 100;

export const useTopAlbums = (limit: number = DEFAULT_TOP_ALBUMS_LIMIT) => {
  // TODO: handle request error
  const { data, error } = useTopAlbumsQuery(limit);
  const [albums, setAlbums] = useRecoilState(albumsState);
  const [albumsFilter, setAlbumsFilter] = useRecoilState(albumsFilterState);
  const filteredAlbums = useRecoilValue(filteredAlbumsState);

  useEffect(() => {
    if (!albums.length) {
      setAlbums(data);
    }
  }, [data, albums.length, setAlbums]);

  return {
    albums: albumsFilter.length > 0 ? filteredAlbums : albums,
    albumsFilter,
    setAlbumsFilter,
  };
};
