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
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <BlurFade inView delay={0.2}>
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight max-w-5xl mx-auto text-center mb-6 ">
          {threePointContent.heading}
        </h1>
      </BlurFade>

      <div className="relative rounded-2xl overflow-hidden mb-12 min-h-[600px]">
        <BlurFade inView delay={0.3}>
          <VideoComparison
            beforeVideo="/videos/vid2.mp4"
            afterVideo="/videos/vid1.mp4"
            width={2000}
            height={600}
          />
        </BlurFade>
        {/*  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center mt-16">
          <h2 className="text-4xl font-bold mb-1 text-center text-shadow-lg">
            {threePointContent.banner.title}
          </h2>

          <p className="text-lg mb-4 text-shadow-lg">
            {threePointContent.banner.description.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <Link href="#" className="flex items-center">
            <Button variant="link" className="text-white text-lg">
              {threePointContent.banner.linkLabel}
              <ArrowUpRight className="h-3 w-3 ml-1" />
            </Button>
          </Link>
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {threePointContent.cards.map((card, index) => (
          <BlurFade inView delay={0.2 + index * 0.1}>
            <div
              key={index}
              className="flex flex-col items-center text-center justify-center bg-gray-100 rounded-2xl space-y-2 h-[300px] px-4"
            >
              <div className="">
                <card.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">
                {card.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h3>
              <p className="text-sm text-gray-600">
                {card.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <Link
                href="#"
                className="text-sm text-accent group flex items-center"
              >
                {card.linkLabel}{" "}
                <LucideArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:translate-y--0.5" />
              </Link>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
