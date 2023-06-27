import { useTopAlbums } from "../model";
import AlbumGridItem from "./AlbumGridItem";
import { AlbumsProps } from "./Albums";

const AlbumGrid = ({ showOnlyFavorites = false }: AlbumsProps) => {
  const { albums } = useTopAlbums({ showOnlyFavorites });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-24 w-full overflow-y-scroll overflow-x-hidden md:px-48px md:min-w-816px">
      {albums.map((album) => (
        <AlbumGridItem
          key={album.id}
          album={album}
          showPosition={!showOnlyFavorites}
        />
      ))}
    </div>
  );
};

export default AlbumGrid;
