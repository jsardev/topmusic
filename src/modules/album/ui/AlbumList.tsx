import { Album } from "../model";

const AlbumList = ({ items = [] }: { items: Album[] }) => {
  return (
    <ul>
      {items.map((album) => (
        <li key={album.id}>{album.artist}</li>
      ))}
    </ul>
  );
};

export default AlbumList;
