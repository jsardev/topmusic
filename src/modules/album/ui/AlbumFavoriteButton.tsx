import { Album } from "../model";
import { useToggleAlbumIsFavorite } from "../model";

type AlbumListRowProps = {
  album: Album;
};

const AlbumFavoriteButton = ({ album }: AlbumListRowProps) => {
  const toggleAlbumIsFavorite = useToggleAlbumIsFavorite(album);
  return <button onClick={toggleAlbumIsFavorite}>Add to favorites</button>;
};

export default AlbumFavoriteButton;
