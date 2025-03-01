// Import necessary libraries and components
import {
  BookOpen,
  Briefcase,
  Clipboard,
  Edit,
  FileText,
  Handshake,
  Laptop,
  Scale,
  Shield,
  User,
} from "lucide-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../Logo";

// Define the type for a single link (TypeScript interface)
interface FooterLink {
  href: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// Define the type for a footer section
interface FooterSection {
  title: string;
  links: FooterLink[];
}

// Define the footer sections data
const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      {
        href: "/solutions",
        label: "Solutions",
        Icon: Laptop,
      },
      {
        href: "/industries",
        label: "Industries",
        Icon: FileText,
      },
      {
        href: "/docs",
        label: "Documentation",
        Icon: BookOpen,
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        href: "/about-us",
        label: "About Us",
        Icon: User,
      },
      {
        href: "/careers",
        label: "Careers",
        Icon: Briefcase,
      },
      {
        href: "/blog",
        label: "Blog",
        Icon: Edit,
      },
      {
        href: "/partners",
        label: "Partners",
        Icon: Handshake,
      },
    ],
  },

  {
    title: "Legal",
    links: [
      {
        href: "/terms",
        label: "Terms",
        Icon: Clipboard,
      },
      {
        href: "/privacy-policy",
        label: "Privacy",
        Icon: Shield,
      },
      {
        href: "/compliance",
        label: "Compliance",
        Icon: Scale,
      },
    ],
  },
];

// Define the social media links data
const socialLinks = [
  {
    href: "https://www.linkedin.com/company/zonify-ai",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  // Add more social links here if needed
];

// Footer Component
export function Footer() {
  return (
    <footer className=" bg-transparent  mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Logo */}
          <div className="md:col-span-1">
            <Logo width={240} height={100} />
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <nav key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} legacyBehavior>
                      <a className="text-base text-primary/60 hover:text-primary flex items-center">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Copyright and Social Links */}
        <div className="mt-8  border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-primary/60">
            &copy; 2025 Zonfiy.ai, ApS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                className="text-primary/60 hover:text-primary "
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{social.label}</span>
                <social.Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Layout Wrapper
export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
      <Footer /> {/* Include Footer in the Layout */}
    </div>
  );
}
