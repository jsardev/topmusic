import List from "@/shared/ui/List";
import { useTopAlbums } from "../model";
import AlbumListRow from "./AlbumListRow";

type AlbumListProps = {
  showOnlyFavorites?: boolean;
};

const AlbumList = ({ showOnlyFavorites = false }: AlbumListProps) => {
  const { albums } = useTopAlbums({ showOnlyFavorites });

  return (
    <List className="h-1/2 overflow-scroll">
      {albums.map((album) => (
        <AlbumListRow key={album.id} album={album} />
      ))}
    </List>
  );
};

export default AlbumList;
