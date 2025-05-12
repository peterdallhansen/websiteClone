"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRightCircle,
  Search,
  Settings,
  CheckCircle,
  RotateCcw,
  RotateCw,
  LucideSearch,
  LucideSettings,
  LucideCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContinuousProcessPage() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      name: "Recognize",
      description:
        "Identify opportunities and challenges in your current process",
      icon: LucideSearch,
      color: "bg-blue-500",
    },
    {
      name: "Optimize",
      description: "Improve and refine your approach based on insights",
      icon: LucideSettings,
      color: "bg-green-500",
    },
    {
      name: "Validate",
      description: "Test and confirm the effectiveness of your optimizations",
      icon: LucideCheck,
      color: "bg-purple-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="p-16 rounded-2xl container  my-20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Continuous Improvement Process
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Our methodology focuses on a perpetual cycle of improvement
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className={`transition-all duration-500 bg-gray-50 ${
                    activeStep === index ? " shadow-lg" : "opacity-70"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="text-xl font-bold">{step.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
              {/* Outer circle */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-gray-200 dark:border-gray-700" />

              {/* Process steps on the circle */}
              {steps.map((step, index) => {
                const angle = (index * 360) / steps.length;
                const isActive = activeStep === index;

                return (
                  <motion.div
                    key={index}
                    className={`absolute w-16 h-16 rounded-full flex items-center justify-center bg-black text-white shadow-lg z-10
                      ${isActive ? "scale-110 " : "scale-100 opacity-80"}`}
                    style={{
                      top: `${50 - 42 * Math.cos((angle * Math.PI) / 180)}%`,
                      left: `${50 + 42 * Math.sin((angle * Math.PI) / 180)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{ scale: isActive ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="h-8 w-8" />
                  </motion.div>
                );
              })}

              {/* Center circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <RotateCw className="h-12 w-12 text-gray-400" />
                </motion.div>
              </div>

              {/* Connecting lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="1,3"
                  className="text-gray-400 dark:text-gray-500"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
