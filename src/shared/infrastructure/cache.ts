import { Cache } from "swr";

const CACHE_KEY = "swr-cache";

export const swrLocalStorageProvider = (): Cache => {
  const cache = new Map(JSON.parse(localStorage.getItem(CACHE_KEY) || "[]"));

  window.addEventListener("beforeunload", () => {
    const appCache = JSON.stringify(Array.from(cache.entries()));
    localStorage.setItem(CACHE_KEY, appCache);
  });

  return cache as Cache;
};
