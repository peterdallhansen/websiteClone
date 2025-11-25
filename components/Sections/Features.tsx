import {
  ArrowRight,
  LucideGlobe,
  LucideLayoutDashboard,
  LucideUsers,
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-10 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-normal text-center mb-20 text-balance">
          Data That Drives Decisions
        </h1>
        <div className="grid md:grid-cols-3 gap-16">
          {/* Render features from an array */}
          {[
            {
              title: "Justify Rents & Minimize Vacancy",
              description:
                "Walk into every negotiation with data. Prove the value of each unit with concrete foot traffic and demographic evidence.",
              icon: LucideLayoutDashboard,
            },
            {
              title: "Works With Your Existing Cameras",
              description:
                "No new hardware required. We connect to your current IP cameras to deliver advanced analytics without the capex.",
              icon: LucideGlobe,
            },
            {
              title: "Know Your Visitors",
              description:
                "Go beyond counting. Segment visitors by age, gender, and dwell time to target marketing and measure campaign impact.",
              icon: LucideUsers,
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex flex-col">
                <div className="mb-6">
                  <Icon size={40} />
                </div>
                <h2 className={`text-3xl font-medium mb-4`}>{feature.title}</h2>
                <p className={`text-primary/80 leading-relaxed mb-6`}>
                  {feature.description}
                </p>
                <a
                  href={
                    idx === 0
                      ? "/solutions/analytics-hub"
                      : idx === 1
                      ? "/contact"
                      : "/security"
                  }
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                >
                  {idx === 0
                    ? "Explore Use Cases"
                    : idx === 1
                    ? "See Integration Options"
                    : "Read Security Whitepaper"}{" "}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
