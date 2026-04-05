/**
 * PotashAlumLab.tsx — Synthesis of Potash Alum
 * ─────────────────────────────────────────────────────────────────────────────
 * K₂SO₄ + Al₂(SO₄)₃ + 24H₂O → K₂SO₄·Al₂(SO₄)₃·24H₂O
 *
 * Architecture:
 *  - 3-phase LabProtocolEngine (PREP → OBSERVATION → ANALYSIS)
 *  - All animations via useChemProgress (useFrame delta) — zero RAF cascade
 *  - H₂ bubbles: InstancedMesh (40 spheres) — single draw call
 *  - Alum crystals: InstancedMesh (25 octahedra) — single draw call
 *  - useMemo for all random positions — no per-render jitter
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float, Html, Text } from '@react-three/drei';
import * as THREE from 'three';
import { LabProtocolEngine, ProtocolStep } from './shared/LabProtocolEngine';
import {
  UltraBeaker as Beaker,
  UltraBunsenBurner as BunsenBurner,
  UltraConicalFlask as ConicalFlask,
} from './shared/UltraApparatus';
import { useChemProgress, useChemProgressRef } from './shared/useChemProgress';
import { ChemicalFormula } from './shared/ChemicalFormula';

interface Props { hex: string; }

// ─── PROTOCOL STEPS ──────────────────────────────────────────────────────────
const PREP_STEPS: ProtocolStep[] = [
  {
    id: 'digest',
    name: 'Alkali Digestion',
    action: 'Filter the Solution',
    desc: 'Add 2g of aluminium scrap to 20 mL of 20% KOH solution in a beaker. H₂ gas evolves vigorously (effervescence). Al dissolves to form potassium aluminate (KAlO₂). Stir gently; heat mildly if dissolution is slow.',
  },
  {
    id: 'neutralize',
    name: 'Filtration & Neutralization',
    action: 'Concentrate on Water Bath',
    desc: 'Filter the solution through filter paper to remove undissolved impurities. Collect the clear filtrate. Carefully add dilute H₂SO₄ to neutralize the aluminate, precipitating and then redissolving Al(OH)₃ to give Al₂(SO₄)₃.',
  },
  {
    id: 'concentrate',
    name: 'Crystallization',
    action: 'Allow Crystals to Form',
    desc: 'Evaporate the solution on a water bath to its crystallization point. Remove from heat and allow to cool slowly without disturbance. Cubic octahedral crystals of Potash Alum form as the solution cools.',
  },
];

// ─── SCENE: H₂ BUBBLES (InstancedMesh, useMemo positions — no jitter) ────────
const H2BubbleMesh: React.FC<{ active: boolean }> = ({ active }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // useMemo ensures random positions are stable across renders — fixes jitter bug
  const particles = useMemo(() =>
    Array.from({ length: 40 }, () => ({
      x: (Math.random() - 0.5) * 1.4,
      y: -0.55 + Math.random() * 0.4,
      z: (Math.random() - 0.5) * 1.4,
      vy: 0.012 + Math.random() * 0.008,
      s: 0.025 + Math.random() * 0.02,
    })), []);

  useFrame(() => {
    if (!meshRef.current || !active) return;
    particles.forEach((p, i) => {
      p.y += p.vy;
      if (p.y > 0.8) p.y = -0.55;
      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.setScalar(p.s);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, 40]}>
      <sphereGeometry args={[1, 7, 7]} />
      <meshStandardMaterial color="#bae6fd" transparent opacity={0.45} depthWrite={false} />
    </instancedMesh>
  );
};

// ─── SCENE: DIGESTION (Step 0) ────────────────────────────────────────────────
const DigestionScene: React.FC = () => {
  const progress = useChemProgress(0.07);

  // Al scrap positions — useMemo prevents per-frame re-randomization
  const scraps = useMemo(() =>
    Array.from({ length: 8 }, () => ({
      x: (Math.random() - 0.5) * 1.2,
      y: -0.65 + Math.random() * 0.1,
      z: (Math.random() - 0.5) * 1.2,
      ry: Math.random() * Math.PI,
    })), []);

  return (
    <group position={[0, -0.5, 0]}>
      <Beaker position={[0, 0.5, 0]} fluidLevel={0.45} fluidColor="#bae6fd" />
      {/* Aluminium scraps dissolving */}
      {scraps.map((p, i) => {
        const size = Math.max(0.01, 0.22 * (1 - progress));
        return (
          <mesh key={i} position={[p.x, p.y, p.z]} rotation={[0, p.ry, 0]}>
            <boxGeometry args={[size, 0.022, size]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.88} roughness={0.18} />
          </mesh>
        );
      })}
      <H2BubbleMesh active={progress < 0.92} />
      {progress < 0.88 && (
        <Html position={[1.6, 1.2, 0]} center>
          <div className="text-[9px] text-sky-300 font-bold bg-black/70 px-2 py-1 rounded-lg border border-sky-500/30 backdrop-blur whitespace-nowrap">
            H₂↑ Effervescence — Al dissolving
          </div>
        </Html>
      )}
      <ContactShadows position={[0, 0, 0]} opacity={0.35} scale={10} blur={2} />
    </group>
  );
};

// ─── SCENE: FILTRATION (Step 1) ──────────────────────────────────────────────
const FiltrationScene: React.FC = () => {
  const progress = useChemProgress(0.08);

  // Impurity particle positions — stable via useMemo
  const impurities = useMemo(() =>
    Array.from({ length: 18 }, () => ({
      x: (Math.random() - 0.5) * 1.4,
      z: (Math.random() - 0.5) * 1.4,
    })), []);

  return (
    <group position={[0, -1.4, 0]}>
      <ConicalFlask position={[0, 0.9, 0]} fluidLevel={progress * 0.55} fluidColor="#e2e8f0" />

      {/* Glass funnel assembly */}
      <group position={[0, 3.0, 0]}>
        {/* Funnel cone */}
        <mesh position={[0, 0.42, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.82, 0.85, 32, 1, true]} />
          <meshPhysicalMaterial color="#d4eef9" transmission={0.9} ior={1.45} roughness={0.04} clearcoat={1} side={THREE.DoubleSide} />
        </mesh>
        {/* Funnel stem */}
        <mesh position={[0, -0.28, 0]}>
          <cylinderGeometry args={[0.07, 0.07, 0.65, 16]} />
          <meshPhysicalMaterial color="#c8e8f5" transmission={0.88} ior={1.45} roughness={0.06} clearcoat={1} />
        </mesh>
        {/* Filter paper */}
        <mesh position={[0, 0.88, 0]}>
          <cylinderGeometry args={[0.75, 0.75, 0.025, 36]} />
          <meshStandardMaterial color="#fffef0" roughness={0.95} />
        </mesh>
        {/* Impurities on filter */}
        {progress < 0.82 && impurities.map((p, i) => (
          <mesh key={i} position={[p.x, 0.905, p.z]}>
            <boxGeometry args={[0.045, 0.018, 0.045]} />
            <meshStandardMaterial color="#64748b" roughness={0.9} />
          </mesh>
        ))}
        {/* Filtrate drop */}
        {progress > 0.15 && (
          <mesh position={[0, -0.65, 0]} scale={[1, 1.4, 1]}>
            <sphereGeometry args={[0.028, 10, 10]} />
            <meshPhysicalMaterial color="#e8f0f8" transmission={0.7} ior={1.33} roughness={0.05} />
          </mesh>
        )}
      </group>
      <ContactShadows position={[0, 0, 0]} opacity={0.35} scale={10} blur={2} />
    </group>
  );
};

// ─── SCENE: CONCENTRATION (Step 2) ────────────────────────────────────────────
const ConcentrateScene: React.FC = () => {
  const progress = useChemProgress(0.055);
  return (
    <group position={[0, -1.0, 0]}>
      <BunsenBurner position={[0, 0, 0]} active={progress < 0.9} />
      {/* Water bath */}
      <mesh position={[0, 1.42, 0]} receiveShadow>
        <cylinderGeometry args={[1.45, 1.45, 0.14, 44]} />
        <meshStandardMaterial color="#8898a8" metalness={0.72} roughness={0.32} />
      </mesh>
      <Beaker
        position={[0, 1.72, 0]}
        fluidLevel={Math.max(0.05, 0.52 - progress * 0.44)}
        fluidColor="#ddd6fe"
      />
      {progress > 0.78 && (
        <Html position={[2.2, 1.5, 0]} center>
          <div className="text-[9px] text-purple-600 dark:text-purple-300 font-bold bg-black/70 px-2 py-1 rounded-lg border border-purple-500/30 backdrop-blur animate-pulse whitespace-nowrap">
            ⬡ Crystallization point reached
          </div>
        </Html>
      )}
      <ContactShadows position={[0, 0, 0]} opacity={0.4} scale={10} blur={2} />
    </group>
  );
};

// ─── SCENE: OBSERVATION — Crystal growth InstancedMesh ───────────────────────
const AlumCrystalScene: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const calledRef = useRef(false);
  const progress = useChemProgress(0.055);

  // Stable crystal positions
  const crystals = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      x: (Math.random() - 0.5) * 5.5,
      y: -1.8 + (i % 3) * 0.22,
      z: (Math.random() - 0.5) * 5.5,
      rx: Math.random() * Math.PI,
      ry: Math.random() * Math.PI,
      s: 0.18 + Math.random() * 0.28,
    })), []);

  useFrame(() => {
    if (!meshRef.current) return;
    const count = Math.floor(progress * 25);
    for (let i = 0; i < 25; i++) {
      const p = crystals[i];
      if (i < count) {
        dummy.position.set(p.x, p.y, p.z);
        dummy.rotation.set(p.rx, p.ry, 0);
        dummy.scale.setScalar(p.s);
      } else {
        dummy.scale.setScalar(0);
      }
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;

    if (progress >= 0.95 && !calledRef.current) {
      calledRef.current = true;
      onComplete();
    }
  });

  return (
    <group>
      {/* Evaporation dish */}
      <mesh position={[0, -2.0, 0]} receiveShadow>
        <cylinderGeometry args={[2.6, 2.6, 0.09, 52]} />
        <meshStandardMaterial color="#1e2a3a" roughness={0.88} />
      </mesh>

      {/* Hero large alum crystal (Float animated) */}
      <Float speed={1.0} rotationIntensity={0.5} floatIntensity={0.4}>
        <mesh position={[0, 0.3, 0]} castShadow>
          <octahedronGeometry args={[1.2]} />
          <meshPhysicalMaterial
            color="#c4b5fd"
            transmission={0.88}
            ior={1.452}
            roughness={0.10}
            clearcoat={1}
            clearcoatRoughness={0.06}
            thickness={1.8}
            envMapIntensity={2.5}
          />
        </mesh>
        <mesh position={[0, 0.3, 0]} scale={1.015}>
          <octahedronGeometry args={[1.2]} />
          <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.12} />
        </mesh>
        <pointLight color="#a78bfa" intensity={2.8} distance={4} position={[0, -1.6, 0]} />
      </Float>

      {/* InstancedMesh satellite crystals */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, 25]} castShadow>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial color="#ddd6fe" roughness={0.22} metalness={0.05} />
      </instancedMesh>

      <mesh position={[0, -2.1, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial color="#0c1624" roughness={0.9} />
      </mesh>
      <ContactShadows position={[0, -2.0, 0]} opacity={0.55} scale={14} blur={3.5} />
    </group>
  );
};

// ─── SCENE: ANALYSIS ──────────────────────────────────────────────────────────
const AnalysisScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (groupRef.current) groupRef.current.rotation.y = clock.elapsedTime * 0.16;
  });
  const satellites = useMemo(() =>
    Array.from({ length: 18 }, () => ({
      x: (Math.random() - 0.5) * 7,
      y: -2.2 + Math.random() * 0.9,
      z: (Math.random() - 0.5) * 7,
      s: 0.08 + Math.random() * 0.14,
    })), []);

  return (
    <group>
      <group ref={groupRef}>
        <mesh castShadow>
          <octahedronGeometry args={[1.5]} />
          <meshPhysicalMaterial
            color="#c4b5fd"
            transmission={0.9}
            ior={1.452}
            roughness={0.07}
            clearcoat={1}
            clearcoatRoughness={0.04}
            thickness={2.2}
            envMapIntensity={3.5}
          />
        </mesh>
        <mesh scale={1.012}>
          <octahedronGeometry args={[1.5]} />
          <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.13} />
        </mesh>
        <pointLight color="#a78bfa" intensity={4} distance={5} position={[0, -2, 0]} />
      </group>
      {satellites.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]} scale={p.s}>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial color="#ddd6fe" roughness={0.3} />
        </mesh>
      ))}
      <mesh position={[0, -2.4, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial color="#0c1222" roughness={0.9} />
      </mesh>
      <ContactShadows position={[0, -2.35, 0]} opacity={0.55} scale={14} blur={3.5} />
    </group>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const PotashAlumLab: React.FC<Props> = ({ hex }) => {
  const [canAnalyze, setCanAnalyze] = React.useState(false);

  return (
    <LabProtocolEngine
      labId="C-02"
      labTitle="Synthesis of Potash Alum"
      labSubtitle="K₂SO₄·Al₂(SO₄)₃·24H₂O — Dodecahydrate Alum Crystals"
      prepTitle="Bench Preparation"
      prepSubtitle="Inorganic double-salt crystallization"
      hexColor={hex}
      prepSteps={PREP_STEPS}

      renderSetupScene={(step) => (
        <Canvas camera={{ position: [3.5, 3.5, 6], fov: 48 }} dpr={[1, 1.8]}
          gl={{ antialias: true }}>
          <Environment preset="apartment" />
          <ambientLight intensity={0.45} />
          <directionalLight position={[5, 9, 4]} intensity={1.2} castShadow
            shadow-mapSize={[1024, 1024]} />
          <pointLight position={[-3, 5, -2]} intensity={0.7} color="#a78bfa" />
          {step === 0 && <DigestionScene />}
          {step === 1 && <FiltrationScene />}
          {step === 2 && <ConcentrateScene />}
          <OrbitControls enablePan={false} minDistance={3} maxDistance={14} />
        </Canvas>
      )}

      renderObservationScene={() => (
        <Canvas camera={{ position: [0, 2.5, 8], fov: 46 }} dpr={[1, 1.8]}
          gl={{ antialias: true }}>
          <Environment preset="night" />
          <ambientLight intensity={0.3} />
          <directionalLight position={[4, 8, 3]} intensity={0.9} castShadow />
          <AlumCrystalScene onComplete={() => setCanAnalyze(true)} />
          <OrbitControls autoRotate autoRotateSpeed={0.9} enablePan={false}
            minDistance={3} maxDistance={16} />
        </Canvas>
      )}

      renderObservationSidebar={(finishObservation) => (
        <div className="flex flex-col h-full space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="bg-slate-900/60 border border-purple-500/20 p-4 rounded-2xl backdrop-blur-md">
            <h3 className="text-slate-900 dark:text-slate-900 dark:text-white font-bold text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              Crystal Morphology
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
              As the solution cools slowly, anions and cations arrange in a regular
              cubic lattice. Potash Alum grows as transparent, regular{' '}
              <span className="text-purple-600 dark:text-purple-300 font-bold">octahedra</span> — 8 equilateral
              triangular faces.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-purple-500/15">
            <p className="text-[9px] text-purple-400 font-black uppercase tracking-widest mb-3">
              Crystallographic Data
            </p>
            <div className="space-y-2 text-[10px]">
              {[
                { k: 'Crystal System', v: 'Cubic (Isometric)' },
                { k: 'Crystal Habit', v: 'Regular Octahedral' },
                { k: 'Refractive Index', v: '1.452' },
                { k: 'Mohs Hardness', v: '2–2.5' },
                { k: 'Color (pure)', v: 'Transparent / Colorless' },
              ].map(({ k, v }) => (
                <div key={k} className="flex justify-between">
                  <span className="text-slate-500">{k}:</span>
                  <span className="text-purple-600 dark:text-purple-200 font-mono text-[9px]">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto space-y-2">
            {!canAnalyze && (
              <p className="text-[9px] text-slate-500 text-center">
                Wait for crystal nucleation to complete…
              </p>
            )}
            <button
              onClick={finishObservation}
              disabled={!canAnalyze}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-purple-900/30 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Analyze Coordination Math →
            </button>
          </div>
        </div>
      )}

      renderAnalysisScene={() => (
        <Canvas camera={{ position: [0, 1.5, 7], fov: 46 }} dpr={[1, 1.8]}
          gl={{ antialias: true }}>
          <Environment preset="night" />
          <ambientLight intensity={0.32} />
          <directionalLight position={[4, 8, 3]} intensity={0.75} castShadow />
          <AnalysisScene />
          <OrbitControls autoRotate autoRotateSpeed={0.65} enablePan={false}
            minDistance={4} maxDistance={16} />
        </Canvas>
      )}

      renderAnalysisSidebar={() => (
        <div className="flex flex-col h-full space-y-4 animate-in fade-in slide-in-from-right-8 duration-700 overflow-y-auto pr-1">

          {/* Step-by-step reaction pathway */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-blue-500/20">
            <p className="text-[9px] text-blue-400 font-black uppercase tracking-widest mb-3">
              ① Reaction Pathway
            </p>
            <div className="space-y-2.5">
              {[
                {
                  step: 'Digestion',
                  eq: '2Al + 2KOH + 2H₂O → 2KAlO₂ + 3H₂↑',
                  color: 'text-sky-300',
                },
                {
                  step: 'Precipitation',
                  eq: '2KAlO₂ + H₂SO₄ + 2H₂O → 2Al(OH)₃↓ + K₂SO₄',
                  color: 'text-yellow-300',
                },
                {
                  step: 'Redissolve',
                  eq: '2Al(OH)₃ + 3H₂SO₄ → Al₂(SO₄)₃ + 6H₂O',
                  color: 'text-orange-300',
                },
              ].map(({ step, eq, color }) => (
                <div key={step} className="bg-black/40 p-2.5 rounded-xl border border-black/5 dark:border-white/5">
                  <p className={`text-[8px] uppercase font-bold mb-1 ${color}`}>{step}</p>
                  <p className="text-slate-700 dark:text-slate-700 dark:text-slate-300 text-[9px] font-serif leading-relaxed">{eq}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Synthesis equation */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-purple-500/20">
            <p className="text-[9px] text-purple-400 font-black uppercase tracking-widest mb-3">
              ② Synthesis Equation
            </p>
            <div className="bg-slate-200 dark:bg-black/50 px-3 py-3 rounded-xl border border-black/5 dark:border-white/5 text-center space-y-1">
              <div className="text-slate-800 dark:text-slate-800 dark:text-slate-200 text-[10px] font-serif">
                <ChemicalFormula formula="K2SO4" /> + <ChemicalFormula formula="Al2(SO4)3" /> + <ChemicalFormula formula="24H2O" />
              </div>
              <div className="text-purple-400 text-base">⟶</div>
              <div className="text-purple-600 dark:text-purple-300 text-[10px] font-serif font-bold">
                <ChemicalFormula formula="K2SO4.Al2(SO4)3.24H2O" />
              </div>
              <div className="text-slate-500 text-[8px] mt-1">Potash Alum — MW = 474 g/mol</div>
            </div>
          </div>

          {/* Stoichiometry */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-emerald-500/20">
            <p className="text-[9px] text-emerald-400 font-black uppercase tracking-widest mb-3">
              ③ Yield Calculation
            </p>
            <div className="space-y-1.5 text-[10px]">
              {[
                { k: 'Al used', v: '2.00 g' },
                { k: 'Moles of Al', v: '2.00 ÷ 27 = 0.074 mol' },
                { k: 'Moles of Alum', v: '0.074 ÷ 2 × 1 = 0.037 mol' },
                { k: 'Theoretical yield', v: '0.037 × 474 = 17.5 g' },
              ].map(({ k, v }) => (
                <div key={k} className="flex justify-between">
                  <span className="text-slate-500">{k}:</span>
                  <span className="text-emerald-300 font-mono text-[9px]">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Crystal & double-salt data */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-indigo-500/20">
            <p className="text-[9px] text-indigo-400 font-black uppercase tracking-widest mb-3">
              ④ Alum General Formula
            </p>
            <div className="bg-black/40 px-3 py-2.5 rounded-xl border border-black/5 dark:border-white/5 text-center mb-3">
              <p className="text-indigo-300 text-[11px] font-serif">
                M<sup>+</sup>SO₄ · M<sup>3+</sup>₂(SO₄)₃ · 24H₂O
              </p>
              <p className="text-slate-500 text-[8px] mt-1">
                M⁺ = monovalent (K⁺, Na⁺, NH₄⁺) | M³⁺ = trivalent (Al³⁺, Cr³⁺)
              </p>
            </div>
            <div className="space-y-1.5 text-[10px]">
              {[
                { k: 'Crystal system', v: 'Cubic (Isometric)' },
                { k: 'Water molecules', v: '24 H₂O in lattice' },
                { k: 'MW Potash Alum', v: '474 g/mol' },
                { k: 'IOR', v: '1.452 (glassy)' },
              ].map(({ k, v }) => (
                <div key={k} className="flex justify-between">
                  <span className="text-slate-500">{k}:</span>
                  <span className="text-slate-800 dark:text-slate-800 dark:text-slate-200 font-mono text-[9px]">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-purple-950/25 border border-purple-500/20 p-3 rounded-2xl text-center">
            <p className="text-[9px] text-purple-400 font-bold uppercase tracking-wide italic">
              "Alums are double salts — they give all their constituent ions in water.<br/>Not a complex compound."
            </p>
          </div>
        </div>
      )}
    />
  );
};

export default PotashAlumLab;
