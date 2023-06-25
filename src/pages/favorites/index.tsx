import AlbumFilter from "@/modules/album/ui/AlbumFilter";
import AlbumList from "@/modules/album/ui/AlbumList";
import Layout from "@/shared/ui/Layout";

const FavoritesPage = () => {
  return (
    <Layout>
      <AlbumFilter />
      <AlbumList showOnlyFavorites />
    </Layout>
  );
};

export default FavoritesPage;
