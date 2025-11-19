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
    targetPosition: [number, number, number];
  };
  structureColors?: { [entityName: string]: string };
  floorColor?: string;
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

// --- Scene Content ---
const SceneContent: React.FC<{ mapData: MapData; viewState?: ViewState }> = ({ mapData, viewState }) => {
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

      targetPos.current.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
      targetLookAt.current.set(targetPosition[0], targetPosition[1], targetPosition[2]);
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
          rounded = buffered?.geometry.type === "Polygon"
            ? (buffered.geometry.coordinates[0] as [number, number][])
            : closedCoords;
      } catch(e) {
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
        rounded = buffered?.geometry.type === "Polygon"
            ? (buffered.geometry.coordinates[0] as [number, number][])
            : closedFloor;
    } catch(e) {
        // Fallback
    }
    return [rounded];
  }, [mapFloor]);

  const center = mapCenter || [0, 0];
  const initialTarget = [center[0] * COORDINATE_SCALE, center[1] * COORDINATE_SCALE, 0];

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
        maxAzimuth: Infinity
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
          if (viewState?.structureColors && s.entityName && viewState.structureColors[s.entityName]) {
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
            if (s.structure.icon === "Entrance") iconUrl = "/images/icons/Entrance.png";
            else if (s.structure.icon === "Escalator") iconUrl = "/images/icons/Escalator.png";
            else if (s.structure.icon === "Elevator") iconUrl = "/images/icons/Elevator.png";
            
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
      </group>
    </>
  );
};

const ThreeMap: React.FC<ThreeMapProps> = ({ mapData, className, viewState }) => {
  const { mapCenter } = mapData;
  
  // Initial camera position
  const center = mapCenter || [0, 0];
  const target = [center[0] * COORDINATE_SCALE, center[1] * COORDINATE_SCALE, 0];
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
