import Header from "@/components/Header";
import Features from "@/components/Sections/Features/Features";
import { Footer } from "@/components/Sections/Footer";
import HowItWorks from "@/components/Sections/HowItWorks/HowItWorks";
import Main from "@/components/Sections/Main";
import Team from "@/components/Sections/Team/Team";

export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden overflow-x-hidden">
      <Header />

      {/** Main Section */}
      <Main />
      {/**Features */}
      <Features />
      {/**How it Works */}
      <HowItWorks />
      {/**Team */}
      <Team />
      <Footer />
    </div>
  );
}
