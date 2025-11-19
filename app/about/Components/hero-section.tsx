import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[900px] mt-20 flex items-center justify-center overflow-hidden rounded-2xl">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10" />

      {/* Centered image */}
      <img
        src="https://d3phaj0sisr2ct.cloudfront.net/site/images/About_01-v1.webp"
        alt="Team collaboration"
        className="relative z-0 h-full w-auto object-cover mx-auto"
      />

      {/* Text content */}
      <div className="absolute z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-light text-white mb-8 leading-tight">
          Advancing insights
          <br />
          with artificial intelligence.
        </h1>
        <Link href="#careers">
          <Button
            variant="outline"
            className="bg-white/90 hover:bg-white text-black border-0 rounded-full px-8 py-6 text-base"
          >
            View Careers
          </Button>
        </Link>
      </div>
    </section>
  );
}
