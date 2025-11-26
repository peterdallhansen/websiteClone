import { NewsCard } from "./news-card";

const newsArticles = [
  {
    id: 1,
    title:
      "Zonify.ai and Milestone Systems Partner to Define a New Data Standard",
    company: "Milestone",
    date: "July 28, 2025",
    image: "/images/banners/ZonifyXKlepperie.png",
    logos: [
      { text: "zonify.ai", position: "center-left" },
      { text: "MILESTONE SYSTEMS", position: "center-right", bordered: true },
    ],
    overlayText: "BUILDING THE FUTURE OF VIDEO ANALYTICS",
  },
  {
    id: 2,
    title:
      "Zonify.ai Expands Danish Footprint Through Collaboration with NREP Across 13 Shopping Centers",
    company: "Nrep",
    date: "June 26, 2025",
    image: "/images/banners/ZonifyXNrep.png",
    logos: [
      { text: "nexus", position: "center-left" },
      { text: "THE NEW SCHOOL PARSONS", position: "center-right" },
    ],
  },
  {
    id: 3,
    title: "Zonify.ai Reaches Microsoft Founders Hub Level 4",
    company: "Microsoft",
    date: "June 4, 2025",
    image: "/images/banners/ZonifyXMicrosoft.png",

    logos: [
      { text: "nexus", position: "center-left" },
      { text: "AMC NETWORKS", position: "center-right", bordered: true },
    ],
  },
  {
    id: 4,
    title: "Introducing the Gen-4 Image API",
    company: "Nexus",
    date: "May 16, 2025",
    image: "/images/banners/ZonifyXNvidia.jpeg",

    logos: [{ text: "nexus API", position: "center" }],
  },
  {
    id: 5,
    title: "Nexus and Fabula Unveil Production Partnership",
    company: "Nexus",
    date: "April 14, 2025",
    image: "/images/banners/ZonifyXMicrosoft.png",

    logos: [
      { text: "nexus", position: "center-left" },
      { text: "fabula", position: "center-right" },
    ],
  },
  {
    id: 6,
    title:
      "Nexus Inks First-Look Development Deal with Harmony Korine's EDGLRD",
    company: "Nexus",
    date: "April 10, 2025",
    image:
      "https://d3phaj0sisr2ct.cloudfront.net/site/content/images/rw-edgrld-post-card-v1.png",
    logos: [
      { text: "nexus", position: "center-left" },
      { text: "EDGLRD", position: "center-right" },
    ],
  },
  {
    id: 1,
    title:
      "Nexus and IMAX® Partner on Exclusive Presentation of the 2025 AI Film Festival",
    company: "Nexus",
    date: "July 28, 2025",
    image:
      "https://d3phaj0sisr2ct.cloudfront.net/site/content/images/imax-aiff-exp.jpg",
    logos: [
      { text: "AI FILM FESTIVAL", position: "top-left" },
      { text: "Tech.AI", position: "top-center" },
      { text: "nexus", position: "top-right" },
    ],
    overlayText: "EXPERIENCE IT IN IMAX",
  },
  {
    id: 2,
    title: "Parsons School of Design Develops New Course Powered by Nexus",
    company: "Nexus",
    date: "June 26, 2025",
    image:
      "https://d3phaj0sisr2ct.cloudfront.net/site/images/news/parsons-post.jpg",
    logos: [
      { text: "nexus", position: "center-left" },
      { text: "THE NEW SCHOOL PARSONS", position: "center-right" },
    ],
  },
  {
    id: 3,
    title:
      "Nexus Partners with AMC Networks Across Marketing and TV Development",
    company: "Nexus",
    date: "June 4, 2025",
    image:
      "https://d3phaj0sisr2ct.cloudfront.net/site/content/images/amc-post-thumbnail-2.jpg",
    logos: [
      { text: "nexus", position: "center-left" },
      { text: "AMC NETWORKS", position: "center-right", bordered: true },
    ],
  },
  {
    id: 4,
    title: "Introducing the Gen-4 Image API",
    company: "Nexus",
    date: "May 16, 2025",
    image:
      "https://d3phaj0sisr2ct.cloudfront.net/site/content/images/gen4/post-gen4api-card-05.jpg",
    logos: [{ text: "nexus API", position: "center" }],
  },
  {
    id: 5,
    title: "Nexus and Fabula Unveil Production Partnership",
    company: "Nexus",
    date: "April 14, 2025",
    image:
      "https://d3phaj0sisr2ct.cloudfront.net/site/content/images/rw-fabula-post-card-v1.png",
    logos: [
      { text: "nexus", position: "center-left" },
      { text: "fabula", position: "center-right" },
    ],
  },
  {
    id: 6,
    title:
      "Nexus Inks First-Look Development Deal with Harmony Korine's EDGLRD",
    company: "Nexus",
    date: "April 10, 2025",
    image:
      "https://d3phaj0sisr2ct.cloudfront.net/site/content/images/rw-edgrld-post-card-v1.png",
    logos: [
      { text: "nexus", position: "center-left" },
      { text: "EDGLRD", position: "center-right" },
    ],
  },
];

type NewsGridProps = {
  max?: number;
};

export function NewsGrid({ max }: NewsGridProps) {
  return (
    <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
      {newsArticles.slice(0, max || newsArticles.length).map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}
