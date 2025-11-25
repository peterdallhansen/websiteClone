import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GridItem {
  title: string;
  description: string;
  image?: string;
  className?: string; // Allow custom spans
}

interface V2GridProps {
  title?: string;
  items: GridItem[];
  className?: string;
}

export function V2Grid({ title, items, className }: V2GridProps) {
  return (
    <section className={cn("w-full py-24 bg-[#111] text-white", className)}>
      <div className="container mx-auto px-6 md:px-12">
        {title && (
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-16 tracking-tight text-center">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "relative group overflow-hidden rounded-3xl bg-[#1a1a1a] border border-white/5 p-8 flex flex-col justify-between hover:border-white/10 transition-colors",
                item.className || "md:col-span-1"
              )}
            >
              {item.image && (
                <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                </div>
              )}
              
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl font-serif font-medium mb-3">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
