import { FavoriteAlbumDTO, RSSAlbumDTO } from "../infrastructure";

export class Album {
  id: string;
  artist: string;
  name: string;
  coverImageUrl: string;
  trackCount: number;
  price: string;
  category: string;
  position?: number;
  releaseDate: string;
  isFavorite: boolean;
  addedToFavoritesAt?: number;
  exclude: boolean;

  constructor({
    id,
    artist,
    name,
    coverImageUrl,
    trackCount,
    price,
    category,
    position,
    releaseDate,
    isFavorite,
    addedToFavoritesAt,
    exclude,
  }: AlbumDTO) {
    this.id = id;
    this.artist = artist;
    this.name = name;
    this.coverImageUrl = coverImageUrl;
    this.trackCount = trackCount;
    this.price = price;
    this.category = category;
    this.position = position;
    this.releaseDate = releaseDate;
    this.isFavorite = isFavorite;
    this.addedToFavoritesAt = this.computeAddedToFavoritesAt(
      isFavorite,
      addedToFavoritesAt
    );
    this.exclude = exclude;
  }

  static fromRSSAlbumDTO = (dto: RSSAlbumDTO, position: number): Album => {
    return new Album({
      id: dto.id.attributes["im:id"],
      artist: dto["im:artist"].label,
      name: dto["im:name"].label,
      // TODO: extract to a helper function that would be less error-prone
      coverImageUrl: dto["im:image"][2].label,
      trackCount: Number(dto["im:itemCount"].label),
      price: dto["im:price"].label,
      category: dto.category.attributes.label,
      position,
      releaseDate: dto["im:releaseDate"].label,
      isFavorite: false,
      exclude: false,
    });
  };

  static fromFavoriteAlbumDTO = (dto: FavoriteAlbumDTO): Album => {
    return new Album({
      ...dto,
      isFavorite: true,
      position: undefined,
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
  | "name"
  | "coverImageUrl"
  | "trackCount"
  | "price"
  | "category"
  | "position"
  | "releaseDate"
  | "isFavorite"
  | "addedToFavoritesAt"
  | "exclude";

export type AlbumDTO = Pick<Album, AlbumNonMethodKeys>;

export type FavoriteAlbum = Album & Required<Pick<Album, "addedToFavoritesAt">>;
