"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { AnimatedList } from "./animated-list";

interface Item {
  name: string;
  description: string;
  icon: string; // Image URL
  time: string;
}

let notifications = [
  {
    name: "Footfall Surge",
    description: "15% increase near BAAN Bodycare from 2-3 PM.",
    time: "15m ago",
    icon: "/icon.png",
  },
  {
    name: "Dwell Time Up",
    description: "COFFEA SENTIO visitors stayed 20 mins on avg today.",
    time: "10m ago",
    icon: "/icon.png",
  },
  {
    name: "New Heatmap",
    description: "H&M saw peak activity from 1-2 PM today.",
    time: "5m ago",
    icon: "/icon.png",
  },
  {
    name: "Low Footfall",
    description: "KOP & KANDE had only 25 visitors from 11 AM - 12 PM.",
    time: "2m ago",
    icon: "/icon.png",
  },
  {
    name: "Sales Opportunity",
    description: "Zone B traffic high—promote DEICHMANN offers.",
    time: "1h ago",
    icon: "/icon.png",
  },
  {
    name: "Peak Hours",
    description: "THE BURGER CONCEPT's busiest time: 6-7 PM.",
    time: "2h ago",
    icon: "/icon.png",
  },
  {
    name: "Weekend Summary",
    description: "FLYING TIGER saw 450 visitors, up 12%.",
    time: "Yesterday",
    icon: "/icon.png",
  },
  {
    name: "Event Boost",
    description: "MO’RICE traffic up 25% during food fest.",
    time: "2 days ago",
    icon: "/icon.png",
  },
  {
    name: "Footfall Surge",
    description: "15% increase near BAAN Bodycare from 2-3 PM.",
    time: "15m ago",
    icon: "/icon.png",
  },
  {
    name: "Dwell Time Up",
    description: "COFFEA SENTIO visitors stayed 20 mins on avg today.",
    time: "10m ago",
    icon: "/icon.png",
  },
  {
    name: "New Heatmap",
    description: "H&M saw peak activity from 1-2 PM today.",
    time: "5m ago",
    icon: "/icon.png",
  },
  {
    name: "Low Footfall",
    description: "KOP & KANDE had only 25 visitors from 11 AM - 12 PM.",
    time: "2m ago",
    icon: "/icon.png",
  },
  {
    name: "Sales Opportunity",
    description: "Zone B traffic high—promote DEICHMANN offers.",
    time: "1h ago",
    icon: "/icon.png",
  },
  {
    name: "Peak Hours",
    description: "THE BURGER CONCEPT's busiest time: 6-7 PM.",
    time: "2h ago",
    icon: "/icon.png",
  },
  {
    name: "Weekend Summary",
    description: "FLYING TIGER saw 450 visitors, up 12%.",
    time: "Yesterday",
    icon: "/icon.png",
  },
  {
    name: "Event Boost",
    description: "MO’RICE traffic up 25% during food fest.",
    time: "2 days ago",
    icon: "/icon.png",
  },
  {
    name: "Footfall Surge",
    description: "15% increase near BAAN Bodycare from 2-3 PM.",
    time: "15m ago",
    icon: "/icon.png",
  },
  {
    name: "Dwell Time Up",
    description: "COFFEA SENTIO visitors stayed 20 mins on avg today.",
    time: "10m ago",
    icon: "/icon.png",
  },
  {
    name: "New Heatmap",
    description: "H&M saw peak activity from 1-2 PM today.",
    time: "5m ago",
    icon: "/icon.png",
  },
  {
    name: "Low Footfall",
    description: "KOP & KANDE had only 25 visitors from 11 AM - 12 PM.",
    time: "2m ago",
    icon: "/icon.png",
  },
  {
    name: "Sales Opportunity",
    description: "Zone B traffic high—promote DEICHMANN offers.",
    time: "1h ago",
    icon: "/icon.png",
  },
  {
    name: "Peak Hours",
    description: "THE BURGER CONCEPT's busiest time: 6-7 PM.",
    time: "2h ago",
    icon: "/icon.png",
  },
  {
    name: "Weekend Summary",
    description: "FLYING TIGER saw 450 visitors, up 12%.",
    time: "Yesterday",
    icon: "/icon.png",
  },
  {
    name: "Event Boost",
    description: "MO’RICE traffic up 25% during food fest.",
    time: "2 days ago",
    icon: "/icon.png",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-white dark:backdrop-blur-md  dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: "#FFF",
          }}
        >
          <Image
            src={icon}
            alt={name}
            width={32}
            height={32}
            className="w-18 h-18 object-contain" // Adjust size as needed
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm text-gray-500 sm:text-lg">{name}</span>
            <span className="mx-1 text-gray-500">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-black/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-transparent md:shadow-xl",
        className
      )}
    >
      <AnimatedList delay={4000} >
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
