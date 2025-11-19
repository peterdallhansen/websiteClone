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
    image:
      "https://images.ctfassets.net/kftzwdyauwt9/2TIS720GJeviUqZHCA8UIY/7bedb748e29d54cecad9f8e19b63f7b8/API_Refresh_Static_card_Build.png?w=1920&q=90&fm=webp",
  },
  {
    title: "Optimize",
    description: "Improve and refine your approach based on insights",
    image:
      "https://images.ctfassets.net/kftzwdyauwt9/5xvZgaX1W9iY0tH4wWAHgY/05bd1396a79f47941a89818b6b152207/API_Refresh_Static_card_Deploy.png?w=3840&q=90&fm=webp",
  },
  {
    title: "Validate",
    description: "Test and confirm the effectiveness of your optimizations",
    image:
      "https://images.ctfassets.net/kftzwdyauwt9/6Hfl1n3Wraf2TPbl9Iggj5/0da5d80a18aa9c4daa32e40d581f94b7/API_Refresh_Static_card_Optimize.png?w=1920&q=90&fm=webp",
  },
];

function Section2() {
  return (
    <div className="relative min-h-screen bg-black w-full flex flex-col pb-8">
      {/* Hero Section */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-0 sm:py-16 md:py-20 ">
        <div className="relative z-10 text-center max-w-5xl mx-auto w-full pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl font-normal leading-tight text-balance px-4"
          >
            The all-in-one platform for agents
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white  mb-16 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-xl font-normal leading-tight text-balance px-4"
          >
            Build, deploy, and optimize production-ready agents faster with
            pre-built components or from scratch.
          </motion.h5>
          <Link href="/solutions/analytics-hub">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-white bg-transparent px-6 sm:px-6 py-5 sm:py-5 text-sm sm:text-base font-normal text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </Button>
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10 bg-black px-4 sm:px-6 pb-12 sm:pb-16 text-center"
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
                  <div className="relative w-full aspect-[4/4] mb-6 rounded-2xl overflow-hidden bg-white/5">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 flex flex-col items-start text-left">
                    <h3 className="text-white text-2xl font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-base leading-relaxed">
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

export default Section2;
