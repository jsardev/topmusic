import { Album } from "..";

export const albumFixture: Album = new Album({
  id: "id",
  name: "Pablo Honey",
  artist: "Radiohead",
  url: "https://album.url",
  coverImageUrl: "https://image.170.url",
  trackCount: 18,
  price: "9.99$",
  category: "Alternative Rock",
  releaseDate: "June 23, 2023",
  isFavorite: false,
  addedToFavoritesAt: undefined,
  exclude: false,
});

export const RSSAlbumDTOFixture = {
  id: {
    attributes: {
      "im:id": "id",
    },
  },
  "im:artist": {
    label: "Radiohead",
  },
  "im:name": {
    label: "Pablo Honey",
  },
  "im:image": [
    {
      label: "https://image.50.url",
      attributes: {
        height: "50",
      },
    },
    {
      label: "https://image.100.url",
      attributes: {
        height: "100",
      },
    },
    {
      label: "https://image.170.url",
      attributes: {
        height: "170",
      },
    },
  ],
  "im:itemCount": {
    label: "18",
  },
  "im:price": {
    label: "9.99$",
  },
  category: {
    attributes: {
      label: "Alternative Rock",
    },
  },
  "im:releaseDate": {
    label: "2023-06-23T00:00:00-07:00",
    attributes: {
      label: "June 23, 2023",
    },
  },
  link: {
    attributes: {
      rel: "alternate",
      type: "text/html",
      href: "https://album.url",
    },
  },
};
