import {
  ArrowRight,
  Map,
  Filter,
  LayoutDashboard,
  CalendarClock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import BlurFade from "../ui/blur-fade";

export default function AnalyticsTeaser() {
  return (
    <section className="my-10 w-screen bg-black  text-white">
      <div className=" mx-auto pl-32">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 w-full lg:min-h-[70svh]">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 space-y-6 h-full my-auto">
            <BlurFade inView delay={0.1}>
              <div className="inline-flex items-center">Analytics Hub</div>
            </BlurFade>
            <BlurFade inView delay={0.2}>
              {" "}
              <h2 className="text-4xl md:text-5xl  ">
                One Place For Everything That Matters.
              </h2>
            </BlurFade>
            <BlurFade inView delay={0.3}>
              <p className="text-lg text-white/80 max-w-xl">
                Gain full control of your space through a centralized analytics
                hub built for real-time clarity and strategic insight. Visualize
                live activity, track trends, and explore spatial usage—all in
                one intuitive interface.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href={"/solutions/analytics-hub"}>
                  <Button
                    size="lg"
                    className="outline rounded-full hover:bg-white hover:text-black "
                  >
                    Explore Analytics Hub{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </BlurFade>
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-2/3 relative overflow-hidden">
            <div className="relative h-full lg:min-h-[70svh]">
              <Image
                src="/images/dashboardPreview.png"
                alt="Zonify analytics dashboard with interactive maps and smart filtering"
                fill
                priority
                className="object-cover object-left-top origin-top-left"
                style={{
                  // Fill width with the left 80% (no distortion), then crop bottom 10%
                  transform: "scale(1.25)", // 1 / 0.8
                  clipPath: "inset(0 0 10% 0)", // hide bottom 10%
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
