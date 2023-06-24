import { atom } from "recoil";
import { Album } from "../model";

export const albumsState = atom<Album[]>({
  key: "albumsState",
  default: [],
});
