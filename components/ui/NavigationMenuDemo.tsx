"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Building,
  CalendarIcon,
  ChartArea,
  FileIcon,
  Film,
  GlobeIcon,
  LayersIcon,
  PlaneTakeoff,
  Share2,
  ShoppingCart,
  Store,
  Train,
  UserIcon,
  Zap,
} from "lucide-react";

const components: {
  title: string;
  href: string;
  description: string;
  icon: React.ElementType;
}[] = [
  {
    title: "Analytics Hub",
    href: "/features/demographics",
    description: "Real-time unified insights.",
    icon: UserIcon,
  },
  {
    title: "Real-Time Dashboard",
    href: "/features/workspaces",
    description: "Instant views for decisions.",
    icon: LayersIcon,
  },
  {
    title: "Predictive Tools",
    href: "/features/map",
    description: "Accurate trend forecasts.",
    icon: ChartArea,
  },
  {
    title: "Digital Twin",
    href: "/features/integration",
    description: "Simulate scenarios, optimize outcomes.",
    icon: GlobeIcon,
  },
  {
    title: "AI-Powered BI",
    href: "/features/calendar",
    description: "Transform data with AI.",
    icon: Zap,
  },
  {
    title: "Scalable Integration",
    href: "/features/integration",
    description: "Seamless connectivity with systems.",
    icon: Share2,
  },
];

const caseStudies: {
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

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-white">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-transparent">
              {components.map((component) => (
                <a
                  href={component.href}
                  key={component.title}
                  className={cn(
                    "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none ",
                    "inline-flex items-center gap-2 "
                  )}
                >
                  <component.icon className="size-10 p-2 border rounded-[10px] min-w-[40px] h-[40px] bg-transparent text-current group-hover:bg-primary group-hover:border-primary group-hover:text-background " />

                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    <p className="text-sm font-medium  mt-1 text-primary text-opacity-60 group-hover:text-opacity-100 ">
                      {component.description}
                    </p>
                  </ListItem>
                </a>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Industries
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-transparent">
              {caseStudies.map((component) => (
                <a
                  href={component.href}
                  key={component.title}
                  className={cn(
                    "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none ",
                    "inline-flex items-center gap-2 "
                  )}
                >
                  <component.icon className="size-10 p-2 border rounded-[10px] min-w-[40px] h-[40px] bg-transparent text-current group-hover:bg-white group-hover:border-white group-hover:text-black " />

                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    <p className="text-sm font-medium  mt-1 text-primary text-opacity-60 group-hover:text-opacity-100 ">
                      {component.description}
                    </p>
                  </ListItem>
                </a>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
            >
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a ref={ref} {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
