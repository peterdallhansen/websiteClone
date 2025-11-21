import WIP from "@/components/WIP";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forecasting & Planning | Zonify.ai",
  description: "Predict future trends and plan effectively with AI-powered forecasting.",
};

export default function ForecastingPage() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <WIP />
    </div>
  );
}
