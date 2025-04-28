"use client";
import CaseStudy from "@/components/CaseStudy/CaseStudy";
import Offerings from "@/components/Offerings";
import { Gallery } from "@/components/Sections/Gallary/Gallary";
import GDPR from "@/components/Sections/GDPR";
import Info from "@/components/Sections/Info/page";
import Main from "@/components/Sections/Main";
import MissionStatement from "@/components/Sections/MissionStatement";
import BlurFade from "@/components/ui/blur-fade";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background antialiased w-full mx-auto scroll-smooth flex flex-col overflow-hidden items-center transition-colors duration-500">
      {/* Main Section with ref */}
      <Main />
      <Info />
      <Offerings />
      {/*  <CaseStudy /> */}
      <MissionStatement />
      <GDPR />

      {/*   <News /> */}
      <Gallery />
    </main>
  );
}
