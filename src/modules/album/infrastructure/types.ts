import {
  iTunesRSSEntryAttributesValue,
  iTunesRSSEntryLabelAndAttributesValue,
  iTunesRSSEntryLabelValue,
} from "@/shared/infrastructure";
import { AlbumWithoutMethods } from "../model";

export type FavoriteAlbumDTO = AlbumWithoutMethods;

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
  "im:category": iTunesRSSEntryAttributesValue<{
    label: string;
  }>;
  "im:releaseDate": Array<
    iTunesRSSEntryLabelAndAttributesValue<{
      label: string;
    }>
  >;
}

export interface RSSTopAlbumsResponseDTO {
  feed: {
    entry: RSSAlbumDTO[];
  };
}

export interface TopAlbumsRepositoryFilters {
  limit: number;
}
