import { Link } from "react-router-dom";
import Logo from "./Logo";
import Text from "./Text";

const HeaderLogo = () => {
  return (
    <div className="flex flex-col items-center gap-4 max-w-90">
      <Link to="/">
        <Logo className="w-max h-6 md:h-12" />
      </Link>
      <Text type="text/md/regular" className="text-center color-gray400">
        Discover the best music albums on iTunes around the globe.
      </Text>
    </div>
  );
};

export default HeaderLogo;
