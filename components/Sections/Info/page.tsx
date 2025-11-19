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
          "Transform standard 2D cameras into intelligent sensors using real-time computer vision, and eliminate the need for costly hardware upgrades.",
      },
      {
        title: "Unified Camera Network",
        description:
          "Connect all your cameras into a unified, real-time view. Gain holistic insights across locations and make smarter decisions with a truly global perspective.",
      },
      {
        title: "Plug-and-Play Deployment",
        description:
          "Integrate seamlessly with your existing infrastructure and get started without on-site setup or specialized hardware—ensuring a fast, disruption-free deployment.",
      },
    ],
    image: {
      src: "/images/6.png",
      alt: "Preview",
      width: 800,
      height: 600,
      quality: 100,
      className: "rounded-lg overflow-hidden aspect-square object-cover",
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
      src: "/images/25.png",
      alt: "3D Map",
      width: 800,
      height: 600,
      quality: 100,
      className:
        "rounded-lg overflow-hidden aspect-square object-contain  object-right",
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
      src: "/images/1.png",
      alt: "Preview of mobile analytics hub",
      width: 800,
      height: 600,
      quality: 100,
      className:
        "rounded-lg overflow-hidden aspect-square object-cover object-left ",
    },
  },
];

export default function Info() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center ustify-items-center flex-1 p-2 pb-10 gap-32 sm:p-10 text-primary"
      id="features"
    >
      <section className="flex flex-col gap-32 row-start-2 items-center w-full">
        <h2 className="text-3xl  text-center  sm:text-6xl">
          Our models. All business.
        </h2>
        {sections.map((section, i) => (
          <section key={i} className="w-full px-4 md:px-6 container mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-48 xl:grid-cols-2 items-center">
              {i % 2 === 0 && (
                <div className="relative hidden md:flex items-center justify-start md:-mx-8 md:sm:-mx-16">
                  <Image
                    {...section.image}
                    className={cn(section.image.className, "w-full h-auto")}
                  />
                </div>
              )}
              <div className="flex flex-col justify-center space-y-8">
                <h2 className="text-3xl  text-left  sm:text-5xl">
                  {section.title}
                </h2>
                <div className="space-y-8">
                  {section.items.map((item, j) => (
                    <div key={j} className="space-y-2">
                      <h3 className="text-xl font-semibold  text-left text-primary">
                        {item.title}
                      </h3>
                      <p className="text-primary/80 text-left dark:text-primary/60">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {i % 2 === 1 && (
                <div className="relative  items-center justify-center md:-mx-8 md:sm:-mx-16 hidden md:flex">
                  <Image
                    {...section.image}
                    className={cn(section.image.className, "w-full h-auto")}
                  />
                </div>
              )}
              <div className="relative flex items-center justify-center md:-mx-8 md:sm:-mx-16 md:hidden">
                <Image
                  {...section.image}
                  className={cn(section.image.className, "w-full h-auto")}
                />
              </div>
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}
