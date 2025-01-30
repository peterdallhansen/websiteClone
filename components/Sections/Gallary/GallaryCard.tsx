import { cn } from "@/lib/utils";

interface GallaryCardProps {
  title: string;
  label: string;
  gradient?: string; // Made optional
  backgroundImage?: string; // New optional prop for background image
  dark?: boolean;
}

export function GallaryCard({
  title,
  label,
  gradient,
  backgroundImage,
  dark,
}: GallaryCardProps) {
  // Determine the background style if a backgroundImage is provided
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <a
      href="/"
      className={cn(
        "relative flex flex-col items-center justify-center w-[300px] md:w-[800px] h-[400px] rounded-2xl p-6 cursor-",
        "transition-transform hover:scale-[1.02] hover:rounded-none transition-all",
        // Apply gradient only if backgroundImage is not provided
        !backgroundImage && gradient
      )}
      style={backgroundImage ? backgroundStyle : {}}
    >
      {/* Label */}
      <span
        className={cn(
          "absolute top-4 left-4 text-sm font-medium ",
          dark ? "text-black/90" : "text-white/90"
        )}
      >
        {label}
      </span>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mt-auto">{title}</h3>
    </a>
  );
}
