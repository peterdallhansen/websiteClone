import GetToKnow from "@/components/GetToKnow";
import GetToKnow2 from "@/components/GetToKnow2";
import Offerings from "@/components/Offerings";
import AIBITeaser from "@/components/Sections/aibi-teaser";
import AnalyticsTeaser from "@/components/Sections/analytics-teaser";
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
import WhatYouGet from "@/components/Sections/what-you-get";

export default function Home() {
  return (
    <main className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden items-center transition-colors duration-500">
      {/* Main Section with ref */}
      <Main />
      <GetToKnow />
      {/* <Partners /> */}

      <ThreePoint />

      <GetToKnow2 />
      {/* <Infoo /> */}
      {/*    <WhatYouGet /> */}
      <ExpertiseTabs />
      <GDPR />
      {/*  <Info /> */}

      <AnalyticsTeaser />
      {/* <AIBITeaser /> */}
      <Integrations />
      {/*    <ContinuousProcessPage /> */}
      <DeploymentSection />
      <CurrentDeployments />
      {/* <Offerings /> */}

      {/*  <CaseStudy /> */}
      {/*  <MissionStatement /> */}

      <Hiring />

      {/*   <News /> */}
      <Gallery />
    </main>
  );
}
