import { BarChart3, MapPin, Search } from "lucide-react";
import BlurFade from "./ui/blur-fade";
import { MagicCard } from "./ui/magic-card";

function CardSection() {
  return (
    <div className="container items-center flex flex-col  mt-20 lg:mt-40 mb-20 p-4">
      <BlurFade delay={0.25} inView>
        <h4
          className="text-sm md:text-lg text-accent text-center"
          style={{
            textShadow: "0 0 12px rgba(107, 183, 225, 1)",
            backgroundImage:
              "linear-gradient(309deg, rgb(166, 221, 255) 2.25%, rgba(107,183,225,1) 48.08%, rgb(0, 119, 255) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Our Mission
        </h4>
      </BlurFade>
      <BlurFade delay={0} inView>
        <h3 className="lg:text-6xl font-bold mb-2 text-center md:text-5xl text-[26px] sm:text-4xl">
          Redefining Footfall Analytics
        </h3>
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <h2 className="text-lg md:text-1xl xl:text-2xl mb-16 leading-tight text-white text-center max-w-[750px] text-opacity-60">
          Unlock actionable insights into visitor behavior with advanced
          footfall analytics. Understand patterns, optimize operations, and
          create better experiences for your customers.
        </h2>
      </BlurFade>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
        <BlurFade delay={0.25} inView>
          <MagicCard className="flex flex-col items-center text-center p-8">
            <div className="bg-white rounded-lg p-2 w-14 h-14 flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Real-Time Footfall Insights
            </h3>
            <p className="text-white text-opacity-60 text-base">
              Monitor visitor flow and track key metrics in real time. Make
              informed decisions and adapt quickly to changing patterns for
              maximum efficiency.
            </p>
          </MagicCard>
        </BlurFade>
        <BlurFade delay={0.35} inView>
          <MagicCard className="flex flex-col items-center text-center   p-8">
            <div className="bg-white rounded-lg p-2 w-14 h-14 flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Behavior Analysis</h3>
            <p className="text-white  text-opacity-60 text-base">
              Visualize where visitors spend the most time with intuitive
              heatmaps. Identify trends, optimize layouts, and improve customer
              flow.
            </p>
          </MagicCard>
        </BlurFade>
        <BlurFade delay={0.45} inView>
          <MagicCard className="flex flex-col items-center text-center p-8">
            <div className="bg-white rounded-lg p-2 w-14 h-14 flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Comprehensive Analytics
            </h3>
            <p className="text-white text-opacity-60 text-base">
              Dive into detailed analytics to uncover patterns, measure success,
              and track progress over time. Empower your team with data-driven
              strategies.
            </p>
          </MagicCard>
        </BlurFade>
      </div>
    </div>
  );
}

export default CardSection;
