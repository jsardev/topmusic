import List from "@/shared/ui/List";
import { useTopAlbums } from "../model";
import AlbumListItem from "./AlbumListItem";

type AlbumListProps = {
  showOnlyFavorites?: boolean;
};

const AlbumList = ({ showOnlyFavorites = false }: AlbumListProps) => {
  const { albums } = useTopAlbums({ showOnlyFavorites });

  return (
    <List className="flex flex-col gap-32 overflow-y-scroll overflow-x-hidden md:px-96px w-full md:w-auto">
      {albums.map((album, index) => (
        <AlbumListItem key={album.id} album={album} position={index + 1} />
      ))}
    </List>
  );
};

export default AlbumList;
