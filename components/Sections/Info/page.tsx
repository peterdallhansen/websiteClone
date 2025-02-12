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
                  AI-Powered Predictive Tools & Digital Twin Capabilities
                </h2>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Customer Flow Forecasting
                    </h3>
                    <p className="text-gray-500 dark:text-white/60">
                      Predict future customer traffic and demographic trends
                      using advanced machine learning models that analyze
                      historical and real-time data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Initiative Impact & KPI Nowcasting
                    </h3>
                    <p className="text-gray-500 dark:text-white/60">
                      Bridge the gap between real-time data and delayed sources
                      with precise nowcasting—enabling you to measure the true
                      impact of your initiatives instantly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Proactive, AI-Driven Decision-Making
                    </h3>
                    <p className="text-gray-500 dark:text-white/60">
                      Harness a suite of AI-powered tools that not only describe
                      and predict outcomes but also prescribe optimal
                      strategies, helping you seize opportunities and mitigate
                      risks proactively.
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
                src="https://images.ctfassets.net/kftzwdyauwt9/40aiELEfuIYvjOaqimB3YR/b7d45af79b84671ef6e73e95f079aabd/Expanded_access_to_GPT-4o.jpg?w=1920&q=90&fm=webp"
                width={800} // Square aspect ratio
                quality={100}
              />

              {/* Inner Image */}
              {/*   <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  alt="Inner Preview"
                  className="rounded-md overflow-hidden aspect-square object-cover  shadow-lg"
                  height={500}
                  src="/images/Screenshot 2025-01-29 1728402.png"
                  width={500} // Square aspect ratio
                  quality={100}
                />
              </div> */}
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
                src="https://images.ctfassets.net/kftzwdyauwt9/3gDBc446Nxn0ByyZMZdFVD/1e993b5470a4fc82279d2099ddef8321/Catcus_Heatmap_2.png?w=3840&q=90&fm=webp"
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
                  From Zero to EU Industry Leader in Just Five Months
                </h2>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Native apps knowledge aggregation
                    </h3>
                    <p className="text-gray-500 dark:text-white/60">
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
                    <p className="text-gray-500 dark:text-white/60">
                      Search your business data beyond Frame. From your Figma
                      screen content to your Hubspot CRM - we go the extra mile.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Multi-apps workflows</h3>
                    <p className="text-gray-500 dark:text-white/60">
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
                  Cutting-Edge Technology & Innovative Solutions
                </h2>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Feature-Rich Analytics Platform
                    </h3>
                    <p className="text-gray-500 dark:text-white/60">
                      Our platform delivers real-time detection, advanced
                      filtering, role-based access, and comprehensive
                      metrics—enabling detailed insights into customer behavior
                      and tenant performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      GDPR-Compliant & AI-Enabled
                    </h3>
                    <p className="text-gray-500 dark:text-white/60">
                      Designed with elevated GDPR-friendly technology, our
                      solution is fully compliant with EU standards while
                      harnessing AI to offer proactive business intelligence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Unified Knowledge Engine
                    </h3>
                    <p className="text-gray-500 dark:text-white/60">
                      Experience holistic, real-time causal insights through our
                      unique graph-based data model, which seamlessly handles
                      complex queries and delivers actionable analytics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      Seamless Integration & Flexibility
                    </h3>
                    <p className="text-gray-500 dark:text-white/60">
                      Our software-only architecture leverages existing video
                      infrastructures to ensure a painless deployment,
                      simplified maintenance, and remote, zero-hardware
                      installation.
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
                src="https://images.ctfassets.net/kftzwdyauwt9/394XMDlnt7tUSkXFMeC6fg/8f24272beda1ea1835d65fff318adbf3/Customizable_AI_for_any_project_or_course.jpg?w=1920&q=90&fm=webp"
                width={800} // Square aspect ratio
                quality={100}
              />

              {/* Inner Image */}
              {/*  <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  alt="Inner Preview"
                  className="rounded-md overflow-hidden  object-cover scale-125 md:scale-150  "
                  height={900}
                  src="/images/download (4).png"
                  width={900} // Square aspect ratio
                  quality={100}
                />
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
