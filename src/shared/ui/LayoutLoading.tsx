import Text from "./Text";
import Logo from "./Logo";

const LayoutLoading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-4 relative overflow-hidden">
      <div className="i-lucide-music color-gray50 w-600px h-600px md:w-1000px md:h-1000px absolute" />
      <div className="flex flex-col items-center max-w-80 z-10 gap-5">
        <Logo className="w-max h-12" />
        <Text type="text/md/regular" className="text-center">
          Discover the best music albums on iTunes around the globe.
        </Text>
        <i className="i-lucide-loader2 color-primary700 w-48px h-48px animate-spin" />
        <Text type="text/sm/regular" className="text-center">
          Loading...
        </Text>
      </div>
    </div>
  );
};

export default LayoutLoading;
