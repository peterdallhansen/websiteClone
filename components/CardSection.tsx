import { BarChart3, MapPin, Search } from "lucide-react";
import BlurFade from "./ui/blur-fade";
import { MagicCard } from "./ui/magic-card";

function CardSection() {
  return (
    <div className="container items-center flex flex-col space-y-6 mt-20 lg:mt-40 mb-20 p-4">
      <BlurFade delay={0.25} inView>
        <h4 className="text-sm md:text-lg text-primary text-center">
          Our Mission
        </h4>
      </BlurFade>
      <BlurFade delay={0} inView>
        <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold leading-tight text-primary text-center">
          Redefining Footfall Analytics
        </h2>
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <h2 className="text-lg md:text-1xl xl:text-2xl mb-16 leading-tight text-primary text-center max-w-[750px] text-opacity-60">
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
            <p className="text-primary text-opacity-60 text-base">
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
            <p className="text-primary  text-opacity-60 text-base">
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
            <p className="text-primary text-opacity-60 text-base">
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
