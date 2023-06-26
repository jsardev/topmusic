import { describe, it, expect, afterEach, beforeEach, vi } from "vitest";
import {
  mergeAlbumsWithFavoriteAlbums,
  searchAlbums,
  filterAndSortFavoriteAlbums,
} from "./utils";
import { albumFixture } from "./test/fixtures";
import { Album } from "./model";

describe("album model utilities", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("filterAndSortFavoriteAlbums", () => {
    it("should return only favorite albums and sort by addedToFavoritesAt descending", () => {
      const album1 = new Album({
        ...albumFixture,
        id: "1",
        isFavorite: true,
        addedToFavoritesAt: 1,
      });
      const album2 = new Album({
        ...albumFixture,
        id: "2",
        isFavorite: false,
      });
      const album3 = new Album({
        ...albumFixture,
        id: "3",
        isFavorite: true,
        addedToFavoritesAt: 5,
      });

      const result = filterAndSortFavoriteAlbums([album1, album2, album3]);

      expect(result).toHaveLength(2);
      expect(result[0]).toBe(album3);
      expect(result[1]).toBe(album1);
    });
  });

  describe("searchAlbums", () => {
    it("should search albums by artist", () => {
      const album1 = new Album({
        ...albumFixture,
        artist: "Radiohead",
      });
      const album2 = new Album({
        ...albumFixture,
        artist: "Miley Cyrus",
      });

      const result = searchAlbums([album1, album2], "radio");

      expect(result).toHaveLength(1);
      expect(result).toEqual([album1]);
    });
  });

  describe("mergeAlbumsWithFavoriteAlbums", () => {
    it("should set isFavorite on albums that exist in favoriteAlbums", () => {
      const album = new Album({
        ...albumFixture,
        isFavorite: false,
      });
      const favoriteAlbum = new Album({
        ...albumFixture,
        isFavorite: true,
        addedToFavoritesAt: 12345,
      });

      const result = mergeAlbumsWithFavoriteAlbums([album], [favoriteAlbum]);

      expect(result).toEqual([
        {
          ...album,
          isFavorite: true,
          addedToFavoritesAt: 12345,
        },
      ]);
    });

    it("should set addedToFavoritesAt on albums that exist in favoriteAlbums (but don't have addedToFavoritesAt defined)", () => {
      const album = new Album({
        ...albumFixture,
        isFavorite: false,
      });
      const favoriteAlbum = new Album({
        ...albumFixture,
        isFavorite: true,
        addedToFavoritesAt: undefined,
      });

      const result = mergeAlbumsWithFavoriteAlbums([album], [favoriteAlbum]);

      expect(result).toEqual([
        {
          ...album,
          isFavorite: true,
          addedToFavoritesAt: Date.now(),
        },
      ]);
    });

    it("should add favoriteAlbums that do not exist in albums", () => {
      const album = new Album({
        ...albumFixture,
        isFavorite: false,
      });
      const favoriteAlbum = new Album({
        ...albumFixture,
        id: "another album",
        isFavorite: true,
        addedToFavoritesAt: 12345,
      });

      const result = mergeAlbumsWithFavoriteAlbums([album], [favoriteAlbum]);

      expect(result).toEqual([
        album,
        {
          ...favoriteAlbum,
          exclude: true,
        },
      ]);
    });
  });
});
