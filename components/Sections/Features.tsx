import {
  ArrowRight,
  LucideGlobe,
  LucideLayoutDashboard,
  LucideLock,
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-normal text-center mb-20 text-balance">
          Secure. Adaptable. Designed for your business.
        </h1>
        <div className="grid md:grid-cols-3 gap-16">
          {/* Render features from an array */}
          {[
            {
              title: "Security",
              description:
                "GDPR-first by design: privacy-safe video processing, role-based access, audit logs, and data minimization so no PII is stored by default.",
              icon: LucideLock,
            },
            {
              title: "Deployment",
              description:
                "Flexible rollout on cloud or on-prem: private, firewall-protected, and designed to keep footage off external networks.",

              icon: LucideGlobe,
            },
            {
              title: "Customization",
              description:
                "Model tuning for your layout and cameras, flexible zone definitions and KPIs, and dashboards that match your workflows and stack.",
              icon: LucideLayoutDashboard,
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
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
