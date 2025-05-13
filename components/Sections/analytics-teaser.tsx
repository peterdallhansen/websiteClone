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

export default function AnalyticsTeaser() {
  return (
    <section className="py-20 my-20  w-screen bg-gray-50 ">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center">Analytics Hub</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              One Place For Everything That Matters.
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Gain full control of your space through a centralized analytics
              hub built for real-time clarity and strategic insight. Visualize
              live activity, track trends, and explore spatial usage—all in one
              intuitive interface.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href={"/solutions/analytics-hub"}>
                <Button
                  size="lg"
                  className="bg-foreground rounded-full hover:bg-foreground/80 "
                >
                  Explore Analytics Hub <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-2/3">
            <div className="overflow-hidden">
              <Image
                src="/images/dashboardPreview.png"
                alt="Zonify analytics dashboard with interactive maps and smart filtering"
                width={1000}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
