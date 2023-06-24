import AlbumList from "@/modules/album/ui/AlbumList";
import { useTopAlbums } from "@/modules/album/model";
import Layout from "@/shared/ui/Layout";
import withSuspense from "@/shared/utils/withSuspense";

const HomePage = () => {
  const { albums } = useTopAlbums();

  return (
    <Layout>
      <AlbumList items={albums} />
    </Layout>
  );
};

const EnhancedHomePage = withSuspense(
  HomePage,
  <Layout>Loading data...</Layout>
);

export default EnhancedHomePage;
