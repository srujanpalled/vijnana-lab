/**
 * UltraApparatus.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Ultra-realistic, publication-quality 3D chemistry lab apparatus built with
 * physically-based materials, precise real-world proportions, and dynamic
 * micro-animations. Replaces the primitive ChemApparatus.tsx models.
 *
 * Components exported:
 *   UltraBeaker, UltraConicalFlask, UltraRoundBottomFlask, UltraBunsenBurner,
 *   UltraDigitalBalance, UltraReagentBottle, UltraTestTubeRack,
 *   UltraDropper, UltraSpatula, UltraTestTube, UltraBurette,
 *   UltraWatchGlass, UltraFunnelStand
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import {
  ultraGlass, ultraLiquid, ultraOpaqueLiquid, ultraSteel, ultraPolishedSteel,
  ultraCastIron, ultraBrass, ultraKnurl, ultraRubber, ultraWood, ultraCeramic,
  ultraDisplay, ultraEmissive, ultraPaper
} from './UltraMaterials';

// ─────────────────────────────────────────────────────────────────────────────
// HELPER: Build a smooth lathe profile from a set of 2D points
// ─────────────────────────────────────────────────────────────────────────────
function useLathePts(pts: [number, number][], segments = 48) {
  return useMemo(() => {
    const vectors = pts.map(([x, y]) => new THREE.Vector2(x, y));
    return new THREE.LatheGeometry(vectors, segments);
  }, []); // eslint-disable-line
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER: Graduation ring tick marks as InstancedMesh for performance
// ─────────────────────────────────────────────────────────────────────────────
const GraduationRings: React.FC<{
  yStart: number;
  yEnd: number;
  radius: number;
  count: number;
  majorEvery?: number;
}> = ({ yStart, yEnd, radius, count, majorEvery = 5 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  React.useEffect(() => {
    if (!mesh.current) return;
    const step = (yEnd - yStart) / count;
    for (let i = 0; i <= count; i++) {
      const isMajor = i % majorEvery === 0;
      dummy.position.set(0, yStart + i * step, 0);
      dummy.scale.set(isMajor ? 1.0 : 0.65, 1, isMajor ? 1.0 : 0.65);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
      mesh.current.setColorAt(i, new THREE.Color(isMajor ? '#ffffff' : '#aabbcc'));
    }
    mesh.current.instanceMatrix.needsUpdate = true;
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;
  }, [yStart, yEnd, radius, count]);

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count + 1]} castShadow>
      <torusGeometry args={[radius + 0.002, 0.004, 6, 40]} />
      <meshStandardMaterial color="#c8dae8" metalness={0} roughness={0.9} transparent opacity={0.7} />
    </instancedMesh>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA BEAKER  (Griffin style, 250 mL reference geometry)
// ─────────────────────────────────────────────────────────────────────────────
export const UltraBeaker: React.FC<{
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  fluidLevel?: number;   // 0–1
  fluidColor?: string;
  label?: string;
  opacity?: number;
}> = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, fluidLevel = 0.45, fluidColor = '#34d399', label, opacity }) => {
  // Real Griffin beaker profile: slightly outward taper, thick flat base, spout lip
  const bodyGeo = useLathePts([
    [0.72, -1.00],  // base outer
    [0.72, -0.97],  // base top
    [0.75, -0.94],  // outward base fillet
    [0.76,  0.78],  // body wall (very slight outward taper)
    [0.80,  0.85],  // flare to spout
    [0.82,  0.90],  // lip inner
    [0.85,  0.94],  // pour spout peak
    [0.82,  0.96],  // back taper
    [0.79,  1.00],  // rim top
  ], 56);

  const baseGeo = useMemo(() => new THREE.CylinderGeometry(0.72, 0.72, 0.04, 48), []);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Glass body (open cylinder via LatheGeometry) */}
      <mesh geometry={bodyGeo} castShadow>
        {ultraGlass('#d4eef9', opacity ?? 0.18)}
      </mesh>

      {/* Flat base disc */}
      <mesh geometry={baseGeo} position={[0, -0.98, 0]} castShadow receiveShadow>
        {ultraGlass('#cde8f5', 0.35)}
      </mesh>

      {/* Fluid fill */}
      {fluidLevel > 0 && (() => {
        const fluidH = fluidLevel * 1.75;
        return (
          <>
            <mesh position={[0, -1.0 + fluidH / 2, 0]} castShadow>
              <cylinderGeometry args={[0.73, 0.73, fluidH, 48]} />
              {ultraLiquid(fluidColor, 0.82)}
            </mesh>
            {/* Meniscus cap */}
            <mesh position={[0, -1.0 + fluidH, 0]}>
              <sphereGeometry args={[0.73, 48, 8, 0, Math.PI * 2, 0, 0.25]} />
              {ultraLiquid(fluidColor, 0.7)}
            </mesh>
          </>
        );
      })()}

      {/* Graduation marks */}
      <GraduationRings yStart={-0.7} yEnd={0.6} radius={0.77} count={20} majorEvery={5} />

      {/* Label */}
      {label && (
        <group position={[0, -0.1, 0.78]}>
          <mesh>
            <planeGeometry args={[0.55, 0.28]} />
            {ultraPaper()}
          </mesh>
          <Text position={[0, 0.05, 0.005]} fontSize={0.08} color="#0f172a" anchorX="center" anchorY="middle" font={undefined}>
            {label}
          </Text>
          <Text position={[0, -0.07, 0.005]} fontSize={0.052} color="#334155" anchorX="center" anchorY="middle" font={undefined}>
            250 mL
          </Text>
        </group>
      )}

      {/* Caustic/refraction glow beneath */}
      {fluidLevel > 0 && <pointLight position={[0, -0.9, 0]} intensity={0.3} distance={1.5} color={fluidColor} />}
    </group>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA CONICAL FLASK (Erlenmeyer, 250 mL reference)
// ─────────────────────────────────────────────────────────────────────────────
export const UltraConicalFlask: React.FC<{
  position?: [number, number, number];
  scale?: number;
  fluidLevel?: number;
  fluidColor?: string;
  label?: string;
  stopper?: boolean;
}> = ({ position = [0, 0, 0], scale = 1, fluidLevel = 0.38, fluidColor = '#60a5fa', label, stopper = false }) => {
  const bodyGeo = useLathePts([
    [0.00, -0.90],  // base center
    [1.00, -0.90],  // base outer edge
    [1.02, -0.85],  // base fillet
    [1.02,  0.10],  // wide body
    [0.65,  0.55],  // shoulder taper start
    [0.28,  1.05],  // shoulder taper end / neck base
    [0.27,  1.45],  // neck
    [0.29,  1.55],  // rim bead
    [0.27,  1.60],  // top of rim
  ], 56);

  const fluidH = fluidLevel * 1.7;

  return (
    <group position={position} scale={scale}>
      <mesh geometry={bodyGeo} castShadow>
        {ultraGlass('#d2ecf8', 0.16)}
      </mesh>

      {/* Flat base */}
      <mesh position={[0, -0.875, 0]}>
        <cylinderGeometry args={[1.01, 1.01, 0.055, 52]} />
        {ultraGlass('#c8e8f5', 0.3)}
      </mesh>

      {/* Fluid */}
      {fluidLevel > 0 && (() => {
        // Taper fluid shape to match flask cone
        const topRad = Math.min(1.01, 0.28 + (1.01 - 0.28) * (1 - fluidLevel * 0.9));
        return (
          <mesh position={[0, -0.875 + fluidH / 2, 0]}>
            <cylinderGeometry args={[topRad * 0.96, 1.0, fluidH, 48]} />
            {ultraLiquid(fluidColor, 0.80)}
          </mesh>
        );
      })()}

      {/* Graduation rings on body */}
      <GraduationRings yStart={-0.6} yEnd={0.3} radius={0.85} count={12} majorEvery={3} />

      {/* Label sticker */}
      {label && (
        <group position={[0, -0.25, 1.03]}>
          <mesh rotation={[0, 0, 0]}>
            <planeGeometry args={[0.6, 0.25]} />
            {ultraPaper()}
          </mesh>
          <Text position={[0, 0.04, 0.005]} fontSize={0.08} color="#0f172a" anchorX="center" anchorY="middle">{label}</Text>
        </group>
      )}

      {/* Rubber stopper */}
      {stopper && (
        <mesh position={[0, 1.68, 0]}>
          <cylinderGeometry args={[0.26, 0.28, 0.18, 24]} />
          {ultraRubber('#e05050')}
        </mesh>
      )}

      {fluidLevel > 0 && <pointLight position={[0, -0.5, 0]} intensity={0.25} distance={2} color={fluidColor} />}
    </group>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA ROUND BOTTOM FLASK
// ─────────────────────────────────────────────────────────────────────────────
export const UltraRoundBottomFlask: React.FC<{
  position?: [number, number, number];
  scale?: number;
  fluidLevel?: number;
  fluidColor?: string;
}> = ({ position = [0, 0, 0], scale = 1, fluidLevel = 0.35, fluidColor = '#f59e0b' }) => {
  const bodyGeo = useLathePts([
    [0.00, -0.98],
    [0.42, -0.90],
    [0.78, -0.65],
    [0.98,  0.00],
    [0.78,  0.65],
    [0.42,  0.82],
    [0.26,  0.92],
    [0.26,  1.55],
    [0.28,  1.62],
    [0.26,  1.68],
  ], 56);

  return (
    <group position={position} scale={scale}>
      <mesh geometry={bodyGeo} castShadow>
        {ultraGlass('#d4eef9', 0.15)}
      </mesh>

      {fluidLevel > 0 && (
        <>
          <mesh position={[0, -0.98 + fluidLevel * 0.85, 0]}>
            <sphereGeometry args={[0.97 * 0.97, 48, 20, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
            {ultraLiquid(fluidColor, 0.78)}
          </mesh>
          <pointLight position={[0, 0, 0]} intensity={0.3} distance={2} color={fluidColor} />
        </>
      )}
    </group>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA BUNSEN BURNER
// ─────────────────────────────────────────────────────────────────────────────
export const UltraBunsenBurner: React.FC<{
  position?: [number, number, number];
  active?: boolean;
  airOpen?: number; // 0=closed(yellow), 1=open(blue)
}> = ({ position = [0, 0, 0], active = true, airOpen = 0.7 }) => {
  const outerFlame = useRef<THREE.Mesh>(null);
  const innerFlame = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (outerFlame.current && active) {
      outerFlame.current.scale.x = 1 + Math.sin(t * 18 + 0.5) * 0.07;
      outerFlame.current.scale.y = 1 + Math.sin(t * 22) * 0.09;
      outerFlame.current.scale.z = 1 + Math.sin(t * 15 + 1.2) * 0.06;
    }
    if (innerFlame.current && active) {
      innerFlame.current.scale.x = 1 + Math.cos(t * 25) * 0.05;
      innerFlame.current.scale.y = 1 + Math.cos(t * 30) * 0.06;
    }
    if (lightRef.current && active) {
      lightRef.current.intensity = 2.5 + Math.sin(t * 20) * 0.5;
    }
  });

  const flameOuter = airOpen > 0.4 ? '#2563eb' : '#f97316';
  const flameInner = airOpen > 0.4 ? '#93c5fd' : '#fbbf24';
  const flameTip   = airOpen > 0.4 ? '#e0f2fe' : '#fef9c3';

  return (
    <group position={position}>
      {/* Heavy cast iron base with vent slots */}
      <mesh position={[0, 0.08, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.55, 0.70, 0.17, 32]} />
        {ultraCastIron()}
      </mesh>
      {/* Vent slot cuts (visual only - thin rings) */}
      {[0, 60, 120, 180, 240, 300].map(deg => (
        <mesh key={deg} position={[Math.cos(deg * Math.PI / 180) * 0.36, 0.08, Math.sin(deg * Math.PI / 180) * 0.36]}>
          <boxGeometry args={[0.04, 0.14, 0.10]} />
          <meshStandardMaterial color="#111820" />
        </mesh>
      ))}

      {/* Gas inlet tube from base */}
      <mesh position={[0.55, 0.08, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.22, 16]} />
        {ultraSteel('#8090a0', 0.35, 0.7)}
      </mesh>

      {/* Rotating air collar */}
      <mesh position={[0, 0.38, 0]} castShadow>
        <cylinderGeometry args={[0.115, 0.115, 0.22, 24]} />
        {ultraSteel('#718090', 0.45, 0.6)}
      </mesh>
      {/* Air hole slots on collar */}
      {[0, 90, 180, 270].map(deg => (
        <mesh key={deg} position={[Math.cos(deg * Math.PI / 180) * 0.116, 0.38, Math.sin(deg * Math.PI / 180) * 0.116]}>
          <boxGeometry args={[0.025, 0.12, 0.025]} />
          <meshStandardMaterial color="#060a10" />
        </mesh>
      ))}

      {/* Main barrel */}
      <mesh position={[0, 0.85, 0]} castShadow>
        <cylinderGeometry args={[0.10, 0.115, 0.94, 24]} />
        {ultraSteel('#8898a8', 0.30, 0.75)}
      </mesh>

      {/* Top chimney collar (fine serrations visible) */}
      <mesh position={[0, 1.33, 0]}>
        <cylinderGeometry args={[0.105, 0.10, 0.04, 24]} />
        {ultraSteel('#aabbc8', 0.2, 0.9)}
      </mesh>

      {/* FLAME — active */}
      {active && (
        <group position={[0, 1.37, 0]}>
          {/* Outer mantle */}
          <mesh ref={outerFlame} castShadow>
            <coneGeometry args={[0.18, 0.80, 20]} />
            <meshStandardMaterial color={flameOuter} transparent opacity={0.52} emissive={flameOuter} emissiveIntensity={1.5} depthWrite={false} />
          </mesh>
          {/* Inner reaction zone */}
          <mesh ref={innerFlame} position={[0, 0.05, 0]} scale={0.55}>
            <coneGeometry args={[0.13, 0.50, 16]} />
            <meshStandardMaterial color={flameInner} transparent opacity={0.72} emissive={flameInner} emissiveIntensity={2.5} depthWrite={false} />
          </mesh>
          {/* Luminous tip */}
          <mesh position={[0, 0.28, 0]} scale={[0.3, 0.4, 0.3]}>
            <sphereGeometry args={[0.12, 12, 8]} />
            <meshStandardMaterial color={flameTip} transparent opacity={0.85} emissive={flameTip} emissiveIntensity={3} depthWrite={false} />
          </mesh>
          {/* Dynamic point light */}
          <pointLight ref={lightRef} color={flameOuter} intensity={2.5} distance={3.5} decay={2} />
        </group>
      )}
    </group>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA DIGITAL BALANCE (Analytical, 0.001 g precision)
// ─────────────────────────────────────────────────────────────────────────────
export const UltraDigitalBalance: React.FC<{
  position?: [number, number, number];
  weight?: number;
}> = ({ position = [0, 0, 0], weight = 0 }) => (
  <group position={position}>
    {/* Base body */}
    <mesh position={[0, 0.16, 0]} castShadow receiveShadow>
      <boxGeometry args={[2.6, 0.32, 2.2]} />
      {ultraCeramic()}
    </mesh>
    {/* Front panel bevel */}
    <mesh position={[0, 0.30, 1.08]} rotation={[0.28, 0, 0]}>
      <boxGeometry args={[2.58, 0.22, 0.04]} />
      {ultraCeramic()}
    </mesh>
    {/* Weighing pan support pillar */}
    <mesh position={[0, 0.42, 0]}>
      <cylinderGeometry args={[0.06, 0.06, 0.14, 16]} />
      {ultraPolishedSteel()}
    </mesh>
    {/* Weighing pan */}
    <mesh position={[0, 0.51, 0]} castShadow>
      <cylinderGeometry args={[0.82, 0.82, 0.04, 48]} />
      {ultraPolishedSteel()}
    </mesh>
    {/* Pan rim */}
    <mesh position={[0, 0.53, 0]}>
      <torusGeometry args={[0.82, 0.015, 8, 48]} />
      {ultraPolishedSteel()}
    </mesh>
    {/* Display screen housing */}
    <mesh position={[0, 0.32, 1.09]}>
      <boxGeometry args={[1.65, 0.28, 0.04]} />
      {ultraDisplay()}
    </mesh>
    {/* Weight readout */}
    <Text position={[0, 0.32, 1.12]} fontSize={0.12} color="#00ffcc" anchorX="center" anchorY="middle">
      {weight.toFixed(4)} g
    </Text>
    {/* Brand model text */}
    <Text position={[-0.6, 0.32, 1.12]} fontSize={0.06} color="#1a9e80" anchorX="center" anchorY="middle">
      AE-200
    </Text>
    {/* Wind shield frame (4 glass panels) */}
    {[
      { rot: [0, 0, 0],           pos: [0, 0.78, 1.08]   as [number,number,number], size: [2.54, 0.7, 0.02] as [number,number,number] },
      { rot: [0, Math.PI, 0],     pos: [0, 0.78, -1.06]  as [number,number,number], size: [2.54, 0.7, 0.02] as [number,number,number] },
      { rot: [0, Math.PI / 2, 0], pos: [1.28, 0.78, 0]   as [number,number,number], size: [2.14, 0.7, 0.02] as [number,number,number] },
      { rot: [0, -Math.PI/ 2, 0], pos: [-1.28, 0.78, 0]  as [number,number,number], size: [2.14, 0.7, 0.02] as [number,number,number] },
    ].map((p, i) => (
      <mesh key={i} position={p.pos} rotation={p.rot as any}>
        <boxGeometry args={p.size} />
        {ultraGlass('#cceeff', 0.12)}
      </mesh>
    ))}
  </group>
);

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA REAGENT BOTTLE (Narrow-mouth, 500 mL)
// ─────────────────────────────────────────────────────────────────────────────
export const UltraReagentBottle: React.FC<{
  position?: [number, number, number];
  scale?: number;
  liquidColor?: string;
  label?: string;
  formulaText?: string;
  onPointerDown?: (e: any) => void;
}> = ({ position = [0, 0, 0], scale = 1, liquidColor = '#3b82f6', label = 'HCl', formulaText, onPointerDown }) => {
  const bodyGeo = useLathePts([
    [0.00, -0.85],
    [0.40, -0.85],
    [0.42, -0.80],
    [0.42,  0.30],
    [0.40,  0.50],  // shoulder
    [0.20,  0.72],
    [0.14,  0.78],  // neck
    [0.14,  1.10],
    [0.16,  1.14],  // thread start (visual bump)
    [0.15,  1.25],
    [0.14,  1.30],
  ], 40);

  return (
    <group position={position} scale={scale} onPointerDown={onPointerDown}>
      {/* Bottle body */}
      <mesh geometry={bodyGeo} castShadow>
        {ultraGlass('#d0e8f5', 0.20)}
      </mesh>
      {/* Base disc */}
      <mesh position={[0, -0.825, 0]}>
        <cylinderGeometry args={[0.40, 0.40, 0.05, 40]} />
        {ultraGlass('#c8e4f5', 0.30)}
      </mesh>
      {/* Liquid inside */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.80, 40]} />
        {ultraLiquid(liquidColor, 0.50)}
      </mesh>
      {/* Ground glass stopper */}
      <mesh position={[0, 1.40, 0]}>
        <cylinderGeometry args={[0.13, 0.15, 0.22, 24]} />
        {ultraGlass('#ddeeff', 0.40)}
      </mesh>
      {/* Stopper knob */}
      <mesh position={[0, 1.54, 0]}>
        <sphereGeometry args={[0.09, 16, 12]} />
        {ultraGlass('#d5e8f5', 0.35)}
      </mesh>
      {/* Label */}
      <group position={[0, 0.10, 0.43]}>
        <mesh>
          <planeGeometry args={[0.56, 0.45]} />
          {ultraPaper()}
        </mesh>
        <Text position={[0, 0.08, 0.005]} fontSize={0.10} color="#0f172a" anchorX="center" anchorY="middle" fontWeight="bold">
          {label}
        </Text>
        {formulaText && (
          <Text position={[0, -0.06, 0.005]} fontSize={0.065} color="#1e3a5f" anchorX="center" anchorY="middle">
            {formulaText}
          </Text>
        )}
        <Text position={[0, -0.16, 0.005]} fontSize={0.05} color="#475569" anchorX="center" anchorY="middle">
          500 mL • AR Grade
        </Text>
      </group>
    </group>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA TEST TUBE RACK (Hardwood, 6 positions)
// ─────────────────────────────────────────────────────────────────────────────
export const UltraTestTubeRack: React.FC<{
  position?: [number, number, number];
  slots?: number;
}> = ({ position = [0, 0, 0], slots = 5 }) => {
  const spacing = 0.38;
  const halfWidth = ((slots - 1) * spacing) / 2;
  const rackWidth = halfWidth * 2 + 0.8;
  const rackDepth = 0.75;

  // Acrylic rack color — translucent blue-grey like a real lab rack
  const rackColor = '#3a4a5c';

  return (
    <group position={position}>
      {/* ── TOP PLATE (thick, with drilled holes) ── */}
      <mesh position={[0, 0.52, 0]} castShadow receiveShadow>
        <boxGeometry args={[rackWidth, 0.10, rackDepth]} />
        <meshPhysicalMaterial
          color={rackColor}
          roughness={0.35}
          metalness={0.05}
          clearcoat={0.6}
          clearcoatRoughness={0.2}
        />
      </mesh>
      {/* Drilled holes in top plate */}
      {Array.from({ length: slots }, (_, i) => {
        const x = -halfWidth + i * spacing;
        return (
          <mesh key={`hole-top-${i}`} position={[x, 0.58, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.14, 0.018, 8, 24]} />
            <meshStandardMaterial color="#1a2530" roughness={0.7} />
          </mesh>
        );
      })}

      {/* ── MIDDLE SUPPORT PLATE (thinner, structural) ── */}
      <mesh position={[0, -0.10, 0]} castShadow>
        <boxGeometry args={[rackWidth, 0.06, rackDepth]} />
        <meshPhysicalMaterial
          color={rackColor}
          roughness={0.38}
          metalness={0.05}
          clearcoat={0.5}
          clearcoatRoughness={0.25}
        />
      </mesh>
      {/* Smaller support holes in middle plate */}
      {Array.from({ length: slots }, (_, i) => {
        const x = -halfWidth + i * spacing;
        return (
          <mesh key={`hole-mid-${i}`} position={[x, -0.065, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.13, 0.014, 8, 20]} />
            <meshStandardMaterial color="#1a2530" roughness={0.7} />
          </mesh>
        );
      })}

      {/* ── BASE PLATE (sturdy bottom) ── */}
      <mesh position={[0, -0.62, 0]} castShadow receiveShadow>
        <boxGeometry args={[rackWidth + 0.1, 0.08, rackDepth + 0.1]} />
        <meshPhysicalMaterial
          color={rackColor}
          roughness={0.3}
          metalness={0.06}
          clearcoat={0.7}
          clearcoatRoughness={0.15}
        />
      </mesh>

      {/* ── VERTICAL SIDE PILLARS (4 corners) ── */}
      {[
        [-rackWidth / 2 + 0.08, 0, -rackDepth / 2 + 0.08],
        [-rackWidth / 2 + 0.08, 0, rackDepth / 2 - 0.08],
        [rackWidth / 2 - 0.08, 0, -rackDepth / 2 + 0.08],
        [rackWidth / 2 - 0.08, 0, rackDepth / 2 - 0.08],
      ].map(([x, _, z], i) => (
        <mesh key={`pillar-${i}`} position={[x, -0.05, z]} castShadow>
          <boxGeometry args={[0.06, 1.08, 0.06]} />
          <meshPhysicalMaterial
            color={rackColor}
            roughness={0.32}
            metalness={0.05}
            clearcoat={0.5}
          />
        </mesh>
      ))}

      {/* ── RUBBER FEET (4 anti-slip pads) ── */}
      {[
        [-rackWidth / 2 + 0.14, -0.68, -rackDepth / 2 + 0.14],
        [-rackWidth / 2 + 0.14, -0.68, rackDepth / 2 - 0.14],
        [rackWidth / 2 - 0.14, -0.68, -rackDepth / 2 + 0.14],
        [rackWidth / 2 - 0.14, -0.68, rackDepth / 2 - 0.14],
      ].map(([x, y, z], i) => (
        <mesh key={`foot-${i}`} position={[x, y, z]}>
          <cylinderGeometry args={[0.06, 0.07, 0.04, 16]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.95} />
        </mesh>
      ))}

      {/* ── EDGE HIGHLIGHT (brand strip on front) ── */}
      <mesh position={[0, 0.52, rackDepth / 2 + 0.001]}>
        <planeGeometry args={[rackWidth * 0.6, 0.035]} />
        <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.3} roughness={0.5} />
      </mesh>
    </group>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA TEST TUBE
// ─────────────────────────────────────────────────────────────────────────────
export const UltraTestTube: React.FC<{
  position?: [number, number, number];
  rotation?: [number, number, number];
  fluidLevel?: number;
  fluidColor?: string;
}> = ({ position = [0, 0, 0], rotation = [0, 0, 0], fluidLevel = 0.4, fluidColor = '#60a5fa' }) => {
  const bodyGeo = useLathePts([
    [0.00, -0.78],
    [0.10, -0.72],
    [0.14, -0.65],
    [0.14,  0.60],
    [0.15,  0.65],
    [0.14,  0.70],
  ], 32);

  return (
    <group position={position} rotation={rotation}>
      <mesh geometry={bodyGeo} castShadow>
        {ultraGlass('#d8eef8', 0.18)}
      </mesh>
      {fluidLevel > 0 && (
        <mesh position={[0, -0.72 + fluidLevel * 1.1, 0]}>
          <cylinderGeometry args={[0.128, 0.128, fluidLevel * 1.4, 32]} />
          {ultraLiquid(fluidColor, 0.80)}
        </mesh>
      )}
    </group>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA DROPPER (Pasteur Pipette)
// ─────────────────────────────────────────────────────────────────────────────
export const UltraDropper: React.FC<{
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  fluidColor?: string;
  isDripping?: boolean;
}> = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, fluidColor = '#ef4444', isDripping = false }) => {
  const dropRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!dropRef.current || !isDripping) return;
    dropRef.current.children.forEach((child, i) => {
      child.position.y -= 0.04 + i * 0.01;
      if (child.position.y < -1.2) child.position.y = 0.05;
    });
  });

  const stemGeo = useLathePts([
    [0.000, 0.00],
    [0.035, 0.05],
    [0.040, 0.65],
    [0.038, 0.70],
    [0.012, 0.85],
    [0.008, 0.92],
  ], 20);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Tapered glass stem */}
      <mesh geometry={stemGeo} castShadow>
        {ultraGlass('#dceef8', 0.22)}
      </mesh>
      {/* Fluid inside stem */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.024, 0.024, 0.48, 16]} />
        {ultraLiquid(fluidColor, 0.70)}
      </mesh>
      {/* Silicone rubber bulb */}
      <mesh position={[0, 1.06, 0]}>
        <capsuleGeometry args={[0.13, 0.22, 16, 20]} />
        {ultraRubber(fluidColor)}
      </mesh>
      {/* Drip drops */}
      <group ref={dropRef}>
        {isDripping && [0, 1, 2].map(i => (
          <mesh key={i} position={[0, -0.25 - i * 0.28, 0]} scale={[1, 1.3, 1]}>
            <sphereGeometry args={[0.022, 10, 10]} />
            {ultraLiquid(fluidColor, 0.9)}
          </mesh>
        ))}
      </group>
    </group>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA SPATULA (Stainless steel lab grade)
// ─────────────────────────────────────────────────────────────────────────────
export const UltraSpatula: React.FC<{
  position?: [number, number, number];
  rotation?: [number, number, number];
  hasPowder?: boolean;
  powderColor?: string;
}> = ({ position = [0, 0, 0], rotation = [0, 0, 0], hasPowder = false, powderColor = '#f8fafc' }) => (
  <group position={position} rotation={rotation}>
    {/* Handle (octagonal cross-section feel via boxGeometry) */}
    <mesh position={[0, 0, 0.82]}>
      <boxGeometry args={[0.085, 0.018, 1.45]} />
      {ultraPolishedSteel()}
    </mesh>
    {/* Flat blade */}
    <mesh position={[0, 0, -0.42]}>
      <boxGeometry args={[0.28, 0.009, 0.50]} />
      {ultraPolishedSteel()}
    </mesh>
    {/* Blade-to-handle ferrule */}
    <mesh position={[0, 0, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.05, 0.05, 0.065, 16]} />
      {ultraSteel('#a0b0c0', 0.2, 0.9)}
    </mesh>
    {/* Powder on blade */}
    {hasPowder && (
      <mesh position={[0, 0.012, -0.42]}>
        <sphereGeometry args={[0.10, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={powderColor} roughness={1.0} />
      </mesh>
    )}
  </group>
);

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA BURETTE (50 mL, with stopcock)
// ─────────────────────────────────────────────────────────────────────────────
export const UltraBurette: React.FC<{
  position?: [number, number, number];
  scale?: number;
  fluidLevel?: number;
  fluidColor?: string;
  stopcockOpen?: boolean;
  isDraining?: boolean;
}> = ({ position = [0, 0, 0], scale = 1, fluidLevel = 0.7, fluidColor = '#a855f7', stopcockOpen = false, isDraining = false }) => {
  const streamRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (streamRef.current) {
      streamRef.current.visible = isDraining;
      if (isDraining) {
        streamRef.current.scale.x = 0.8 + Math.sin(clock.elapsedTime * 30) * 0.2;
      }
    }
  });

  const fluidH = fluidLevel * 4.2;

  return (
    <group position={position} scale={scale}>
      {/* Glass barrel — open top */}
      <mesh castShadow>
        <cylinderGeometry args={[0.16, 0.16, 5.0, 40, 1, true]} />
        {ultraGlass('#d0ecf8', 0.18)}
      </mesh>
      {/* Top rim ring */}
      <mesh position={[0, 2.51, 0]}>
        <torusGeometry args={[0.16, 0.012, 8, 40]} />
        {ultraGlass('#c8e4f5', 0.4)}
      </mesh>
      {/* Fluid column */}
      {fluidLevel > 0 && (
        <mesh position={[0, 2.5 - fluidH / 2, 0]}>
          <cylinderGeometry args={[0.148, 0.148, fluidH, 40]} />
          {ultraOpaqueLiquid(fluidColor, 0.82)}
        </mesh>
      )}
      {/* Graduation rings */}
      <GraduationRings yStart={-2.0} yEnd={2.0} radius={0.162} count={50} majorEvery={5} />
      {/* Tip taper */}
      <mesh position={[0, -2.68, 0]}>
        <cylinderGeometry args={[0.018, 0.028, 0.38, 16]} />
        {ultraGlass('#cce8f5', 0.22)}
      </mesh>
      {/* Stopcock body */}
      <mesh position={[0, -2.46, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.065, 0.065, 0.44, 20]} />
        {ultraGlass('#b8d8f0', 0.35)}
      </mesh>
      {/* Stopcock handle */}
      <mesh position={[0, -2.46, stopcockOpen ? 0.18 : -0.20]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.08, 0.28, 0.04]} />
        {ultraGlass('#a0ccee', 0.5)}
      </mesh>
      {/* Draining stream */}
      <mesh ref={streamRef} position={[0, -2.95, 0]} visible={false}>
        <cylinderGeometry args={[0.008, 0.012, 0.40, 8]} />
        {ultraLiquid(fluidColor, 0.75)}
      </mesh>
    </group>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA WATCH GLASS
// ─────────────────────────────────────────────────────────────────────────────
export const UltraWatchGlass: React.FC<{
  position?: [number, number, number];
}> = ({ position = [0, 0, 0] }) => {
  const geo = useLathePts([
    [0.00,  0.04],
    [0.15,  0.03],
    [0.30,  0.00],
    [0.42, -0.04],
    [0.50, -0.10],
  ], 40);

  return (
    <mesh geometry={geo} position={position} castShadow>
      {ultraGlass('#d8eef8', 0.22)}
    </mesh>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA FUNNEL + STAND
// ─────────────────────────────────────────────────────────────────────────────
export const UltraFunnel: React.FC<{
  position?: [number, number, number];
  scale?: number;
}> = ({ position = [0, 0, 0], scale = 1 }) => {
  const funnelGeo = useLathePts([
    [0.00, -0.80],
    [0.04, -0.72],
    [0.04, -0.48],
    [0.08, -0.42],
    [0.55,  0.45],
    [0.62,  0.50],
    [0.60,  0.52],
  ], 40);

  return (
    <group position={position} scale={scale}>
      <mesh geometry={funnelGeo} castShadow>
        {ultraGlass('#d2ecf9', 0.20)}
      </mesh>
    </group>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA IRON STAND (Retort stand with boss head + clamp)
// ─────────────────────────────────────────────────────────────────────────────
export const UltraIronStand: React.FC<{
  position?: [number, number, number];
  height?: number;
}> = ({ position = [0, 0, 0], height = 3.5 }) => (
  <group position={position}>
    {/* Heavy base plate */}
    <mesh position={[0.4, 0.06, 0]} castShadow receiveShadow>
      <boxGeometry args={[1.8, 0.12, 0.7]} />
      {ultraCastIron()}
    </mesh>
    {/* Vertical rod */}
    <mesh position={[0, height / 2, 0]} castShadow>
      <cylinderGeometry args={[0.055, 0.055, height, 16]} />
      {ultraSteel('#8898a8', 0.28, 0.8)}
    </mesh>
    {/* Boss head (clamp collar) */}
    <mesh position={[0, height * 0.7, 0]}>
      <cylinderGeometry args={[0.12, 0.12, 0.18, 20]} />
      {ultraCastIron()}
    </mesh>
    {/* Boss head setscrew */}
    <mesh position={[0.14, height * 0.7, 0]} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.03, 0.03, 0.06, 12]} />
      {ultraSteel('#9aabb8', 0.2, 0.9)}
    </mesh>
    {/* Horizontal clamp arm */}
    <mesh position={[0.55, height * 0.7, 0]} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.04, 0.04, 1.0, 16]} />
      {ultraSteel('#8898a8', 0.3, 0.8)}
    </mesh>
  </group>
);

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA MAGNETIC STIRRER & HOT PLATE
// ─────────────────────────────────────────────────────────────────────────────
export const UltraMagneticStirrer: React.FC<{
  position?: [number, number, number];
  scale?: number;
  stirring?: boolean;
}> = ({ position = [0, 0, 0], scale = 1, stirring = false }) => {
  const stirBarRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (stirring && stirBarRef.current) {
      stirBarRef.current.rotation.y = clock.elapsedTime * 15;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Base enclosure */}
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.6, 2.8]} />
        <meshPhysicalMaterial color="#e2e8f0" roughness={0.4} metalness={0.1} />
      </mesh>
      {/* Ceramic Hot Plate Top */}
      <mesh position={[0, 0.62, -0.1]} castShadow receiveShadow>
        <cylinderGeometry args={[1.0, 1.0, 0.05, 48]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.3} metalness={0.1} />
      </mesh>
      
      {/* Dials */}
      <mesh position={[-0.6, 0.3, 1.45]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.25, 0.15, 32]} />
        <meshStandardMaterial color="#1e293b" roughness={0.8} />
      </mesh>
      <mesh position={[0.6, 0.3, 1.45]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.25, 0.15, 32]} />
        <meshStandardMaterial color="#1e293b" roughness={0.8} />
      </mesh>

      {/* Stir Bar (This floats slightly above the plate, assume it goes inside a flask placed on top) */}
      <mesh ref={stirBarRef} position={[0, 0.72, -0.1]} castShadow>
         <capsuleGeometry args={[0.04, 0.4, 8, 16]} />
         <meshPhysicalMaterial color="#ffffff" roughness={0.1} metalness={0.05} />
      </mesh>
    </group>
  );
};
