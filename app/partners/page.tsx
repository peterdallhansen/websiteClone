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
    description: "Leading provider of innovative tech solutions.",
  },
  {
    id: 2,
    name: "NVIDIA",
    logo: "/images/Partners/nvidia-inception-logo2.webp",
    description: "Experts in big data and analytics.",
  },
  {
    id: 3,
    name: "Innofactor",
    logo: "/images/Partners/innofactor_logo_rgb_transparent_large-2.png",
    description: "Premier cloud infrastructure and services.",
  },
  {
    id: 4,
    name: "Magasin",
    logo: "/images/Partners/Magasin2.png",
    description: "Top-tier cybersecurity solutions.",
  },
  {
    id: 5,
    name: "Scandinavian Shopping Center Partners",
    logo: "/images/Partners/SSCP.avif",
    description:
      "Cutting-edge artificial intelligence research and development.",
  },
  {
    id: 6,
    name: "GreenTech",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Sustainable and eco-friendly technology innovations.",
  },
];

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Partners</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-grey rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <div className="w-48 h-36 mb-4 relative">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                layout="fill"
                objectFit="contain"
                className="rounded"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{partner.name}</h2>
            <p className="text-gray-600 text-center">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
