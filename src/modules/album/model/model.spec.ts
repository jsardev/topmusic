import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { Album } from "./model";
import { albumFixture, RSSAlbumDTOFixture } from "./test/fixtures";

describe("album model", () => {
  beforeEach(() => {
    vi.useFakeTimers({ now: 0 });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should set addedToFavoritesAt when isFavorite is true", () => {
    vi.advanceTimersByTime(5000);
    const data = { ...albumFixture, isFavorite: true };

    const result = new Album(data);

    expect(result.addedToFavoritesAt).toEqual(5000);
  });

  it("should not set addedToFavoritesAt when isFavorite is false", () => {
    const result = new Album({
      ...albumFixture,
      isFavorite: false,
    });

    expect(result.addedToFavoritesAt).toEqual(undefined);
  });

  it("should set addedToFavoritesAt to the passed addedToFavoritesAt value", () => {
    const result = new Album({
      ...albumFixture,
      isFavorite: true,
      addedToFavoritesAt: 12345,
    });

    expect(result.addedToFavoritesAt).toEqual(12345);
  });

  it("should create Album instance from RSSAlbumDTO", () => {
    const result = Album.fromRSSAlbumDTO(RSSAlbumDTOFixture);

    expect(result).toBeInstanceOf(Album);
    expect(result).toEqual(albumFixture);
  });

  it("should create Album instance from FavoriteAlbumDTO", () => {
    const addedToFavoritesAt = Date.now();

    const result = Album.fromFavoriteAlbumDTO({
      ...albumFixture,
      isFavorite: false,
      addedToFavoritesAt,
    });

    expect(result).toBeInstanceOf(Album);
    expect(result).toEqual({
      ...albumFixture,
      isFavorite: true,
      addedToFavoritesAt,
    });
  });
});
