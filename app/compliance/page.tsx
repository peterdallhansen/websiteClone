import Info from "./Info";
import Main from "./Main";

export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col pt-20">
      <Main />
      <Info />
      {/*  <Main />
      <Showcase /> */}
    </div>
  );
}
