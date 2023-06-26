import cn from "classnames";

const icons = {
  music: "i-lucide-music",
  loader: "i-lucide-loader2",
  "arrow-left": "i-lucide-arrow-left",
  "folder-heart": "i-lucide:folder-heart",
  "brands-github": "i-fa6-brands:github",
};

type IconProps = {
  name: keyof typeof icons;
  className?: string;
};

const Icon = ({ name, className }: IconProps) => {
  return <i className={cn("inline-block", icons[name], className)} />;
};

export default Icon;
