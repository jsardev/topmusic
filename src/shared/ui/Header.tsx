import { Link } from "react-router-dom";
import cn from "classnames";
import HeaderLogo from "./HeaderLogo";
import { useActiveRoutes } from "@/modules/view";
import Icon from "./Icon";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const activeRoutes = useActiveRoutes();

  return (
    <header className={cn("flex justify-center w-full relative", className)}>
      <div className="flex gap-12 absolute left-0">
        {!activeRoutes.home && (
          <Link to="/">
            <Icon
              name="arrow-left"
              className="size-24 md:size-32 color-gray300 hover:color-gray500 transition-colors"
            />
          </Link>
        )}
        {!activeRoutes.favorites && (
          <Link to="/favorites">
            <Icon
              name="folder-heart"
              className="size-24 md:size-32 color-gray300 hover:color-gray500 transition-colors"
            />
          </Link>
        )}
      </div>
      <HeaderLogo />
      <div className="absolute right-0">
        <a href="https://github.com/sarneeh/topmusic" target="_blank">
          <Icon
            name="brands-github"
            className="size-24 md:size-32 color-gray300 hover:color-gray500 transition-colors"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
