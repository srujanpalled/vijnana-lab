/**
 * UltraMicroscopySet.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Publication-quality compound microscope and accessory props for biology labs.
 * Built with accurate anatomical detail: horseshoe base, C-arm, rotating
 * nosepiece with 3 objectives, binocular head, coarse/fine focus knobs, LED
 * illuminator, stage with spring clips, and condenser assembly.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import {
  ultraGlass, ultraSteel, ultraPolishedSteel, ultraCastIron,
  ultraRubber, ultraDisplay
} from '../UltraMaterials';

// ─────────────────────────────────────────────────────────────────────────────
// KNOB — Reusable fine coarse focus knob
// ─────────────────────────────────────────────────────────────────────────────
const FocusKnob: React.FC<{ position: [number, number, number]; size?: number }> = ({ position, size = 1 }) => (
  <group position={position} scale={size}>
    {/* Outer coarse knob */}
    <mesh castShadow>
      <cylinderGeometry args={[0.18, 0.18, 0.28, 32]} />
      {ultraCastIron()}
    </mesh>
    {/* Knurl ridges (x12) */}
    {Array.from({ length: 12 }, (_, i) => {
      const a = (i / 12) * Math.PI * 2;
      return (
        <mesh key={i} position={[Math.cos(a) * 0.18, 0, Math.sin(a) * 0.18]} rotation={[0, -a, 0]}>
          <boxGeometry args={[0.024, 0.28, 0.035]} />
          <meshStandardMaterial color="#161c22" roughness={0.9} metalness={0.4} />
        </mesh>
      );
    })}
    {/* Inner fine knob */}
    <mesh position={[0.32, 0, 0]} castShadow>
      <cylinderGeometry args={[0.12, 0.12, 0.22, 24]} />
      <meshStandardMaterial color="#2a3340" metalness={0.6} roughness={0.5} />
    </mesh>
  </group>
);

// ─────────────────────────────────────────────────────────────────────────────
// OBJECTIVE LENS — one nosepiece objective
// ─────────────────────────────────────────────────────────────────────────────
const Objective: React.FC<{ position: [number, number, number]; magnification: number; color: string }> = ({ position, magnification, color }) => (
  <group position={position}>
    <mesh castShadow>
      <cylinderGeometry args={[0.07, 0.10, 0.32, 20]} />
      <meshStandardMaterial color={color} metalness={0.85} roughness={0.2} />
    </mesh>
    {/* Objective front glass element */}
    <mesh position={[0, -0.17, 0]}>
      <cylinderGeometry args={[0.042, 0.042, 0.02, 16]} />
      {ultraGlass('#b8d8f0', 0.5)}
    </mesh>
    {/* Magnification band */}
    <mesh position={[0, 0.06, 0]}>
      <torusGeometry args={[0.072, 0.008, 8, 24]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} />
    </mesh>
  </group>
);

// ─────────────────────────────────────────────────────────────────────────────
// COMPOUND MICROSCOPE (Ultra-realistic)
// ─────────────────────────────────────────────────────────────────────────────
export const UltraCompoundMicroscope: React.FC<{
  position?: [number, number, number];
  rotation?: [number, number, number];
  isMounted?: boolean;
  nosepieceAngle?: number; // radians, rotate nosepiece
}> = ({ position = [0, 0, 0], rotation = [0, 0, 0], isMounted = false, nosepieceAngle = 0 }) => {
  const nosepieceRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (nosepieceRef.current) {
      nosepieceRef.current.rotation.y = THREE.MathUtils.lerp(nosepieceRef.current.rotation.y, nosepieceAngle, 0.08);
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* ── HORSESHOE BASE ── */}
      <mesh position={[0, 0.10, 0.15]} castShadow receiveShadow>
        <boxGeometry args={[1.30, 0.20, 1.10]} />
        {ultraCastIron()}
      </mesh>
      {/* Base front chamfer */}
      <mesh position={[0, 0.10, 0.68]} rotation={[0.38, 0, 0]} castShadow>
        <boxGeometry args={[1.28, 0.20, 0.20]} />
        {ultraCastIron()}
      </mesh>
      {/* Base rear notch (horseshoe shape suggestion) */}
      <mesh position={[0, 0.10, -0.28]} castShadow>
        <boxGeometry args={[0.65, 0.20, 0.55]} />
        {ultraCastIron()}
      </mesh>

      {/* ── C-ARM / PILLAR ── */}
      {/* Vertical pillar */}
      <mesh position={[0, 1.35, -0.42]} castShadow>
        <boxGeometry args={[0.36, 2.50, 0.36]} />
        {ultraCastIron()}
      </mesh>
      {/* Rack & pinion housing (front of pillar) */}
      <mesh position={[0, 1.35, -0.22]} castShadow>
        <boxGeometry args={[0.30, 2.42, 0.08]} />
        <meshStandardMaterial color="#1a222c" metalness={0.5} roughness={0.7} />
      </mesh>

      {/* Focus knobs (both sides) */}
      <FocusKnob position={[ 0.28, 1.1, -0.42]} />
      <FocusKnob position={[-0.28, 1.1, -0.42]} />

      {/* ── STAGE ── */}
      <group position={[0, 1.08, 0.08]}>
        {/* Stage plate */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.20, 0.055, 1.20]} />
          <meshStandardMaterial color="#101820" roughness={0.8} metalness={0.2} />
        </mesh>
        {/* Stage aperture */}
        <mesh position={[0, 0.0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.07, 24]} />
          <meshStandardMaterial color="#060c14" />
        </mesh>
        {/* Stage translation knobs */}
        <mesh position={[0.72, -0.02, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.06, 0.06, 0.20, 16]} />
          {ultraSteel('#9aabb8', 0.3, 0.8)}
        </mesh>
        <mesh position={[0, -0.02, 0.72]}>
          <cylinderGeometry args={[0.06, 0.06, 0.20, 16]} />
          {ultraSteel('#9aabb8', 0.3, 0.8)}
        </mesh>
        {/* Spring stage clips */}
        {[[-0.30, 0.14], [0.30, 0.14]].map(([x, z], i) => (
          <mesh key={i} position={[x, 0.04, z as number]}>
            <boxGeometry args={[0.22, 0.04, 0.08]} />
            {ultraSteel('#8898a8', 0.40, 0.7)}
          </mesh>
        ))}
        {/* Specimen slide */}
        {isMounted && (
          <mesh position={[0, 0.038, 0.06]} castShadow>
            <boxGeometry args={[0.82, 0.022, 0.28]} />
            {ultraGlass('#e2ecf5', 0.35)}
          </mesh>
        )}
      </group>

      {/* ── CONDENSER ASSEMBLY ── */}
      <mesh position={[0, 0.75, 0.08]} castShadow>
        <cylinderGeometry args={[0.11, 0.13, 0.28, 20]} />
        <meshStandardMaterial color="#1c2430" metalness={0.6} roughness={0.5} />
      </mesh>
      {/* Condenser iris ring */}
      <mesh position={[0, 0.64, 0.08]}>
        <torusGeometry args={[0.13, 0.025, 8, 24]} />
        {ultraCastIron()}
      </mesh>
      {/* LED illuminator */}
      <mesh position={[0, 0.56, 0.08]}>
        <cylinderGeometry args={[0.09, 0.09, 0.12, 20]} />
        <meshStandardMaterial color="#0f1820" metalness={0.7} roughness={0.3} />
      </mesh>
      <pointLight position={[0, 0.60, 0.08]} intensity={1.8} distance={3} color="#fff8e8" decay={2} />

      {/* ── ROTATING NOSEPIECE ── */}
      <group ref={nosepieceRef} position={[0, 1.78, 0.12]}>
        {/* Nosepiece disc */}
        <mesh castShadow>
          <cylinderGeometry args={[0.25, 0.28, 0.10, 32]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.4} roughness={0.3} />
        </mesh>
        {/* 3 Objectives at 0°, 120°, 240° */}
        {[
          { angle: 0,               color: '#f59e0b', mag: 10  },
          { angle: 2 * Math.PI / 3, color: '#3b82f6', mag: 40  },
          { angle: 4 * Math.PI / 3, color: '#ef4444', mag: 100 },
        ].map(({ angle, color, mag }) => (
          <Objective
            key={mag}
            magnification={mag}
            color={color}
            position={[Math.sin(angle) * 0.18, -0.20, Math.cos(angle) * 0.18]}
          />
        ))}
      </group>

      {/* ── ARM UPPER / BODY TUBE HOLDER ── */}
      <mesh position={[0, 2.30, -0.22]} castShadow>
        <boxGeometry args={[0.36, 0.36, 0.44]} />
        {ultraCastIron()}
      </mesh>

      {/* ── BINOCULAR HEAD ── */}
      <group position={[0, 2.50, 0.10]} rotation={[-0.28, 0, 0]}>
        {/* Head body */}
        <mesh castShadow>
          <boxGeometry args={[0.55, 0.38, 0.50]} />
          {ultraCastIron()}
        </mesh>
        {/* Left eyepiece tube */}
        <mesh position={[-0.18, 0.28, 0.15]} rotation={[-0.22, 0, 0]} castShadow>
          <cylinderGeometry args={[0.085, 0.085, 0.65, 20]} />
          <meshStandardMaterial color="#1c2430" metalness={0.7} roughness={0.4} />
        </mesh>
        {/* Right eyepiece tube */}
        <mesh position={[ 0.18, 0.28, 0.15]} rotation={[-0.22, 0, 0]} castShadow>
          <cylinderGeometry args={[0.085, 0.085, 0.65, 20]} />
          <meshStandardMaterial color="#1c2430" metalness={0.7} roughness={0.4} />
        </mesh>
        {/* Left eyepiece lens + rubber eyeguard */}
        <mesh position={[-0.18, 0.62, 0.27]} rotation={[-0.22, 0, 0]}>
          <cylinderGeometry args={[0.065, 0.065, 0.14, 16]} />
          {ultraRubber('#1a1a1a')}
        </mesh>
        {/* Right eyepiece lens + rubber eyeguard */}
        <mesh position={[ 0.18, 0.62, 0.27]} rotation={[-0.22, 0, 0]}>
          <cylinderGeometry args={[0.065, 0.065, 0.14, 16]} />
          {ultraRubber('#1a1a1a')}
        </mesh>
        {/* Diopter adjustment ring (left) */}
        <mesh position={[-0.18, 0.36, 0.18]} rotation={[-0.22, 0, 0]}>
          <torusGeometry args={[0.086, 0.015, 8, 20]} />
          {ultraSteel('#9ab0c0', 0.35, 0.8)}
        </mesh>
        {/* Interpupillary distance scale */}
        <Text position={[0, 0.20, 0.28]} fontSize={0.022} color="#aabbcc" anchorX="center">
          55–75 mm
        </Text>
      </group>

      {/* Brand label */}
      <group position={[0, 1.35, -0.23]}>
        <mesh>
          <planeGeometry args={[0.28, 0.10]} />
          <meshStandardMaterial color="#e8f0f8" roughness={0.8} />
        </mesh>
        <Text position={[0, 0, 0.005]} fontSize={0.035} color="#0f172a" anchorX="center" anchorY="middle">
          OLYMPUS CX23
        </Text>
      </group>
    </group>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA GLASS SLIDE
// ─────────────────────────────────────────────────────────────────────────────
export const UltraGlassSlide: React.FC<{
  position?: [number, number, number];
  rotation?: [number, number, number];
  specimenColor?: string;
}> = ({ position = [0, 0, 0], rotation = [0, 0, 0], specimenColor }) => (
  <group position={position} rotation={rotation}>
    <mesh castShadow receiveShadow>
      <boxGeometry args={[2.55, 0.040, 0.82]} />
      {ultraGlass('#e8f2fb', 0.30)}
    </mesh>
    {/* Cover slip */}
    <mesh position={[0, 0.028, 0]}>
      <boxGeometry args={[0.65, 0.012, 0.65]} />
      {ultraGlass('#f0f8ff', 0.20)}
    </mesh>
    {/* Specimen dot */}
    {specimenColor && (
      <mesh position={[0, 0.032, 0]}>
        <circleGeometry args={[0.18, 24]} />
        <meshStandardMaterial color={specimenColor} transparent opacity={0.55} side={THREE.DoubleSide} />
      </mesh>
    )}
  </group>
);

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA COVERSLIP (standalone)
// ─────────────────────────────────────────────────────────────────────────────
export const UltraCoverslip: React.FC<{ position?: [number, number, number] }> = ({ position = [0, 0, 0] }) => (
  <mesh position={position} castShadow>
    <boxGeometry args={[0.65, 0.010, 0.65]} />
    {ultraGlass('#eef5fc', 0.18)}
  </mesh>
);

// ─────────────────────────────────────────────────────────────────────────────
// ULTRA DROPPER (Biology grade, same as chemistry but re-exported for clarity)
// ─────────────────────────────────────────────────────────────────────────────
export { UltraDropper } from '../UltraApparatus';

// ─────────────────────────────────────────────────────────────────────────────
// MICROSCOPE HUD OVERLAY (CSS, unchanged — still best approach for overlay)
// ─────────────────────────────────────────────────────────────────────────────
export const UltraMicroscopeHUD: React.FC<{ magnification?: number }> = ({ magnification = 40 }) => (
  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10 }}>
    {/* Vignette */}
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 32%, rgba(0,0,0,0.50) 58%, rgba(0,0,0,0.94) 78%)' }} />
    {/* Crosshairs */}
    <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'rgba(100,210,255,0.12)' }} />
    <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'rgba(100,210,255,0.12)' }} />
    {/* Scale bar */}
    {[
      { top: '48.5%', left: '16%' }, { top: '48.5%', right: '16%' },
      { top: '16%',  left: '49%'  }, { bottom: '16%', left: '49%' }
    ].map((s, i) => (
      <div key={i} style={{ position: 'absolute', ...s, width: i < 2 ? 16 : 1, height: i < 2 ? 1 : 16, background: 'rgba(100,210,255,0.22)' }} />
    ))}
    {/* Objective info */}
    <div style={{ position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 18, alignItems: 'center' }}>
      <span style={{ fontSize: 9, fontFamily: 'monospace', color: 'rgba(100,210,255,0.40)', letterSpacing: 3, textTransform: 'uppercase' }}>
        {magnification}× Objective
      </span>
      <span style={{ width: 32, height: 1, background: 'rgba(100,210,255,0.20)' }} />
      <span style={{ fontSize: 9, fontFamily: 'monospace', color: 'rgba(100,210,255,0.28)', letterSpacing: 2 }}>
        {20 / magnification * 1000 | 0} µm / div
      </span>
    </div>
    {/* Objective color indicator */}
    <div style={{ position: 'absolute', top: 18, right: 22, display: 'flex', flexDirection: 'column', gap: 4 }}>
      {[{ mag: 10, color: '#f59e0b' }, { mag: 40, color: '#3b82f6' }, { mag: 100, color: '#ef4444' }].map(o => (
        <div key={o.mag} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: o.color, opacity: o.mag === magnification ? 1 : 0.25 }} />
          <span style={{ fontSize: 8, fontFamily: 'monospace', color: o.mag === magnification ? o.color : 'rgba(255,255,255,0.2)', letterSpacing: 1 }}>
            {o.mag}×
          </span>
        </div>
      ))}
    </div>
  </div>
);
