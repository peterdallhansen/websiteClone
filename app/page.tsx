import { Gallery } from "@/components/Sections/Gallary/Gallary";
import Info from "@/components/Sections/Info/page";
import Main from "@/components/Sections/Main";
import News from "@/components/Sections/News/News";
import NewsletterSection from "@/components/Sections/Newsletter";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden x items-center">
      {/** Main Section */}
      <Main />
      <Info />
      {/* <div className="w-screen h-screen  flex items-center justify-center my-40">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full p-2">
          <img
            src="https://images.ctfassets.net/kftzwdyauwt9/1tsQj0UZKjBylhnwOWbegB/b39246fd3ef28f8936653df0bd00b446/ChatGPT_Search.png?w=640&q=90&fm=webp"
            alt="Image 1"
            className="w-full h-full object-cover rounded"
          />
          <img
            src="https://images.ctfassets.net/kftzwdyauwt9/3XFFOMcLbDkEKU7xRWsxnK/400a4984d0726db6c4601dd3bca8adaf/02_summarize_desktop_dark.png?w=1920&q=80&fm=webp"
            alt="Image 2"
            className="w-full h-full object-cover rounded"
          />
          <img
            src="https://images.ctfassets.net/kftzwdyauwt9/1BwuuaPLJarThH7erMwjki/a80737b9e7fe8de3afb5e42e65c32c60/03_code_desktop_dark.png?w=1920&q=80&fm=webp"
            alt="Image 3"
            className="w-full h-full object-cover rounded"
          />
          <img
            src="https://images.ctfassets.net/kftzwdyauwt9/gd0PuXvEN5eXAzXcfYxCT/d3d0270f2d4faf4154013b7a88e8dff2/04_learn_desktop_dark.png?w=1920&q=80&fm=webp"
            alt="Image 4"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div> */}
      <main className=" flex-col items-center justify-center space-y-6 z-[10] px-4 text-center max-w-[800px] py-40">
        <BlurFade delay={0.25} inView>
          <h4 className="text-sm md:text-lg text-white text-center">
            Mission Statement
          </h4>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold leading-tight text-white text-center">
            We're Aiming For Excellence
          </h2>
        </BlurFade>
        <BlurFade delay={0.6} inView>
          <p className="text-base md:text-lg text-white text-center ">
            Our team is hard at work putting the finishing touches on this
            article. Please bear with us as we ensure it meets our high
            standards of quality and insight.
          </p>
        </BlurFade>
      </main>
      <News />

      <Gallery />

      {/*   <Partners />
      <CardSection /> */}

      {/*  <Features /> */}

      {/*    <HowItWorks /> */}
    </div>
  );
}
