import Filter from "@/modules/view/ui/Filter";
import AlbumList from "@/modules/album/ui/AlbumList";
import Layout from "@/shared/ui/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Filter />
      <AlbumList />
    </Layout>
  );
};

export default HomePage;
