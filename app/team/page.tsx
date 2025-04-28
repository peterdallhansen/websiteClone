import MissionStatement from "@/components/Sections/MissionStatement";
import { Team } from "@/components/Sections/Team/Team";
import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden items-center pt-40">
      <Team />
    </main>
  );
}
