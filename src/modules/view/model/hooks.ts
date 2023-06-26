import { useRecoilState } from "recoil";
import { filterState, viewState } from "./state";
import { useMatch } from "react-router-dom";

export const useView = () => {
  const [view, setView] = useRecoilState(viewState);
  return { view, setView };
};

export const useFilter = () => {
  const [filter, setFilter] = useRecoilState(filterState);
  return { filter, setFilter };
};

export const useIsFavoritesViewActive = () => {
  const match = useMatch("/favorites");
  return match !== null ? true : false;
};
