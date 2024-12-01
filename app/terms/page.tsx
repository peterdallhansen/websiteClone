import Header from "@/components/Header";
import { Footer } from "@/components/Sections/Footer";
import Main from "./Components/Main";

export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      <Main />
    </div>
  );
}
