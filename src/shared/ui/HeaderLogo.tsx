import { Link } from "react-router-dom";
import Logo from "./Logo";
import Text from "./Text";
import Icon from "./Icon";

const HeaderLogo = () => {
  return (
    <div className="flex flex-col items-center gap-24 max-w-320px">
      <Link to="/">
        <Logo className="hidden md:block w-max h-32 md:h-48" />
        <Icon name="music" className="md:hidden w-36 h-36 color-primary-700" />
      </Link>
      <Text type="text/md/regular" className="text-center color-gray400">
        Discover the best music albums on iTunes around the globe.
      </Text>
    </div>
  );
};

export default HeaderLogo;
