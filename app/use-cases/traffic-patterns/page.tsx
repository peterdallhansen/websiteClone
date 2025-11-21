import WIP from "@/components/WIP";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traffic Pattern Recognition | Zonify.ai",
  description: "Understand visitor movement patterns with AI-powered traffic analysis.",
};

export default function TrafficPatternsPage() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <WIP />
    </div>
  );
}
