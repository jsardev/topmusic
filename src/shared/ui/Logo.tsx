import logoSrc from "@/assets/logo.svg";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return <img src={logoSrc} className={className} />;
};

export default Logo;
