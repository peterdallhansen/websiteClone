import MissionStatement from "@/components/Sections/MissionStatement";
import { Team } from "@/components/Sections/Team/Team";
import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden items-center mt-40">
      <div className="text-center mb-16">
        <BlurFade delay={0.25} inView>
          <h4 className="text-sm md:text-lg text-primary text-center">
            About Us
          </h4>
        </BlurFade>
        <BlurFade delay={0.3} inView>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-2 leading-tight text-primary">
            About Zonify.ai
          </h2>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <p>
            Committed to delivering actionable insights that drive measurable
          </p>
        </BlurFade>
      </div>
      <BlurFade delay={0.6} inView>
        <Image
          src="https://images.pexels.com/photos/3184393/pexels-photo-3184393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Hero image"
          width={1500}
          height={1500}
          className="rounded-xl"
        />
      </BlurFade>
      <section className=" py-12 md:py-24 mt-10 ">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <BlurFade delay={0.25} inView>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Our Story
              </h2>
            </BlurFade>
            <BlurFade delay={0.35} inView>
              <p className="text-zinc-500 md:text-xl dark:text-zinc-400">
                Founded in 2024, Zonify.ai is a Danish scale-up dedicated to
                performance management and business transparency in the built
                environment. Founded by a team of devoted tech entrepreneurs, we
                empower organizations to make data-driven decisions and validate
                outcomes through smart analytics.
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={0.25} inView>
            <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="https://images.pexels.com/photos/3184393/pexels-photo-3184393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Moderne office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">The Beginning</h3>
                      <p className="text-zinc-500 dark:text-zinc-400">
                        What started as a small team of passionate designers and
                        developers has grown into a global company with offices
                        in major cities around the world.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Growth & Evolution</h3>
                      <p className="text-zinc-500 dark:text-zinc-400">
                        Over the years, we've expanded our services and
                        expertise, always staying true to our core values of
                        innovation, quality, and client satisfaction.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Today</h3>
                      <p className="text-zinc-500 dark:text-zinc-400">
                        Today, Zonify.ai is recognized as a leader in the
                        industry, known for our forward-thinking approach and
                        commitment to excellence.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <MissionStatement />

      <Team />
    </main>
  );
}
