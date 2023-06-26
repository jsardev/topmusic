import React from "react";
import cn from 'classnames'

export enum TextTag {
  DIV = "div",
  PARAGRAPH = "p",
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
}

export type TextType =
  | "text/lg/regular"
  | "text/lg/bold"
  | "text/md/regular"
  | "text/md/bold"
  | "text/sm/regular"
  | "text/sm/bold"
  | "display/xs/regular"
  | "display/sm/regular"
  | "display/sm/bold"
  | "display/md/regular"
  | "display/lg/regular"
  | "display/xl/regular"
  | "display/xl/semibold"
  | "display/xl/bold";

type TextProps = {
  tag?: TextTag;
  type?: TextType;
  className?: string,
  children: React.ReactNode;
};

const Text = ({
  tag = TextTag.PARAGRAPH,
  type = "text/md/regular",
  className,
  children,
}: TextProps) => {
  return React.createElement(tag, { className: cn(type, className) }, children);
};

export default Text;
