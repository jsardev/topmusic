import React from "react";

type ListProps = {
  className?: string;
  children: React.ReactNode;
};

const List = ({ className, children }: ListProps) => {
  return <ul className={className}>{children}</ul>;
};

export default List;
