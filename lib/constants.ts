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
  Briefcase,
  Clipboard,
  FileText,
  Handshake,
  Laptop,
  Scale,
  Shield,
  User,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  subtitle?: string;
  longDescription?: string;
  icon?: React.ElementType;
  image?: string;
  imageClassName?: string;
  external?: boolean;
  caseExample?: string;
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

export interface NavSection {
  label: string;
  href?: string;
  sublinkGroups: NavGroup[];
}

export const navigation: NavSection[] = [
  {
    label: "Product",
    sublinkGroups: [
      {
        title: "Core Platform",
        links: [
          {
            label: "Analytics Hub",
            href: "/solutions/analytics-hub",
            description: "One Place For Everything That Matters.",
            subtitle: "Your central control panel for spatial intelligence.",
            longDescription:
              "Visualize activity across spaces, manage dashboards, and tailor data views by role or location—all from a single, intuitive hub designed for action and clarity.",
            icon: GalleryVerticalEnd,
            image: "/images/Macbooks.png",
          },
          {
            label: "Predictive Forecasting",
            href: "/solutions/predictive-tools",
            description: "Accurate trend forecasts.",
            subtitle: "Know what’s coming. Act before it happens.",
            longDescription:
              "Use historical data and AI-driven forecasting models to predict foot traffic, crowd flow, and space usage. Plan ahead with confidence—day by day or season by season.",
            icon: ChartArea,
            image: "/images/Predict.png",
          },
          {
            label: "Visitor Journey Tracking",
            href: "/solutions/core", // Mapping to Core for now as it seems related
            description: "Real-time unified insights.",
            subtitle: "Track performance. Spot patterns. Respond faster.",
            longDescription:
              "Transform live video feeds into real-time visitor insights with AI-powered anonymization, demographic profiling, and behavioral tracking. Core delivers GDPR-compliant data, flexible filtering, and benchmarking—all while leveraging your existing infrastructure with a simple, software-only deployment.",
            icon: LucideBarChart2,
            image: "/ab2.png",
          },
          {
            label: "Heatmaps & Dwell-Time",
            href: "/solutions/digital-twin", // Mapping to Digital Twin as it relates to spatial
            description: "Simulate scenarios, optimize outcomes.",
            subtitle: "Test ideas in a risk-free virtual replica.",
            longDescription:
              "Our digital twin technology creates virtual replicas of physical systems, allowing for scenario testing, operational simulations, and layout optimizations without impacting live environments.",
            icon: GlobeIcon,
            image: "/images/3dmap.png",
            imageClassName: "object-fit",
          },
          {
            label: "Reports & Alerts",
            href: "/solutions/ai-powered-bi", // Mapping to AI BI
            description: "Beyond Dashboards. Into Real Context.",
            subtitle: "Ask questions. Get instant, actionable answers.",
            longDescription:
              "Use natural language to query your data and get meaningful answers in real time. Our AI combines language models with your actual business data to go beyond dashboards and deliver real context.",
            icon: Zap,
            image: "/AI2.png",
          },
        ],
      },
      {
        title: "Integrations",
        links: [
          {
            label: "Integrations", // General Integrations link
            href: "/solutions/integration",
            description: "Seamless connectivity with systems.",
            subtitle: "Plug in. Sync data. Get insights fast.",
            longDescription:
              "Connect easily with existing systems, hardware, and third-party tools. Our platform supports legacy migration, real-time data sync, and flexible APIs for effortless integration at scale.",
            icon: Share2,
            image: "/images/Change3.png",
            imageClassName: "object-contain scale-[1.5] md:scale-[1]",
          },
          { label: "Power BI", href: "/integrations/powerbi" },
          { label: "Delta Lake", href: "/integrations/delta-lake" },
          { label: "Excel", href: "/integrations/excel" },
          { label: "OpenAPI", href: "/integrations/openapi" },
        ],
      },
      {
        title: "Deployment Options",
        links: [
          { label: "Cloud Processing", href: "/deployment/cloud" },
          { label: "On-Premises Server", href: "/deployment/onprem" },
        ],
      },
    ],
  },
  {
    label: "Use Cases",
    sublinkGroups: [
      {
        title: "Industries We Serve",
        links: [
          {
            label: "Shopping Centers & Retail",
            href: "/industries/retail",
            description: "Real-time Customer Insights",
            longDescription:
              "Leverage advanced footfall analytics and AI-driven BI to monitor visitor behavior, optimize store layouts, and tailor marketing strategies for increased profitability.",
            caseExample: "Go to Page",
            image: "/images/unsplash/clothes.jpg",
            icon: ShoppingCart,
          },

          {
            label: "Shopping Centers",
            href: "/industries/shopping-centers",
            description: "Instant Operational Views",
            longDescription:
              "Unlock comprehensive shopping center analytics with real-time visitor tracking, tenant performance monitoring, and predictive insights to optimize operations and enhance tenant mix.",
            caseExample: "Case example",
            image: "/images/unsplash/center.jpg",
            icon: Building,
          },
          {
            label: "Leisure",
            href: "/industries/leisure",
            description: "Engage Visitors & Enhance Experiences",
            longDescription:
              "Transform leisure spaces with dynamic analytics that capture real-time crowd behavior, enabling optimized layouts, improved customer service, and more engaging experiences.",
            caseExample: "Case example",
            image:
              "https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            icon: Film,
          },
          {
            label: "Airports",
            href: "/industries/airports",
            description: "Comprehensive Passenger Analytics",
            longDescription:
              "Improve airport operations by tracking real-time passenger flow, predicting congestion points, and streamlining services with AI-powered insights tailored for high-traffic environments.",
            caseExample: "Case example",
            image: "/images/unsplash/plane.jpg",
            icon: PlaneTakeoff,
          },

          {
            label: "Smart Cities",
            href: "/industries/smart-cities",
            description: "Optimized Urban Insights",
            longDescription:
              "Leverage data analytics to enhance urban planning, improve public safety, and optimize resource allocation in smart city initiatives.",
            caseExample: "Case example",
            image: "/images/unsplash/smartcity.jpg",
            icon: Building, // Placeholder icon
          },
          {
            label: "Supermarkets",
            href: "/industries/supermarkets",
            description: "Streamlined In-Store Analytics",
            longDescription:
              "Harness real-time data to analyze shopper behavior, optimize product placements, and manage staffing effectively, ensuring enhanced customer satisfaction and operational efficiency.",
            caseExample: "Case example",
            image: "/images/unsplash/stand.jpg",
            icon: Store,
          },
          // {
          //   label: "Public Transportation",
          //   href: "/industries/public-transportation",
          //   description: "Optimized Transit Insights",
          //   longDescription:
          //     "Empower your transit network with actionable analytics that reveal rider behavior and service performance, enabling optimized scheduling, reduced wait times, and improved overall efficiency.",
          //   caseExample: "Case example",
          //   image: "/images/unsplash/train.jpg",
          //   icon: Train,
          // },
          // {
          //   label: "Events & Venues",
          //   href: "/industries/events-venues",
          //   description: "Dynamic Event Analytics",
          //   longDescription:
          //     "Enhance event management with real-time crowd analytics, enabling optimized layouts, improved safety measures, and enriched attendee experiences through data-driven insights.",
          //   caseExample: "Case example",
          //   image: "/images/unsplash/concert.jpg",
          //   icon: Film, // Placeholder
          // },
        ],
      },
      {
        title: "AI in Action",
        links: [
          {
            label: "Traffic Pattern Recognition",
            href: "/use-cases/traffic-patterns",
          },
          {
            label: "Occupancy Optimization",
            href: "/use-cases/occupancy-optimization",
          },
          {
            label: "Campaign Impact Analysis",
            href: "/use-cases/campaign-impact",
          },
          {
            label: "Layout Performance Evaluation",
            href: "/use-cases/layout-performance",
          },
          {
            label: "Forecasting & Planning",
            href: "/use-cases/forecasting",
          },
        ],
      },
    ],
  },
  {
    label: "Learn",
    sublinkGroups: [
      {
        title: "Resources",
        links: [
          {
            label: "Help Center",
            external: true,
            href: "https://help.zonify.ai",
          },
          {
            label: "Ways to Use Zonify.ai",
            external: true,
            href: "https://help.zonify.ai/ways-to-use",
          },
        ],
      },
      {
        title: "Insights",
        links: [
          { label: "Customer Stories", href: "/learn/customer-stories" },
          { label: "Articles & News", href: "/news" },
          {
            label: "Research",
            href: "/research",
          },
          { label: "Data Security", href: "/learn/data-security" },
        ],
      },
    ],
  },

  {
    label: "Company",
    sublinkGroups: [
      {
        title: "About Zonify.ai",
        links: [
          { label: "Our Story", href: "/about", icon: User },
          { label: "Team", href: "/team", icon: User },
          { label: "Careers", href: "/careers", icon: Briefcase },
          { label: "Partners", href: "/partners", icon: Handshake },
        ],
      },
      {
        title: "Legal & Compliance",
        links: [
          { label: "Privacy Policy", href: "/privacy", icon: Shield },
          { label: "Terms of Service", href: "/terms", icon: Clipboard },
          { label: "GDPR & Data Ethics", href: "/compliance", icon: Scale },
          { label: "Business Terms", href: "/business-terms", icon: FileText },
        ],
      },
    ],
  },
];

// Helper to flatten specific groups for the /solutions page
export const solutions =
  navigation
    .find((section) => section.label === "Product")
    ?.sublinkGroups.find((group) => group.title === "Core Platform")
    ?.links.filter((link) => link.description) // Filter only those with descriptions (main solutions)
    .concat(
      navigation
        .find((section) => section.label === "Product")
        ?.sublinkGroups.find((group) => group.title === "Integrations")
        ?.links.filter((link) => link.description) || []
    ) || [];

// Helper to flatten specific groups for the /industries page
export const industries =
  navigation
    .find((section) => section.label === "Use Cases")
    ?.sublinkGroups.find((group) => group.title === "Industries We Serve")
    ?.links.filter((link) => link.description) || [];

// Export Industries as alias for backward compatibility if needed, or just use industries
export const Industries = industries;
