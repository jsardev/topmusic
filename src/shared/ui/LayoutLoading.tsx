import Text from "./Text";
import HeaderLogo from "./HeaderLogo";
import Icon from "./Icon";
import LayoutBackgroundIcon from "./LayoutBackgroundIcon";

const LayoutLoading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-4">
      <LayoutBackgroundIcon isDimmed={false} />
      <div className="flex flex-col items-center max-w-320px gap-24">
        <HeaderLogo />
        <Icon name="loader" className="color-primary700 size-48 animate-spin" />
        <Text type="text/sm/regular" className="color-gray400 text-center">
          Loading
        </Text>
      </div>
    </div>
  );
};

export default LayoutLoading;
