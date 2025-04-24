import Image from "next/image";

export default function Info() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-20 gap-32 sm:p-20"
      id="features"
    >
      <section className="flex flex-col gap-32 row-start-2 items-center">
        {/* First Section */}
        <section className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  See Visitors Like Never Before
                </h2>
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    AI-Powered Video Analytics
                  </h3>
                  <p className="text-gray-500 dark:text-primary/60">
                    Our software transforms standard 2D cameras into intelligent
                    sensors using real-time computer vision, eliminating the
                    need for costly hardware upgrades.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Plug-and-Play Deployment
                  </h3>
                  <p className="text-gray-500 dark:text-primary/60">
                    The system integrates seamlessly with your existing setup.
                    No specialized hardware or complex installation—just install
                    the software and start capturing insights.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Remote & Scalable</h3>
                  <p className="text-gray-500 dark:text-primary/60">
                    Whether you manage a single store or a nationwide chain, our
                    platform scales effortlessly and can be monitored remotely
                    from any device with a browser.
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Global Sensor Network</h3>
                <p className="text-gray-500 dark:text-primary/60">
                  Our platform doesn't just analyze isolated feeds—it connects
                  all your cameras into a unified, real-time view. Gain holistic
                  insights across locations, enabling smarter decisions through
                  a truly global perspective.
                </p>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <Image
                alt="Dashboard showing visitor analytics"
                className="rounded-lg overflow-hidden aspect-square object-contain bg-[#f6f6f6]"
                height={600}
                src="/images/Paths.png"
                width={800}
                quality={100}
              />
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="relative flex items-center justify-center">
              <Image
                alt="Heatmap analytics"
                className="rounded-lg overflow-hidden aspect-square object-cover bg-[#f6f6f6]"
                height={600}
                src="/IP.png"
                width={800}
                quality={100}
              />
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Analytics That Drive Results
                </h2>
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Understand Visitor Behavior
                  </h3>
                  <p className="text-gray-500 dark:text-primary/60">
                    Track movement patterns, dwell times, and engagement zones
                    to uncover customer preferences and behavioral trends within
                    your physical space.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Improve Space Utilization and Flow
                  </h3>
                  <p className="text-gray-500 dark:text-primary/60">
                    Use real-time insights to fine-tune layouts, staffing
                    schedules, and in-store promotions—maximizing both customer
                    satisfaction and business performance.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Smarter Business Decisions
                  </h3>
                  <p className="text-gray-500 dark:text-primary/60">
                    Make confident, data-driven decisions with analytics that go
                    beyond footfall, helping you improve experiences and
                    operational outcomes at every location.
                  </p>
                </div>
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
                  Built with Privacy in Mind
                </h2>
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    GDPR & Privacy by Design
                  </h3>
                  <p className="text-gray-500 dark:text-primary/60">
                    Built with full GDPR compliance, our platform ensures all
                    data is anonymized and processed securely—respecting
                    individual privacy at every step.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    No Facial Recognition or Personal Data
                  </h3>
                  <p className="text-gray-500 dark:text-primary/60">
                    We never store or use personally identifiable information.
                    Our analytics are designed for behavioral insights only, not
                    identity tracking.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-gray-500 dark:text-primary/60">
                    Data is encrypted in transit and at rest, with role-based
                    access controls and secure cloud infrastructure to protect
                    your information.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <Image
                alt="Secure data management illustration"
                className="rounded-lg overflow-hidden aspect-square object-contain bg-[#f6f6f6]"
                height={900}
                src="/images/workspaces.png"
                width={900}
                quality={100}
              />
            </div>
          </div>
        </section>

        {/* Fourth Section */}
        <section className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="relative flex items-center justify-center">
              <Image
                alt="Heatmap analytics"
                className="rounded-lg overflow-hidden aspect-square object-cover bg-[#f6f6f6]"
                height={600}
                src="/IP.png"
                width={800}
                quality={100}
              />
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Learn From the Past. Optimize the Future.
                </h2>
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Measure Anything—Even in Retrospect
                  </h3>
                  <p className="text-gray-500 dark:text-primary/60">
                    Need answers from last week or last month? Our platform lets
                    you measure new zones and metrics using existing footage—no
                    rework, just results.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Iterate With Confidence</h3>
                  <p className="text-gray-500 dark:text-primary/60">
                    Test layout changes, campaigns, or service models and use
                    historical comparisons to validate what works best.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Inform Long-Term Strategy
                  </h3>
                  <p className="text-gray-500 dark:text-primary/60">
                    Use behavioral trends and space utilization data to support
                    expansion, redesign, and operational planning.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Plan Ahead With Confidence
                  </h3>
                  <p className="text-gray-500 dark:text-primary/60">
                    Forecast traffic patterns, behavior shifts, and performance
                    trends to guide strategic planning and resource allocation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
