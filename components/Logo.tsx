import Image from "next/image";
import React from "react";

interface props {
  className?: string;
  width?: number;
  height?: number;
}
const Logo: React.FC<props> = ({
  className = "flex items-center space-x-2",
  width = 160,
  height = 40,
}) => {
  return (
    <a className={className} href="/">
      <Image
        src="/images/Logo-alt2-dark.png"
        width={width}
        height={height}
        alt="Zonify Logo"
        className="object-contain"
        priority
      />
    </a>
  );
};

export default Logo;
