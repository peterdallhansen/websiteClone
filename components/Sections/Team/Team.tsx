"use client";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  picture: string;
  name: string;
  title: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  previously?: string[];
  job?: string;
}
interface TeamMemberProps {
  picture: string;
  name: string;
  title: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  previously?: string[];
  job?: string;
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
  index: number;
}

const management: TeamMember[] = [
  {
    picture: "/MDH.jpeg",
    name: "Mathias Dall-Hansen",
    title: "CEO",
    phone: "+45 31 18 36 80",
    email: "mdh@zonify.ai",
    linkedin: "https://www.linkedin.com/in/mathias-dall-hansen/",
    previously: [
      "Mathias, an expert in software architecture and computer vision, founded Ivensa Vision ApS, developing footfall analytics software, and led as CEO until 2024.",
    ],
  },
  {
    picture: "/ODH.jpeg",
    name: "Ole Dall-Hansen",
    title: "Executive Chairman",
    phone: "+45 60 10 86 87",
    email: "odh@zonify.ai",
    linkedin: "https://www.linkedin.com/in/ole-dall-hansen-4674622/",
    previously: [
      "Ole has extensive experience in real estate fund management, corporate finance, and business development and has served as a tech co-founder, CFO, and Executive Chairman of Ivensa Vision ApS.",
    ],
  },
];

const board: TeamMember[] = [
  {
    picture: "/SMO.jpg",
    name: "Simon Møller Olsen",
    title: "Retail Data Analytics",
    linkedin: "https://www.linkedin.com/in/simon-m%C3%B8ller-olsen-58090",
    job: "Professional Board Member, Former CEO at Nielsen IQ Denmark",
  },
  {
    picture: "/ADH.jpg",
    name: "Anders Dall-Hansen",
    title: "Data Science",
    linkedin: "https://www.linkedin.com/in/andersdallhansen/",
    job: "Data Scientist - A.P. Møller Maersk",
  },
  {
    picture: "/LLU.jpg",
    name: "Lars Lund",
    title: "Software Integration",
    linkedin: "https://www.linkedin.com/in/larslunddk/",
    job: "Software Architect & Integration - Co-Owner at AlphaPeople",
  },
  {
    picture: "/LA3.jpg",
    name: "Lars Andersen",
    title: "Entrepreneurship",
    linkedin: "https://www.linkedin.com/in/seedcapitallarsandersen/",
    job: "General Partner - SEED Capital",
  },
  {
    picture: "/OWC.jpg",
    name: "Ole Wieth Christensen",
    title: "Airports",
    linkedin: "https://www.linkedin.com/in/ole-wieth-christensen-8418ab1",
    job: "Professional Board Member, Former Director at CPH Airports",
  },
  {
    picture: "/MEB.jpg",
    name: "Mariam El Bacha",
    title: "Cinemas",
    linkedin: "https://www.linkedin.com/in/mariam-el-bacha-60494a19/",
    job: `Territory General Manager, Vue International -
CEO, Cinepax Cinemas -
COO, MBO Cinemas -
COO, CJ CGV`,
  },
  {
    picture: "/MND.jpg",
    name: "Morten Norup Dühr",
    title: "Leisure",
    linkedin:
      "https://www.linkedin.com/in/morten-ring-norup-d%C3%BChr-9ab39055/",
    job: `Professional Board member
CCO, ADmire - Service Provider, Mobility & IT Infrastructure
CEO & Cofounder, Admire Mobility - Managed Service Provider, Mobility & IT Infrastructure
CSO, Comenxa - Software Development`,
  },
  {
    picture: "/TSA.jpeg",
    name: "Tine Skøtt Aggerholm",
    title: "Shopping Centers",
    linkedin: "https://www.linkedin.com/in/tineaggerholm/",
  },
];

const legal: TeamMember[] = [
  {
    picture: "/MWP.jpg",
    name: "Marlene Winther Plas",
    title: "Compliance & IT Law",
    linkedin: "https://www.linkedin.com/in/marlenewintherplas",
    job: "Partner, DLA Piper",
  },
  {
    picture: "/NLG 2.jpg",
    name: "Nicholas Lerche-Gredal",
    title: "Corporate Law & M&A",
    linkedin: "https://www.linkedin.com/in/nicholaslerchegredal",
    job: "Partner, DLA Piper",
  },
];

const developers: TeamMember[] = [
  {
    picture: "/images/PDH.jpeg",
    name: "Peter Dall-Hansen",
    title: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/marlenewintherplas",
  },
];

function TeamMemberCard({
  picture,
  name,
  title,
  phone,
  email,
  linkedin,
  previously,
  job,
}: TeamMemberProps) {
  return (
    <Card className="overflow-hidden w-full h-full">
      <div className="aspect-square overflow-hidden w-full">
        <Image
          src={picture}
          alt={name}
          width={250}
          height={200}
          quality={100}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardContent className="p-3 ">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-xs text-white/60 mb-1">{title}</p>
        {job && <p className="text-xs mb-2">{job}</p>}
        {previously && <p className="text-xs mb-2">{previously.join(" ")}</p>}
        <div className="flex space-x-1 mt-2">
          {phone && (
            <Button variant="outline" size="sm" asChild>
              <a href={`tel:${phone}`} aria-label="Phone">
                <PhoneIcon className="h-3 w-3" />
              </a>
            </Button>
          )}
          {email && (
            <Button variant="outline" size="sm" asChild>
              <a href={`mailto:${email}`} aria-label="Email">
                <MailIcon className="h-3 w-3" />
              </a>
            </Button>
          )}
          {linkedin && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInLogoIcon className="h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, members, index }) => {
  return (
    <section className="space-y-6">
      <BlurFade delay={0.25 + 0.25 * index} inView>
        <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      </BlurFade>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {members.map((member, index) => (
          <BlurFade key={index} delay={0.1 * index} inView>
            <TeamMemberCard {...member} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

const sections = [
  { title: "Management", members: management },
  { title: "Advisory Board", members: board },
  { title: "Legal Advisors", members: legal },
];

export function Team() {
  return (
    <div className="bg-gradient-to-b from-background to-background/80  min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <BlurFade delay={0.25} inView>
            <h4 className="text-sm md:text-lg text-white text-center">
              Meet Our Team
            </h4>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-8 leading-tight text-white">
              The talented individuals behind our success.
            </h2>
          </BlurFade>
        </div>

        <div className="space-y-20">
          {sections.map((section, index) => (
            <TeamSection
              key={index}
              title={section.title}
              members={section.members}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
