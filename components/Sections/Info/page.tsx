import {
  AppWindowIcon as Apps,
  BarChart3,
  CircleSlash,
  LineChart,
  Lock,
  Workflow,
} from "lucide-react";
import Image from "next/image";

export default function Info() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-20 gap-32 sm:p-20"
      id="features"
    >
      <main className="flex flex-col gap-32 row-start-2 items-center ">
        {/* First Section */}
        <section className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meet the intelligent workspace
                </h2>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">World-class expertise</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our AI employees can take on any function, from Operation
                      Managers to RevOps Manager. Their skills are brushed up
                      continuously and forever.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Real-time understanding company data
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our AI employees understand your company data sitting on
                      FrameOS in real-time. If one of your 280 Wikis is
                      modified, it will influence the answer of that AI Product
                      Manager to your Software Engineer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Controlled access to your company data
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Control at the software-layer, which folder each AI
                      assistants have access to. Want to keep that payroll data
                      off the grid? Just tick it off.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              {/* Main Image */}
              <Image
                alt="Dashboard Preview"
                className="rounded-lg overflow-hidden aspect-square object-cover"
                height={600}
                src="/images/Image6.jpg"
                width={800} // Square aspect ratio
                quality={100}
              />

              {/* Inner Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  alt="Inner Preview"
                  className="rounded-md overflow-hidden aspect-square object-cover  shadow-lg"
                  height={500}
                  src="/images/Screenshot 2025-01-29 1728402.png"
                  width={500} // Square aspect ratio
                  quality={100}
                />
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
                alt="Dashboard Preview"
                className="rounded-lg overflow-hidden aspect-square object-cover"
                height={600}
                src="/images/Image4.jpg"
                width={800} // Square aspect ratio
                quality={100}
              />

              {/* Inner Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  alt="Inner Preview"
                  className="rounded-md overflow-hidden aspect-square object-cover"
                  height={700}
                  src="/images/iPhone 16 Pro.png"
                  width={700} // Square aspect ratio
                  quality={100}
                  unoptimized
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Go beyond Frame.
                </h2>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Native apps knowledge aggregation
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Feed our AI employees with content sitting on our 10
                      productivity apps. From Whiteboard to Wiki, the more data,
                      the better the insights.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Third-party apps knowledge aggregation
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Search your business data beyond Frame. From your Figma
                      screen content to your Hubspot CRM - we go the extra mile.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Multi-apps workflows</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Create automated workflows powered by Native or
                      Third-party apps. From Slack to Email, automate your
                      business processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center md:hidden">
              {/* Main Image */}
              <Image
                alt="Dashboard Preview"
                className="rounded-lg overflow-hidden aspect-square object-cover"
                height={600}
                src="/images/Image4.jpg"
                width={800} // Square aspect ratio
                quality={100}
              />

              {/* Inner Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  alt="Inner Preview"
                  className="rounded-md overflow-hidden aspect-square object-cover"
                  height={700}
                  src="/images/iPhone 16 Pro.png"
                  width={700} // Square aspect ratio
                  quality={100}
                  unoptimized
                />
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
                  Meet the intelligent workspace
                </h2>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">World-class expertise</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our AI employees can take on any function, from Operation
                      Managers to RevOps Manager. Their skills are brushed up
                      continuously and forever.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Real-time understanding company data
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our AI employees understand your company data sitting on
                      FrameOS in real-time. If one of your 280 Wikis is
                      modified, it will influence the answer of that AI Product
                      Manager to your Software Engineer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Controlled access to your company data
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Control at the software-layer, which folder each AI
                      assistants have access to. Want to keep that payroll data
                      off the grid? Just tick it off.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              {/* Main Image */}
              <Image
                alt="Dashboard Preview"
                className="rounded-lg overflow-hidden aspect-square object-cover"
                height={600}
                src="/images/Image5.jpg"
                width={800} // Square aspect ratio
                quality={100}
              />

              {/* Inner Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  alt="Inner Preview"
                  className="rounded-md overflow-hidden  object-cover scale-125 md:scale-150  "
                  height={900}
                  src="/images/download (4).png"
                  width={900} // Square aspect ratio
                  quality={100}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
