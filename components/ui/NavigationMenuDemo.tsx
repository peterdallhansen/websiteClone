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
  CalendarIcon,
  FileIcon,
  GlobeIcon,
  LayersIcon,
  Share2,
  UserIcon,
} from "lucide-react";

const components: {
  title: string;
  href: string;
  description: string;
  icon: React.ElementType;
}[] = [
  {
    title: "Demographics",
    href: "/features/demographics",
    description: "User data insights.",
    icon: UserIcon,
  },
  {
    title: "Workspaces",
    href: "/features/workspaces",
    description: "Optimize for productivity",
    icon: LayersIcon,
  },
  {
    title: "3D Map",
    href: "/features/map",
    description: "Interactive mapping.",
    icon: GlobeIcon,
  },
  {
    title: "Calendar",
    href: "/features/calendar",
    description: "Schedule events.",
    icon: CalendarIcon,
  },
  {
    title: "Integration",
    href: "/features/integration",
    description: "Seamless connections.",
    icon: Share2,
  },
  {
    title: "Reporting",
    href: "/features/reporting",
    description: "Automated reporting.",
    icon: FileIcon,
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-white">
            Features
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
                  <component.icon className="size-10 p-2 border rounded-[10px] min-w-[40px] h-[40px] bg-transparent text-current group-hover:bg-white group-hover:border-white group-hover:text-black " />

                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    <p className="text-sm font-medium  mt-1 text-white text-opacity-60 group-hover:text-opacity-100 ">
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
            Case Studies
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
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
