"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import Partners from "./Sections/Partners";
import { NewsGrid } from "@/app/news/components/news-grid";

const content = [
  {
    title: "Recognize",
    description:
      "Identify opportunities and challenges in your current process",
    image: "/images/1.png",
  },
  {
    title: "Optimize",
    description: "Improve and refine your approach based on insights",
    image: "/images/4.png",
  },
  {
    title: "Validate",
    description: "Test and confirm the effectiveness of your optimizations",
    image: "/images/6.png",
  },
];

function Prove() {
  return (
    <div className="relative min-h-screen w-full flex flex-col py-10">
      {/* Hero Section */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 sm:px-6 ">
        <div className="relative z-10 text-center max-w-5xl mx-auto w-full pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-black mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl font leading-tight text-balance px-4"
          >
            Ready for Enterprise Scale.
          </motion.h1>

          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
          >
            Start with a pilot using your existing cameras. No new hardware, no disruption.
          </motion.p>

          <Link href="/news">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-black bg-transparent px-6 sm:px-6 py-5 sm:py-5 text-sm sm:text-base font-normal text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Learn More
            </Button>
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10 px-4 sm:px-6 pb-12 sm:pb-16 text-center"
        >
          <div className="container mx-auto">
            <NewsGrid max={3} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative z-10 px-4 sm:px-6 pb-12 sm:pb-16 pt-32 text-center"
        >
          <motion.p className="text-sm font-medium tracking-wider text-gray-500 mb-8 ">
            Built for Enterprise Integration
          </motion.p>
          <Partners />
        </motion.div>
      </div>
    </div>
  );
}

export default Prove;
