import { Album } from "../model";
import Text from "@/shared/ui/Text";
import { Link } from "react-router-dom";

type AlbumGridItemProps = {
  album: Album;
  showPosition?: boolean;
};

const AlbumGridItem = ({ album, showPosition = true }: AlbumGridItemProps) => {
  return (
    <Link to={`/details/${album.id}`} className="relative">
      <img
        src={album.coverImageUrl}
        className="w-full brightness-50 hover:brightness-100 transition"
      />
      {showPosition && (
        <Text
          type="display/sm/bold"
          className="absolute leading-none left-12 top-12 color-gray-100 opacity-50"
        >
          {album.position}.
        </Text>
      )}
    </Link>
  );
};

export default AlbumGridItem;
