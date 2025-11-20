"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideDownload } from "lucide-react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

const privacySections = [
  {
    id: "gdpr",
    title: "GDPR COMPLIANCE & DATA PROTECTION",
    content:
      "Zonify.ai is built with privacy by design, adhering to all GDPR requirements for data collection, storage, and handling.",
    bulletPoints: [
      "Our platform follows the privacy-by-design principle and is fully compliant with GDPR.",
      "Only anonymized data is processed—no personally identifiable information is collected or stored.",
      "We never use facial recognition technology. Behavioral analytics are our sole focus.",
    ],
  },
  {
    id: "security-infrastructure",
    title: "SECURITY & INFRASTRUCTURE",
    content:
      "Zonify.ai ensures secure data processing and robust system reliability through cutting-edge technology and practices.",
    bulletPoints: [
      "All data is encrypted in transit and at rest using industry best practices.",
      "Granular, role-based access controls restrict data access to authorized personnel only.",
      "Our infrastructure is built for high availability and includes redundancy to prevent downtime.",
    ],
  },
  {
    id: "transparency-compliance",
    title: "TRANSPARENCY & COMPLIANCE",
    content:
      "We prioritize transparency and accountability through comprehensive logging and compliance initiatives.",
    bulletPoints: [
      "Detailed audit trails and data logs ensure full visibility into platform activity and data access.",
      "Regional data residency options support local legal and regulatory requirements.",
      "Zonify.ai undergoes regular third-party security assessments and compliance audits.",
    ],
  },
  {
    id: "data-processing-overview",
    title: "DATA PROCESSING OVERVIEW",
    content:
      "Zonify.ai anonymizes and analyzes behavioral data with patented methods to support privacy and insight generation.",
    bulletPoints: [
      "Captured video is encrypted and sent via secure IPSec tunnel for processing.",
      "Image segments are isolated, encoded into vectors, and anonymized within milliseconds.",
      "No image data is stored—only anonymized identifiers are retained for analysis.",
    ],
  },
  {
    id: "third-party-providers",
    title: "THIRD-PARTY PROVIDERS",
    content:
      "Zonify.ai partners exclusively with EU-based providers that maintain the same high standards of data protection.",
    bulletPoints: [
      "GleSYS (Sweden): Provides infrastructure for real-time anonymization and deletion of image data.",
      "Digital Ocean (Germany): Hosts platform data such as user credentials and logs—no video data.",
      "All processing occurs within the EU and complies with GDPR.",
    ],
  },
  {
    id: "purpose-and-legitimacy",
    title: "PROCESSING PURPOSE & LEGAL BASIS",
    content:
      "Zonify.ai processes anonymized data to help clients understand visitor behavior and optimize operations.",
    bulletPoints: [
      "Supports legitimate interests under GDPR Article 6(1)(f).",
      "Approved through prior consultation with data protection authorities in the EU.",
      "Use cases include analyzing visitor flows, optimizing layouts, and improving staffing efficiency.",
    ],
  },
];

export default function PrivacyAndDataProtection() {
  const effectiveDate = dayjs("2025-05-01").format("LL");
  const downloadUrl = "/resources/privacy-policy.pdf";

  return (
    <div className="container mx-auto px-4 py-8 max-w-[900px]">
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader>
          <h2 className="text-2xl md:text-3xl xl:text-5xl  leading-tight text-primary text-center">
            Privacy & Data Protection
          </h2>
          <h2 className="text-xl md:text-lg xl:text-2xl mb-2 leading-tight text-primary text-center max-w-[750px] text-opacity-60">
            How Zonify.ai ensures compliance, anonymization, and transparency in
            data processing
          </h2>
          <div className="w-full flex justify-end items-center pt-8">
            <div className="text-sm">Effective Date: {effectiveDate}</div>
            <a href={downloadUrl} download className="inline-flex items-center">
              <Button variant="link">
                <LucideDownload />
                Download
              </Button>
            </a>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {privacySections.map((section, index) => (
            <section id={section.id} key={index}>
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <p>{section.content}</p>
              {section.bulletPoints && (
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  {section.bulletPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
