import { FavoriteAlbumDTO, RSSAlbumDTO } from "../infrastructure";

export class Album {
  id: string;
  artist: string;
  isFavorite: boolean;
  addedToFavoritesAt?: number;
  exclude: boolean;

  constructor({
    id,
    artist,
    isFavorite,
    addedToFavoritesAt,
    exclude,
  }: AlbumDTO) {
    this.id = id;
    this.artist = artist;
    this.isFavorite = isFavorite;
    this.addedToFavoritesAt = this.computeAddedToFavoritesAt(
      isFavorite,
      addedToFavoritesAt
    );
    this.exclude = exclude;
  }

  static fromRSSAlbumDTO = (dto: RSSAlbumDTO): Album => {
    return new Album({
      id: dto.id.attributes["im:id"],
      artist: dto["im:artist"].label,
      isFavorite: false,
      exclude: false,
    });
  };

  static fromFavoriteAlbumDTO = (dto: FavoriteAlbumDTO): Album => {
    return new Album({
      ...dto,
      isFavorite: true,
    });
  };

  setIsFavorite(isFavorite: boolean, addedToFavoritesAt?: number) {
    this.isFavorite = isFavorite;
    this.addedToFavoritesAt = this.computeAddedToFavoritesAt(
      isFavorite,
      addedToFavoritesAt
    );
  }

  setExclude(exclude: boolean) {
    this.exclude = exclude;
  }

  private computeAddedToFavoritesAt(
    isFavorite: boolean,
    addedToFavoritesAt?: number
  ) {
    return addedToFavoritesAt ?? (isFavorite === true ? Date.now() : undefined);
  }
}

type AlbumNonMethodKeys =
  | "id"
  | "artist"
  | "isFavorite"
  | "addedToFavoritesAt"
  | "exclude";

export type AlbumDTO = Pick<Album, AlbumNonMethodKeys>;

export type FavoriteAlbum = Album & Required<Pick<Album, "addedToFavoritesAt">>;
