import React from "react";
import cn from "classnames";
import Icon, { IconName } from "./Icon";
import Text from "./Text";

type ButtonGroupProps = {
  children: React.ReactNode;
};

const ButtonGroup = ({ children }: ButtonGroupProps) => {
  const amountOfChildren = React.Children.count(children);

  return (
    <div className="flex flex-1 md:flex-initial max-h-42">
      {React.Children.map(children, (child, index) => {
        const buttonProps = {
          isFirst: index == 0,
          isLast: amountOfChildren == index + 1,
        };

        if (amountOfChildren > index + 1) {
          return React.cloneElement(child as React.ReactElement, {
            ...buttonProps,
            hasAdjacentSibling: true,
          });
        }
        return React.cloneElement(child as React.ReactElement, buttonProps);
      })}
    </div>
  );
};

type ButtonGroupItemProps = {
  iconName: IconName;
  isActive: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  hasAdjacentSibling?: boolean;
  children?: React.ReactNode;
  onClick: () => void;
};

const ButtonGroupItem = ({
  hasAdjacentSibling,
  isFirst,
  isLast,
  isActive,
  iconName,
  children,
  onClick,
}: ButtonGroupItemProps) => {
  return (
    <button
      className={cn(
        "flex flex-1 justify-center items-center outline-none p-12 bg-white border border-gray-300 color-gray-300 focus:bg-gray-50 focus:color-gray-500 hover:color-gray-500 transition gap-8",
        {
          "rounded-l-lg": isFirst,
          "rounded-r-lg": isLast,
          "border-l-none": !hasAdjacentSibling,
          "color-primary-700 focus:color-primary-700 hover:color-primary-700 pointer-events-none":
            isActive,
          "hover:bg-gray-50": !isActive,
        }
      )}
      onClick={onClick}
    >
      <Icon name={iconName} className="size-16" />
      <Text className="md:hidden" type="text/md/regular">
        {children}
      </Text>
    </button>
  );
};

ButtonGroup.Item = ButtonGroupItem;

export default ButtonGroup;
