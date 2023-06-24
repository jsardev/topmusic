import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { albumsState } from "../state";
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

  useEffect(() => {
    if (!albums.length) {
      setAlbums(data);
    }
  }, [data, albums.length, setAlbums]);

  return {
    albums,
  };
};
