import { useRecoilState } from "recoil";
import { filterState, viewState } from "./state";

export const useView = () => {
  const [view, setView] = useRecoilState(viewState);
  return { view, setView };
};

export const useFilter = () => {
  const [filter, setFilter] = useRecoilState(filterState);
  return { filter, setFilter };
};
