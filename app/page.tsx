import CardSection from "@/components/CardSection";
import Features from "@/components/Sections/Features/Features";
import { Gallery } from "@/components/Sections/Gallary/Gallary";
import HowItWorks from "@/components/Sections/HowItWorks/HowItWorks";
import Info from "@/components/Sections/Info/page";
import Main from "@/components/Sections/Main";
import NewsletterSection from "@/components/Sections/Newsletter";
import Partners from "@/components/Sections/Partners";

export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden x items-center">
      {/** Main Section */}
      <Main />
      <Info />
      <Gallery />
      {/*   <Partners />
      <CardSection /> */}

      {/*  <Features /> */}

      {/*    <HowItWorks /> */}
      <NewsletterSection />
    </div>
  );
}
