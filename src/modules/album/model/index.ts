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
    this.addedToFavoritesAt =
      addedToFavoritesAt ?? this.computeAddedToFavoritesAt(isFavorite);
    this.exclude = exclude;
  }

  setIsFavorite(isFavorite: boolean, addedToFavoritesAt?: number) {
    this.isFavorite = isFavorite;
    this.addedToFavoritesAt =
      addedToFavoritesAt ?? this.computeAddedToFavoritesAt(isFavorite);
  }

  setExclude(exclude: boolean) {
    this.exclude = exclude;
  }

  private computeAddedToFavoritesAt(isFavorite: boolean) {
    return isFavorite === true ? Date.now() : undefined;
  }
}

type AlbumNonMethodKeys =
  | "id"
  | "artist"
  | "isFavorite"
  | "addedToFavoritesAt"
  | "exclude";

export type AlbumDTO = Pick<Album, AlbumNonMethodKeys>;

export type FavoritedAlbum = Album &
  Required<Pick<Album, "addedToFavoritesAt">>;
