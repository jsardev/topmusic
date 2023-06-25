import Input from "@/shared/ui/Input";
import { useAlbumsFilter } from "../state/hooks";

const AlbumFilter = () => {
  const { albumsFilter, setAlbumsFilter } = useAlbumsFilter();
  return <Input value={albumsFilter} onChange={setAlbumsFilter} />;
};

export default AlbumFilter;
