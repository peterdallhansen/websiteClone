"use client";
import {
  BellIcon,
  LucideArrowDownRight,
  LucideArrowUpRight,
  LucideCalendar,
  LucideChartSpline,
  Share2Icon,
} from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatedBeamDemo } from "./AnimatedBeamDemo";
import { AnimatedListDemo } from "./AnimatedListDemo";
import { BentoCard, BentoGrid } from "./bento-grid";
import Marquee from "./marquee";

const files = [
  {
    name: "Live Visitors",
    body: "BAAN Bodycare saw a 15% increase in footfall between 2 PM and 3 PM.",
  },
  {
    name: "Total Customers",
    body: "COFFEA SENTIO had an average dwell time of 20 minutes today.",
  },
  {
    name: "Total Visitors",
    body: "H&M saw peak activity during 1 PM - 2 PM today.",
  },
  {
    name: "Customer Demographics",
    body: "KOP & KANDE received only 25 visitors from 11 AM to 12 PM.",
  },
  {
    name: "Passby",
    body: "FLYING TIGER had 450 visitors this weekend, a 12% increase from last week.",
  },
];

function RandomFeatureCard({
  file,
  index,
}: {
  file: { name: string; body: string };
  index: number;
}) {
  const [randomNumber, setRandomNumber] = useState<string>("0");
  const [randomPercent, setRandomPercent] = useState<string>("0%");

  useEffect(() => {
    // Generate random values on the client
    setRandomNumber(Number((Math.random() * 4000).toFixed(0)).toLocaleString());
    setRandomPercent(`${Math.random().toFixed(2)}%`);
  }, []);

  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
        "flex flex-col "
      )}
    >
      <h1 className="font-semibold text-md">{file.name}</h1>
      <h4 className="font-semibold text-1xl mb-1">{randomNumber}</h4>
      <div className="flex align-left justify-start gap-1">
        {index % 2 === 0 ? (
          <LucideArrowUpRight
            color="#13DEB9"
            size={24}
            fontSize={20}
            className="bg-[#273835] rounded-full p-1 "
          />
        ) : (
          <LucideArrowDownRight
            color="#FA896B"
            size={24}
            fontSize={20}
            className="bg-[#474443] rounded-full p-1 "
          />
        )}
        <h4 className="text-sm">{randomPercent}</h4>
        <h4 className="font-semibold text-sm">Last period</h4>
      </div>
    </figure>
  );
}

export function BentoDemo() {
  const features = [
    {
      Icon: LucideChartSpline,
      name: "Detailed Analytics",
      description: "Explore Hundreds of Impactful Analytics",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",
      background: (
        <Marquee
          pauseOnHover
          className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] "
        >
          {files.map((file, idx) => (
            <RandomFeatureCard key={idx} file={file} index={idx} />
          ))}
        </Marquee>
      ),
    },
    {
      Icon: BellIcon,
      name: "Notifications",
      description: "Get notified when something happens.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
    {
      Icon: BellIcon,
      name: "Notifications",
      description: "Get notified when something happens.",
      href: "#",
      cta: "Learn more",
      className: "row-span-1 lg:row-span-2",

      background: (
        <div className="absolute flex h-full [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]  w-full flex-col items-center justify-center overflow-hidden rounded-lg   md:shadow-xl">
          <Image
            src={"/images/calendar.png"}
            alt="Drag & Drop Preview"
            width={6374}
            height={3574}
            quality={100}
            className="w-[80%] scale-[2.5] ml-[-90px] sm:ml-[-110px] sm:scale-[2] md:scale-[2] absolute sm:bottom-32 object-contain hover:bottom-36 transition-all"
            style={{
              borderRadius: "15px",
              zIndex: 99999,
            }}
          />
        </div>
      ),
    },
    {
      Icon: Share2Icon,
      name: "Integrations",
      description: "Supports 100+ integrations and counting.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <AnimatedBeamDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },

    {
      Icon: LucideCalendar,
      name: "Calendar",
      description: "Plan, Schedule, and Measure Event Success.",
      className: "col-span-3 lg:col-span-1",
      href: "#",
      cta: "Learn more",
      background: (
        <Calendar
          mode="single"
          selected={new Date(2022, 4, 11, 0, 0, 0)}
          className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
        />
      ),
    },
  ];

  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
