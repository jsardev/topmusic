import cn from "classnames";

const icons = {
  heart: "i-lucide-heart",
  music: "i-lucide-music",
  loader: "i-lucide-loader2",
  "arrow-left": "i-lucide-arrow-left",
  "folder-heart": "i-lucide:folder-heart",
  "layout-list": "i-lucide:layout-list",
  "layout-grid": "i-lucide:layout-grid",
  "brands-github": "i-fa6-brands:github",
};

export type IconName = keyof typeof icons

type IconProps = {
  name: IconName;
  className?: string;
};

const Icon = ({ name, className }: IconProps) => {
  return <i className={cn("inline-block", icons[name], className)} />;
};

export default Icon;
