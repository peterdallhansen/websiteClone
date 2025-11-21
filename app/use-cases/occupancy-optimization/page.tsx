import WIP from "@/components/WIP";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Occupancy Optimization | Zonify.ai",
  description: "Maximize space utilization with AI-driven occupancy insights.",
};

export default function OccupancyOptimizationPage() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <WIP />
    </div>
  );
}
