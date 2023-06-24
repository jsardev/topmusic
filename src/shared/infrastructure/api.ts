import ky from "ky";

export const iTunesRSSClient = ky.create({
  prefixUrl: "https://itunes.apple.com/us/rss",
});
