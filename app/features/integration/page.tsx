import Header from "@/components/Header";
import Features from "@/components/Sections/Features/Features";
import { Footer } from "@/components/Sections/Footer";
import HowItWorks from "@/components/Sections/HowItWorks/HowItWorks";
import Team from "@/components/Sections/Team/Team";
import Main from "./Components/Main";
import Showcase from "./Components/Showcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <Main />
      <Showcase />
    </div>
  );
}
