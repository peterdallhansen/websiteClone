import BlurFade from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import Image from "next/image";

const sections: {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    quality: number;
    className?: string;
  };
}[] = [
  {
    title: "See Visitors Like Never Before",
    items: [
      {
        title: "AI-Powered Video Analytics",
        description:
          "Our software transforms standard 2D cameras into intelligent sensors using real-time computer vision, eliminating the need for costly hardware upgrades.",
      },
      {
        title: "Unified Camera Network",
        description:
          "Our solution doesn't just analyze isolated feeds—it connects all your cameras into a unified, real-time view. Gain holistic insights across locations, enabling smarter decisions through a truly global perspective.",
      },
      {
        title: "Plug-and-Play Deployment",
        description:
          "No specialized hardware, no on-site setup. Our software integrates with your existing infrastructure and is installed remotely—getting you up and running with zero disruption.",
      },
    ],
    image: {
      src: "/images/Screenshot 2025-01-29 1728402.png",
      alt: "Dashboard showing visitor analytics",
      width: 800,
      height: 600,
      quality: 100,
      className:
        "rounded-lg overflow-hidden aspect-square object-cover bg-[#f6f6f6]",
    },
  },
  {
    title: "Analytics That Drive Results",
    items: [
      {
        title: "Visitor Behavior Insights",
        description:
          "Gain insights into visitor behavior across your physical space by analyzing movement patterns, dwell times, and interactions with custom-defined engagement zones.",
      },
      {
        title: "Optimised Layouts, operations and promotions",
        description:
          "Refine your layout to streamline visitor flow, align staffing levels to elevate service quality, and directly measure the impact of promotions to determine what works best.",
      },
      {
        title: "Act Faster With Real-Time Intelligence",
        description:
          "Respond quickly to changing conditions on the ground using real-time insights to improve daily operations and the customer experience.",
      },
    ],
    image: {
      src: "/images/download (4).png",
      alt: "Heatmap analytics",
      width: 800,
      height: 600,
      quality: 100,
      className:
        "rounded-lg overflow-hidden aspect-square object-cover  object-right",
    },
  },
  {
    title: "Shape the Future with Data-Driven Insights",
    items: [
      {
        title: "Uncover Evolving Behavior Patterns",
        description:
          "Explore historical data to identify shifts in visitor behavior, track growth trends, and reveal new operational opportunities over time. ",
      },
      {
        title: "Data-Driven Impact Assesment",
        description:
          "Apply statistical analysis to evaluate layout performance, quantify campaign effectiveness, and benchmark timeframes—empowering you to make confident, evidence-based strategic decisions.",
      },
      {
        title: "Forecast Future Needs and Optimize Growth",
        description:
          "Leverage predictive analytics to anticipate visitor flows, market trends, and operational demands—supporting smarter long-term planning.",
      },
    ],
    image: {
      src: "/IP.png",
      alt: "Historic and predictive analytics dashboard",
      width: 800,
      height: 600,
      quality: 100,
      className:
        "rounded-lg overflow-hidden aspect-square object-cover bg-[#f6f6f6]",
    },
  },
];

export default function Info() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-20 gap-32 sm:p-20"
      id="features"
    >
      <section className="flex flex-col gap-32 row-start-2 items-center">
        {sections.map((section, i) => (
          <section key={i} className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              {i % 2 === 1 && (
                <div className="relative flex items-center justify-center">
                  <Image {...section.image} />
                </div>
              )}
              <div className="flex flex-col justify-center space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {section.title}
                </h2>
                <div className="space-y-8">
                  {section.items.map((item, j) => (
                    <div key={j} className="space-y-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-500 dark:text-primary/60">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {i % 2 === 0 && (
                <div className="relative flex items-center justify-center">
                  <Image {...section.image} />
                </div>
              )}
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}
