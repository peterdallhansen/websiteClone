import Offerings from "@/components/Offerings";
import AIBITeaser from "@/components/Sections/aibi-teaser";
import AnalyticsTeaser from "@/components/Sections/analytics-teaser";
import ExpertiseTabs from "@/components/Sections/ExpertiseTabs";
import { Gallery } from "@/components/Sections/Gallary/Gallary";
import GDPR from "@/components/Sections/GDPR";
import Info from "@/components/Sections/Info/page";
import Infoo from "@/components/Sections/Infoo";
import Integrations from "@/components/Sections/Integrations";
import Main from "@/components/Sections/Main";
import MissionStatement from "@/components/Sections/MissionStatement";
import ContinuousProcessPage from "@/components/Sections/recognize";

export default function Home() {
  return (
    <main className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden items-center transition-colors duration-500">
      {/* Main Section with ref */}
      <Main />
      <Infoo />
      <ExpertiseTabs />
      <GDPR />

      {/*  <Info /> */}

      <AnalyticsTeaser />
      {/* <AIBITeaser /> */}
      <Integrations />
      {/*    <ContinuousProcessPage /> */}
      <Offerings />

      {/*  <CaseStudy /> */}
      <MissionStatement />
      <GDPR />

      {/*   <News /> */}
      <Gallery />
    </main>
  );
}
