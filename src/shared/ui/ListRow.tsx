import React from "react";

type ListRowProps = {
  className?: string;
  children: React.ReactNode;
};

const ListRow = ({ className, children }: ListRowProps) => {
  return <li className={className}>{children}</li>;
};

export default ListRow;
