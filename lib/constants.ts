import {
  Building,
  ChartArea,
  Film,
  GalleryVerticalEnd,
  GlobeIcon,
  LucideChartColumn,
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
  icon: React.ElementType;
}[] = [
  {
    title: "Analytics",
    href: "/features/analytics",
    description: "Real-time unified insights.",
    icon: LucideChartColumn,
  },
  {
    title: "Analytics Hub",
    href: "/features/analytics-hub",
    description: "Instant views for decisions.",
    icon: GalleryVerticalEnd,
  },
  {
    title: "Predictive Tools",
    href: "/features/predictive-tools",
    description: "Accurate trend forecasts.",
    icon: ChartArea,
  },
  {
    title: "Digital Twin",
    href: "/features/digital-twin ",
    description: "Simulate scenarios, optimize outcomes.",
    icon: GlobeIcon,
  },
  {
    title: "AI-Powered BI",
    href: "/features/ai-powered-bi",
    description: "Transform data with AI.",
    icon: Zap,
  },
  {
    title: "Effortless Integration",
    href: "/features/integration",
    description: "Seamless connectivity with systems.",
    icon: Share2,
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
