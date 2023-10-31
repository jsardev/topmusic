import { Link } from "react-router-dom";
import Logo from "./Logo";
import Text from "./Text";

const HeaderLogo = () => {
  return (
    <div className="flex flex-col items-center gap-24 max-w-320px">
      <Link to="/">
        <div className="flex gap-12 items-center">
          <Logo className="w-max h-32 md:h-48" />
          <Text
            type="display/lg/regular"
            className="color-primary-700 hidden md:block"
          >
            top<span className="font-semibold">music</span>
          </Text>
        </div>
      </Link>
      <Text type="text/md/regular" className="text-center color-gray400">
        Discover the best music albums on iTunes around the globe.
      </Text>
    </div>
  );
};

export default HeaderLogo;
