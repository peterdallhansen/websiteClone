"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<Props> = ({
  className = "flex items-center space-x-2",
  width = 160,
  height = 40,
}) => {
  const { theme } = useTheme();

  const lightLogo = "/images/Logo-alt2-light.png";
  const darkLogo = "/images/Logo-alt2-dark.png";
  const logoSrc = theme === "dark" ? darkLogo : lightLogo;

  return (
    <a className={className} href="/">
      <Image
        src={logoSrc}
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
