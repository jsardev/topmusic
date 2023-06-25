import React from "react";
import Layout from "./Layout";

type LayoutLoadingProps = {
  children: React.ReactNode;
};

const LayoutLoading = ({ children }: LayoutLoadingProps) => {
  return <Layout>{children}</Layout>;
};

export default LayoutLoading;
