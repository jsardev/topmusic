import Input from "@/shared/ui/Input";
import { useAlbumsFilter } from "../model";

const AlbumFilter = () => {
  const { albumsFilter, setAlbumsFilter } = useAlbumsFilter();
  return <Input value={albumsFilter} onChange={setAlbumsFilter} />;
};

export default AlbumFilter;
