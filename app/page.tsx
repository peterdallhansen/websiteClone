"use client";
import AnalyticsTeaser from "@/components/Sections/analytics-teaser";
import Hiring from "@/components/Sections/hiring";
import IndustriesCarousel from "@/components/magicui/Sections/IndustriesCarousel";
import { ArrowRight } from "lucide-react";
import { NewsGrid } from "./news/components/news-grid";
import FixedScrollLayout3D from "@/components/Sections/FixedScrollLayout3D";
import Section2 from "@/components/Sections/section2";
import GetToKnow2 from "@/components/GetToKnow2";
import Main2 from "@/components/Sections/Main2";
import HowItWorks2 from "@/components/Sections/HowItWorks2";
import FAQ from "@/components/Sections/FAQ";
import Traction from "@/components/Sections/Traction";
import PremiumFeatures from "@/components/Sections/PremiumFeatures";
import ThreePoint from "@/components/Sections/three-point";
import ROIStats from "@/components/Sections/ROIStats";
import ProcessSteps from "@/components/Sections/process-tabs";
import MainCentered from "@/components/Sections/MainCentered";
import { Integration } from "@/components/ui/Integration";
import Infoo from "@/components/Sections/Infoo";
import { HowItWorks } from "@/components/Sections/HowItWorks";
import GetToKnow3 from "@/components/GetToKnow2";
import Features from "@/components/Sections/Features/Features";
import ExpertiseTabs from "@/components/Sections/ExpertiseTabs";
import WhiteSection from "@/components/white-section";
import GetToKnow from "@/components/GetToKnow";
import { FeaturesSection } from "@/components/Sections/Features";
import { GallaryCard } from "@/components/Sections/Gallary/GallaryCard";
import { Gallery } from "@/components/Sections/Gallary/Gallary";
import Info from "./compliance/Info";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <main className="min-h-screen bg-background antialiased w-full mx-auto flex flex-col items-center transition-colors duration-500">
      {/* Hero Section */}
      <Main2 />

      {/* How It Works - 3 step process */}
      {/* <HowItWorks2 /> */}

      {/* Interactive 3D Demo Section */}
      <div className="w-full mx-auto max-w-7xl px-6 md:px-12 mt-20">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-6 text-balance">
          See Your Space Come to Life
        </h2>
        <p className="text-center text-primary/70 max-w-2xl mx-auto text-lg">
          Create a living digital twin of your physical space. Track every
          visitor journey and uncover insights that drive revenue.
        </p>
      </div>
      <FixedScrollLayout3D disable3D={false} />

      <Tools/>

      {/* Benefits by Team Role */}
      {/* <GetToKnow2 /> */}

      {/* Industries Served */}
      {/* <div className="py-16 md:py-20 w-screen">
        <IndustriesCarousel />
      </div> */}

      {/* Deployment Options */}
      {/* <Section2 /> */}

      {/* News Section */}
      <div className="mx-auto container px-6 py-16 md:px-12 md:py-20">
        <div className="flex flex-row justify-between w-full items-center mb-6">
          <p className="text-2xl font-medium">Latest News</p>
          <a
            href="/news"
            className="inline-flex items-center gap-2 text-primary/80 text-base group"
          >
            See all
            <ArrowRight className="w-4 h-4 group-hover:animate-wiggleRight" />
          </a>
        </div>
        <NewsGrid max={3} />
      </div>

      {/* CTA Section */}
      <div className="px-4 w-screen mx-auto flex items-center justify-center">
        <AnalyticsTeaser />
      </div>

      {/* Traction - Production Stats */}
      {/* <Traction /> */}

      {/* FAQ Section */}
      {/* <FAQ /> */}

      {/* Careers */}
      <Hiring />
    </main>
  );
}
