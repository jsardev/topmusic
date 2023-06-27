import cn from "classnames";

import Icon from "./Icon";

type LayoutBackgroundIconProps = {
  isDimmed?: boolean;
};

const LayoutBackgroundIcon = ({
  isDimmed = true,
}: LayoutBackgroundIconProps) => {
  return (
    <div className="flex justify-center items-center absolute inset-0 z-[-10]">
      <Icon
        name="music"
        className={cn(
          "color-gray50 size-600 md:size-1200 top-0 transition-opacity",
          {
            "opacity-50": isDimmed,
          }
        )}
      />
    </div>
  );
};

export default LayoutBackgroundIcon;
