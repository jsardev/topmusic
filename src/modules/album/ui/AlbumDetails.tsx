import Text from "@/shared/ui/Text";
import { useAlbumById } from "../model";
import Badge from "@/shared/ui/Badge";
import AlbumFavoriteButton from "./AlbumFavoriteButton";
import Icon from "@/shared/ui/Icon";

type AlbumDetailsProps = {
  id: string;
};

const AlbumDetails = ({ id }: AlbumDetailsProps) => {
  const album = useAlbumById(id ?? "");

  if (!album) {
    return <Text type="text/md/regular">No album data found.</Text>;
  }

  return (
    <div className="flex flex-col md:flex-row color-gray-700 gap-12 md:gap-32 w-full">
      <div className="flex flex-col gap-12 items-start">
        <img
          src={album.coverImageUrl}
          className="w-full md:w-320px rounded-lg"
        />
        <div className="flex gap-12">
          <a href={album.url} target="_blank">
            <Icon
              name="external-link"
              className="size-24 color-gray-300 hover:color-gray-500 transition-colors"
            />
          </a>
          <AlbumFavoriteButton album={album} />
        </div>
      </div>
      <div className="flex flex-col gap-12 items-start">
        <div className="flex flex-col">
          <Text type="text/lg/bold">{album.artist}</Text>
          <Text type="text/md/regular" className="color-gray-500">
            {album.name}
          </Text>
        </div>
        <Badge>{album.category}</Badge>
        <Text type="text/lg/bold">{album.price}</Text>
        <div className="flex flex-col gap-4 color-gray-500">
          <Text type="text/md/regular">Tracks: {album.trackCount}</Text>
          <Text type="text/md/regular">Release date: {album.releaseDate}</Text>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetails;
