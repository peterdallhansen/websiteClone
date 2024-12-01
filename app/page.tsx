import CardSection from "@/components/CardSection";
import Header from "@/components/Header";
import Features from "@/components/Sections/Features/Features";
import { Footer } from "@/components/Sections/Footer";
import HowItWorks from "@/components/Sections/HowItWorks/HowItWorks";
import Main from "@/components/Sections/Main";
import Partners from "@/components/Sections/Partners";
import Team from "@/components/Sections/Team/Team";
import { MagicCard } from "@/components/ui/magic-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden overflow-x-hidden items-center">
      {/** Main Section */}
      <Main />
      <Partners />
      <CardSection />

      {/**Features */}
      <Features />
      {/**How it Works */}
      <HowItWorks />
    </div>
  );
}
