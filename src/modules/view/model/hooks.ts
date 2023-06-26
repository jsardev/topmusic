import { useRecoilState } from "recoil";
import { filterState, viewState } from "./state";
import { useLocation, useMatch } from "react-router-dom";

export const useView = () => {
  const [view, setView] = useRecoilState(viewState);
  return { view, setView };
};

export const useFilter = () => {
  const [filter, setFilter] = useRecoilState(filterState);
  return { filter, setFilter };
};

// TODO: Refactor to a cleaner solution
export const useActiveRoutes = () => {
  const location = useLocation();

  console.log(location.pathname);

  return {
    home: location.pathname == "/",
    favorites: location.pathname.includes("/favorites"),
    details: location.pathname.includes("/details"),
  };
};
