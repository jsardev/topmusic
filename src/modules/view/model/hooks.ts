import { useRecoilState } from "recoil";
import { viewState } from "./state";

export const useView = () => {
  const [view, setView] = useRecoilState(viewState);
  return { view, setView };
};
