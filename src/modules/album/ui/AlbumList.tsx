import List from "@/shared/ui/List";
import { useTopAlbums } from "../model";
import AlbumListRow from "./AlbumListRow";

const AlbumList = () => {
  const { albums } = useTopAlbums();

  return (
    <List className="h-1/2 overflow-scroll">
      {albums.map((album) => (
        <AlbumListRow key={album.id} album={album} />
      ))}
    </List>
  );
};

export default AlbumList;
