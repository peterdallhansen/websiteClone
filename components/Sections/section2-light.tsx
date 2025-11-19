"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

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
    image: "/images/25.png",
  },
  {
    title: "Validate",
    description: "Test and confirm the effectiveness of your optimizations",
    image: "/images/6.png",
  },
];

function Section2Light() {
  return (
    <div className="relative w-full flex flex-col py-10">
      {/* Hero Section */}
      <div className="relative flex-1 flex flex-col items-center  justify-center px-4 sm:px-6 ">
        <div className="relative z-10 text-center max-w-5xl mx-auto w-full pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-black mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl font-normal leading-tight text-balance px-4"
          >
            The All-in-One Platform to Recognize, Optimize, and Validate
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-black  mb-16 text-2xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-xl font-normal leading-tight text-balance px-4"
          >
            Recognize visitor patterns, optimize operations, and validate
            improvements using real-time analytics that help you make smarter
            decisions, enhance the visitor experience, and drive measurable
            results."
          </motion.h5>
          <Link href="/solutions/analytics-hub">
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
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            {content.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="relative overflow-hidden rounded-2xl w-full"
              >
                {/* Card content */}
                <div className="relative  flex flex-col h-full">
                  {/* Image container */}
                  <div className="relative w-full aspect-[4/4] mb-6 rounded-2xl overflow-hidden bg-black/5">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 flex flex-col items-start text-left">
                    <h3 className="text-black text-2xl font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-black/80 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Section2Light;
