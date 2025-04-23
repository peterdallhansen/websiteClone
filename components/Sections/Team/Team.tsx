"use client";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ArrowUpRight, MailIcon, PhoneIcon } from "lucide-react";

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
    picture: "/ADH.png",
    name: "Anders Dall-Hansen",
    title: "Data Science",
    linkedin: "https://www.linkedin.com/in/andersdallhansen/",
    job: "Data Scientist - Halfspace.ai",
  },
  {
    picture: "/upscalemedia-transformed.webp",
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
    picture: "/Ole-Wieth-Christensen-scaled.jpg",
    name: "Ole Wieth Christensen",
    title: "Airports",
    linkedin: "https://www.linkedin.com/in/ole-wieth-christensen-8418ab1",
    job: "Professional Board Member, Former Director at CPH Airports",
  },
];

const legal: TeamMember[] = [
  {
    picture: "/MWP3.jpg",
    name: "Marlene Winther Plas",
    title: "Compliance & IT Law",
    linkedin: "https://www.linkedin.com/in/marlenewintherplas",
    job: "Partner, DLA Piper",
  },
];

/* const developers: TeamMember[] = [
  {
    picture: "/images/PDH.jpeg",
    name: "Peter Dall-Hansen",
    title: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/marlenewintherplas",
  },
]; */

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
    <div
      className={`overflow-hidden w-full h-[500px] rounded-2xl flex p-3`}
      style={{
        backgroundImage: `url(${picture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        flexDirection: "column-reverse",
      }}
    >
      <div
        className="rounded-xl p-4"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
        }}
      >
        {linkedin && (
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="absolute top-2 right-2"
          >
            <a href={linkedin} aria-label="More">
              <ArrowUpRight color="#fff" className="h-4 w-4" />
            </a>
          </Button>
        )}

        <h3 className="text-lg text-white font-bold">{name}</h3>
        <p className="text-xs text-white font-semibold mb-1">{title}</p>
        {job && <p className="text-xs text-white/80 mb-2">{job}</p>}
        {previously && (
          <p className="text-xs text-white/80 mb-2">{previously.join(" ")}</p>
        )}
        <div className="flex space-x-1 mt-2">
          {phone && (
            <Button variant="ghost" size="icon" asChild>
              <a href={`tel:${phone}`} aria-label="Phone">
                <PhoneIcon color="#fff" className="h-3 w-3" />
              </a>
            </Button>
          )}
          {email && (
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:${email}`} aria-label="Email">
                <MailIcon color="#fff" className="h-3 w-3" />
              </a>
            </Button>
          )}
          {linkedin && (
            <Button variant="ghost" size="icon" asChild>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInLogoIcon color="#fff" className="h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, members, index }) => {
  return (
    <section className="space-y-6">
      <BlurFade delay={0.25 + 0.1 * index} inView>
        <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      </BlurFade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
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
            <h4 className="text-sm md:text-lg text-primary text-center">
              Our Team
            </h4>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-8 leading-tight text-primary">
              Meet the people behind Zonify.ai
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
