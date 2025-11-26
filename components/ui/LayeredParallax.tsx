"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture, useAspect } from "@react-three/drei";
import * as THREE from "three";
import Image from "next/image";

function Layer({
  src,
  z,
  scale,
  sensitivity,
  brightness,
}: {
  src: string;
  z: number;
  scale: [number, number, number];
  sensitivity: number;
  brightness: number;
}) {
  const texture = useTexture(src);
  const meshRef = useRef<THREE.Mesh>(null);

  // Configure texture
  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame((state) => {
    if (meshRef.current) {
      // Move layer based on mouse position and sensitivity
      const targetX = state.mouse.x * sensitivity;
      const targetY = state.mouse.y * sensitivity;

      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        targetX,
        0.1
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        targetY,
        0.1
      );
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, z]} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        color={new THREE.Color(brightness, brightness, brightness)}
      />
    </mesh>
  );
}

function Scene({
  background,
  foreground,
  sensitivity = 1,
  brightness = 1,
  onLoaded,
}: {
  background: string;
  foreground: string;
  sensitivity?: number;
  brightness?: number;
  onLoaded?: () => void;
}) {
  const { viewport } = useThree();

  // Load textures to get dimensions
  const [bgTex, fgTex] = useTexture([background, foreground]) as [
    THREE.Texture,
    THREE.Texture
  ];

  // Calculate scales to cover viewport
  const bgScale = useAspect(
    (bgTex.image as HTMLImageElement).width,
    (bgTex.image as HTMLImageElement).height,
    1
  );
  const fgScale = useAspect(
    (fgTex.image as HTMLImageElement).width,
    (fgTex.image as HTMLImageElement).height,
    1
  );

  // Signal that scene is loaded
  React.useEffect(() => {
    if (onLoaded) {
      onLoaded();
    }
  }, [onLoaded]);

  return (
    <>
      {/* Background Layer - Moves slowly (low sensitivity) */}
      <Layer
        src={background}
        z={0}
        scale={bgScale}
        sensitivity={0.2 * sensitivity}
        brightness={brightness}
      />

      {/* Foreground Layer - Moves faster (higher sensitivity) */}
      <Layer
        src={foreground}
        z={0.1}
        scale={fgScale}
        sensitivity={0.5 * sensitivity}
        brightness={brightness}
      />
    </>
  );
}

export default function LayeredParallax({
  background,
  foreground,
  alt = "Background",
  className,
  sensitivity = 1,
  brightness = 1,
}: {
  background: string;
  foreground: string;
  alt?: string;
  className?: string;
  sensitivity?: number;
  brightness?: number;
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile: Show static layered images
  if (isMobile) {
    return (
      <div className={className}>
        {/* Background layer */}
        <Image
          src={background}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            filter: `brightness(${brightness})`,
          }}
        />
        {/* Foreground layer */}
        <Image
          src={foreground}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            filter: `brightness(${brightness})`,
          }}
        />
      </div>
    );
  }

  // Desktop: Show 3D parallax canvas
  return (
    <div className={className}>
      {/* Fallback image - shows while loading, matches background layer exactly */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: isLoaded ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
          backgroundColor: `rgb(${brightness * 255}, ${brightness * 255}, ${
            brightness * 255
          })`,
        }}
      >
        <Image
          src={background}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* 3D Canvas - fades in when loaded */}
      <Canvas
        resize={{ scroll: false }}
        style={{ width: "100%", height: "100%" }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Scene
            background={background}
            foreground={foreground}
            sensitivity={sensitivity}
            brightness={brightness}
            onLoaded={() => setIsLoaded(true)}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
