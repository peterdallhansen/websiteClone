"use client";

import React, { useMemo, useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as turf from "@turf/turf";
import {
  Color,
  ExtrudeGeometry,
  LinearFilter,
  Mesh,
  MeshBasicMaterial,
  MOUSE,
  PCFSoftShadowMap,
  PlaneGeometry,
  ShaderMaterial,
  Shape,
  TextureLoader,
  LinearToneMapping,
  Vector3,
  QuadraticBezierCurve3,
  TubeGeometry,
  DoubleSide,
} from "three";

const COORDINATE_SCALE = 1 / 1000;

// --- Types ---
export interface MapData {
  mapId: number;
  structures: any[];
  structuresWithIcon: any[];
  mapFloor: [number, number][];
  mapBound: number;
  mapCenter: [number, number] | null;
  minZoom: number | null;
  maxZoom: number | null;
  exportDate: string;
}

export interface ViewState {
  zoom: number;
  pitch: number;
  bearing: number;
  latitude?: number;
  longitude?: number;
  altitude?: number;
  advanced?: {
    cameraPosition: [number, number, number];
    targetPosition?: [number, number, number];
  };
  structureColors?: { [entityName: string]: string };
  floorColor?: string;
  showArcs?: boolean;
  showFlowPath?: boolean;
  showHeatmap?: boolean;
}

interface ThreeMapProps {
  mapData: MapData;
  className?: string;
  viewState?: ViewState;
}

// --- helper: build extruded polygon mesh ---
export function ExtrudedPolygon({
  coords,
  height,
  color,
  scale = 1,
  roundness = 1,
  onHoverStart,
  onHoverEnd,
  onClick,
  hoverColor,
  hoverElevation = 0.5,
}: {
  coords: [number, number][];
  height: number;
  color: string;
  scale?: number;
  roundness?: number;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onClick?: () => void;
  hoverColor?: string;
  hoverElevation?: number;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shape = useMemo(() => {
    const s = new Shape();
    if (!coords || coords.length === 0) return s;

    const closed = [...coords];
    const first = coords[0];
    const last = coords[coords.length - 1];
    if (first[0] !== last[0] || first[1] !== last[1]) {
      closed.push(first);
    }

    closed.forEach(([x, y], i) => {
      if (i === 0) {
        s.moveTo(x, y);
      } else {
        const prev = closed[i - 1];
        const current = [x, y];

        // Calculate control point for quadratic curve that stays inside original corner
        const dx = current[0] - prev[0];
        const dy = current[1] - prev[1];
        const len = Math.sqrt(dx * dx + dy * dy);
        const inset = Math.min(len * roundness, 2); // Limit curve inset to prevent expansion

        if (len > 0.001) {
          const unitX = dx / len;
          const unitY = dy / len;

          // Control point pulled inward from the corner
          const cx = prev[0] + unitX * inset;
          const cy = prev[1] + unitY * inset;

          s.quadraticCurveTo(prev[0], prev[1], cx, cy);
        } else {
          s.lineTo(x, y);
        }
      }
    });

    // Close the shape properly
    if (closed.length > 2) {
      const firstPoint = closed[0];
      const lastPoint = closed[closed.length - 2];
      const prevToLast = closed[closed.length - 3];

      const dx = firstPoint[0] - lastPoint[0];
      const dy = firstPoint[1] - lastPoint[1];
      const len = Math.sqrt(dx * dx + dy * dy);
      const inset = Math.min(len * roundness, 2);

      if (len > 0.001) {
        const unitX = dx / len;
        const unitY = dy / len;
        const cx = lastPoint[0] + unitX * inset;
        const cy = lastPoint[1] + unitY * inset;
        s.quadraticCurveTo(lastPoint[0], lastPoint[1], cx, cy);
      } else {
        s.lineTo(firstPoint[0], firstPoint[1]);
      }
    }

    return s;
  }, [coords, roundness]);

  const geometry = useMemo(() => {
    const isThin = Math.abs(height) < 0.05;
    const zOffset = isHovered && hoverElevation ? hoverElevation : 0;

    const geom = new ExtrudeGeometry(shape, {
      depth: height + zOffset,
      bevelEnabled: !isThin,
      bevelSegments: isThin ? 0 : 6,
      bevelThickness: isThin ? 0 : height * 0.02,
      bevelSize: isThin ? 0 : height * 0.02,
      bevelOffset: isThin ? 0 : -height * 0.01,
      steps: 1,
    });

    try {
      geom.computeVertexNormals();
    } catch (e) {
      // ignore
    }

    // @ts-ignore
    geom.userData = { isThin };

    return geom;
  }, [shape, height, isHovered, hoverElevation]);

  const displayColor = isHovered && hoverColor ? hoverColor : color;

  return (
    <group scale={[scale, scale, scale]} position={[0, 0, 0]}>
      <mesh
        geometry={geometry}
        castShadow={!(geometry as any).userData?.isThin}
        receiveShadow={!(geometry as any).userData?.isThin}
        onPointerOver={(e) => {
          e.stopPropagation();
          if (onClick || hoverColor) {
            setIsHovered(true);
          }
          if (onHoverStart) onHoverStart();
          if (onClick) {
            document.body.style.cursor = "pointer";
          }
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          if (onClick || hoverColor) {
            setIsHovered(false);
          }
          if (onHoverEnd) onHoverEnd();
          if (onClick) {
            document.body.style.cursor = "default";
          }
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (onClick) onClick();
        }}
      >
        <meshStandardMaterial
          color={displayColor}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>
    </group>
  );
}

// --- helper: simple icon plane with texture ---
export function IconBillboard({
  position,
  url,
  size = 1,
  color,
}: {
  position: [number, number, number];
  url: string;
  size?: number;
  color?: string | number;
}) {
  const texture = useMemo(() => {
    const tex = new TextureLoader().load(url);
    tex.minFilter = LinearFilter;
    tex.magFilter = LinearFilter;
    tex.anisotropy = 16;
    return tex;
  }, [url]);

  const colorValue = React.useMemo(() => {
    try {
      if (typeof color === "string") {
        return new Color(color);
      }
      if (typeof color === "number") return new Color(color);
    } catch (e) {
      // fallback
    }
    return new Color(0xffffff);
  }, [color]);

  return (
    <sprite position={position} scale={[size, size, 1]}>
      <spriteMaterial
        map={texture}
        transparent
        color={colorValue}
        depthWrite={false}
      />
    </sprite>
  );
}

export function LogoBillboard({
  position,
  url,
  size: logoScale = 1,
  grayColor = "#dddddd",
}: {
  position: [number, number, number];
  url: string;
  size?: number;
  grayColor?: string;
}) {
  const [size, setSize] = React.useState<[number, number]>([1, 1]);

  React.useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;
    img.onload = () => setSize([img.width, img.height]);
  }, [url]);

  const texture = React.useMemo(() => {
    const tex = new TextureLoader().load(url);
    tex.minFilter = LinearFilter;
    tex.magFilter = LinearFilter;
    tex.anisotropy = 16;
    return tex;
  }, [url]);

  const material = React.useMemo(() => {
    return new ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uColor: { value: new Color(grayColor) },
        uAlphaThreshold: { value: 0.01 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform vec3 uColor;
        uniform float uAlphaThreshold;
        varying vec2 vUv;
        void main() {
          vec4 t = texture2D(uTexture, vUv);
          float a = t.a;
          if (a <= uAlphaThreshold) discard;
          gl_FragColor = vec4(uColor, a);
        }
      `,
      transparent: true,
    });
  }, [texture, grayColor]);

  const [width, height] = size;

  return (
    <mesh
      position={position}
      scale={[(width / 250) * logoScale, (height / 250) * logoScale, 1]}
    >
      <planeGeometry args={[1, 1]} />
      <primitive object={material} />
    </mesh>
  );
}

// --- Helper: Close Ring ---
const closeRing = (ring: [number, number][]) => {
  const validRing = ring.filter(
    (pt): pt is [number, number] =>
      Array.isArray(pt) &&
      pt.length === 2 &&
      typeof pt[0] === "number" &&
      typeof pt[1] === "number"
  );
  if (
    validRing.length > 0 &&
    (validRing[0][0] !== validRing[validRing.length - 1][0] ||
      validRing[0][1] !== validRing[validRing.length - 1][1])
  ) {
    return [...validRing, validRing[0]];
  }
  return [...validRing];
};

// --- Arc Layer ---
function ArcLayer({ structures }: { structures: any[] }) {
  const materialsRef = useRef<ShaderMaterial[]>([]);

  const arcs = useMemo(() => {
    if (!structures || structures.length < 2) return [];

    // Assume first structure is origin
    const origin = structures[0];
    const originCoordsRaw = origin.structure.coordinates_x.map(
      (x: number, i: number) => [x, origin.structure.coordinates_y[i]]
    ) as [number, number][];
    const originRing = closeRing(originCoordsRaw);

    let originCenter;
    try {
      originCenter = turf.center(turf.polygon([originRing]));
    } catch (e) {
      const sum = originRing.reduce(
        (acc, p) => [acc[0] + p[0], acc[1] + p[1]],
        [0, 0]
      );
      originCenter = {
        geometry: {
          coordinates: [sum[0] / originRing.length, sum[1] / originRing.length],
        },
      };
    }

    const originCoords = originCenter.geometry.coordinates;
    const start = new Vector3(
      originCoords[0] * COORDINATE_SCALE,
      originCoords[1] * COORDINATE_SCALE,
      0.01
    );

    const curves: {
      curve: QuadraticBezierCurve3;
      id: string;
      radius: number;
      material: ShaderMaterial;
      intensity: number;
    }[] = [];

    structures.slice(1).forEach((target, i) => {
      const targetCoordsRaw = target.structure.coordinates_x.map(
        (x: number, i: number) => [x, target.structure.coordinates_y[i]]
      ) as [number, number][];
      const targetRing = closeRing(targetCoordsRaw);

      let targetCenter;
      try {
        targetCenter = turf.center(turf.polygon([targetRing]));
      } catch (e) {
        const sum = targetRing.reduce(
          (acc, p) => [acc[0] + p[0], acc[1] + p[1]],
          [0, 0]
        );
        targetCenter = {
          geometry: {
            coordinates: [
              sum[0] / targetRing.length,
              sum[1] / targetRing.length,
            ],
          },
        };
      }

      const targetCoords = targetCenter.geometry.coordinates;
      const end = new Vector3(
        targetCoords[0] * COORDINATE_SCALE,
        targetCoords[1] * COORDINATE_SCALE,
        0.01
      );

      // Calculate control point (midpoint + height)
      const mid = new Vector3().addVectors(start, end).multiplyScalar(0.5);
      const dist = start.distanceTo(end);
      mid.z += dist * 0.4; // Arc height proportional to distance

      // Filter based on distance
      const probability = 1 / (1 + dist * 2.5);
      const randomVal = Math.abs((Math.sin(i * 123.456) * 10000) % 1);
      if (randomVal > probability) return;

      const curve = new QuadraticBezierCurve3(start, mid, end);

      // Intensity determines color and thickness
      const intensity = 0.3 + Math.abs(Math.sin(i * 2.718)) * 0.7;
      const radius = Math.max(0.006, (0.015 * intensity) / (1 + dist ** 10));

      // Create animated gradient material
      const material = new ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uIntensity: { value: intensity },
          uPhaseOffset: { value: i * 0.5 },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform float uIntensity;
          uniform float uPhaseOffset;
          varying vec2 vUv;

          void main() {
            float t = vUv.x;

            // Subtle blue color
            vec3 color = vec3(0.35, 0.55, 0.85);

            // Animated flowing dots
            float flowSpeed = 1.5;
            float dotCount = 5.0;
            float flow = fract(t * dotCount - uTime * flowSpeed + uPhaseOffset);
            float dot = smoothstep(0.0, 0.3, flow) * smoothstep(0.6, 0.3, flow);

            // Brightness: base + animated dots
            float brightness = 0.9 + dot * 0.4;

            // Fade at ends
            float endFade = smoothstep(0.0, 0.08, t) * smoothstep(1.0, 0.92, t);

            gl_FragColor = vec4(color * brightness, endFade * 0.85);
          }
        `,
        transparent: true,
        side: DoubleSide,
        depthWrite: false,
      });

      curves.push({ curve, id: `arc-${i}`, radius, material, intensity });
    });

    // Store materials ref for animation
    materialsRef.current = curves.map((c) => c.material);

    return curves;
  }, [structures]);

  // Animate
  useFrame((state) => {
    materialsRef.current.forEach((material) => {
      material.uniforms.uTime.value = state.clock.elapsedTime;
    });
  });

  return (
    <group>
      {arcs.map(({ curve, id, radius, material }) => (
        <mesh key={id}>
          <tubeGeometry args={[curve, 48, radius, 12, false]} />
          <primitive object={material} />
        </mesh>
      ))}
    </group>
  );
}

// --- Flow Path Layer (sequential path through structures) ---
function FlowPathLayer({ structures }: { structures: any[] }) {
  const pathRef = useRef<{ materials: ShaderMaterial[]; totalLength: number }>({
    materials: [],
    totalLength: 0,
  });

  const { segments, totalLength } = useMemo(() => {
    if (!structures || structures.length < 3)
      return { segments: [], totalLength: 0 };

    // Pick 4-5 structures to create a journey path
    const indices = [4, 0, 1, 25, 49];
    const selectedStructures = indices
      .map((i) => structures[Math.min(i, structures.length - 1)])
      .filter(Boolean);

    if (selectedStructures.length < 2) return { segments: [], totalLength: 0 };

    // Get center points for each structure
    const centers: Vector3[] = selectedStructures.map((s, index) => {
      const coordsRaw = s.structure.coordinates_x.map(
        (x: number, i: number) => [
          index === 4 ? x + 200 : x,
          index === 4
            ? s.structure.coordinates_y[i] - 100
            : s.structure.coordinates_y[i],
        ]
      ) as [number, number][];
      const ring = closeRing(coordsRaw);

      let center;
      try {
        center = turf.center(turf.polygon([ring]));
      } catch (e) {
        const sum = ring.reduce(
          (acc, p) => [acc[0] + p[0], acc[1] + p[1]],
          [0, 0]
        );
        center = {
          geometry: {
            coordinates: [sum[0] / ring.length, sum[1] / ring.length],
          },
        };
      }

      const coords = center.geometry.coordinates;
      return new Vector3(
        coords[0] * COORDINATE_SCALE,
        coords[1] * COORDINATE_SCALE,
        0.02
      );
    });

    // Create curved segments between consecutive points
    const segs: {
      curve: QuadraticBezierCurve3;
      material: ShaderMaterial;
      length: number;
    }[] = [];
    let cumLength = 0;

    for (let i = 0; i < centers.length - 1; i++) {
      const start = centers[i];
      const end = centers[i + 1];

      // Control point for curve (offset perpendicular to line + height)
      const mid = new Vector3().addVectors(start, end).multiplyScalar(0.5);
      const dist = start.distanceTo(end);

      // Add some curve height and lateral offset for visual interest
      const perpX = -(end.y - start.y) / dist;
      const perpY = (end.x - start.x) / dist;
      const lateralOffset = dist * 0.15 * (i % 2 === 0 ? 1 : -1);

      mid.x += perpX * lateralOffset;
      mid.y += perpY * lateralOffset;
      mid.z += dist * 0.3;

      const curve = new QuadraticBezierCurve3(start, mid, end);
      const segLength = curve.getLength();

      const material = new ShaderMaterial({
        uniforms: {
          uProgress: { value: 0 },
          uStartOffset: { value: cumLength },
          uSegmentLength: { value: segLength },
          uTotalLength: { value: 1 }, // Will be updated
          uColor: { value: new Color("#6366f1") },
          uTime: { value: 0 },
        },
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vPosition;
          void main() {
            vUv = uv;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uProgress;
          uniform float uStartOffset;
          uniform float uSegmentLength;
          uniform float uTotalLength;
          uniform vec3 uColor;
          uniform float uTime;
          varying vec2 vUv;

          void main() {
            // Calculate global progress along entire path
            float globalPos = (uStartOffset + vUv.x * uSegmentLength) / uTotalLength;

            // Animated trail effect
            float trailLength = 0.25;
            float headPos = mod(uProgress, 1.0 + trailLength);

            // Check if this point is in the trail
            float distFromHead = headPos - globalPos;

            if (distFromHead < 0.0 || distFromHead > trailLength) {
              discard;
            }

            // Fade based on distance from head
            float alpha = 1.0 - (distFromHead / trailLength);
            alpha = pow(alpha, 0.5); // Smoother falloff

            // Pulse effect at the head
            float pulse = smoothstep(0.0, 0.02, distFromHead) * smoothstep(0.05, 0.02, distFromHead);
            vec3 finalColor = mix(uColor, vec3(1.0), pulse * 0.5);

            gl_FragColor = vec4(finalColor, alpha * 0.9);
          }
        `,
        transparent: true,
        side: DoubleSide,
        depthWrite: false,
      });

      segs.push({ curve, material, length: segLength });
      cumLength += segLength;
    }

    // Update total length in all materials
    segs.forEach((seg) => {
      seg.material.uniforms.uTotalLength.value = cumLength;
    });

    return { segments: segs, totalLength: cumLength };
  }, [structures]);

  // Store materials ref for animation
  useEffect(() => {
    pathRef.current.materials = segments.map((s) => s.material);
    pathRef.current.totalLength = totalLength;
  }, [segments, totalLength]);

  // Animate the path
  useFrame((state, delta) => {
    const speed = 0.4;
    pathRef.current.materials.forEach((material) => {
      material.uniforms.uProgress.value += delta * speed;
      material.uniforms.uTime.value = state.clock.elapsedTime;
    });
  });

  return (
    <group>
      {segments.map(({ curve, material }, i) => (
        <mesh key={`flow-${i}`}>
          <tubeGeometry args={[curve, 48, 0.012, 8, false]} />
          <primitive object={material} />
        </mesh>
      ))}

      {/* Add glowing dots at waypoints */}
      {segments.length > 0 &&
        (() => {
          const points = [segments[0].curve.getPoint(0)];
          segments.forEach((seg) => points.push(seg.curve.getPoint(1)));

          return points.map((point, i) => (
            <mesh key={`waypoint-${i}`} position={[point.x, point.y, point.z]}>
              <sphereGeometry args={[0.025, 16, 16]} />
              <meshBasicMaterial color="#6366f1" transparent opacity={0.8} />
            </mesh>
          ));
        })()}
    </group>
  );
}

// --- Heatmap Layer (LiDAR-style density visualization) ---
function HeatmapLayer({
  structures,
  mapCenter,
}: {
  structures: any[];
  mapCenter: [number, number] | null;
}) {
  const materialRef = useRef<ShaderMaterial>(null);

  // Generate heatmap points based on structure centers with varying intensities
  const heatmapData = useMemo(() => {
    if (!structures || structures.length < 1 || !mapCenter)
      return { points: [], center: [0, 0] };

    const center = [
      mapCenter[0] * COORDINATE_SCALE,
      mapCenter[1] * COORDINATE_SCALE,
    ];

    // Create heat points from structure centers
    const points: { x: number; y: number; intensity: number }[] = [];

    structures.forEach((s, idx) => {
      const coordsRaw = s.structure.coordinates_x.map(
        (x: number, i: number) => [x, s.structure.coordinates_y[i]]
      ) as [number, number][];

      if (coordsRaw.length === 0) return;

      // Calculate center
      const sum = coordsRaw.reduce(
        (acc, p) => [acc[0] + p[0], acc[1] + p[1]],
        [0, 0]
      );
      const cx = (sum[0] / coordsRaw.length) * COORDINATE_SCALE;
      const cy = (sum[1] / coordsRaw.length) * COORDINATE_SCALE;

      // Assign intensity based on pseudo-random but deterministic value
      const intensity = 0.3 + Math.abs(Math.sin(idx * 1.31)) * 0.2;

      points.push({ x: cx, y: cy, intensity });
    });

    return { points, center };
  }, [structures, mapCenter]);

  // Create the heatmap material
  const heatmapMaterial = useMemo(() => {
    const pointsArray = heatmapData.points.flatMap((p) => [
      p.x,
      p.y,
      p.intensity,
    ]);
    const numPoints = heatmapData.points.length;

    return new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPoints: { value: pointsArray },
        uNumPoints: { value: numPoints },
        uCenter: { value: heatmapData.center },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorldPos;
        void main() {
          vUv = uv;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uPoints[${Math.max(numPoints * 3, 3)}];
        uniform int uNumPoints;
        uniform vec2 uCenter;
        varying vec2 vUv;
        varying vec3 vWorldPos;

        // LiDAR-style color gradient (blue -> cyan -> green -> yellow -> red)
        // Viridis colormap approximation
vec3 heatmapColor(float t) {
    t = clamp(t, 0.0, 1.0);

    // Official Viridis anchor colors
    const vec3 c0 = vec3(0.267, 0.004, 0.329);
    const vec3 c1 = vec3(0.283, 0.141, 0.458);
    const vec3 c2 = vec3(0.254, 0.265, 0.530);
    const vec3 c3 = vec3(0.207, 0.372, 0.553);
    const vec3 c4 = vec3(0.164, 0.471, 0.558);
    const vec3 c5 = vec3(0.128, 0.567, 0.551);
    const vec3 c6 = vec3(0.150, 0.660, 0.502);
    const vec3 c7 = vec3(0.318, 0.734, 0.384);
    const vec3 c8 = vec3(0.573, 0.802, 0.231);
    const vec3 c9 = vec3(0.993, 0.906, 0.143);

    float scaled = t * 9.0;
    int idx = int(floor(scaled));
    float frac = fract(scaled);

    if (idx == 0) return mix(c0, c1, frac);
    if (idx == 1) return mix(c1, c2, frac);
    if (idx == 2) return mix(c2, c3, frac);
    if (idx == 3) return mix(c3, c4, frac);
    if (idx == 4) return mix(c4, c5, frac);
    if (idx == 5) return mix(c5, c6, frac);
    if (idx == 6) return mix(c6, c7, frac);
    if (idx == 7) return mix(c7, c8, frac);
    return mix(c8, c9, frac);
}



        void main() {
          float totalHeat = 0.0;

          // Accumulate heat from all points
          for (int i = 0; i < ${numPoints}; i++) {
            float px = uPoints[i * 3];
            float py = uPoints[i * 3 + 1];
            float intensity = uPoints[i * 3 + 2];

            float dist = distance(vWorldPos.xy, vec2(px, py));

            // Gaussian falloff with pulsing animation
            float radius = 0.15 + sin(uTime * 0.5 + float(i) * 0.7) * 0.02;
            float heat = intensity * exp(-dist * dist / (2.0 * radius * radius));

            totalHeat += heat;
          }

          // Normalize and apply threshold
          totalHeat = clamp(totalHeat, 0.0, 1.0);

          // Add noise for LiDAR point-cloud feel
          float noise = fract(sin(dot(vWorldPos.xy, vec2(12.9898, 78.233))) * 43758.5453);
          totalHeat += (noise - 0.5) * 0.05;
          totalHeat = clamp(totalHeat, 0.0, 1.0);

          // Only show where there's heat
          if (totalHeat < 0.05) {
            discard;
          }

          vec3 color = heatmapColor(totalHeat);

          // Add scanline effect for LiDAR feel
          float scanline = sin(vWorldPos.y * 200.0 + uTime * 2.0) * 0.5 + 0.5;
          color = mix(color, color * 1.2, scanline * 0.1);

          // Fade edges
          float alpha = smoothstep(0.05, 0.15, totalHeat) * 0.85;

          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: DoubleSide,
      depthWrite: false,
    });
  }, [heatmapData]);

  // Animate
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  if (!mapCenter || heatmapData.points.length === 0) return null;

  // Create a plane that covers the map area
  const planeSize = 2.0; // Adjust based on map size
  const cx = mapCenter[0] * COORDINATE_SCALE;
  const cy = mapCenter[1] * COORDINATE_SCALE;

  return (
    <mesh position={[cx, cy, 0.025]} rotation={[0, 0, 0]}>
      <planeGeometry args={[planeSize, planeSize, 1, 1]} />
      <primitive object={heatmapMaterial} ref={materialRef} />
    </mesh>
  );
}

// --- Scene Content ---
const SceneContent: React.FC<{ mapData: MapData; viewState?: ViewState }> = ({
  mapData,
  viewState,
}) => {
  const { structures, structuresWithIcon, mapFloor, mapCenter } = mapData;
  const controlsRef = useRef<any>(null);
  const { camera } = useThree();

  // Animation refs
  const targetPos = useRef(new Vector3());
  const targetLookAt = useRef(new Vector3());
  const isAnimating = useRef(false);

  // Default camera vector and distance used as a baseline for zoom <-> distance mapping
  const DEFAULT_CAMERA_VEC: [number, number, number] = [30, -30, 30];
  const DEFAULT_CAMERA_DIST = Math.sqrt(
    DEFAULT_CAMERA_VEC[0] * DEFAULT_CAMERA_VEC[0] +
      DEFAULT_CAMERA_VEC[1] * DEFAULT_CAMERA_VEC[1] +
      DEFAULT_CAMERA_VEC[2] * DEFAULT_CAMERA_VEC[2]
  );

  const distanceFromZoom = (zoom: number, baseline = DEFAULT_CAMERA_DIST) => {
    return baseline * Math.pow(2, -zoom + 5); // Adjusted baseline zoom
  };

  const toRadians = (v: number) => {
    return (v * Math.PI) / 180;
  };

  // Calculate target camera position based on viewState
  useEffect(() => {
    if (!viewState) return;

    // Check for advanced view state with explicit positions
    if (viewState.advanced) {
      const { cameraPosition, targetPosition } = viewState.advanced;

      // The provided advanced positions seem to be in a different coordinate system or scale?
      // The user example:
      // cameraPosition: [2.14, -0.01, 1.62]
      // targetPosition: [2.56, 1.74, -0.005]
      //
      // Our map coordinates are scaled by COORDINATE_SCALE (1/1000).
      // If the input values are already scaled (e.g. km or similar small units), we might use them directly.
      // Or they might be raw coordinates that need scaling.
      // Looking at the example: "latitude": 1748.28... "longitude": 2561.39...
      // And targetPosition: [2.56, 1.74, ...]
      // It looks like targetPosition corresponds to longitude/latitude * 0.001 (approx).
      // 2561 * 0.001 = 2.561.
      // 1748 * 0.001 = 1.748.
      // So the advanced positions are likely already in the scaled world space (or close to it).
      // We should probably use them directly as Three.js world units.

      targetPos.current.set(
        cameraPosition[0],
        cameraPosition[1],
        cameraPosition[2]
      );
      targetLookAt.current.set(
        targetPosition[0],
        targetPosition[1],
        targetPosition[2]
      );
      isAnimating.current = true;
      return;
    }

    // Fallback to legacy calculation if no advanced state
    if (!mapCenter) return;

    const center = mapCenter;
    const targetX = center[0] * COORDINATE_SCALE;
    const targetY = center[1] * COORDINATE_SCALE;
    const targetZ = 0;

    const zoom = viewState.zoom;
    const dist = distanceFromZoom(zoom);

    const bearing = toRadians(viewState.bearing);
    const angle = Math.PI / 2 - bearing;

    const elevation = toRadians(viewState.pitch);

    const xyDist = dist * Math.cos(elevation);

    const camX = targetX + xyDist * Math.cos(angle);
    const camY = targetY + xyDist * Math.sin(angle);
    const camZ = targetZ + dist * Math.sin(elevation);

    targetPos.current.set(camX, camY, camZ);
    targetLookAt.current.set(targetX, targetY, targetZ);
    isAnimating.current = true;
  }, [viewState, mapCenter]);

  // Smooth animation loop
  useFrame((state, delta) => {
    if (isAnimating.current && controlsRef.current) {
      const step = 4 * delta; // Animation speed

      camera.position.lerp(targetPos.current, step);
      controlsRef.current.target.lerp(targetLookAt.current, step);
      controlsRef.current.update();

      // Stop animating when close enough
      if (camera.position.distanceTo(targetPos.current) < 0.01) {
        isAnimating.current = false;
      }
    }
  });

  const roundedStructures = useMemo(() => {
    return structures?.map((s) => {
      const coords: [number, number][] = s.structure.coordinates_x
        .map((x: number, i: number) => [
          x * COORDINATE_SCALE,
          s.structure.coordinates_y[i] * COORDINATE_SCALE,
        ])
        .filter(
          (pt: any): pt is [number, number] =>
            Array.isArray(pt) &&
            pt.length === 2 &&
            typeof pt[0] === "number" &&
            typeof pt[1] === "number"
        );

      const closedCoords: [number, number][] = closeRing(coords);
      let rounded = closedCoords;
      try {
        const polygon = turf.polygon([closedCoords]);
        const buffered = turf.buffer(polygon, 0.5, { units: "meters" });
        rounded =
          buffered?.geometry.type === "Polygon"
            ? (buffered.geometry.coordinates[0] as [number, number][])
            : closedCoords;
      } catch (e) {
        // Fallback
      }

      return { ...s, roundedPolygon: rounded };
    });
  }, [structures]);

  const roundedFloor = useMemo(() => {
    if (!mapFloor || mapFloor.length === 0) return [];
    const closedFloor = closeRing(mapFloor);

    let rounded = closedFloor;
    try {
      const polygon = turf.polygon([closedFloor]);
      const buffered = turf.buffer(polygon, 0.5, { units: "meters" });
      rounded =
        buffered?.geometry.type === "Polygon"
          ? (buffered.geometry.coordinates[0] as [number, number][])
          : closedFloor;
    } catch (e) {
      // Fallback
    }
    return [rounded];
  }, [mapFloor]);

  const center = mapCenter || [0, 0];
  const initialTarget = [
    center[0] * COORDINATE_SCALE,
    center[1] * COORDINATE_SCALE,
    0,
  ];

  // Calculate limits based on current viewState
  const limits = useMemo(() => {
    if (!viewState) return {};

    // If advanced state is used, we might want to calculate limits from the vector angles
    // But for now, let's stick to the pitch/bearing if available, or derive them.
    // The user provided pitch/bearing in the JSON even with advanced, so we can use those.

    const pitch = viewState.pitch;
    // const bearing = viewState.bearing;

    const targetPolar = toRadians(90 - pitch);
    // const targetAzimuth = -toRadians(bearing);

    const delta = toRadians(15); // 15 degrees freedom

    return {
      minPolar: Math.max(0.1, targetPolar - delta),
      maxPolar: Math.min(Math.PI / 2 - 0.1, targetPolar + delta),
      minAzimuth: -Infinity,
      maxAzimuth: Infinity,
    };
  }, [viewState]);

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight
        position={[15, 20, 30]}
        intensity={1.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        target={initialTarget as any}
        // Restrictions
        minPolarAngle={limits.minPolar}
        maxPolarAngle={limits.maxPolar}
        minDistance={0.1} // Adjusted for smaller scale if needed
        maxDistance={100}
      />

      <group>
        {/* Structures */}
        {roundedStructures?.map((s, i) => {
          const hasDepth = !!(s.structure && s.structure.depth);
          const height = (hasDepth ? 35 : 15) * COORDINATE_SCALE;

          let color = s.entityName ? "white" : "white";
          if (
            viewState?.structureColors &&
            s.entityName &&
            viewState.structureColors[s.entityName]
          ) {
            color = viewState.structureColors[s.entityName];
          }

          return (
            <ExtrudedPolygon
              key={i}
              coords={s.roundedPolygon}
              height={height}
              color={color}
              hoverColor="rgba(140, 198, 255)"
              hoverElevation={0.02}
            />
          );
        })}

        {/* Floor */}
        {roundedFloor.map((coords, i) => (
          <ExtrudedPolygon
            key={`floor-${i}`}
            coords={coords}
            height={10 * COORDINATE_SCALE}
            color={viewState?.floorColor || "#f5f5f5"}
          />
        ))}

        {/* Icons */}
        {structuresWithIcon?.map((s, i) => {
          if (!s.structure.icon || !s.structure.logo_center) return null;

          let iconUrl = "/images/icons/default.png";
          if (s.structure.icon === "Entrance")
            iconUrl = "/images/icons/Entrance.png";
          else if (s.structure.icon === "Escalator")
            iconUrl = "/images/icons/Escalator.png";
          else if (s.structure.icon === "Elevator")
            iconUrl = "/images/icons/Elevator.png";

          return (
            <IconBillboard
              key={`icon-${i}`}
              position={[
                s.structure.logo_center[0] * COORDINATE_SCALE,
                s.structure.logo_center[1] * COORDINATE_SCALE,
                50 * COORDINATE_SCALE,
              ]}
              url={iconUrl}
              size={50 * COORDINATE_SCALE}
              color={s.structure.icon === "Entrance" ? "#ff9800" : undefined}
            />
          );
        })}

        {/* Arc Layer */}
        {viewState?.showArcs && <ArcLayer structures={structures} />}

        {/* Flow Path Layer */}
        {viewState?.showFlowPath && <FlowPathLayer structures={structures} />}

        {/* Heatmap Layer */}
        {viewState?.showHeatmap && (
          <HeatmapLayer structures={structures} mapCenter={mapCenter} />
        )}
      </group>
    </>
  );
};

const ThreeMap: React.FC<ThreeMapProps> = ({
  mapData,
  className,
  viewState,
}) => {
  const { mapCenter } = mapData;

  // Initial camera position
  const center = mapCenter || [0, 0];
  const target = [
    center[0] * COORDINATE_SCALE,
    center[1] * COORDINATE_SCALE,
    0,
  ];
  const cameraPos = [target[0] + 30, target[1] - 30, 30];

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        shadows
        camera={{
          position: cameraPos as any,
          up: [0, 0, 1],
          fov: 35,
        }}
        gl={{ antialias: true, toneMapping: LinearToneMapping }}
      >
        <SceneContent mapData={mapData} viewState={viewState} />
      </Canvas>
    </div>
  );
};

export default ThreeMap;
