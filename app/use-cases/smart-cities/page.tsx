import WIP from "@/components/WIP";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Cities - Use Cases | Zonify.ai",
  description: "Learn how Zonify.ai enables smart city initiatives with advanced spatial analytics.",
};

export default function SmartCitiesPage() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <WIP />
    </div>
  );
}
