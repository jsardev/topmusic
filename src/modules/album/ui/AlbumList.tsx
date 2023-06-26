import List from "@/shared/ui/List";
import { useTopAlbums } from "../model";
import AlbumListItem from "./AlbumListItem";
import { AlbumsProps } from "./Albums";

const AlbumList = ({ showOnlyFavorites = false }: AlbumsProps) => {
  const { albums } = useTopAlbums({ showOnlyFavorites });

  return (
    <List className="flex flex-col gap-32 overflow-y-scroll overflow-x-hidden md:px-156px w-full md:w-auto">
      {albums.map((album) => (
        <AlbumListItem
          key={album.id}
          album={album}
          showPosition={!showOnlyFavorites}
        />
      ))}
    </List>
  );
};

export default AlbumList;
