import cn from "classnames";

import { useView, ViewType } from "../model";

const ViewToggle = () => {
  const { view, setView } = useView();

  const onButtonClick = (view: ViewType) => {
    setView(view);
  };

  return (
    <div>
      <button
        className={cn({ "bg-red": view === ViewType.LIST })}
        onClick={() => onButtonClick(ViewType.LIST)}
      >
        List
      </button>
      <button
        className={cn({ "bg-red": view === ViewType.GRID })}
        onClick={() => onButtonClick(ViewType.GRID)}
      >
        Grid
      </button>
    </div>
  );
};

export default ViewToggle;
