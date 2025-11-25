import React from "react";
import { V2Hero } from "@/components/v2/V2Hero";
import { V2FeatureSection } from "@/components/v2/V2FeatureSection";
import { V2Grid } from "@/components/v2/V2Grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zonify V2 - AI-Driven Insights",
  description: "Transform your existing cameras into a strategic asset.",
};

export default function V2Page() {
  return (
    <main className="min-h-screen bg-[#111]">
      <V2Hero
        title="AI-Driven Insights from Every Footstep"
        subtitle="The only AI platform that transforms your existing cameras into a strategic asset - giving shopping centers and retailers unmatched visitor intelligence without new hardware."
        ctaText="See It In Action"
        ctaLink="#features"
      />

      <div id="features">
        <V2FeatureSection
          title="Justify Rents & Minimize Vacancy"
          description="Walk into every negotiation with data. Prove the value of each unit with concrete foot traffic and demographic evidence. Turn foot traffic into financial insights. Visualize visitor journeys, optimize high-value zones, and measure the true impact of every square meter."
          image="/images/1.png"
          orientation="left"
          ctaText="Explore Use Cases"
          ctaLink="/solutions/analytics-hub"
        />

        <V2FeatureSection
          title="Works With Your Existing Cameras"
          description="No new hardware required. We connect to your current IP cameras to deliver advanced analytics without the capex. We transform your existing security feeds into intelligent sensors, deploying across your entire portfolio in days, not months."
          image="/images/6.png"
          orientation="right"
          ctaText="See Integration Options"
          ctaLink="/contact"
        />

        <V2FeatureSection
          title="Know Your Visitors"
          description="Go beyond counting. Segment visitors by age, gender, and dwell time to target marketing and measure campaign impact. 100% GDPR-compliant. We analyze anonymous patterns, not individuals—giving you the data you need without the liability you don't."
          image="/images/25.png"
          orientation="left"
          ctaText="Read Security Whitepaper"
          ctaLink="/security"
        />
      </div>

      <V2Grid
        title="Portfolio Command"
        items={[
          {
            title: "One Dashboard",
            description:
              "From a single asset to a global portfolio. Benchmark performance, standardize operations, and spot network-wide trends from one centralized command center.",
            image: "/images/Reports9.png",
            className: "md:col-span-2",
          },
          {
            title: "Predictive Modeling",
            description:
              "Stop guessing. Use predictive modeling to identify the perfect tenant mix, justify premium lease rates, and forecast asset value with precision.",
            image: "/images/Reports8.png",
            className: "md:col-span-1",
          },
          {
            title: "Privacy First",
            description:
              "Our privacy-by-design approach ensures that you get the insights you need while respecting visitor privacy and adhering to global regulations.",
            image: "/images/1.png",
            className: "md:col-span-3",
          },
        ]}
      />
    </main>
  );
}
