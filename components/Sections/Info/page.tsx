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
        title: "Plug-and-Play Deployment",
        description:
          "No specialized hardware, no on-site setup. Our software integrates with your existing infrastructure and is installed remotely—getting you up and running with zero disruption.",
      },
      {
        title: "Unified Camera Network",
        description:
          "Our solution doesn't just analyze isolated feeds—it connects all your cameras into a unified, real-time view. Gain holistic insights across locations, enabling smarter decisions through a truly global perspective.",
      },
    ],
    image: {
      src: "/predict.png",
      alt: "Dashboard showing visitor analytics",
      width: 800,
      height: 600,
      quality: 100,
      className:
        "rounded-lg overflow-hidden aspect-square object-contain bg-[#f6f6f6]",
    },
  },
  {
    title: "Analytics That Drive Results",
    items: [
      {
        title: "Understand Visitor Behavior",
        description:
          "Capture real-time movement, dwell times, and engagement zones to uncover how visitors interact with your spaces throughout the day.",
      },
      {
        title: "Optimize Layouts and Operations",
        description:
          "Use live insights to refine layouts, staffing levels, and promotions—improving visitor flow, service quality, and overall business performance.",
      },
      {
        title: "Act Faster With Real-Time Intelligence",
        description:
          "Respond quickly to changing conditions on the ground with data-driven actions that enhance daily operations and customer experience.",
      },
    ],
    image: {
      src: "/IP.png",
      alt: "Heatmap analytics",
      width: 800,
      height: 600,
      quality: 100,
      className:
        "rounded-lg overflow-hidden aspect-square object-cover bg-[#f6f6f6]",
    },
  },
  {
    title: "Shape Long-Term Success With Predictive Insights",
    items: [
      {
        title: "Discover Long-Term Behavior Trends",
        description:
          "Analyze historical data to uncover behavioral shifts, growth patterns, and operational opportunities that evolve over time.",
      },
      {
        title: "Validate Strategies and Investments",
        description:
          "Compare performance across different layouts, campaigns, and periods to make confident, evidence-based strategic decisions.",
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
