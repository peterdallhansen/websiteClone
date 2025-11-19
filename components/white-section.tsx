"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

function WhiteSection() {
  return (
    <div className="relative min-h-screen  w-full flex flex-col pb-8">
      {/* Hero Section */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-0 sm:py-16 md:py-20 ">
        <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-black text-base sm:text-lg md:text-xl font-light tracking-wide">
              Zonify.ai <span className="font-semibold">Analytics Hub</span>
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-normal leading-tight text-balance px-4"
          >
            One Place For Everything That Matters.
          </motion.h1>
        </div>
      </div>

      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10  px-4 sm:px-6 pb-12 sm:pb-16 text-center"
      >
        <div className="relative w-full max-w-[1000px] mx-auto mb-8 sm:mb-12 md:mb-16 aspect-video overflow-hidden rounded-lg">
          <video
            src="/videos/Ad2.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <p className="text-black/90 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 font-light text-balance px-4">
          Monitor real-time behavior, analyze historical trends, and make
          smarter decisions—all from a single, intuitive dashboard built for
          decision-makers.
        </p>

        <Link href="/solutions/analytics-hub">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-2 border-white bg-transparent px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-normal text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Learn More
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}

export default WhiteSection;
