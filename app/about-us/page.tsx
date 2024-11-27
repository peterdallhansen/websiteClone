import Header from "@/components/Header";
import { Footer } from "@/components/Sections/Footer";
import { Team } from "@/components/Sections/Team/Team";

export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <Header />
      <Team />
      <Footer />
    </div>
  );
}
