import WIP from "@/components/WIP";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airports - Use Cases | Zonify.ai",
  description: "Optimize airport operations and passenger flow with Zonify.ai's AI-powered analytics.",
};

export default function AirportsPage() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <WIP />
    </div>
  );
}
