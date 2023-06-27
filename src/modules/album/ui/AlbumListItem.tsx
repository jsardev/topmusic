import ListRow from "@/shared/ui/ListRow";
import { Album } from "../model";
import AlbumFavoriteButton from "./AlbumFavoriteButton";
import Text from "@/shared/ui/Text";
import Badge from "@/shared/ui/Badge";
import { Link } from "react-router-dom";

type AlbumListItemProps = {
  album: Album;
  showPosition?: boolean;
};

const AlbumListItem = ({ album, showPosition = true }: AlbumListItemProps) => {
  return (
    <ListRow className="flex items-center relative">
      <Link to={`/details/${album.id}`} className="w-full md:w-720px">
        <div className="flex flex-col md:flex-row md:items-center md:rounded-lg gap-12 bg-white md:drop-shadow-sm hover:drop-shadow overflow-hidden md:pr-24 md:max-h-80 transition">
          <img
            src={album.coverImageUrl}
            className="w-full md:w-auto max-h-300px md:max-h-80px object-cover object-top rounded-lg brightness-50"
          />
          <div className="flex flex-col md:flex-row flex-1 md:justify-between overflow-hidden gap-12 md:gap-48">
            <div className="flex flex-col gap-4 overflow-hidden">
              <Text type="text/lg/bold" className="color-gray-700 truncate">
                {album.artist}
              </Text>
              <Text type="text/md/regular" className="color-gray-500 truncate">
                {album.name}
              </Text>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
              <Text
                type="text/md/regular"
                className="color-gray-500 whitespace-nowrap"
              >
                {/* TODO: Extract to some kind of helper function */}
                {album.trackCount} track{album.trackCount > 1 ? "s" : ""}
              </Text>
              <Badge>{album.category}</Badge>
              <Text type="text/md/regular" className="color-gray-700">
                {album.price}
              </Text>
            </div>
          </div>
        </div>
      </Link>

      {showPosition && (
        <Text
          type="display/xl/semibold"
          className="absolute leading-none left-12 top-12 md:w-150px md:-left-198px color-gray-100 text-right opacity-50 md:opacity-100"
        >
          {album.position}.
        </Text>
      )}
      <AlbumFavoriteButton
        album={album}
        className="absolute right-0 bottom-0 md:-right-48px md:bottom-auto"
      />
    </ListRow>
  );
};

export default AlbumListItem;
