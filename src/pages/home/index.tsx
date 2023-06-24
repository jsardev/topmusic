import AlbumList from "@/modules/album/ui/AlbumList";
import { useTopAlbums } from "@/modules/album/model";
import Layout from "@/shared/ui/Layout";
import withSuspense from "@/shared/utils/withSuspense";
import Input from "@/shared/ui/Input";

const HomePage = () => {
  const { albums, albumsFilter, setAlbumsFilter } = useTopAlbums();

  return (
    <Layout>
      <div className="flex flex-col">
        <Input value={albumsFilter} onChange={setAlbumsFilter} />
        <AlbumList items={albums} />
      </div>
    </Layout>
  );
};

const EnhancedHomePage = withSuspense(
  HomePage,
  <Layout>Loading data...</Layout>
);

export default EnhancedHomePage;
