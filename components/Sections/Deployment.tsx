import React from "react";
import {
  ArrowUpRight,
  Cloud,
  CloudCog,
  Lock,
  LucideArrowRight,
  Server,
  Shield,
} from "lucide-react";
import DeploymentOption from "../deployment-option";
import BlurFade from "../ui/blur-fade";

const DeploymentSection: React.FC = () => {
  const deploymentContent = {
    heading: "Deploy Your Way",
    description:
      "Whether you need rapid cloud rollout or full on-premises control, our solution adapts to your enterprise requirements.",
    cards: [
      {
        icon: CloudCog,
        title: "Cloud Processing",
        description:
          "Secure, scalable cloud infrastructure for centralized data aggregation, live dashboards, and AI-driven insights.",
      },
      {
        icon: Server,
        title: "On-Premises Server",
        description:
          "Dedicated hardware hosted in your data center for full data sovereignty, custom security policies, and compliance.",
      },
    ],
  };
  return (
    <div className=" w-screen bg-white py-20">
      <div className=" mx-auto  py-20 container px-4">
        <BlurFade inView delay={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight max-w-5xl mx-auto text-center mb-6">
            {deploymentContent.heading}
          </h1>
        </BlurFade>

        <BlurFade inView delay={0.3}>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-16">
            {deploymentContent.description}
          </p>
        </BlurFade>

        <div className="flex flex-col md:flex-row justify-between gap-8 w-full">
          {deploymentContent.cards.map((card, index) => (
            <BlurFade inView delay={0.4 + index * 0.2} key={index}>
              <div
                key={index}
                className="flex flex-col items-center text-center justify-center bg-gray-100 rounded-2xl space-y-6 w-full p-8 "
              >
                <div className=" p-4 rounded-xl">
                  <card.icon className="h-10 w-10" />
                </div>

                <h3 className="text-xl font-bold">
                  {card.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h3>

                <p className="text-sm text-gray-600">
                  {card.description.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>

                <button className="text-sm text-accent flex items-center group">
                  Learn more{" "}
                  <LucideArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:translate-y--0.5" />
                </button>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeploymentSection;
