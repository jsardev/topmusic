import React from "react";
import { Link } from "react-router-dom";
import LayoutLoading from "./LayoutLoading";
import ViewToggle from "../../modules/view/ui/ViewToggle";
import Header from "./Header";
import Text from "./Text";
import Filter from "@/modules/view/ui/Filter";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <React.Suspense fallback={<LayoutLoading />}>
      <div className="container flex flex-col justify-center items-center py-6 md:py-16">
        <Header className="mb-32px md:mb-64px" />
        <div className="flex flex-col w-full gap-6 mb-32px md:mb-48px">
          <Text type="display/xs/regular" className="color-gray-400 md:display/sm/regular">
            {title}
          </Text>
          <div className="flex flex-col md:flex-row gap-4">
            <Filter className="flex-1" />
            <ViewToggle className="w-full md:w-auto" />
          </div>
        </div>
        {children}
      </div>
    </React.Suspense>
  );
};

export default Layout;
