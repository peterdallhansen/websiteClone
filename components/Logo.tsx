"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

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
  const [mounted, setMounted] = useState(false);

  // When mounted, we have access to the client-side theme value.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid rendering until after mounting to prevent hydration mismatch.
  if (!mounted) return null;

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
