import { Album } from "..";

export const albumFixture: Album = new Album({
  id: "id",
  artist: "Radiohead",
  isFavorite: false,
  addedToFavoritesAt: undefined,
  exclude: false,
})

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
      label: "https://some.image",
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
  "im:category": {
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
