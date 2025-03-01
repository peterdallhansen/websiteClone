"use client";
import { ChevronLeftIcon, ChevronRightIcon, Zap } from "lucide-react";
import Image from "next/image";
import BlurFade from "./ui/blur-fade";
import { useEffect, useRef, useState } from "react";

export default function Offerings() {
  const offerings = [
    {
      id: 1,
      category: "Real-Time Analytics",
      title: "Instant Visitor Insights",
      description:
        "Monitor every visitor in real time and convert footfall data into actionable insights that guide your operations.",
      image:
        "https://www.apple.com/v/iphone-16e/b/images/overview/product-stories/design/slide-gallery/ceramic_shield_endframe__e9tcnvwqygqe_xlarge.jpg",
      alt: "Real-Time Analytics Dashboard",
    },
    {
      id: 2,
      category: "Predictive Tools",
      title: "Forecast Future Trends",
      description:
        "Leverage predictive analytics to anticipate visitor behavior and optimize staffing, layout, and marketing strategies.",
      image:
        "https://www.apple.com/v/iphone-16e/b/images/overview/product-stories/design/slide-gallery/face_id_startframe__c8zsh127isgi_xlarge.jpg",
      alt: "Predictive Analytics Interface",
    },
    {
      id: 3,
      category: "AI-Powered BI",
      title: "Insight-Driven Decisions",
      description:
        "Transform complex data into clear, actionable insights with our AI-powered business intelligence platform.",
      image: "/images/Phone3.png",
      alt: "AI-Powered Business Intelligence Dashboard",
    },
    {
      id: 4,
      category: "Scalable Integration",
      title: "Effortless System Connectivity",
      description:
        "Seamlessly integrate with your current systems to unify data streams and streamline your operations for scalable growth.",
      image: "/AI2.png",
      alt: "Scalable Integration",
    },
    {
      id: 5,
      category: "Predictive Tools",
      title: "Forecast Future Trends",
      description:
        "Leverage predictive analytics to anticipate visitor behavior and optimize staffing, layout, and marketing strategies.",
      image: "/IP.png",
      alt: "Predictive Analytics Interface",
    },
    {
      id: 6,
      category: "Predictive Tools",
      title: "Forecast Future Trends",
      description:
        "Leverage predictive analytics to anticipate visitor behavior and optimize staffing, layout, and marketing strategies.",
      image: "/predict.png",
      alt: "Predictive Analytics Interface",
    },
    {
      id: 7,
      category: "Predictive Tools",
      title: "Forecast Future Trends",
      description:
        "Leverage predictive analytics to anticipate visitor behavior and optimize staffing, layout, and marketing strategies.",
      image: "/SG3.png",
      alt: "Predictive Analytics Interface",
    },
    {
      id: 8,
      category: "Predictive Tools",
      title: "Forecast Future Trends",
      description:
        "Leverage predictive analytics to anticipate visitor behavior and optimize staffing, layout, and marketing strategies.",
      image: "/ab2.png",
      alt: "Predictive Analytics Interface",
    },
    {
      id: 9,
      category: "Predictive Tools",
      title: "Forecast Future Trends",
      description:
        "Leverage predictive analytics to anticipate visitor behavior and optimize staffing, layout, and marketing strategies.",
      image: "/BAR.png",
      alt: "Predictive Analytics Interface",
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
