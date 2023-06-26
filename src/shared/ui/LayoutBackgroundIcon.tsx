import Icon from "./Icon";

const LayoutBackgroundIcon = () => {
  return (
    <div className="flex justify-center items-center absolute inset-0 z-[-10]">
      <Icon
        name="music"
        className="color-gray50 size-600 md:size-1200 top-0"
      />
    </div>
  );
};

export default LayoutBackgroundIcon;
