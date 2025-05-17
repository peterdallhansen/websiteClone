import React from "react";
import { DivideIcon as LucideIcon } from "lucide-react";

interface DeploymentOptionProps {
  title: string;
  description: string;
  icon: typeof LucideIcon;
}

const DeploymentOption: React.FC<DeploymentOptionProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="relative group flex-1 bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-xl"></div>

      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-4">
        <Icon className="text-accent" size={24} />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

      <button className="mt-4 text-sm font-medium text-accent hover:text-blue-700 flex items-center transition-colors duration-200">
        Learn more
        <svg
          className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33337 8H12.6667"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 3.33337L12.6667 8.00004L8 12.6667"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default DeploymentOption;
