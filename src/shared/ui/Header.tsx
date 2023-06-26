import { Link } from "react-router-dom";
import cn from "classnames";
import HeaderLogo from "./HeaderLogo";
import { useIsFavoritesViewActive } from "@/modules/view";
import Icon from "./Icon";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const isFavoritesView = useIsFavoritesViewActive();

  return (
    <header className={cn("flex justify-between w-full", className)}>
      <div className="flex gap-12">
        {isFavoritesView ? (
          <Link to="/">
            <Icon
              name="arrow-left"
              className="size-24 md:size-32 color-gray300 hover:color-gray500 transition-colors"
            />
          </Link>
        ) : (
          <Link to="/favorites">
            <Icon
              name="folder-heart"
              className="size-24 md:size-32 color-gray300 hover:color-gray500 transition-colors"
            />
          </Link>
        )}
      </div>
      <HeaderLogo />
      <div>
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
