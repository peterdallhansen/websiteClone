import Image from "next/image";
import Link from "next/link";

interface Logo {
  text: string;
  position: string;
  bordered?: boolean;
}

interface Article {
  id: number;
  title: string;
  company: string;
  date: string;
  image: string;
  logos: Logo[];
  overlayText?: string;
}

export function NewsCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/news/${article.id}`}
      className="group flex flex-col gap-4 transition-opacity hover:opacity-80"
    >
      <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-muted">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center p-8">
          {article.overlayText && (
            <div className="absolute inset-0 flex items-center justify-center"></div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-balance font-sans text-xl font-normal leading-tight text-foreground md:text-2xl">
          {article.title}
        </h2>
        <p className="text-sm text-muted-foreground">
          {article.company} / {article.date}
        </p>
      </div>
    </Link>
  );
}

function getLogoPosition(position: string): string {
  const positions: Record<string, string> = {
    "top-left": "left-8 top-8",
    "top-center": "left-1/2 top-8 -translate-x-1/2",
    "top-right": "right-8 top-8",
    "center-left": "left-8 top-1/2 -translate-y-1/2",
    center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    "center-right": "right-8 top-1/2 -translate-y-1/2",
  };
  return positions[position] || positions.center;
}
