import Image from "next/image";
import BlurFade from "../ui/blur-fade";
import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

function Partners() {
  const companies = [
    {
      name: "Scandinavian Shopping Center Partners",
      logo: "/images/partners/SSCP.avif",
      style: "invert",
    },
    {
      name: "Danske Shoppingcentre",
      logo: "/images/partners/DSC.jpg",
    },
    {
      logo: "/images/partners/Magasin2.png",
      style: "invert",
    },
    {
      logo: "/images/partners/DSB.png",
    },
    {
      logo: "/images/partners/aalborg-airport.png",
    },
    {
      logo: "/images/Partners/microsoft-logo-white-transparent_2166875.png",
      style: "scale-[1.4]",
    },
    {
      logo: "/images/Partners/images (1).png",
      style: "scale-[0.8]",
    },
    {
      logo: "/images/Partners/innofactor_logo_rgb_transparent_large-2.png",
    },
  ];
  return (
    <div className=" min-w-screen   pb-8">
      <Marquee pauseOnHover className="[--duration:20s] gap-16" repeat={8}>
        {companies.map((company, index) => (
          <BlurFade
            inView
            delay={index * 0.1 + 0.2}
            key={company.name}
            className="flex items-center justify-center opacity-50 transition-opacity hover:opacity-100 mx-4 group"
          >
            <Image
              src={company.logo}
              height={40}
              width={120}
              alt={`${company.name} logo`}
              quality={100}
              className={cn(
                "h-10 w-auto rounded opacity-80 transition-opacity group-hover:opacity-100",
                company.style
              )}
            />
            {company.name && false && (
              <h6 className="hidden sm:block opacity-80 transition-opacity group-hover:opacity-100 group">
                {company.name}
              </h6>
            )}
          </BlurFade>
        ))}
      </Marquee>
    </div>
  );
}

export default Partners;
