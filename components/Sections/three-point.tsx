import Image from "next/image";
import Link from "next/link";
import {
  BarChartIcon as ChartBar,
  Users,
  ArrowUpRight,
  LucideRoute,
  LucideArrowRight,
  BarChart4,
  LayoutDashboard,
  TrendingUp,
} from "lucide-react";
import { Button } from "../ui/button";
import VideoComparison from "../video-comparison";
import BlurFade from "../ui/blur-fade";

export default function ThreePoint() {
  const threePointContent = {
    heading: "Make Footfall Analytics a reality.",
    banner: {
      title: "Special insights",
      subtitle: "for retailers.",
      description: "Advanced analytics available\nexclusively at DataTrack.*",
      imageAlt:
        "People in a retail space with footfall analytics visualization",
      linkLabel: "Learn more",
    },
    cards: [
      {
        icon: BarChart4,
        title: "Visitor Behavior Insights",
        description:
          "Gain insights into visitor behavior across your physical space by analyzing movement patterns, dwell times, and interactions with custom-defined engagement zones.",
        linkLabel: "Learn more",
      },
      {
        icon: LayoutDashboard,
        title: "Optimised Layouts,\noperations and promotions",
        description:
          "Refine your layout to streamline visitor flow, align staffing levels to elevate service quality, and directly measure the impact of promotions to determine what works best.",
        linkLabel: "Learn more",
      },
      {
        icon: TrendingUp,
        title: "Act Faster With Real-Time Intelligence",
        description:
          "Respond quickly to changing conditions on the ground using real-time insights to improve daily operations and the customer experience.",
        linkLabel: "Learn more",
      },
    ],
  };

  return (
    <div className=" px-4 pt-40  bg-gray-50 w-screen ">
      <div className="container mx-auto">
        <BlurFade inView delay={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight  mx-auto text-left mb-12 ">
            {threePointContent.heading}
          </h1>
        </BlurFade>

        <div className="relative rounded-2xl overflow-hidden mb-12 min-h-[600px]">
          <BlurFade inView delay={0.3}>
            <VideoComparison img="/images/b.png" width={2000} height={550} />
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
