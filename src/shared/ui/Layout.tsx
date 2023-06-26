import React from "react";
import { Link } from "react-router-dom";
import LayoutLoading from "./LayoutLoading";
import ViewToggle from "../../modules/view/ui/ViewToggle";

type LayoutProps = {
  children: React.ReactNode;
};

const fallback = <LayoutLoading>Loading data...</LayoutLoading>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Suspense fallback={fallback}>
      <div className="w-screen flex flex-col justify-center items-center">
        <header className="flex">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </header>
        <ViewToggle />
        <div className="flex flex-col">{children}</div>
      </div>
    </React.Suspense>
  );
};

export default Layout;
