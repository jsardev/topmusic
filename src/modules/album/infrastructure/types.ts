import {
  iTunesRSSEntryAttributesValue,
  iTunesRSSEntryLabelAndAttributesValue,
  iTunesRSSEntryLabelValue,
} from "@/shared/infrastructure";
import { Album } from "../model";

export interface AlbumRepository {
  getTopAlbums: (limit: number) => Promise<Album[]>;
}

export interface AlbumDTO {
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

export interface TopAlbumsResponseDTO {
  feed: {
    entry: AlbumDTO[];
  };
}
