import cn from "classnames";

import { useView, ViewType } from "../model";

type ViewToggleProps = {
  className?: string;
};

const ViewToggle = ({ className }: ViewToggleProps) => {
  const { view, setView } = useView();

  const getButtonOnClick = (buttonViewType: ViewType) => () => {
    setView(buttonViewType);
  };

  const getActiveViewButtonStyles = (buttonViewType: ViewType) => ({
    "bg-red": view === buttonViewType,
  });

  return (
    <div className={cn("flex", className)}>
      <button
        className={cn("flex-1", {
          ...getActiveViewButtonStyles(ViewType.LIST),
        })}
        onClick={getButtonOnClick(ViewType.LIST)}
      >
        List
      </button>
      <button
        className={cn("flex-1", {
          ...getActiveViewButtonStyles(ViewType.GRID),
        })}
        onClick={getButtonOnClick(ViewType.GRID)}
      >
        Grid
      </button>
    </div>
  );
};

export default ViewToggle;
