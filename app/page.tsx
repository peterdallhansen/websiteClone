"use client";
import AnalyticsTeaser from "@/components/Sections/analytics-teaser";
import Hiring from "@/components/Sections/hiring";
import Main from "@/components/Sections/Main";
import FixedScrollLayout from "@/components/Sections/FixedScrollLayout";
import IndustriesCarousel from "@/components/magicui/Sections/IndustriesCarousel";
import Prove from "@/components/prove";
import { FeaturesSection } from "@/components/Sections/Features";
import { ArrowRight } from "lucide-react";
import { NewsGrid } from "./news/components/news-grid";
import Info from "@/components/Sections/Info/page";
import FixedScrollLayout3D from "@/components/Sections/FixedScrollLayout3D";

import { HowItWorks } from "@/components/Sections/HowItWorks";
import Features from "@/components/Sections/Features/Features";
import Infoo from "@/components/Sections/Infoo";
import Section2 from "@/components/Sections/section2";
import UseCases from "@/components/Sections/UseCases";
import WhatYouGet from "@/components/Sections/what-you-get";
import CardSection from "@/components/CardSection";
import GetToKnow from "@/components/GetToKnow";
import GetToKnow2 from "@/components/GetToKnow2";
import PremiumFeatures from "@/components/Sections/PremiumFeatures";
import GetToKnow3 from "@/components/Sections/GetToKnow3";
import MainCentered from "@/components/Sections/MainCentered";


export default function Home() {

  return (
    <main
      className="min-h-screen bg-background antialiased w-full mx-auto flex flex-col items-center transition-colors duration-500"
    >
      {/* All your content remains nested inside the transformed <main> element */}
      {/* <Main /> */}
      <MainCentered/>
      <FeaturesSection />
      <FixedScrollLayout3D disable3D={false} />
      {/* <PremiumFeatures /> */}
      {/* <GetToKnow2 /> */}
      <GetToKnow3 />

      <div className="mx-auto container px-6 py-16 md:px-12 md:py-10">
        <div className="flex flex-row justify-between w-full items-center mb-2">
          <p className="text-2xl font">News</p>
          <a
            href="/news"
            className="inline-flex items-center gap-2 text-primary/80 text-1xl group"
          >
            See all
            <ArrowRight className="w-4 h-4 group-hover:animate-wiggleRight" />
          </a>
        </div>
        <NewsGrid max={3} />
      </div>

      <div className="px-4 w-screen mx-auto flex items-center justify-center">
        <AnalyticsTeaser />
      </div>
      <div className="py-16 md:py-10 w-screen">
        <IndustriesCarousel />
      </div>



      <Prove />
      <Hiring />
    </main>
  );
}