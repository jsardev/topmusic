import Text from "@/shared/ui/Text";
import { useAlbumById } from "../model";
import Badge from "@/shared/ui/Badge";
import AlbumFavoriteButton from "./AlbumFavoriteButton";

type AlbumDetailsProps = {
  id: string;
};

const AlbumDetails = ({ id }: AlbumDetailsProps) => {
  const album = useAlbumById(id ?? "");

  if (!album) {
    return <Text type="text/md/regular">No album data found.</Text>
  }

  return (
    <div className="flex color-gray-700 gap-32 w-full">
      <div className="flex flex-col gap-12 items-start">
        <img src={album.coverImageUrl} className="w-320px" />
        <AlbumFavoriteButton album={album} />
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
