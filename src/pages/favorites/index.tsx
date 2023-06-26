import Albums from "@/modules/album/ui/Albums";
import Layout from "@/shared/ui/Layout";

const FavoritesPage = () => {
  return (
    <Layout title="Favorites" withViewToolbar>
      <Albums showOnlyFavorites />
    </Layout>
  );
};

export default FavoritesPage;
