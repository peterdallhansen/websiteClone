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
import { Globe } from "../magicui/globe";
import Partners from "./Partners";

const CurrentDeployments: React.FC = () => {
  const deploymentContent = {
    heading: "Global Deployments",
    description: "Our solution is deployed in 20+ locations worldwide",
  };
  return (
    <div className="w-screen py-20  min-h-screen relative ">
      <div className="mx-auto  container px-4">
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

        <BlurFade inView delay={0.3}>
          <div className="mx-auto w-full max-w-5xl">
            <Globe />
          </div>
        </BlurFade>
      </div>
      <div className="absolute bottom-8 left-0 w-full">
        <Partners />
      </div>
    </div>
  );
};

export default CurrentDeployments;
