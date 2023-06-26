import React from "react";
import LayoutLoading from "./LayoutLoading";
import ViewToggle from "../../modules/view/ui/ViewToggle";
import Header from "./Header";
import Text from "./Text";
import Filter from "@/modules/view/ui/Filter";
import LayoutBackgroundIcon from "./LayoutBackgroundIcon";

type LayoutProps = {
  title: string;
  withViewToolbar?: boolean;
  children: React.ReactNode;
};

const Layout = ({ title, withViewToolbar = false, children }: LayoutProps) => {
  return (
    <React.Suspense fallback={<LayoutLoading />}>
      <div className="container flex flex-col items-center py-24 md:py-64">
        <LayoutBackgroundIcon />
        <Header className="mb-32 md:mb-64" />
        <div className="flex flex-col w-full gap-24 mb-32 md:mb-48">
          <Text
            type="display/xs/regular"
            className="color-gray-400 md:display/sm/regular"
          >
            {title}
          </Text>
          {withViewToolbar && (
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
              <Filter className="flex-1" />
              <ViewToggle className="w-full md:w-auto" />
            </div>
          )}
        </div>
        {children}
      </div>
    </React.Suspense>
  );
};

export default Layout;
