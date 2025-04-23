"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./animated-beam";
import { LucideDatabaseBackup, LucideSaveAll } from "lucide-react";
import Logo from "../Logo";
import LogoIcon from "../LogoIcon";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const div2Ref = useRef<HTMLDivElement>(null);

  const div4Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden rounded-lg mb-20">
      <div
        className={cn(
          "relative flex h-[500px] w-full items-center justify-center overflow-hidden  p-10 bg-[#f6f6f6] scale-[1.5]",
          className
        )}
        ref={containerRef}
      >
        <div className="flex w-full max-w-lg justify-between">
          <Circle ref={div2Ref}>
            <LucideDatabaseBackup />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <LogoIcon className="w-6 h-6" />
          </Circle>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
          startYOffset={10}
          endYOffset={10}
          curvature={-20}
          gradientStartColor="#BEDAFF"
          gradientstopColor="#71ADFF"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
          startYOffset={-10}
          endYOffset={-10}
          curvature={20}
          gradientStartColor="#BEDAFF"
          gradientstopColor="#71ADFF"
        />
      </div>
    </div>
  );
}
