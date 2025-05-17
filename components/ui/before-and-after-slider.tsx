"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
  height = "400px",
}) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(0.5); // start at 50%
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!dragging) return;
      const rect = containerRef.current.getBoundingClientRect();
      let x = e.clientX - rect.left;
      // clamp between 0 and container width
      const pos = Math.max(0, Math.min(1, x / rect.width));
      setPosition(pos);
    };
    const onMouseUp = () => setDragging(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging]);

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setDragging(true)}
      style={{
        position: "relative",
        width: "100%",
        height,
        userSelect: "none",
      }}
    >
      {/* Bottom image (after) */}
      <Image
        src={afterSrc}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Top image (before) clipped by slider position */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${position * 100}%`,
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Image
          src={beforeSrc}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Slider handle */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: `${position * 100}%`,
          transform: "translateX(-50%)",
          height: "100%",
          cursor: "ew-resize",
        }}
      >
        <div
          style={{ width: "2px", height: "100%", backgroundColor: "#fff" }}
        />
      </div>
    </div>
  );
}
