import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface V2FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  orientation?: "left" | "right";
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

export function V2FeatureSection({
  title,
  description,
  image,
  orientation = "left",
  ctaText,
  ctaLink,
  className,
}: V2FeatureSectionProps) {
  return (
    <section className={cn("w-full py-24 md:py-32 bg-[#111] text-white", className)}>
      <div className="container mx-auto px-6 md:px-12">
        <div
          className={cn(
            "flex flex-col gap-12 md:gap-24 items-center",
            orientation === "right" ? "md:flex-row-reverse" : "md:flex-row"
          )}
        >
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-6 md:gap-8">
            <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight leading-[1.1]">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl font-light">
              {description}
            </p>
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="group inline-flex items-center text-lg font-medium text-white hover:text-neutral-300 transition-colors"
              >
                {ctaText}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-900">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
