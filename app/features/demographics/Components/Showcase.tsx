import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import BlurFade from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ClockIcon,
  CogIcon,
  GlobeIcon,
  TrendingUpIcon,
  UserIcon,
  BarChart2Icon,
  LayersIcon,
  MapIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  Users,
  Briefcase,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";

function Showcase() {
  const features = [
    {
      id: "audience-insights",
      Icon: UserIcon,
      name: "Audience Insights",
      description: "Understand your visitors with detailed demographic data.",
      href: "#audience-insights",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-1",
      background: <></>,
    },
    {
      id: "geolocation-analytics",
      Icon: GlobeIcon,
      name: "Geolocation Analytics",
      description: "Track visitor origins and map out geographic trends.",
      href: "#geolocation-analytics",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-2",
      background: <></>,
    },
    {
      id: "trend-analysis",
      Icon: TrendingUpIcon,
      name: "Trend Analysis",
      description: "Spot key patterns and changes in visitor behavior.",
      href: "#trend-analysis",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-2",
      background: <></>,
    },
    {
      id: "custom-reporting",
      Icon: CogIcon,
      name: "Custom Reporting",
      description: "Generate reports tailored to your needs and goals.",
      href: "#custom-reporting",
      cta: "Learn more",
      className: "row-span-3 col-span-3 lg:col-span-1",
      background: <></>,
    },
    {
      id: "real-time-monitoring",
      Icon: ClockIcon,
      name: "Real-Time Monitoring",
      description:
        "Get live updates on footfall and demographics as they happen.",
      href: "#real-time-monitoring",
      cta: "Learn more",
      className: "row-span-1 col-span-3 lg:col-span-2",
      background: <></>,
    },
    {
      id: "performance-metrics",
      Icon: BarChart2Icon,
      name: "Performance Metrics",
      description: "Analyze key performance indicators with precision.",
      href: "#performance-metrics",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-4",
      background: <></>,
    },
  ];

  const sections = [
    {
      id: "audience-insights",
      title: "Audience Insights",
      body: `With Audience Insights, you gain a comprehensive understanding of who your visitors are. Dive deep into demographic data, including age, gender, and key behavioral trends. Uncover patterns that help you tailor your strategies and create meaningful connections with your audience. By leveraging these insights, you can optimize your engagement tactics and improve decision-making to drive growth and success. Transform raw visitor data into actionable intelligence to stay ahead of the competition.`,
      cta: "Explore insights",
      href: "#audience-insights",
    },
    {
      id: "geolocation-analytics",
      title: "Geolocation Analytics",
      body: `Understand where your visitors are coming from with Geolocation Analytics. Visualize geographic trends and gain actionable insights into regional footfall patterns. This feature helps you identify key markets, adapt to location-specific demands, and make data-driven decisions that align with your business goals. Leverage detailed maps to target the right audiences and expand your reach effectively.`,
      cta: "Learn more",
      href: "#geolocation-analytics",
    },
    {
      id: "trend-analysis",
      title: "Trend Analysis",
      body: `Stay ahead of the curve with Trend Analysis. Identify emerging patterns in visitor behavior, track changes over time, and pinpoint key areas for improvement. Whether it's footfall peaks, demographic shifts, or seasonal variations, this feature equips you with the insights needed to anticipate audience needs and refine your strategies. Make informed decisions based on real-world data.`,
      cta: "Discover trends",
      href: "#trend-analysis",
    },
    {
      id: "custom-reporting",
      title: "Custom Reporting",
      body: `Generate tailored reports with ease using Custom Reporting. Filter, sort, and analyze data to align with your unique business objectives. Whether you need a quick snapshot or a detailed breakdown, this feature empowers you to present actionable insights in a clear and professional manner. Enhance collaboration and strategic planning with visually compelling and informative reports.`,
      cta: "Generate reports",
      href: "#custom-reporting",
    },
    {
      id: "real-time-monitoring",
      title: "Real-Time Monitoring",
      body: `Experience the power of live updates with Real-Time Monitoring. Stay informed with instant insights into footfall and demographic data as it happens. Monitor key metrics in real time, enabling you to make timely decisions and address challenges proactively. This feature ensures you stay responsive to changes, keeping your strategies dynamic and effective.`,
      cta: "Monitor now",
      href: "#real-time-monitoring",
    },
    {
      id: "performance-metrics",
      title: "Performance Metrics",
      body: `Analyze your business performance with our comprehensive Performance Metrics. Track essential KPIs, monitor growth trends, and gain insights into your operational efficiency. This feature allows you to set benchmarks, measure progress, and make data-driven decisions to enhance your business strategies. Stay informed and stay ahead with detailed performance analytics.`,
      cta: "View metrics",
      href: "#performance-metrics",
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8  pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center ">
        <BlurFade delay={0} inView>
          <h2 className="text-xl md:text-1xl xl:text-2xl leading-tight text-white text-center max-w-[750px] text-opacity-80 mb-20">
            Gain detailed insights into footfall patterns, age groups, gender
            distribution, and demographic trends to understand your audience
            better, enhance engagement strategies, and drive meaningful
            connections for your business growth.
          </h2>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <BentoGrid className="hidden sm:grid">
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </BlurFade>
        <div className="w-full flex flex-row gap-8 pt-40 relative">
          {/* Sidebar */}
          <div
            className="self-start w-[400px] sticky top-40"
            style={{
              position: "sticky",
            }}
          >
            <div className="w-full h-full flex flex-col items-start justify-start text-left ">
              <h2 className="text-xl md:text-xl xl:text-[16px] leading-tight text-white max-w-[750px] mb-4 font-bold inline-flex items-center flex-row justify-center align-center">
                <Users className="mr-2 size-4" />
                Demographics
              </h2>
              {sections.map((section, index) => (
                <div key={index}>
                  <a href="#">
                    <h2 className="text-xl md:text-xl xl:text-[14px] leading-tight text-white text-opacity-40 max-w-[750px] mb-2 font-semibold">
                      {section.title}
                    </h2>
                  </a>
                </div>
              ))}
              <a href="#">
                <h2 className="text-xl md:text-xl xl:text-[16px] leading-tight text-white max-w-[750px] mb-6 font-bold inline-flex items-center flex-row justify-center align-center mt-1">
                  <TrendingUpIcon className="mr-2 size-4" />
                  Insights
                </h2>
              </a>
              <a href="#">
                <h2 className="text-xl md:text-xl xl:text-[16px] leading-tight text-white max-w-[750px] mb-6 font-bold inline-flex items-center flex-row justify-center align-center">
                  <Briefcase className="mr-2 size-4" />
                  Workspaces
                </h2>
              </a>
              <a href="#">
                <h2 className="text-xl md:text-xl xl:text-[16px] leading-tight text-white max-w-[750px] mb-6 font-bold inline-flex items-center flex-row justify-center align-center">
                  <SlidersHorizontal className="mr-2 size-4" />
                  Management
                </h2>
              </a>
            </div>
          </div>

          <div className="flex align-start justify-start flex-col h-full container text-left ">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl md:text-1xl xl:text-4xl leading-tight text-white  max-w-[750px] mb-8 text-left font-bold">
                  {section.title}
                </h2>
                <h2 className="text-xl md:text-1xl xl:text-md leading-tight text-white max-w-[750px] text-opacity-60 mb-8 text-left">
                  {section.body}
                </h2>
                <a href={section.href}>
                  <AnimatedShinyText
                    className="inline-flex items-center justify-center px-4  pl-0 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400  mb-8 "
                    shimmerWidth={200}
                  >
                    <span>{section.cta}</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </a>

                <Image
                  src={"https://startup-template-sage.vercel.app/hero-dark.png"}
                  width={1000}
                  height={400}
                  style={{
                    borderRadius: 15,
                  }}
                  className="mb-20"
                  alt={section.title}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Showcase;
