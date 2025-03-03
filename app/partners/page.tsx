import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Microsoft",
    logo: "/images/Partners/microsoft+logo+white.png",
    description:
      "Microsoft is a global leader in software, services, devices, and solutions that help people and businesses realize their full potential.",
  },
  {
    id: 2,
    name: "NVIDIA",
    logo: "/images/Partners/NVIDIA.png",
    description:
      "NVIDIA specializes in the design and manufacture of graphics processing units (GPUs) for gaming and professional markets, as well as system on a chip units (SoCs) for the mobile computing and automotive market.",
  },
  {
    id: 3,
    name: "Innofactor",
    logo: "/images/Partners/innofactor_logo_rgb_transparent_large-2.png",
    description:
      "Innofactor provides innovative IT solutions and services, focusing on digital transformation, cloud computing, and enterprise software to help businesses optimize their operations.",
  },
];

export default function PartnersPage() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] pt-20 ">
      <div className="container mx-auto px-4 py-8">
        <BlurFade delay={0.25} inView>
          <h4 className="text-sm md:text-lg text-primary text-center mb-2">
            Our Partners
          </h4>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold leading-tight text-primary text-center mb-8">
            Collaborating with Industry Experts
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="rounded-lg shadow-md p-6 flex flex-col items-center  bg-opacity-10 backdrop-blur-sm"
            >
              <BlurFade inView delay={0.25 + 0.2 * index}>
                <div className="w-64 h-48 mb-4 relative">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded opacity-80 transition-opacity hover:opacity-100"
                  />
                </div>
              </BlurFade>

              {/*   <h3 className="text-xl font-semibold mb-2 text-center text-primary">
                {partner.name}
              </h3> */}
              {/*  <p className="text-gray-300 text-center">{partner.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
