import WIP from "@/components/WIP";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaign Impact Analysis | Zonify.ai",
  description: "Measure the real-world impact of marketing campaigns with spatial analytics.",
};

export default function CampaignImpactPage() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <WIP />
    </div>
  );
}
