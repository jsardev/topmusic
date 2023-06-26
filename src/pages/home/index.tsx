import AlbumList from "@/modules/album/ui/AlbumList";
import Layout from "@/shared/ui/Layout";

const HomePage = () => {
  return (
    <Layout title="Top Albums">
      <AlbumList />
    </Layout>
  );
};

export default HomePage;
