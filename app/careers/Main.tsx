"use client";

import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

export default function Main() {
  return (
    <div className="relative h-screen w-screen overflow-hidden ">
      <img
        src="/images/Image5.jpg"
        className="
          absolute top-1/2 left-1/2
          w-full h-full p-4
          md:max-w-[1900px] md:h-auto md:p-0 md:rounded-xl
          object-cover
          transform -translate-x-1/2 -translate-y-1/2
          pointer-events-none
          rounded-3xl
        "
      />

      <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-6 z-[10] px-4 text-center min-w-[350px]  ">
        <BlurFade delay={0.25} inView>
          <h4 className="text-sm md:text-lg text-white text-center">
            Join Our Team
          </h4>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold  leading-tight text-white text-center  ">
            Be a Part of Something Great
          </h2>
        </BlurFade>
        <BlurFade delay={0.6} inView className="mt-2">
          <a href="mailto:contact@zonify.ai?subject=Contact%20Us&body=Hello%20there!">
            <Button className="rounded-3xl">Contact Us</Button>
          </a>
        </BlurFade>
      </main>
    </div>
  );
}
