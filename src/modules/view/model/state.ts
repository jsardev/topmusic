import { atom } from "recoil";
import { ViewType } from "./types";

export const viewState = atom<ViewType>({
  key: "viewState",
  default: ViewType.LIST,
});

export const filterState = atom<string>({
  key: "filterState",
  default: "",
});
