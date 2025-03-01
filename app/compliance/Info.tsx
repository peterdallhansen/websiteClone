import { LockClosedIcon } from "@radix-ui/react-icons";
import {
  ShieldCheckIcon as Security,
  UserCheckIcon as Consent,
  BellIcon as Notifications,
  Lock,
  FileText,
  InfoIcon,
  Bell,
  Handshake,
  FileLock,
  LockIcon,
} from "lucide-react";
import Image from "next/image";

export default function Info() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pb-20 flex-1 "
      id="features"
    >
      <main className="flex flex-col gap-4 row-start-2 items-center">
        {/* First Section */}
        <section className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Comprehensive GDPR Compliance
                </h2>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Security className="w-6 h-6 mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Robust Data Protection
                    </h3>
                    <p className="text-gray-500 dark:text-primary/60">
                      Our platform is built with advanced security protocols to
                      safeguard personal data. Data is encrypted both in transit
                      and at rest, ensuring robust protection against
                      unauthorized access and breaches.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Consent className="w-6 h-6 mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      User Consent Management
                    </h3>
                    <p className="text-gray-500 dark:text-primary/60">
                      The platform inherently manages user consents, ensuring
                      all data processing activities align with GDPR
                      requirements. Consent records are maintained transparently
                      within the system.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lock className="w-6 h-6 mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Controlled Data Access
                    </h3>
                    <p className="text-gray-500 dark:text-primary/60">
                      Access to sensitive personal data is strictly controlled
                      within the platform. Role-based access ensures that only
                      authorized personnel can view or modify data, maintaining
                      data integrity and privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              {/* Main Image */}
              <Image
                alt="Compliance Dashboard"
                className="rounded-lg overflow-hidden aspect-square object-cover"
                height={600}
                src="/images/Image6.jpg"
                width={800}
                quality={100}
              />

              {/* Inner Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <LockIcon className="scale-[10] md:scale-[20]" />
                {/*   <Image
                  alt="Data Protection Overview"
                  className="rounded-md overflow-hidden aspect-square object-cover shadow-lg"
                  height={500}
                  src="/images/data-protection.png"
                  width={500}
                  quality={100}
                /> */}
              </div>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="relative flex items-center justify-center md:inline hidden">
              {/* Main Image */}
              <Image
                alt="Compliance Tools"
                className="rounded-lg overflow-hidden aspect-square object-cover"
                height={600}
                src="/images/Image1.jpg"
                width={800}
                quality={100}
              />

              {/* Inner Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Handshake className="scale-[10] md:scale-[20]" />
                {/*  <Image
                  alt="GDPR Tools Interface"
                  className="rounded-md overflow-hidden aspect-square object-cover"
                  height={700}
                  src="/images/Image4.jpg"
                  width={700}
                  quality={100}
                  unoptimized
                /> */}
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Advanced Compliance Features
                </h2>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Notifications className="w-6 h-6 mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Automated Data Breach Notifications
                    </h3>
                    <p className="text-gray-500 dark:text-primary/60">
                      Receive real-time alerts and automated notifications in
                      the event of a data breach, ensuring swift action and
                      compliance with GDPR reporting requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Comprehensive Data Management
                    </h3>
                    <p className="text-gray-500 dark:text-primary/60">
                      Manage all your data processing activities with detailed
                      logs and reports. Maintain transparency and accountability
                      for all personal data handling.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <InfoIcon className="w-6 h-6 mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Dedicated Compliance Support
                    </h3>
                    <p className="text-gray-500 dark:text-primary/60">
                      Access expert support to navigate GDPR complexities. Our
                      team is here to assist you in maintaining compliance and
                      addressing any concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center md:hidden">
              {/* Main Image */}
              <Image
                alt="Compliance Tools Mobile"
                className="rounded-lg overflow-hidden aspect-square object-cover"
                height={600}
                src="/images/Image4.jpg"
                width={800}
                quality={100}
              />

              {/* Inner Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Handshake className="scale-[10] md:scale-[20]" />
                {/*  <Image
                  alt="GDPR Tools Interface Mobile"
                  className="rounded-md overflow-hidden aspect-square object-cover"
                  height={700}
                  src="/images/gdpr-tools-mobile.png"
                  width={700}
                  quality={100}
                  unoptimized
                /> */}
              </div>
            </div>
          </div>
        </section>

        {/* Third Section */}
        <section className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Data Subject Rights Management
                </h2>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Consent className="w-6 h-6 mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Right to Access</h3>
                    <p className="text-gray-500 dark:text-primary/60">
                      Enable individuals to request access to their personal
                      data. Provide transparent and comprehensive responses to
                      all access requests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Bell className="w-6 h-6 mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Right to Erasure</h3>
                    <p className="text-gray-500 dark:text-primary/60">
                      Facilitate the complete deletion of personal data upon
                      request. Ensure that all data removal processes comply
                      with GDPR standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <LockClosedIcon className="w-6 h-6 mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Data Portability</h3>
                    <p className="text-gray-500 dark:text-primary/60">
                      Allow individuals to obtain and reuse their personal data
                      across different services. Support seamless data transfers
                      while maintaining security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              {/* Main Image */}
              <Image
                alt="Data Subject Rights Dashboard"
                className="rounded-lg overflow-hidden aspect-square object-cover"
                height={600}
                src="/images/Image5.jpg"
                width={800}
                quality={100}
              />

              {/* Inner Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <FileLock className="scale-[10] md:scale-[20]" />
                {/*    <Image
                  alt="Rights Management Interface"
                  className="rounded-md overflow-hidden object-cover scale-125 md:scale-150"
                  height={900}
                  src="/images/rights-management.png"
                  width={900}
                  quality={100}
                /> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
