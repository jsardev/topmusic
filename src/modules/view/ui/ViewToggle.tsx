import cn from "classnames";

import { useView, ViewType } from "../model";

const ViewToggle = () => {
  const { view, setView } = useView();

  const getButtonOnClick = (buttonViewType: ViewType) => () => {
    setView(buttonViewType);
  };

  const getActiveViewButtonStyles = (buttonViewType: ViewType) => ({
    "bg-red": view === buttonViewType,
  });

  return (
    <div>
      <button
        className={cn({ ...getActiveViewButtonStyles(ViewType.LIST) })}
        onClick={getButtonOnClick(ViewType.LIST)}
      >
        List
      </button>
      <button
        className={cn({ ...getActiveViewButtonStyles(ViewType.GRID) })}
        onClick={getButtonOnClick(ViewType.GRID)}
      >
        Grid
      </button>
    </div>
  );
};

export default ViewToggle;
