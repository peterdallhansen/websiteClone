import CardSection from "@/components/CardSection";
import Features from "@/components/Sections/Features/Features";
import HowItWorks from "@/components/Sections/HowItWorks/HowItWorks";
import Main from "@/components/Sections/Main";
import NewsletterSection from "@/components/Sections/Newsletter";
import Partners from "@/components/Sections/Partners";
import BlurFade from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden overflow-x-hidden items-center"
      style={{
        transform: "translateY(-80px)",
      }}
    >
      {/** Main Section */}
      <Main />
      <Partners />
      <CardSection />

      {/**Features */}
      <Features />
      {/**How it Works */}
      {/** <HowItWorks /> */}
      <NewsletterSection />
    </div>
  );
}
