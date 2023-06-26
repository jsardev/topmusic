import Filter from "@/modules/view/ui/Filter";
import AlbumList from "@/modules/album/ui/AlbumList";
import Layout from "@/shared/ui/Layout";

const FavoritesPage = () => {
  return (
    <Layout>
      <Filter />
      <AlbumList showOnlyFavorites />
    </Layout>
  );
};

export default FavoritesPage;
