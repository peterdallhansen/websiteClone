"use client";

import { MoveHorizontal } from "lucide-react";
import { useState, useRef } from "react";

interface VideoComparisonProps {
  beforeVideo: string;
  afterVideo: string;
  beforeAlt?: string;
  afterAlt?: string;
  width?: number;
  height?: number;
}

export default function VideoComparison({
  beforeVideo,
  afterVideo,
  beforeAlt = "Before video",
  afterAlt = "After video",
  width = 800,
  height = 450,
}: VideoComparisonProps) {
  const [dividerPosition, setDividerPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reusable position updater
  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width: w } = containerRef.current.getBoundingClientRect();
    const x = clientX - left;
    const pct = Math.max(0, Math.min(100, (x / w) * 100));
    setDividerPosition(pct);
  };

  // Desktop mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    updatePosition(e.clientX);
  };

  // Mobile touch on the knob only
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-full overflow-hidden rounded-lg"
      style={{
        width: "100%",
        maxWidth: width,
        aspectRatio: `${width} / ${height}`,
        touchAction: "pan-y", // allow vertical scrolling everywhere
        minHeight: `${height}px`,
      }}
    >
      {/* BEFORE video: clipped on left so only the right (100 - divider)% shows */}
      <video
        src={beforeVideo}
        title={beforeAlt}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        style={{
          clipPath: `inset(0 0 0 ${dividerPosition}%)`,
        }}
      />

      {/* AFTER video: clipped on right so only the left (divider)% shows */}
      <video
        src={afterVideo}
        title={afterAlt}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - dividerPosition}% 0 0)`,
        }}
      />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white"
        style={{ left: `${dividerPosition}%`, transform: "translateX(-50%)" }}
        aria-hidden="true"
      >
        {/* Touch‐only handle */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
          style={{ touchAction: "none" }}
        >
          <MoveHorizontal />
        </div>
      </div>
    </div>
  );
}
