"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BlurFade from "../ui/blur-fade";

const faqs = [
  {
    question: "Do I need to install new cameras or hardware?",
    answer:
      "No. Zonify.ai works with your existing camera infrastructure. We integrate directly with most IP camera systems, so you can start getting insights without any new hardware investment.",
  },
  {
    question: "How does the privacy and data protection work?",
    answer:
      "We take privacy seriously. Our AI processes video locally and extracts only anonymized movement data. No facial recognition, no personal identification—just aggregate behavioral patterns and flow analytics.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Most deployments are up and running within days, not weeks. Our cloud-based platform connects to your cameras remotely, and our team handles the setup and calibration.",
  },
  {
    question: "What kind of insights will I get?",
    answer:
      "You'll get real-time foot traffic counts, dwell times, visitor flow patterns, heatmaps, zone analytics, and historical trends. All accessible through our dashboard or via API integration with your existing BI tools.",
  },
  {
    question: "Can I integrate Zonify with my existing systems?",
    answer:
      "Yes. We offer REST APIs, Power BI connectors, and data export options. Your analytics can flow directly into your existing reporting and business intelligence stack.",
  },
  {
    question: "What spaces does Zonify work best for?",
    answer:
      "Zonify is ideal for retail stores, shopping malls, airports, transportation hubs, supermarkets, and any high-traffic space where understanding visitor behavior drives business value.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <BlurFade delay={0} inView>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-primary/60 text-lg">
              Everything you need to know about Zonify.ai
            </p>
          </div>
        </BlurFade>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <BlurFade key={index} delay={0.05 * (index + 1)} inView>
              <div
                className="bg-gray-50 rounded-xl border border-border/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-lg font-medium pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary/40 flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-primary/60 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
