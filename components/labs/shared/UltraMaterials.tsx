/**
 * UltraMaterials.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Centralized physically-based rendering (PBR) material factory for all
 * Vijnana Lab apparatus. Every material is purely procedural — no external
 * texture files are required.
 *
 * Design principles:
 *  • Glass uses meshPhysicalMaterial with real IOR (1.52) + clearcoat
 *  • Liquids have transmission + subtle metalness shimmer for meniscus effect
 *  • Metals use high metalness + tuned roughness matching real instruments
 *  • All materials are React elements (JSX) so they can be dropped inline
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from 'react';
import * as THREE from 'three';

// ─── GLASS VARIANTS ──────────────────────────────────────────────────────────

/** Standard borosilicate lab glass (beakers, flasks, test tubes) */
export const ultraGlass = (
  color = '#d4eaf7',
  opacity = 0.18,
  ior = 1.52,
  thickness = 0.3
) => (
  <meshPhysicalMaterial
    color={color}
    transmission={0.96}
    opacity={opacity}
    transparent
    ior={ior}
    thickness={thickness}
    roughness={0.04}
    metalness={0.04}
    clearcoat={1.0}
    clearcoatRoughness={0.04}
    reflectivity={0.5}
    envMapIntensity={2.5}
    side={THREE.DoubleSide}
    depthWrite={false}
  />
);

/** Optical glass (prisms, lenses) — higher transmission, sharper reflections */
export const ultraOpticalGlass = (ior = 1.52, color = '#e8f4fb') => (
  <meshPhysicalMaterial
    color={color}
    transmission={0.99}
    opacity={0.1}
    transparent
    ior={ior}
    thickness={20}
    roughness={0.01}
    metalness={0}
    clearcoat={1}
    clearcoatRoughness={0.01}
    reflectivity={0.8}
    envMapIntensity={3}
    side={THREE.DoubleSide}
    depthWrite={false}
  />
);

/** Mirror surface — polished silver with near-zero roughness */
export const ultraMirror = () => (
  <meshPhysicalMaterial
    color="#e8ecf0"
    metalness={1}
    roughness={0.02}
    reflectivity={1}
    clearcoat={0.5}
    clearcoatRoughness={0.02}
    envMapIntensity={4}
  />
);

// ─── LIQUID VARIANTS ─────────────────────────────────────────────────────────

/** Clear/tinted lab liquid with slight meniscus shimmer */
export const ultraLiquid = (color: string, opacity = 0.85) => (
  <meshPhysicalMaterial
    color={color}
    transmission={0.45}
    opacity={opacity}
    transparent
    roughness={0.08}
    metalness={0.06}
    ior={1.33}
    thickness={0.5}
    clearcoat={0.6}
    clearcoatRoughness={0.05}
    envMapIntensity={1.5}
    depthWrite={false}
  />
);

/** Dense opaque liquid (e.g. iodine, KMnO₄) */
export const ultraOpaqueLiquid = (color: string, opacity = 0.92) => (
  <meshPhysicalMaterial
    color={color}
    transmission={0.1}
    opacity={opacity}
    transparent
    roughness={0.1}
    metalness={0}
    ior={1.36}
    thickness={0.3}
    clearcoat={0.8}
    clearcoatRoughness={0.05}
    envMapIntensity={1}
  />
);

// ─── METAL VARIANTS ───────────────────────────────────────────────────────────

/** Hardened stainless steel — Vernier calipers, screw gauge body */
export const ultraSteel = (
  color = '#c8d0d8',
  roughness = 0.22,
  metalness = 0.9
) => (
  <meshStandardMaterial
    color={color}
    metalness={metalness}
    roughness={roughness}
    envMapIntensity={1.8}
  />
);

/** Polished stainless — anvil face, mirror jaws */
export const ultraPolishedSteel = () => (
  <meshStandardMaterial
    color="#d8dfe6"
    metalness={0.95}
    roughness={0.07}
    envMapIntensity={2.5}
  />
);

/** Cast iron / instrument body — Bunsen base, retort stands */
export const ultraCastIron = () => (
  <meshStandardMaterial
    color="#2c3340"
    metalness={0.6}
    roughness={0.65}
    envMapIntensity={0.8}
  />
);

/** Brass — pivot knobs, pendulum bob, sonometer pegs */
export const ultraBrass = () => (
  <meshStandardMaterial
    color="#c8a84b"
    metalness={0.85}
    roughness={0.18}
    envMapIntensity={2}
  />
);

/** Knurled dark metal — screw gauge thimble, grip areas */
export const ultraKnurl = () => (
  <meshStandardMaterial
    color="#1c2230"
    metalness={0.5}
    roughness={0.78}
    envMapIntensity={0.5}
  />
);

/** Nichrome / resistance wire */
export const ultraNichrome = () => (
  <meshStandardMaterial
    color="#8a8f96"
    metalness={0.7}
    roughness={0.45}
    envMapIntensity={1}
  />
);

// ─── NON-METAL VARIANTS ───────────────────────────────────────────────────────

/** Silicone / rubber — dropper bulbs, stoppers, tubing */
export const ultraRubber = (color = '#cc3333') => (
  <meshStandardMaterial
    color={color}
    metalness={0}
    roughness={0.88}
    envMapIntensity={0.2}
  />
);

/** Hardwood — sonometer box, test tube rack, ruler */
export const ultraWood = (color = '#7a4f2a') => (
  <meshStandardMaterial
    color={color}
    metalness={0}
    roughness={0.78}
    envMapIntensity={0.4}
  />
);

/** Ceramic / white plastic — balance body, instrument casing */
export const ultraCeramic = () => (
  <meshStandardMaterial
    color="#f5f6f7"
    metalness={0}
    roughness={0.28}
    envMapIntensity={0.9}
  />
);

/** Paper / label */
export const ultraPaper = () => (
  <meshStandardMaterial
    color="#fffef5"
    metalness={0}
    roughness={0.95}
    envMapIntensity={0.1}
  />
);

// ─── EMISSION / SPECIAL ───────────────────────────────────────────────────────

/** LED or indicator glow */
export const ultraEmissive = (color: string, intensity = 2) => (
  <meshStandardMaterial
    color={color}
    emissive={color}
    emissiveIntensity={intensity}
    roughness={0.5}
    metalness={0}
  />
);

/** Digital display face (dark glass) */
export const ultraDisplay = () => (
  <meshPhysicalMaterial
    color="#0a0f1a"
    transmission={0.3}
    roughness={0.12}
    metalness={0.1}
    clearcoat={1}
    clearcoatRoughness={0.08}
    envMapIntensity={1.5}
  />
);
