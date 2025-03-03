import WIP from "@/components/WIP";
import Showcase from "./Components/Showcase";
import Main from "./Components/Main";

export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col">
      {/*   <WIP /> */}
      <Main />
      <Showcase />
    </div>
  );
}
