import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import React from "react";

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

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

const TeamMember = ({
  name,
  role,
  description,
  image,
}: {
  name: string;
  role: string;
  description: string;
  image: string;
}) => (
  <div className="flex flex-col items-center space-y-4">
    <div className="rounded-full bg-muted p-1">
      <img
        src={image || "/placeholder.svg"}
        alt={name}
        width={120}
        height={120}
        className="h-30 w-30 rounded-full object-cover"
        style={{ aspectRatio: "120/120", objectFit: "cover" }}
      />
    </div>
    <div className="text-center">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-muted-foreground">{role}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

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
    picture: "/LA.jpg",
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
    picture: "/NLG.jpg",
    name: "Nicholas Lerche-Gredal",
    title: "Corporate Law & M&A",
    linkedin: "https://www.linkedin.com/in/nicholaslerchegredal",
    job: "Partner, DLA Piper",
  },
];

const TeamSection: React.FC<TeamSectionProps> = ({ title, members }) => {
  const calculateGridCols = () => {
    if (members.length === 1) return "grid-cols-1";
    if (members.length === 2) return "grid-cols-2";
    return "md:grid-cols-3 lg:grid-cols-5";
  };

  return (
    <section className="flex flex-col items-center space-y-4">
      <BlurFade delay={0.25} inView>
        <h4 className="text-sm md:text-xl font-bold my-8">{title}</h4>
      </BlurFade>
      <div className={`grid ${calculateGridCols()} justify-center gap-6`}>
        {members.map((member, index) => (
          <div
            key={index}
            className="team-member flex flex-col items-center space-y-4 max-w-[350px]"
          >
            <Image
              src={member.picture}
              width={120}
              height={120}
              alt={member.name}
              className="rounded-full"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-muted-foreground">{member.title}</p>
            <p className="text-sm text-center">
              {member.job || member.previously?.join(" ")}
            </p>
            {member.phone && <p>{member.phone}</p>}
            {member.email && (
              <a href={`mailto:${member.email}`}>{member.email}</a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
          </div>
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

function Team() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-8 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <BlurFade delay={0.25} inView>
                <h4
                  className="text-sm md:text-lg text-accent"
                  style={{
                    textShadow: "0 0 12px rgba(107, 183, 225, 1)",
                    backgroundImage:
                      "linear-gradient(309deg, rgb(166, 221, 255) 2.25%, rgba(107,183,225,1) 48.08%, rgb(0, 119, 255) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Meet The Team
                </h4>
              </BlurFade>
              <BlurFade delay={0.5} inView>
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-8 leading-tight text-white">
                  The talented individuals behind our success.
                </h2>
              </BlurFade>
            </div>

            {/* Team Sections */}
            {sections.map((section, index) => (
              <TeamSection
                key={index}
                title={section.title}
                members={section.members}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Team;
