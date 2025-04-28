"use client";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
  variant?: "light" | "dark";
}

const Logo: React.FC<Props> = ({
  className = "flex items-center space-x-2",
  width = 160,
  height = 40,
  variant,
}) => {
  const lightLogo = "/images/Logo-alt2-light.png";
  const darkLogo = "/images/Logo-alt2-dark.png";

  return (
    <a className={className} href="/">
      {variant === "light" && (
        <Image
          src={lightLogo}
          width={width}
          height={height}
          alt="Zonify Logo Light"
          className="object-contain"
          priority
        />
      )}
      {variant === "dark" && (
        <Image
          src={darkLogo}
          width={width}
          height={height}
          alt="Zonify Logo Dark"
          className="object-contain"
          priority
        />
      )}
      {!variant && (
        <>
          {/* Light logo by default */}
          <Image
            src={lightLogo}
            width={width}
            height={height}
            alt="Zonify Logo Light"
            className="object-contain block dark:hidden"
            priority
          />
          {/* Dark logo */}
          <Image
            src={darkLogo}
            width={width}
            height={height}
            alt="Zonify Logo Dark"
            className="object-contain hidden dark:block"
            priority
          />
        </>
      )}
    </a>
  );
};

export default Logo;
