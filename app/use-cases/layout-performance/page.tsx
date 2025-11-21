import WIP from "@/components/WIP";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layout Performance Evaluation | Zonify.ai",
  description: "Evaluate and optimize physical layouts with data-driven insights.",
};

export default function LayoutPerformancePage() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <WIP />
    </div>
  );
}
