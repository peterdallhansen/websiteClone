import React from "react";
import Link from "next/link";

interface V2HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export function V2Hero({ title, subtitle, ctaText, ctaLink }: V2HeroProps) {
  return (
    <section className="w-full pt-32 pb-24 md:pt-48 md:pb-32 bg-[#111] text-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.1] mb-8 max-w-4xl">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mb-12 leading-relaxed font-light">
          {subtitle}
        </p>
        <Link
          href={ctaLink}
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white hover:bg-neutral-200 transition-colors rounded-full"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
