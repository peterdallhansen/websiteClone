import {
  Building,
  ChartArea,
  Film,
  GalleryVerticalEnd,
  GlobeIcon,
  LucideBarChart2,
  PlaneTakeoff,
  Share2,
  ShoppingCart,
  Store,
  Train,
  Zap,
} from "lucide-react";

export const solutions: {
  title: string;
  href: string;
  description: string;
  subtitle: string;
  longDescription: string;
  icon: React.ElementType;
  image: string;
  imageClassName?: string;
}[] = [
  {
    title: "Zonify Core",
    href: "/solutions/core",
    description: "Real-time unified insights.",
    subtitle: "Track performance. Spot patterns. Respond faster.",
    longDescription:
      "Transform live video feeds into real-time visitor insights with AI-powered anonymization, demographic profiling, and behavioral tracking. Core delivers GDPR-compliant data, flexible filtering, and benchmarking—all while leveraging your existing infrastructure with a simple, software-only deployment.",
    icon: LucideBarChart2,
    image: "/ab2.png",
  },
  {
    title: "Analytics Hub",
    href: "/solutions/analytics-hub",
    description: "One Place For Everything That Matters.",
    subtitle: "Your central control panel for spatial intelligence.",
    longDescription:
      "Visualize activity across spaces, manage dashboards, and tailor data views by role or location—all from a single, intuitive hub designed for action and clarity.",
    icon: GalleryVerticalEnd,
    image: "/images/Macbooks.png",
  },
  {
    title: "Predictive Tools",
    href: "/solutions/predictive-tools",
    description: "Accurate trend forecasts.",
    subtitle: "Know what’s coming. Act before it happens.",
    longDescription:
      "Use historical data and AI-driven forecasting models to predict foot traffic, crowd flow, and space usage. Plan ahead with confidence—day by day or season by season.",
    icon: ChartArea,
    image: "/images/Predict.png",
  },
  {
    title: "Digital Twin",
    href: "/solutions/digital-twin",
    description: "Simulate scenarios, optimize outcomes.",
    subtitle: "Test ideas in a risk-free virtual replica.",
    longDescription:
      "Our digital twin technology creates virtual replicas of physical systems, allowing for scenario testing, operational simulations, and layout optimizations without impacting live environments.",
    icon: GlobeIcon,
    image: "/images/3dmap.png",
    imageClassName: "object-fit",
  },
  {
    title: "AI-Powered BI",
    href: "/solutions/ai-powered-bi",
    description: "Beyond Dashboards. Into Real Context.",
    subtitle: "Ask questions. Get instant, actionable answers.",
    longDescription:
      "Use natural language to query your data and get meaningful answers in real time. Our AI combines language models with your actual business data to go beyond dashboards and deliver real context.",
    icon: Zap,
    image: "/AI2.png",
  },
  {
    title: "Integrations",
    href: "/solutions/integration",
    description: "Seamless connectivity with systems.",
    subtitle: "Plug in. Sync data. Get insights fast.",
    longDescription:
      "Connect easily with existing systems, hardware, and third-party tools. Our platform supports legacy migration, real-time data sync, and flexible APIs for effortless integration at scale.",
    icon: Share2,
    image: "/images/Change3.png",
    imageClassName: "object-contain scale-[1.5] md:scale-[1]",
  },
];

export const industries: {
  title: string;
  href: string;
  description: string;
  icon: React.ElementType;
}[] = [
  {
    title: "Retail",
    href: "/industries/retail",
    description: "Transform retail with advanced analytics.",
    icon: ShoppingCart,
  },
  {
    title: "Malls",
    href: "/industries/malls",
    description: "Optimize malls with data intelligence.",
    icon: Building,
  },
  {
    title: "Leisure",
    href: "/industries/leisure",
    description: "Boost leisure with smart analytics.",
    icon: Film,
  },
  {
    title: "Supermarkets",
    href: "/industries/supermarkets",
    description: "Boost efficiency with in-store insights.",
    icon: Store,
  },
  {
    title: "Airports",
    href: "/industries/airports",
    description: "Streamline airports with predictive analytics.",
    icon: PlaneTakeoff,
  },
  {
    title: "Public Transportation",
    href: "/industries/public-transportation",
    description: "Boost transit with real-time insights.",
    icon: Train,
  },
];

export const Industries = [
  {
    title: "Retail",
    href: "/industries/retail",
    description: "Real-time Customer Insights",
    longDescription:
      "Leverage advanced footfall analytics and AI-driven BI to monitor visitor behavior, optimize store layouts, and tailor marketing strategies for increased profitability.",
    caseExample: "Go to Page",
    image: "/images/unsplash/clothes.jpg",
  },
  {
    title: "Malls",
    href: "/industries/malls",
    description: "Instant Operational Views",
    longDescription:
      "Unlock comprehensive mall analytics with real-time visitor tracking, tenant performance monitoring, and predictive insights to optimize operations and enhance tenant mix.",
    caseExample: "Case example",

    image: "/images/unsplash/center.jpg",
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
    image: "/images/unsplash/stand.jpg",
  },
  {
    title: "Airports",
    href: "/industries/airports",
    description: "Comprehensive Passenger Analytics",
    longDescription:
      "Improve airport operations by tracking real-time passenger flow, predicting congestion points, and streamlining services with AI-powered insights tailored for high-traffic environments.",
    caseExample: "Case example",
    image: "/images/unsplash/plane.jpg",
  },
  {
    title: "Smart Cities",
    href: "/industries/smart-cities",
    description: "Optimized Urban Insights",
    longDescription:
      "Leverage data analytics to enhance urban planning, improve public safety, and optimize resource allocation in smart city initiatives.",
    caseExample: "Case example",
    image: "/images/unsplash/smartcity.jpg",
  },
  {
    title: "Public Transportation",
    href: "/industries/public-transportation",
    description: "Optimized Transit Insights",
    longDescription:
      "Empower your transit network with actionable analytics that reveal rider behavior and service performance, enabling optimized scheduling, reduced wait times, and improved overall efficiency.",
    caseExample: "Case example",
    image: "/images/unsplash/train.jpg",
  },
  {
    title: "Events & Venues",
    href: "/industries/events-venues",
    description: "Dynamic Event Analytics",
    longDescription:
      "Enhance event management with real-time crowd analytics, enabling optimized layouts, improved safety measures, and enriched attendee experiences through data-driven insights.",
    caseExample: "Case example",
    image: "/images/unsplash/concert.jpg",
  },
];
