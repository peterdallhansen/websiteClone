import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurFade from "@/components/ui/blur-fade";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

function Page() {
  const solutions = [
    {
      title: "Analytics Hub",
      href: "/features/demographics",
      description: "Real-time unified insights.",
      longDescription:
        "We develop advanced analytics tools to streamline and support complex business workflows. Together with our clients we help unleash the immense potential for positive impact and transformative value from data analytics.",
      caseExample: "Go to Page",
      image: "/images/Phone3.png",
    },
    {
      title: "Real-Time Dashboard",
      href: "/features/workspaces",
      description: "Instant views for decisions.",
      longDescription:
        "Our real-time dashboards provide immediate visibility into critical metrics, enabling faster and more informed decision-making across your organization.",
      caseExample: "Case example",
      image: "/predict.png",
    },
    {
      title: "Predictive Tools",
      href: "/features/map",
      description: "Accurate trend forecasts.",
      longDescription:
        "We leverage advanced analytics and data science to transform raw data into actionable insights, enabling data-driven decision-making. Our predictive tools uncover hidden patterns and optimize operations.",
      caseExample: "Case example",
      image: "/SG3.png",
    },
    {
      title: "Digital Twin",
      href: "/features/integration",
      description: "Simulate scenarios, optimize outcomes.",
      longDescription:
        "Our digital twin technology creates virtual replicas of physical systems, allowing for scenario testing and optimization without real-world consequences.",
      caseExample: "Case example",
      image: "/AI2.png",
    },
    {
      title: "Predictive Tools",
      href: "/features/map",
      description: "Accurate trend forecasts.",
      longDescription:
        "We leverage advanced analytics and data science to transform raw data into actionable insights, enabling data-driven decision-making. Our predictive tools uncover hidden patterns and optimize operations.",
      caseExample: "Case example",
      image: "/SG3.png",
    },
    {
      title: "Digital Twin",
      href: "/features/integration",
      description: "Simulate scenarios, optimize outcomes.",
      longDescription:
        "Our digital twin technology creates virtual replicas of physical systems, allowing for scenario testing and optimization without real-world consequences.",
      caseExample: "Case example",
      image: "/AI2.png",
    },
  ];
  return (
    <main className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden items-center mt-40 px-2">
      <BlurFade delay={0.25} inView>
        <h4 className="text-sm md:text-lg text-primary text-center">
          Solutions
        </h4>
      </BlurFade>
      <BlurFade delay={0.3} inView>
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-2 leading-tight text-primary">
          Discover solutions designed for your industry needs
        </h2>
      </BlurFade>

      <div className="space-y-32 mt-20 container">
        {solutions.map((solution, index) => (
          <div
            key={solution.title}
            className={`flex flex-col ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-8 lg:gap-16`}
          >
            <div className="lg:w-1/2 space-y-4">
              <BlurFade delay={0.2} inView>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  {solution.title}
                </h2>
              </BlurFade>

              <BlurFade delay={0.3} inView>
                <p className="text-primary/80 max-w-xl">
                  {solution.longDescription}
                </p>
              </BlurFade>

              <BlurFade delay={0.4} inView>
                <a
                  href={solution.href}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <AnimatedShinyText className="inline-flex items-center py-2 transition ease-out text-primary">
                    <span>Go to Page</span>
                    <ChevronRight className="ml-1 size-4" />
                  </AnimatedShinyText>
                </a>
              </BlurFade>
            </div>

            <div className="lg:w-1/2 rounded-lg overflow-hidden">
              <BlurFade delay={0.5} inView>
                <div className="relative aspect-[4/4] w-full">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    fill
                    quality={100}
                    className="object-contain bg-[#f6f6f6]"
                  />
                </div>
              </BlurFade>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Page;
