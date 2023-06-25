import React from "react";

type ListRowProps = {
  children: React.ReactNode;
};

const ListRow = ({ children }: ListRowProps) => {
  return <li>{children}</li>;
};

export default ListRow;
