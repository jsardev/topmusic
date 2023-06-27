import {
  iTunesRSSEntryAttributesValue,
  iTunesRSSEntryLabelAndAttributesValue,
  iTunesRSSEntryLabelValue,
} from "@/shared/infrastructure";
import { AlbumDTO } from "../model";

export type FavoriteAlbumDTO = AlbumDTO;

export interface RSSAlbumDTO {
  id: iTunesRSSEntryAttributesValue<{
    "im:id": string;
  }>;
  "im:artist": iTunesRSSEntryLabelValue;
  "im:name": iTunesRSSEntryLabelValue;
  "im:image": Array<
    iTunesRSSEntryLabelAndAttributesValue<{
      height: string;
    }>
  >;
  "im:itemCount": iTunesRSSEntryLabelValue;
  "im:price": iTunesRSSEntryLabelValue;
  category: iTunesRSSEntryAttributesValue<{
    label: string;
  }>;
  "im:releaseDate": iTunesRSSEntryLabelAndAttributesValue<{
    label: string;
  }>;
  link: iTunesRSSEntryAttributesValue<{
    href: string;
  }>;
}

export interface RSSTopAlbumsResponseDTO {
  feed: {
    entry: RSSAlbumDTO[];
  };
}

export interface TopAlbumsRepositoryFilters {
  limit: number;
}
