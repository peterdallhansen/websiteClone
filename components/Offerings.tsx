"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BlurFade from "./ui/blur-fade";

export default function Offerings() {
  const offerings = [
    {
      id: 1,
      category: "Real-Time Analytics",
      title: "Live Visitor Metrics",
      description:
        "Harness live video feeds and AI to capture real-time demographic and behavioral data.",
      image: "/ab2.png",
      alt: "Predictive Analytics Interface",
    },
    {
      id: 2,
      category: "Predictive Analytics",
      title: "Trend Forecasting",
      description:
        "Leverage predictive analytics to anticipate visitor behavior and optimize staffing, layout, and marketing strategies.",
      image: "/images/Predict.png",
      alt: "Predictive Analytics Interface",
    },
    {
      id: 3,
      category: "Unified Analytics Hub",
      title: "All-in-One Insights",
      description:
        "Consolidated data from multiple sources into a single platform for streamlined, actionable insights.",
      image: "/images/Frame 72.png",
      alt: "Predictive Analytics Interface",
    },
    {
      id: 4,
      category: "System Integration",
      title: "Effortless Integration",
      description:
        "Seamlessly connect with your existing systems to streamline operations and scale effortlessly.",
      image: "/IP.png",
      alt: "Predictive Analytics Interface",
    },
    {
      id: 5,
      category: "Queue Management",
      title: "Smart Queue Management",
      description:
        "Optimize queue times and enhance visitor satisfaction with our intelligent queue management system.",
      image: "/images/Queue2.png",
      alt: "Queue Management Tool Interface",
    },
    {
      id: 6,
      category: "Retrospective Analytics",
      title: "Historic Data Replay",
      description:
        "Access and analyze historical video data to revisit past activity, validate changes, and answer new questions on demand.",
      image: "/images/Replay.png",
      alt: "Historic Data Replay Interface",
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
    <div className="relative w-full max-w-screen mx-auto px-4 mb-20 ">
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
              Our platform is engineered to handle high volumes of footfall data
              in real time. Built with durable, scalable technology, it
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
          {/*   <div className="rounded-lg overflow-hidden min-w-full md:min-w-[485px] space-y-2 snap-start hidden xl:flex"></div> */}
          {offerings.map((offering, index) => (
            <div
              key={offering.id}
              className="rounded-lg overflow-hidden min-w-full md:min-w-[500px] space-y-2 snap-end"
            >
              <BlurFade delay={0.25 + index > 4 ? 0 : 0.1 * index} inView>
                <div className="h-[500px] relative bg-[#f6f6f6] rounded-xl">
                  <Image
                    src={offering.image}
                    alt={offering.alt}
                    fill
                    quality={100}
                    className="object-cover rounded-lg h-full object-center "
                  />
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
    </div>
  );
}
