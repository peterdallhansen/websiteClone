import Image from "next/image";
import Link from "next/link";
import {
  BarChartIcon as ChartBar,
  Users,
  ArrowUpRight,
  LucideRoute,
} from "lucide-react";
import { Button } from "../ui/button";

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
        icon: ChartBar,
        title: "Track over time,\ninsights-ready.",
        description:
          "When you choose to implement our\nRetail Analytics Monthly Subscription.²",
        linkLabel: "Learn more",
      },
      {
        icon: LucideRoute, // Indicates custom SVG
        title: "Save with\nDataTrack Integration.",
        description:
          "Get credit toward a new plan when you\nupgrade an eligible device.",
        linkLabel: "Learn more",
      },
      {
        icon: Users,
        title: "Get special insights\non CustomerTrack+.",
        description:
          "Save on predictive analytics protection\nand more with subscription pricing on\nCustomerTrack+ for Retail.",
        linkLabel: "Learn more",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight max-w-5xl mx-auto text-center mb-6 ">
        {threePointContent.heading}
      </h1>

      <div className="relative rounded-2xl overflow-hidden mb-12">
        <Image
          src="/images/bg.jpg"
          width={800}
          height={400}
          quality={100}
          alt={threePointContent.banner.imageAlt}
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center mt-16">
          <h2 className="text-4xl font-bold mb-1 text-center">
            {threePointContent.banner.title}
          </h2>

          <p className="text-lg mb-4">
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
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {threePointContent.cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center justify-center bg-gray-100 rounded-2xl space-y-2 h-[300px]"
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
            <Link href="#" className="text-sm text-blue-600 flex items-center">
              {card.linkLabel} <ArrowUpRight className="h-3 w-3 ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
