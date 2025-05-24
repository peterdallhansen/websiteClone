import { cn } from "@/lib/utils";
import Image from "next/image";

interface GallaryCardProps {
  title: string;
  label: string;
  gradient?: string; // Made optional
  backgroundImage?: string; // New optional prop for background image
  dark?: boolean;
  href?: string;
}

export function GallaryCard({
  title,
  label,
  gradient,
  backgroundImage,
  dark,
  href,
}: GallaryCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "relative flex flex-col items-center justify-center w-[300px] md:w-[300px] h-[400px] p-6 cursor-pointer",
        "transition-transform hover:scale-[1.02] transition-all duration-500"
      )}
    >
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
      ) : (
        <div className={cn("absolute inset-0 z-0", gradient)} />
      )}
    </a>
  );
}
