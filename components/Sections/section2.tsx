"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const content = [
  {
    title: "Cloud Deployment",
    description:
      "Fast, scalable, and maintenance-free. Get started in minutes with our fully managed cloud infrastructure that grows with your needs.",
    image: "/images/cloud.png",
    className: "object-contain p-8",
  },
  {
    title: "On-Premises Deployment",
    description:
      "Maximum control and data sovereignty. Deploy on your own infrastructure with full customization and complete data ownership.",
    image: "/images/OnPremise.png",
  },
  {
    title: "Hybrid Solutions",
    description:
      "Best of both worlds. Combine cloud flexibility with on-premises security for a deployment strategy tailored to your requirements.",
    image: "/images/Hybrid.png",
  },
];

function Section2() {
  return (
    <div className="relative min-h-screen w-full flex flex-col pb-8">
      {/* Hero Section */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-0 sm:py-16 md:py-20 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10  px-4 sm:px-6 pb-12 sm:pb-16 text-center"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <div className="relative w-full aspect-[4/4] mb-6 rounded-2xl overflow-hidden bg-[#EFEFEF]">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className={cn("object-cover", item.className)}
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 flex flex-col items-center text-center">
                    <h3 className="text-primary text-2xl  mb-3">
                      {item.title}
                    </h3>
                    <p className="text-primary/80 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Learn More Button */}
          <div className="mt-12 flex justify-center gap-2">
            <Link href="/deployment/cloud">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-900 rounded-full px-8 py-4"
              >
                Explore Cloud
              </Button>
            </Link>
            <Link href="/deployment/onprem">
              <Button
                size="lg"
                className="bg-white border shadow-none border-primary/20 text-black hover:bg-gray-100 rounded-full px-8 py-4"
              >
                Explore On-Premises
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Section2;
