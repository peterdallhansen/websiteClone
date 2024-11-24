import Link from "next/link";
import {
  Laptop,
  FileText,
  BookOpen,
  Linkedin,
  Clipboard,
  Shield,
  Scale,
  User,
  Briefcase,
  Edit,
  Mic,
  Handshake,
} from "lucide-react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={"/images/Logo-dark.png"}
                alt="Zonify-Logo"
                width={240}
                height={100}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-base text-gray-500 hover:text-gray-900 flex items-center"
                >
                  <Laptop className="w-5 h-5 mr-2" />
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-base text-gray-500 hover:text-gray-900 flex items-center"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-base text-gray-500 hover:text-gray-900 flex items-center"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Documentation
                </Link>
              </li>
            </ul>
          </nav>

          {/* Placeholder for additional footer columns */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h3>
            {/* Add company-related links here */}

            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-base text-gray-500 hover:text-gray-900 flex items-center"
                >
                  <User className="w-5 h-5 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-base text-gray-500 hover:text-gray-900 flex items-center"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-base text-gray-500 hover:text-gray-900 flex items-center"
                >
                  <Edit className="w-5 h-5 mr-2" />
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/partners"
                  className="text-base text-gray-500 hover:text-gray-900 flex items-center"
                >
                  <Handshake className="w-5 h-5 mr-2" />
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-base text-gray-500 hover:text-gray-900 flex items-center"
                >
                  <Clipboard className="w-5 h-5 mr-2" />
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-base text-gray-500 hover:text-gray-900 flex items-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-base text-gray-500 hover:text-gray-900 flex items-center"
                >
                  <Scale className="w-5 h-5 mr-2" />
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-500">
            &copy; 2025 Zonfiy.ai, ApS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/zonify-    ai"
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
