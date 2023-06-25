import AlbumFilter from "@/modules/album/ui/AlbumFilter";
import AlbumList from "@/modules/album/ui/AlbumList";
import Layout from "@/shared/ui/Layout";
import LayoutLoading from "@/shared/ui/LayoutLoading";
import React from "react";

const HomePage = () => {
  return (
    <React.Suspense fallback={<LayoutLoading>Loading data...</LayoutLoading>}>
      <Layout>
        <div className="flex flex-col h-full">
          <AlbumFilter />
          <AlbumList />
        </div>
      </Layout>
    </React.Suspense>
  );
};

export default HomePage;
