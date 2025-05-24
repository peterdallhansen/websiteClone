"use client";

import { MoveHorizontal } from "lucide-react";
import { useState, useRef } from "react";

interface VideoComparisonProps {
  beforeVideo?: string;
  afterVideo?: string;
  img?: string;
  beforeAlt?: string;
  afterAlt?: string;
  width?: number;
  height?: number;
}

export default function VideoComparison({
  beforeVideo,
  afterVideo,
  img,
  beforeAlt = "Before",
  afterAlt = "After",
  width = 800,
  height = 450,
}: VideoComparisonProps) {
  // If no videos provided, just render the static image
  if (!beforeVideo && !afterVideo && img) {
    return (
      <img
        src={img}
        alt={beforeAlt}
        className="w-full max-w-full rounded-lg object-cover"
        style={{ width: width, height: height }}
      />
    );
  }

  const [dividerPosition, setDividerPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width: w } = containerRef.current.getBoundingClientRect();
    const x = clientX - left;
    const pct = Math.max(0, Math.min(100, (x / w) * 100));
    setDividerPosition(pct);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  // Render before layer (video or image)
  const renderBefore = () => {
    if (beforeVideo) {
      return (
        <video
          src={beforeVideo}
          title={beforeAlt}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `inset(0 0 0 ${dividerPosition}%)` }}
        />
      );
    }
    if (img) {
      return (
        <img
          src={img}
          alt={beforeAlt}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `inset(0 0 0 ${dividerPosition}%)` }}
        />
      );
    }
    return null;
  };

  // Render after layer (video or image)
  const renderAfter = () => {
    if (afterVideo) {
      return (
        <video
          src={afterVideo}
          title={afterAlt}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - dividerPosition}% 0 0)` }}
        />
      );
    }
    return null;
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
        touchAction: "pan-y",
        minHeight: `${height}px`,
      }}
    >
      {renderBefore()}
      {renderAfter()}

      {/* Divider only when both videos provided */}
      {beforeVideo && afterVideo && (
        <>
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-white"
            style={{
              left: `${dividerPosition}%`,
              transform: "translateX(-50%)",
            }}
            aria-hidden="true"
          />
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className="absolute top-0 bottom-0 w-full"
            style={{ left: 0, right: 0, touchAction: "none" }}
          >
            <div
              style={{ left: `${dividerPosition}%` }}
              className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer"
            >
              <MoveHorizontal />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
