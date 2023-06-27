import { useView, ViewType } from "../model";
import ButtonGroup from "@/shared/ui/ButtonGroup";

const ViewToggle = () => {
  const { view, setView } = useView();

  const getButtonOnClick = (buttonViewType: ViewType) => () => {
    setView(buttonViewType);
  };

  return (
    <ButtonGroup>
      <ButtonGroup.Item
        isActive={view === ViewType.LIST}
        iconName="layout-list"
        onClick={getButtonOnClick(ViewType.LIST)}
      >
        List
      </ButtonGroup.Item>
      <ButtonGroup.Item
        isActive={view === ViewType.GRID}
        iconName="layout-grid"
        onClick={getButtonOnClick(ViewType.GRID)}
      >
        Grid
      </ButtonGroup.Item>
    </ButtonGroup>
  );
};

export default ViewToggle;
