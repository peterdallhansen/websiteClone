"use client";
import CaseStudy from "@/components/CaseStudy/CaseStudy";
import GetToKnow from "@/components/GetToKnow";
import GetToKnow2 from "@/components/GetToKnow2";
import Offerings from "@/components/Offerings";
import AIBITeaser from "@/components/Sections/aibi-teaser";
import AnalyticsTeaser from "@/components/Sections/analytics-teaser";
import BlackSection from "@/components/Sections/black-section";
import CurrentDeployments from "@/components/Sections/current-deployments";
import DeploymentSection from "@/components/Sections/Deployment";
import ExpertiseTabs from "@/components/Sections/ExpertiseTabs";
import { Gallery } from "@/components/Sections/Gallary/Gallary";
import GDPR from "@/components/Sections/GDPR";
import Hiring from "@/components/Sections/hiring";
import Info from "@/components/Sections/Info/page";
import Infoo from "@/components/Sections/Infoo";
import Integrations from "@/components/Sections/Integrations";
import Main from "@/components/Sections/Main";
import MissionStatement from "@/components/Sections/MissionStatement";
import Partners from "@/components/Sections/Partners";
import ProcessSteps from "@/components/Sections/process-tabs";
import ContinuousProcessPage from "@/components/Sections/recognize";
import ThreePoint from "@/components/Sections/three-point";
import UseCases from "@/components/Sections/UseCases";
import WhatYouGet from "@/components/Sections/what-you-get";
import IndustriesCarousel from "@/components/magicui/Sections/IndustriesCarousel";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import WhiteSection from "@/components/white-section";
import Section2 from "@/components/Sections/section2";
import Section2Lihgt from "@/components/Sections/section2-light";
import Prove from "@/components/prove";
import { FeaturesSection } from "@/components/Sections/Features";
import Section2Light from "@/components/Sections/section2-light";
import { ArrowRight } from "lucide-react";
import { NewsGrid } from "./news/components/news-grid";

export default function Home() {
  return (
    <main className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden items-center transition-colors duration-500">
      {/* Main Section with ref */}
      <Main />
      <FeaturesSection />

      <Info />

      <div className="mx-auto container px-6 py-16 md:px-12 md:py-10">
        <div className="flex flex-row justify-between w-full  items-center mb-2">
          <p className="text-2xl font">News</p>
          <a
            href="/news"
            className="inline-flex items-center gap-2 text-2xl group"
          >
            See all
            <ArrowRight className="w-4 h-4 group-hover:animate-wiggleRight" />
          </a>
        </div>
        <NewsGrid max={3} />
      </div>

      <AnalyticsTeaser />
      <div className="py-16  md:py-10 w-screen">
        <IndustriesCarousel />
      </div>

      <Section2Light />

      <Prove />
      <Hiring />

      {/*   <News /> */}
      {/*  <Gallery /> */}
    </main>
  );
}
