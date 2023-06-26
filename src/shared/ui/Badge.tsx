import Text from "./Text";

type BadgeProps = {
  children: React.ReactNode;
};

const Badge = ({ children }: BadgeProps) => {
  return (
    <Text type="text/sm/regular" className="rounded px-8 py-4 bg-gray-200 color-gray-700">
      {children}
    </Text>
  );
};

export default Badge;
