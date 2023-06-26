import { ViewType, useView } from "@/modules/view";
import AlbumList from "./AlbumList";
import AlbumGrid from "./AlbumGrid";

export type AlbumsProps = {
  showOnlyFavorites?: boolean;
};

const Albums = (props: AlbumsProps) => {
  const { view } = useView();

  switch (view) {
    case ViewType.LIST:
      return <AlbumList {...props} />;
    case ViewType.GRID:
      return <AlbumGrid {...props} />;
    default:
      return <AlbumList {...props} />;
  }
};

export default Albums;
