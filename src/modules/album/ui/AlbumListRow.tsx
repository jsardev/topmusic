import ListRow from "@/shared/ui/ListRow";
import { Album } from "../model";
import AlbumFavoriteButton from "./AlbumFavoriteButton";

type AlbumListRowProps = {
  album: Album;
};

const AlbumListRow = ({ album }: AlbumListRowProps) => {
  return (
    <ListRow>
      {album.artist} (fav: {album.isFavorite.toString()})
      <AlbumFavoriteButton album={album} />
    </ListRow>
  );
};

export default AlbumListRow;
