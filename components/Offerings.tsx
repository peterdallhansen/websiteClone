"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LucideGauge,
  LucideLock,
  LucideRotateCcw,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BlurFade from "./ui/blur-fade";

export default function Offerings() {
  const keyPoints: {
    id: number;
    subtitle: string;
    title: string;
    description: string;
    image: string | React.ReactNode;
    alt: string;
  }[] = [
    {
      id: 1,
      subtitle: "Know what's happening now.",
      title: "Real-Time Visitor Insights",
      description:
        "Track movement, behavior, and engagement across your locations as it happens—with zero delay and full clarity.",
      image: "/ab2.png",
      alt: "Live analytics dashboard with visitor heatmap",
    },

    {
      id: 3,
      subtitle: "Make smarter choices, faster.",
      title: "Predict What Comes Next",
      description:
        "Plan staffing, promotions, and layouts with confidence using powerful forecasting tools built into your analytics.",
      image: "/images/Predict.png",
      alt: "Forecasting trends and future traffic chart",
    },
    {
      id: 4,
      subtitle: "Keep your current setup.",
      title: "No New Hardware Required",
      description:
        "Our software-only platform works with your existing cameras—no need for sensors, rewiring, or expensive installs.",
      image: <LucideGauge className="w-60 h-60 " color="black" />,
      alt: "Camera integration with analytics overlay",
    },
    {
      id: 6,
      subtitle: "Your tools, your data, your way.",
      title: "Seamless Integration",
      description:
        "Connect with your existing systems and sync data instantly—our flexible APIs and plug-ins make it effortless.",
      image: (
        <Image
          src={"/images/Change3.png"}
          alt={"Seamless Integration"}
          fill
          quality={100}
          className="object-cover rounded-lg h-full object-center object-left"
        />
      ),
      alt: "API connectors and data integration icons",
    },
    {
      id: 5,
      subtitle: "Security is non-negotiable.",
      title: "Privacy-First by Design",
      description:
        "We’re fully GDPR-compliant, with no facial recognition and zero personal data collection—only safe, anonymized insights.",
      image: <LucideLock className="w-60 h-60" color="black" />,
      alt: "Secure system illustration with shield icon",
    },

    {
      id: 7,
      subtitle: "See trends and opportunities.",
      title: "Retrospective Analytics",
      description:
        "Access past data, compare performance across time, and understand what’s changing and why—retrospectively and in context.",
      image: <LucideRotateCcw className="w-60 h-60" color="black" />,
      alt: "Timeline view of visitor trends",
    },

    {
      id: 9,
      subtitle: "One place for everything that matters.",
      title: "Analytics Hub",
      description:
        "Access live data, switch between locations, and customize widgets—all from a powerful, intuitive dashboard built for decision-makers.",
      image: "/images/Macbooks.png",
      alt: "Dashboard interface with customizable widgets and real-time data",
    },
    {
      id: 2,
      subtitle: "Let AI do the heavy lifting.",
      title: "Ask Questions, Get Answers",
      description:
        "Our AI-powered BI turns natural language questions into actionable insights—so you get to smarter decisions faster.",
      image: "/AI2.png",
      alt: "AI assistant answering business questions",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const [scrollAmount, setScrollAmount] = useState(500); // Default to 520

  useEffect(() => {
    // Function to update scrollAmount based on window width
    const updateScrollAmount = () => {
      if (window.innerWidth >= 768) {
        // Tailwind's md breakpoint
        setScrollAmount(500);
      } else {
        setScrollAmount(300);
      }
    };

    // Initial check
    updateScrollAmount();

    // Add event listener for window resize
    window.addEventListener("resize", updateScrollAmount);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateScrollAmount);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/*    <div className="relative w-full max-w-screen mx-auto px-4 mb-20 ">
        <div className="flex justify-between items-end mb-12 max-w-[1500px] mx-auto ">
          <div className=" space-y-6">
            <BlurFade delay={0.25} inView>
              <h4 className="text-sm md:text-lg text-primary text-left">
                Offerings
              </h4>
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <h1 className="text-4xl md:text-5xl font-bold">
                Real-time Data.
                <br /> Rugged Reliability.
              </h1>
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <p className="text-primary/80 max-w-3xl">
                Our platform is engineered to handle high volumes of footfall
                data in real time. Built with durable, scalable technology, it
                transforms raw data into{" "}
                <span className="font-bold">actionable insights</span> that
                empower smarter decision-making.
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={0.25} inView>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 rounded-full  hover:animate-wiggleLeft"
                aria-label="Scroll left"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 rounded-full  hover:animate-wiggleRight"
                aria-label="Scroll right"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </BlurFade>
        </div>

        <div
          className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          ref={scrollRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            className="flex gap-5 snap-x snap-mandatory scrollbar-hide"
            style={{ paddingLeft: "calc((100% - 1500px)/2)" }} // Align first card with above text
          >
            {/*   <div className="rounded-lg overflow-hidden min-w-full md:min-w-[485px] space-y-2 snap-start hidden xl:flex"></div> 
            {offerings.map((offering, index) => (
              <div
                key={offering.id}
                className="rounded-lg overflow-hidden min-w-full md:min-w-[500px] space-y-2 snap-end"
              >
                <BlurFade delay={0.25 + index > 4 ? 0 : 0.1 * index} inView>
                  <div className="h-[500px] relative bg-[#f6f6f6] rounded-xl flex items-center justify-center">
                    {typeof offering.image === "string" ? (
                      <Image
                        src={offering.image}
                        alt={offering.alt}
                        fill
                        className="object-cover rounded-lg h-full object-center"
                      />
                    ) : (
                      offering.image
                    )}
                  </div>
                  <div className="p-2">
                    <p className="text-sm text-primary/60 mb-1">
                      {offering.category}
                    </p>
                    <h3 className="text-xl font-semibold  mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-sm text-primary/80">
                      {offering.description}
                    </p>
                  </div>
                </BlurFade>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="relative w-full max-w-screen mx-auto px-4 my-20 ">
        <div className="flex justify-between items-end mb-12 max-w-[1500px] mx-auto ">
          <div className=" space-y-6">
            <BlurFade delay={0.25} inView>
              <h4 className="text-sm md:text-lg text-primary text-left">
                Key Features
              </h4>
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <h1 className="text-4xl md:text-5xl font-bold">
                Everything You Need to <br /> Measure, Understand, and Improve.
              </h1>
            </BlurFade>
            {/*  <BlurFade delay={0.25} inView>
              <p className="text-primary/80 max-w-3xl">
                Our platform is engineered to handle high volumes of footfall
                data in real time. Built with durable, scalable technology, it
                transforms raw data into{" "}
                <span className="font-bold">actionable insights</span> that
                empower smarter decision-making.
              </p>
            </BlurFade> */}
          </div>
          <BlurFade delay={0.25} inView>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 rounded-full  hover:animate-wiggleLeft"
                aria-label="Scroll left"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 rounded-full  hover:animate-wiggleRight"
                aria-label="Scroll right"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </BlurFade>
        </div>

        <div
          className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          ref={scrollRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            className="flex gap-5 snap-x snap-mandatory scrollbar-hide"
            style={{ paddingLeft: "calc((100% - 1500px)/2)" }} // Align first card with above text
          >
            {/*   <div className="rounded-lg overflow-hidden min-w-full md:min-w-[485px] space-y-2 snap-start hidden xl:flex"></div> */}
            {keyPoints.map((offering, index) => (
              <div
                key={offering.id}
                className="rounded-lg overflow-hidden min-w-full md:min-w-[500px] space-y-2 snap-end"
              >
                <BlurFade delay={0.25 + index > 4 ? 0 : 0.1 * index} inView>
                  <div className="h-[500px] relative bg-[#f6f6f6] rounded-xl flex items-center justify-center ">
                    {typeof offering.image === "string" ? (
                      <Image
                        src={offering.image}
                        alt={offering.alt}
                        fill
                        quality={100}
                        className="object-cover rounded-lg h-full object-center"
                      />
                    ) : (
                      offering.image
                    )}
                  </div>
                  <div className="p-2">
                    <p className="text-sm text-primary/60 mb-1">
                      {offering.subtitle}
                    </p>
                    <h3 className="text-xl font-semibold  mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-sm text-primary/80">
                      {offering.description}
                    </p>
                  </div>
                </BlurFade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
