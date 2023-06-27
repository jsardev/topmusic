import cn from "classnames";

import Icon from "@/shared/ui/Icon";
import { Album } from "../model";
import { useToggleAlbumIsFavorite } from "../model";

type AlbumFavoriteButtonProps = {
  album: Album;
  className?: string;
};

const AlbumFavoriteButton = ({
  album,
  className,
}: AlbumFavoriteButtonProps) => {
  const toggleAlbumIsFavorite = useToggleAlbumIsFavorite(album);
  return (
    <button className={className} onClick={toggleAlbumIsFavorite}>
      <Icon
        name="heart"
        className={cn(
          "size-24 color-gray-300 hover:color-gray-500 fill-black transition-colors",
          {
            "color-primary-700 hover:color-primary-500": album.isFavorite,
          }
        )}
      />
    </button>
  );
};

export default AlbumFavoriteButton;
