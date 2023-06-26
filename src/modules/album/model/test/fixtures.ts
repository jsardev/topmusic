import { Album } from "..";

export const albumFixture: Album = new Album({
  id: "id",
  name: "Pablo Honey",
  artist: "Radiohead",
  coverImageUrl: "https://some.image.170",
  trackCount: 18,
  price: "9.99$",
  category: "Alternative Rock",
  releaseDate: "2023-06-23T00:00:00-07:00",
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
      label: "https://some.image.50",
      attributes: {
        height: "50",
      },
    },
    {
      label: "https://some.image.100",
      attributes: {
        height: "100",
      },
    },
    {
      label: "https://some.image.170",
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
};
