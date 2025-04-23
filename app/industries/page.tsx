import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurFade from "@/components/ui/blur-fade";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

function Page() {
  const Industries = [
    {
      title: "Retail",
      href: "/industries/retail",
      description: "Real-time Customer Insights",
      longDescription:
        "Leverage advanced footfall analytics and AI-driven BI to monitor visitor behavior, optimize store layouts, and tailor marketing strategies for increased profitability.",
      caseExample: "Go to Page",
      image:
        "https://images.pexels.com/photos/338027/pexels-photo-338027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Malls",
      href: "/industries/malls",
      description: "Instant Operational Views",
      longDescription:
        "Unlock comprehensive mall analytics with real-time visitor tracking, tenant performance monitoring, and predictive insights to optimize operations and enhance tenant mix.",
      caseExample: "Case example",
      image:
        "https://images.pexels.com/photos/2375131/pexels-photo-2375131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Leisure",
      href: "/industries/leisure",
      description: "Engage Visitors & Enhance Experiences",
      longDescription:
        "Transform leisure spaces with dynamic analytics that capture real-time crowd behavior, enabling optimized layouts, improved customer service, and more engaging experiences.",
      caseExample: "Case example",
      image:
        "https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Supermarkets",
      href: "/industries/supermarkets",
      description: "Streamlined In-Store Analytics",
      longDescription:
        "Harness real-time data to analyze shopper behavior, optimize product placements, and manage staffing effectively, ensuring enhanced customer satisfaction and operational efficiency.",
      caseExample: "Case example",
      image:
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Airports",
      href: "/industries/airports",
      description: "Comprehensive Passenger Analytics",
      longDescription:
        "Improve airport operations by tracking real-time passenger flow, predicting congestion points, and streamlining services with AI-powered insights tailored for high-traffic environments.",
      caseExample: "Case example",
      image:
        "https://images.pexels.com/photos/804463/pexels-photo-804463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Public Transportation",
      href: "/industries/public-transportation",
      description: "Optimized Transit Insights",
      longDescription:
        "Empower your transit network with actionable analytics that reveal rider behavior and service performance, enabling optimized scheduling, reduced wait times, and improved overall efficiency.",
      caseExample: "Case example",
      image:
        "https://images.pexels.com/photos/2706436/pexels-photo-2706436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <main className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden items-center mt-40 px-2">
      <BlurFade delay={0.25} inView>
        <h4 className="text-sm md:text-lg text-primary text-center">
          Industries
        </h4>
      </BlurFade>
      <BlurFade delay={0.3} inView>
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-2 leading-tight text-primary">
          Discover Industries designed for your industry needs
        </h2>
      </BlurFade>

      <div className="space-y-32 mt-20 container">
        {Industries.map((solution, index) => (
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
                    className="object-cover bg-[#f6f6f6]"
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
