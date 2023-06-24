import { Cache } from "swr";

export const swrLocalStorageProvider = (): Cache => {
  const cache = new Map(JSON.parse(localStorage.getItem("app-cache") || "[]"));

  window.addEventListener("beforeunload", () => {
    const appCache = JSON.stringify(Array.from(cache.entries()));
    localStorage.setItem("app-cache", appCache);
  });

  return cache as Cache;
};
