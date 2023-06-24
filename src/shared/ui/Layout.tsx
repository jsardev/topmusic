import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
      <div className="w-screen h-screen flex justify-center items-center">
        {children}
      </div>
  );
};


export default Layout;
