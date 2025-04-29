"use client";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  ArrowDownRight,
  ArrowUpRight,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface TeamMember {
  picture: string;
  name: string;
  title: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  description?: string;
  job?: string;
}
interface TeamMemberProps {
  picture: string;
  name: string;
  title: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  description?: string;
  job?: string;
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
  index: number;
}

const management: TeamMember[] = [
  {
    picture: "/images/People/MDH-Blue.png",
    name: "Mathias Dall-Hansen",
    title: "CEO",
    phone: "+45 31 18 36 80",
    email: "mdh@zonify.ai",
    linkedin: "https://www.linkedin.com/in/mathias-dall-hansen/",
    description: `Mathias is the CEO of Zonify.ai, bringing deep expertise in software architecture and computer vision. He founded Ivensa Vision ApS, where he successfully developed and commercialized footfall analytics software, leading the company as CEO until 2024. Throughout his career, Mathias has combined technical excellence with entrepreneurial leadership, driving innovation at the intersection of AI and real-world data applications.`,
  },
  {
    picture: "/images/People/ODH-Blue.png",
    name: "Ole Dall-Hansen",
    title: "Executive Chairman",
    phone: "+45 60 10 86 87",
    email: "odh@zonify.ai",
    linkedin: "https://www.linkedin.com/in/ole-dall-hansen-4674622/",
    description: `Ole is the Executive Chairman of Zonify.ai, bringing over 25 years of experience in real estate fund management, corporate finance, and business development. He has served as a tech co-founder, CFO, and Executive Chairman of Ivensa Vision ApS, specializing in AI-powered retail performance management software. Throughout his career, Ole has held senior positions across equity research, M&A, investment management, private equity, and fund development, with a strong track record in international fundraising, investor relations, and alternative investments such as real estate, wind, and solar power. His background combines deep financial expertise with entrepreneurial leadership and a strong focus on scaling technology-driven businesses.`,
  },
  /*   {
    picture: "/images/People/PDH-Blue2.png",
    name: "Peter Dall-Hansen",
    title: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/marlenewintherplas",
    description: `Peter is a Frontend Developer and Co-Founder at Zonify.ai, contributing to product development, frontend architecture, and brand direction. He specializes in designing and developing user-facing solutions, combining technical skills with a strong focus on user experience and visual identity. Prior to Zonify.ai, Peter gained hands-on experience in customer onboarding and collaborative problem-solving as a student assistant at Ivensa Vision ApS. He holds an STX diploma with a focus on Mathematics A and Physics A from Nærum Gymnasium.`,
    email: "pdh@zonify.ai",
  }, */
];

const board: TeamMember[] = [
  {
    picture: "/images/People/ADH-Blue.png",
    name: "Anders Dall-Hansen",
    title: "Advisor",
    linkedin: "https://www.linkedin.com/in/andersdallhansen/",
    description: `Anders is an advisor at Zonify.ai, bringing deep expertise in statistical modeling, machine learning, and AI with a strong focus on value creation. Anders is a Data Scientist at Halfspace, where he continues to build advanced data solutions. Previously, he spent 3.5 years at A.P. Moller - Maersk within pricing and revenue management data science, developing price-sensitive demand forecasting models, price recommendation systems, and global predictive models of container prices. He has built robust end-to-end data pipelines, primarily using Spark on Databricks. Anders holds both an MSc and BSc in Mathematics and Economics from Copenhagen Business School.`,
  },
  {
    picture: "/images/People/LL-Blue.png",
    name: "Lars Lund",
    title: "Board Member",
    linkedin: "https://www.linkedin.com/in/larslunddk/",
    description: `Lars is a Board Member at Zonify.ai, bringing extensive expertise in software integration and architecture. As Co-Owner and International Technical Project Manager at AlphaPeople, he has played a key role in bridging the gap between software development and commercial strategy. With deep experience in ERP software, international retail, eCommerce, and cross-channel integration, Lars combines technical leadership with a strong focus on delivering business-driven solutions across global markets.`,
  },
  {
    picture: "/images/People/LA-Blue.png",
    name: "Lars Andersen",
    title: "Board Member",
    linkedin: "https://www.linkedin.com/in/seedcapitallarsandersen/",
    description: `Lars is a Board Member at Zonify.ai, bringing extensive experience in entrepreneurship, leadership, and business growth. As a General Partner at SEED Capital, he has helped drive the success of several prominent companies, with key involvements including Endomondo, Trustpilot, Vivino, and Lunar. Earlier in his career, Lars served as CEO of Columbus IT Partners, where he led the company’s international expansion and grew the team from approximately 50 to over 700 employees across multiple countries. His career reflects a strong track record of scaling businesses and building high-performing organizations in the technology and software sectors.`,
  },
  {
    picture: "/images/People/OWC-Blue.png",
    name: "Ole Wieth Christensen",
    title: "Board Member",
    linkedin: "https://www.linkedin.com/in/ole-wieth-christensen-8418ab1",
    description: `Ole is an Advisor and Board Member at Zonify.ai, bringing deep expertise in airport commercial optimization and development. He has held leadership roles across the aviation sector, including Director positions at CPH Airports and Swedavia AB, where he led European sales, business development, and airline route development. Ole also served as a Senior Advisor in aviation at Ramboll, advising on commercial strategies and infrastructure development. With extensive experience in optimizing airport operations and driving commercial growth, Ole brings valuable industry insight to Zonify.ai.`,
  },
];

const legal: TeamMember[] = [
  {
    picture: "/images/People/MWP-Blue.png",
    name: "Marlene Winther Plas",
    title: "Legal Advisor",
    linkedin: "https://www.linkedin.com/in/marlenewintherplas",
    description: `Marlene is the Legal Advisor at Zonify.ai, specializing in compliance, IT law, and data privacy. She is a Partner at DLA Piper and an experienced professional board member, advising Danish and international clients on IT law, outsourcing, data privacy, and GDPR compliance. Marlene brings extensive expertise in contract drafting, negotiation, and regulatory advisory, helping organizations navigate complex legal frameworks while supporting business innovation.`,
  },
];

function TeamMemberCard({
  picture,
  name,
  title,
  phone,
  email,
  linkedin,
  description,
  job,
}: TeamMemberProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className="relative overflow-hidden w-full h-[500px] rounded-2xl flex p-3 flex-col-reverse">
      <Image
        src={picture}
        alt={name}
        fill
        className="object-cover object-center -z-10 rounded-2xl"
        priority
      />

      <div
        className="relative rounded-xl p-4"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
        }}
      >
        {description && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2"
            onClick={toggleExpand}
            asChild
            aria-label={isExpanded ? "Collapse bio" : "Expand bio"}
          >
            <span>
              {isExpanded ? (
                <ArrowDownRight color="#fff" className="h-4 w-4" />
              ) : (
                <ArrowUpRight color="#fff" className="h-4 w-4" />
              )}
            </span>
          </Button>
        )}

        <h3 className="text-lg text-white font-bold">{name}</h3>
        <p className="text-xs text-white font-semibold mb-1">{title}</p>
        {job && <p className="text-xs text-white/80 mb-2">{job}</p>}

        {description && (
          <p
            className={`text-xs text-white/80 mb-2 transition-all text-ellipsis overflow-hidden`}
            style={{
              maxHeight: !isExpanded ? "3rem" : "14rem",
              transition: "max-height 0.5s ease",
              overflow: "clip",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </p>
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
  { title: "", members: [...management, ...board, ...legal] },
  /*   { title: "Advisory Board", members: board },
  { title: "Legal Advisors", members: legal }, */
];

export function Team() {
  return (
    <div className="bg-gradient-to-b from-background to-background/80  min-h-screen">
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
