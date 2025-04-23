import React from "react";
import {
  Users,
  Layers,
  Globe,
  Share2,
  File,
  GalleryVerticalEnd,
} from "lucide-react"; // Replace with your icon library

interface Section {
  id: string;
  title: string;
}

interface MenuItem {
  href?: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isCurrent?: boolean;
}

interface SidebarMenuProps {
  sections: Section[];
  activeSection: string;
  currentPath: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  sections,
  activeSection,
  currentPath,
}) => {
  const menuItems: MenuItem[] = [
    { href: "/features/demographics", label: "Demographics", icon: Users },

    {
      href: "/features/workspaces",
      label: "Workspaces",
      icon: GalleryVerticalEnd,
    },
    { href: "/features/map", label: "3D Map", icon: Globe },
    {
      href: "/features/calendar",
      label: "Calendar",
      icon: Users,
    },
    { href: "/features/integration", label: "Integration", icon: Share2 },
    { href: "/features/reporting", label: "Reporting", icon: File },
  ];

  return (
    <div className="w-full h-full flex flex-col items-start justify-start text-left gap-4   ">
      {menuItems.map((item, index) => (
        <div key={index}>
          {item.isCurrent || currentPath === item.href ? (
            <>
              <h2 className=" text-xl md:text-xl xl:text-[16px] leading-tight text-primary max-w-[750px] font-bold inline-flex mb-2 items-center flex-row justify-center align-center">
                <item.icon className="mr-2 size-4" />
                {item.label}
              </h2>
              {/* Render sections only under the current path */}
              {currentPath === item.href && (
                <div className="pl-4 ">
                  {sections.map((section) => (
                    <a key={section.id} href={`#${section.id}`}>
                      <h2
                        className={`text-xl md:text-xl xl:text-[14px] leading-tight max-w-[750px] mb-2 font-semibold hover:text-primary/80 ${
                          activeSection === section.id
                            ? "text-primary"
                            : "text-primary text-opacity-40"
                        }`}
                      >
                        {section.title}
                      </h2>
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <a href={item.href}>
              <h2 className=" text-xl md:text-xl xl:text-[16px] leading-tight text-primary/60 hover:text-primary max-w-[750px] font-bold inline-flex items-center flex-row justify-center align-center">
                <item.icon className="mr-2 size-4" />
                {item.label}
              </h2>
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
