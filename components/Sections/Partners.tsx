import Image from "next/image";
import BlurFade from "../ui/blur-fade";

function Partners() {
  const companies = [
    {
      name: "Scandinavian Shopping Center Partners",
      logo: "/images/partners/SSCP.avif",
    },
    {
      name: "Danske Shoppingcentre",
      logo: "/images/partners/DSC.jpg",
    },
    {
      logo: "/images/partners/Magasin2.png",
    },
    {
      logo: "/images/partners/DSB.png",
    },
    {
      logo: "/images/partners/aalborg-airport.png",
    },
  ];
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden   md:shadow-xl ">
      <BlurFade inView>
        <h3 className="text-xl opacity-80 mb-8">Trusted by Industry Leaders</h3>
      </BlurFade>
      <div className="flex flex-row items-center justify-center gap-16 px-8 w-full flex-wrap">
        {companies.map((company, index) => (
          <BlurFade
            inView
            delay={index * 0.1 + 0.2}
            key={company.name}
            className="flex items-center justify-center opacity-50 transition-opacity hover:opacity-100 gap-4 group"
          >
            <Image
              src={company.logo}
              height={40}
              width={120}
              alt={`${company.name} logo`}
              className="h-10 w-auto rounded opacity-80 transition-opacity group-hover:opacity-100"
            />
            {company.name && (
              <h6 className="hidden sm:block opacity-80 transition-opacity group-hover:opacity-100 group">
                {company.name}
              </h6>
            )}
          </BlurFade>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default Partners;
