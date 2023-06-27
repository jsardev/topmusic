import AlbumDetails from "@/modules/album/ui/AlbumDetails";
import Layout from "@/shared/ui/Layout";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();

  if (!id) {
    throw new Error("cannot enter this page without album id");
  }

  return (
    <Layout title="Album details">
      <AlbumDetails id={id} />
    </Layout>
  );
};

export default DetailsPage;
