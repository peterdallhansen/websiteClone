"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture, useAspect } from "@react-three/drei";
import * as THREE from "three";

const DepthMaterial = {
  uniforms: {
    uImage: { value: null },
    uDepth: { value: null },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uIntensity: { value: 0.02 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D uImage;
    uniform sampler2D uDepth;
    uniform vec2 uMouse;
    uniform float uIntensity;
    varying vec2 vUv;

    void main() {
      vec4 depth = texture2D(uDepth, vUv);
      vec2 displacement = uMouse * depth.r * uIntensity;
      gl_FragColor = texture2D(uImage, vUv + displacement);
    }
  `
};

function Scene({ src, depthMap, intensity = 0.02, sensitivity = 1 }: { src: string; depthMap: string; intensity?: number; sensitivity?: number }) {
  const [imageTexture, depthTexture] = useTexture([src, depthMap]) as [THREE.Texture, THREE.Texture];
  
  // Ensure textures are loaded and configured
  imageTexture.colorSpace = THREE.SRGBColorSpace;
  depthTexture.colorSpace = THREE.NoColorSpace; // Depth map should not be color corrected

  const { width, height } = imageTexture.image as HTMLImageElement;
  
  // Calculate scale to cover the viewport (like object-cover)
  const scale = useAspect(width, height, 1);
  
  const shaderMaterial = useRef<THREE.ShaderMaterial>(null);
  
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uImage: { value: imageTexture },
        uDepth: { value: depthTexture },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uIntensity: { value: intensity },
      },
      vertexShader: DepthMaterial.vertexShader,
      fragmentShader: DepthMaterial.fragmentShader,
    });
  }, [imageTexture, depthTexture, intensity]);

  useFrame((state) => {
    if (shaderMaterial.current) {
      shaderMaterial.current.uniforms.uMouse.value.x = THREE.MathUtils.lerp(
        shaderMaterial.current.uniforms.uMouse.value.x,
        state.mouse.x * sensitivity,
        0.1
      );
      shaderMaterial.current.uniforms.uMouse.value.y = THREE.MathUtils.lerp(
        shaderMaterial.current.uniforms.uMouse.value.y,
        state.mouse.y * sensitivity,
        0.1
      );
    }
  });

  return (
    <mesh scale={scale}>
      <planeGeometry args={[1, 1]} />
      <primitive object={material} ref={shaderMaterial} attach="material" />
    </mesh>
  );
}

export default function DepthImage({ src, depthMap, alt, className, intensity = 0.03, sensitivity = 1 }: { src: string; depthMap: string; alt?: string; className?: string; intensity?: number; sensitivity?: number }) {
  return (
    <div className={className}>
      <Canvas resize={{ scroll: false }} style={{ width: '100%', height: '100%' }}>
        <Suspense fallback={null}>
          <Scene src={src} depthMap={depthMap} intensity={intensity} sensitivity={sensitivity} />
        </Suspense>
      </Canvas>
      {/* Fallback image for SEO and initial load */}
       <img 
        src={src} 
        alt={alt} 
        className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
      />
    </div>
  );
}
