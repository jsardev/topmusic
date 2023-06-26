import Albums from "@/modules/album/ui/Albums";
import Layout from "@/shared/ui/Layout";

const HomePage = () => {
  return (
    <Layout title="Top Albums" withViewToolbar>
      <Albums />
    </Layout>
  );
};

export default HomePage;
