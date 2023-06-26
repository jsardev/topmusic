import Text from "./Text";
import HeaderLogo from "./HeaderLogo";
import Icon from "./Icon";

const LayoutLoading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-4 relative overflow-hidden">
      <Icon
        name="music"
        className="color-gray50 w-600px h-600px md:w-1000px md:h-1000px absolute"
      />
      <div className="flex flex-col items-center max-w-80 z-10 gap-5">
        <HeaderLogo />
        <Icon
          name="loader"
          className="color-primary700 w-48px h-48px animate-spin"
        />
        <Text type="text/sm/regular" className="color-gray400 text-center">
          Loading...
        </Text>
      </div>
    </div>
  );
};

export default LayoutLoading;
