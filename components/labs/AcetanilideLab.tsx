/**
 * AcetanilideLab.tsx — Synthesis of Acetanilide
 * ─────────────────────────────────────────────────────────────────────────────
 * C₆H₅NH₂ + (CH₃CO)₂O → C₆H₅NHCOCH₃ + CH₃COOH
 * Nucleophilic Acyl Substitution — Acetylation of Aniline
 *
 * Architecture:
 *  - 3-phase LabProtocolEngine (PREP → OBSERVATION → ANALYSIS)
 *  - All animations via useChemProgress (useFrame delta) — zero RAF cascade
 *  - Vapor: InstancedMesh (30 spheres) — single draw call
 *  - White crystal flakes: InstancedMesh (120 box-flakes) — single draw call
 *  - useMemo for all positions — no per-render jitter
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { LabProtocolEngine, ProtocolStep } from './shared/LabProtocolEngine';
import {
  UltraBeaker as Beaker,
  UltraBunsenBurner as BunsenBurner,
  UltraRoundBottomFlask as RoundBottomFlask,
} from './shared/UltraApparatus';
import { useChemProgress } from './shared/useChemProgress';
import { ChemicalFormula } from './shared/ChemicalFormula';

interface Props { hex: string; }

// ─── PROTOCOL STEPS ──────────────────────────────────────────────────────────
const PREP_STEPS: ProtocolStep[] = [
  {
    id: 'mix',
    name: 'Reagent Mixing',
    action: 'Attach Condenser & Reflux',
    desc: 'Measure 5 mL Aniline (C₆H₅NH₂), 5 mL Acetic Anhydride [(CH₃CO)₂O], and 5 mL Glacial Acetic Acid into a 100 mL round-bottom flask. Both reagents must be measured in a fume hood — Aniline is toxic and Acetic Anhydride is lachrymatory.',
  },
  {
    id: 'reflux',
    name: 'Reflux (Acetylation)',
    action: 'Quench in Ice Water',
    desc: 'Attach a water condenser to the flask. Heat on a water bath at 100°C for 15–20 minutes. The vapors rise, condense in the cooled condenser, and flow back — preventing reagent loss. The reaction undergoes Nucleophilic Acyl Substitution.',
  },
  {
    id: 'quench',
    name: 'Ice-Water Quenching',
    action: 'Filter Crystals',
    desc: 'Pour the hot reaction mixture carefully into 100 mL of ice-cold distilled water with constant stirring. Acetanilide immediately precipitates as shiny white leafy flakes due to its low solubility in cold water. Collect by Buchner filtration.',
  },
];

// ─── VAPOR InstancedMesh ──────────────────────────────────────────────────────
const VaporCloud: React.FC<{ active: boolean; originY?: number }> = ({
  active, originY = 0
}) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() =>
    Array.from({ length: 30 }, () => ({
      x: (Math.random() - 0.5) * 0.22,
      y: originY + Math.random() * 0.6,
      z: (Math.random() - 0.5) * 0.22,
      vy: 0.008 + Math.random() * 0.007,
      s: 0.04 + Math.random() * 0.03,
    })), [originY]);

  useFrame(() => {
    if (!meshRef.current || !active) return;
    particles.forEach((p, i) => {
      p.y += p.vy;
      if (p.y > originY + 2.2) p.y = originY;
      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.setScalar(p.s);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, 30]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshStandardMaterial color="#f1f5f9" transparent opacity={0.20} depthWrite={false} />
    </instancedMesh>
  );
};

// ─── SCENE: MIXING (Step 0) ───────────────────────────────────────────────────
const MixingScene: React.FC = () => {
  const progress = useChemProgress(0.09);
  // Tilt the aniline beaker to pour — rotation driven by progress
  const pourAngle = -progress * 1.1;

  return (
    <group position={[0, -0.5, 0]}>
      {/* Main round-bottom flask fills up */}
      <RoundBottomFlask
        position={[0, 0.6, 0]}
        fluidLevel={0.08 + progress * 0.42}
        fluidColor="#fde68a"
      />
      {/* Pouring aniline beaker */}
      {progress < 0.88 && (
        <group position={[1.6, 2.2, 0]} rotation={[0, 0, pourAngle]}>
          <Beaker scale={0.52} fluidLevel={Math.max(0, 0.95 - progress)} fluidColor="#fbbf24" />
        </group>
      )}
      {progress > 0.15 && progress < 0.85 && (
        <Html position={[0, 2.6, 0]} center>
          <div className="text-[9px] text-yellow-300 font-bold bg-black/70 px-2 py-1 rounded-lg border border-yellow-500/30 backdrop-blur whitespace-nowrap">
            Adding Aniline + Acetic Anhydride
          </div>
        </Html>
      )}
      <ContactShadows position={[0, 0, 0]} opacity={0.35} scale={10} blur={2} />
    </group>
  );
};

// ─── SCENE: REFLUX (Step 1) ───────────────────────────────────────────────────
const RefluxScene: React.FC = () => {
  const progress = useChemProgress(0.055);

  return (
    <group position={[0, -1.4, 0]}>
      <BunsenBurner position={[0, 0, 0]} active={progress < 0.92} />

      <group position={[0, 2.2, 0]}>
        <RoundBottomFlask position={[0, 0, 0]} fluidLevel={0.52} fluidColor="#f59e0b" />

        {/* Water condenser — outer jacket */}
        <mesh position={[0, 2.25, 0]}>
          <cylinderGeometry args={[0.38, 0.38, 2.2, 24, 1, true]} />
          <meshPhysicalMaterial
            color="#cde8f5" transmission={0.88} ior={1.45} roughness={0.06}
            clearcoat={1} side={THREE.DoubleSide}
          />
        </mesh>
        {/* Inner tube */}
        <mesh position={[0, 2.25, 0]}>
          <cylinderGeometry args={[0.14, 0.14, 2.6, 18]} />
          <meshPhysicalMaterial
            color="#d8eef8" transmission={0.92} ior={1.45} roughness={0.04} clearcoat={1}
          />
        </mesh>
        {/* Water inlet/outlet nubs */}
        {[[-1.22, 0.55], [1.22, -0.55]].map(([x, yo], i) => (
          <mesh key={i} position={[0.38, 2.25 + yo, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.04, 0.04, 0.22, 12]} />
            <meshStandardMaterial color="#64748b" metalness={0.7} roughness={0.35} />
          </mesh>
        ))}

        <VaporCloud active={progress < 0.9} originY={1.2} />

        {progress > 0.3 && progress < 0.88 && (
          <Html position={[1.8, 2.5, 0]} center>
            <div className="text-[9px] text-orange-300 font-bold bg-black/70 px-2 py-1 rounded-lg border border-orange-500/30 backdrop-blur animate-pulse whitespace-nowrap">
              Refluxing at 100°C…
            </div>
          </Html>
        )}
      </group>
      <ContactShadows position={[0, 0, 0]} opacity={0.4} scale={10} blur={2} />
    </group>
  );
};

// ─── SCENE: QUENCH (Step 2) ──────────────────────────────────────────────────
const QuenchScene: React.FC = () => {
  const progress = useChemProgress(0.072);
  const crystalMesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Stable positions for white crystal flakes
  const flakes = useMemo(() =>
    Array.from({ length: 80 }, () => ({
      x: (Math.random() - 0.5) * 1.5,
      y: -0.7 + Math.random() * 0.55,
      z: (Math.random() - 0.5) * 1.5,
      rx: Math.random() * Math.PI,
      ry: Math.random() * Math.PI,
    })), []);

  useFrame(() => {
    if (!crystalMesh.current) return;
    const count = Math.floor(progress * 80);
    for (let i = 0; i < 80; i++) {
      const p = flakes[i];
      if (i < count) {
        dummy.position.set(p.x, p.y, p.z);
        dummy.rotation.set(p.rx, p.ry, 0);
        dummy.scale.set(1, 1, 1);
      } else {
        dummy.scale.setScalar(0);
      }
      dummy.updateMatrix();
      crystalMesh.current.setMatrixAt(i, dummy.matrix);
    }
    crystalMesh.current.instanceMatrix.needsUpdate = true;
  });

  // Para RBF tilted to pour
  const flaskTilt = Math.min(1.1, progress * 2.2);

  return (
    <group position={[0, -0.9, 0]}>
      {/* Ice water beaker */}
      <Beaker position={[0, 0.5, 0]} fluidLevel={0.55} fluidColor="#e0f2fe" />

      {/* RBF tilted to pour */}
      <group position={[1.8, 2.6, 0]} rotation={[0, 0, -flaskTilt]}>
        <RoundBottomFlask scale={0.7} fluidLevel={Math.max(0, 0.6 - progress * 0.65)} fluidColor="#f59e0b" />
      </group>

      {/* White precipitate flakes in beaker */}
      <group position={[0, 0.5, 0]}>
        <instancedMesh ref={crystalMesh} args={[undefined, undefined, 80]} castShadow>
          <boxGeometry args={[0.18, 0.014, 0.10]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.88} metalness={0.04} />
        </instancedMesh>
      </group>

      <Html position={[0, 2.3, 0]} center>
        <div className="text-[9px] text-slate-900 dark:text-white font-bold bg-blue-600/50 px-2 py-1 rounded-lg backdrop-blur border border-blue-400/30">
          Quenching in ice water — precipitating…
        </div>
      </Html>
      <ContactShadows position={[0, 0, 0]} opacity={0.35} scale={10} blur={2} />
    </group>
  );
};

// ─── SCENE: OBSERVATION — Filtration Scene (REBUILT) ─────────────────────────
const FiltrationScene: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const progress = useChemProgress(0.065);
  const calledRef = useRef(false);
  const flakeMesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // 120 stable white flake positions on filter paper
  const flakes = useMemo(() =>
    Array.from({ length: 120 }, () => {
      const r = Math.random() * 0.82;
      const theta = Math.random() * Math.PI * 2;
      return {
        x: Math.cos(theta) * r,
        z: Math.sin(theta) * r,
        y: 0.015 + Math.random() * 0.022,
        rx: Math.random() * 0.4,
        ry: Math.random() * Math.PI,
      };
    }), []);

  useFrame(() => {
    if (!flakeMesh.current) return;
    const count = Math.floor(progress * 120);
    for (let i = 0; i < 120; i++) {
      const p = flakes[i];
      if (i < count) {
        dummy.position.set(p.x, p.y, p.z);
        dummy.rotation.set(p.rx, p.ry, 0);
        dummy.scale.set(1, 1, 1);
      } else {
        dummy.scale.setScalar(0);
      }
      dummy.updateMatrix();
      flakeMesh.current.setMatrixAt(i, dummy.matrix);
    }
    flakeMesh.current.instanceMatrix.needsUpdate = true;

    if (progress >= 0.95 && !calledRef.current) {
      calledRef.current = true;
      onComplete();
    }
  });

  const collectedG = (progress * 7.4).toFixed(1);

  return (
    <group>
      {/* Lab bench */}
      <mesh position={[0, -2.0, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#0a1525" roughness={0.9} />
      </mesh>

      {/* Buchner funnel + filter paper (top-down focal point) */}
      <group position={[0, 0.4, 0]}>
        {/* Funnel body (porcelain) */}
        <mesh position={[0, -0.5, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[1.08, 0.9, 40, 1, true]} />
          <meshStandardMaterial color="#f1f5f9" roughness={0.7} metalness={0} side={THREE.DoubleSide} />
        </mesh>
        {/* Funnel base rim */}
        <mesh position={[0, -0.9, 0]}>
          <torusGeometry args={[1.08, 0.04, 8, 48]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.65} />
        </mesh>
        {/* Filter paper (flat disc) */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.0, 1.0, 0.018, 48]} />
          <meshStandardMaterial color="#fffef5" roughness={0.94} />
        </mesh>
        {/* White acetanilide flakes on paper */}
        <instancedMesh ref={flakeMesh} args={[undefined, undefined, 120]} castShadow>
          <boxGeometry args={[0.18, 0.012, 0.10]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.88} metalness={0.03} />
        </instancedMesh>
        {/* Funnel stem */}
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 1.2, 18]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.65} />
        </mesh>
      </group>

      {/* Erlenmeyer catching filtrate */}
      <group position={[0, -1.55, 0]}>
        {/* Simple conical body */}
        <mesh>
          <cylinderGeometry args={[0.6, 0.9, 1.6, 36]} />
          <meshPhysicalMaterial color="#c8e8f5" transmission={0.82} ior={1.45} roughness={0.06} clearcoat={1} transparent />
        </mesh>
        {/* Yellow-brown filtrate */}
        <mesh position={[0, -0.48, 0]}>
          <cylinderGeometry args={[0.58, 0.87, 0.5, 36]} />
          <meshPhysicalMaterial color="#92400e" transmission={0.3} opacity={0.7} transparent roughness={0.1} />
        </mesh>
      </group>

      {/* HUD */}
      <group position={[1.8, 0.6, 0]}>
        <mesh>
          <planeGeometry args={[1.4, 0.8]} />
          <meshBasicMaterial color="#000000" transparent opacity={0.0} />
        </mesh>
      </group>

      <ContactShadows position={[0, -1.98, 0]} opacity={0.5} scale={12} blur={3} />
    </group>
  );
};

// ─── SCENE: ANALYSIS ──────────────────────────────────────────────────────────
const AnalysisScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const flakes = useMemo(() =>
    Array.from({ length: 60 }, () => ({
      x: (Math.random() - 0.5) * 7,
      y: -2.0 + Math.random() * 0.8,
      z: (Math.random() - 0.5) * 7,
      rx: Math.random() * Math.PI,
      ry: Math.random() * Math.PI,
      sx: 0.15 + Math.random() * 0.35,
      sy: 0.01 + Math.random() * 0.01,
      sz: 0.10 + Math.random() * 0.2,
    })), []);

  useFrame(({ clock }) => {
    if (groupRef.current) groupRef.current.rotation.y = clock.elapsedTime * 0.15;
  });

  return (
    <group>
      {/* Hero crystal cluster */}
      <Float speed={1.0} rotationIntensity={0.3} floatIntensity={0.3}>
        <group ref={groupRef} position={[0, 0.5, 0]}>
          {[
            { p: [0, 0, 0], s: [0.9, 0.065, 0.55] as [number, number, number] },
            { p: [0.5, 0.06, 0.2], s: [0.75, 0.052, 0.44] as [number, number, number] },
            { p: [-0.4, 0.05, -0.25], s: [0.8, 0.058, 0.48] as [number, number, number] },
            { p: [0.15, 0.12, -0.5], s: [0.65, 0.046, 0.38] as [number, number, number] },
          ].map((fl, i) => (
            <mesh key={i} position={fl.p as [number, number, number]} scale={fl.s} castShadow>
              <boxGeometry args={[1, 1, 1]} />
              <meshPhysicalMaterial
                color="#f8fafc"
                roughness={0.12}
                clearcoat={1}
                clearcoatRoughness={0.08}
                metalness={0.04}
                envMapIntensity={2.5}
              />
            </mesh>
          ))}
          <pointLight color="#e2e8f0" intensity={1.5} distance={4} position={[0, 1.5, 0]} />
        </group>
      </Float>

      {/* Field of small flakes */}
      {flakes.map((p, i) => (
        <mesh
          key={i}
          position={[p.x, p.y, p.z]}
          rotation={[p.rx, p.ry, 0]}
          scale={[p.sx, p.sy, p.sz]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#f1f5f9" roughness={0.85} />
        </mesh>
      ))}

      <mesh position={[0, -2.1, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial color="#0c1220" roughness={0.9} />
      </mesh>
      <ContactShadows position={[0, -2.05, 0]} opacity={0.5} scale={14} blur={3} />
    </group>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const AcetanilideLab: React.FC<Props> = ({ hex }) => {
  const [canAnalyze, setCanAnalyze] = React.useState(false);

  return (
    <LabProtocolEngine
      labId="C-03"
      labTitle="Synthesis of Acetanilide"
      labSubtitle="C₆H₅NHCOCH₃ — Nucleophilic Acyl Substitution of Aniline"
      prepTitle="Organic Synthesis Setup"
      prepSubtitle="Acetylation of Aniline via Acetic Anhydride"
      hexColor={hex}
      prepSteps={PREP_STEPS}

      renderSetupScene={(step) => (
        <Canvas camera={{ position: [3.5, 3.5, 7], fov: 46 }} dpr={[1, 1.8]}
          gl={{ antialias: true }}>
          <Environment preset="studio" />
          <ambientLight intensity={0.45} />
          <directionalLight position={[5, 9, 4]} intensity={1.2} castShadow
            shadow-mapSize={[1024, 1024]} />
          <pointLight position={[-3, 5, 2]} intensity={0.6} color="#fde68a" />
          {step === 0 && <MixingScene />}
          {step === 1 && <RefluxScene />}
          {step === 2 && <QuenchScene />}
          <OrbitControls enablePan={false} minDistance={3} maxDistance={14} />
        </Canvas>
      )}

      renderObservationScene={() => (
        <Canvas camera={{ position: [0, 3.5, 6], fov: 50 }} dpr={[1, 1.8]}
          gl={{ antialias: true }}>
          <Environment preset="studio" />
          <ambientLight intensity={0.55} />
          <directionalLight position={[4, 10, 4]} intensity={1.2} castShadow />
          <pointLight position={[0, 4, 0]} intensity={0.8} color="#f8fafc" />
          <FiltrationScene onComplete={() => setCanAnalyze(true)} />
          <OrbitControls enablePan={false} minDistance={3} maxDistance={14} />
        </Canvas>
      )}

      renderObservationSidebar={(finishObservation) => (
        <div className="flex flex-col h-full space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="bg-slate-900/60 border border-slate-400/20 p-4 rounded-2xl backdrop-blur-md">
            <h3 className="text-slate-900 dark:text-slate-900 dark:text-white font-bold text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Precipitate Quality
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
              Observe the shiny, white, leafy crystals of Acetanilide collecting on the filter paper.
              Rapid quenching in ice water ensures <span className="text-slate-900 dark:text-slate-900 dark:text-white font-bold">small, uniform</span> crystal
              size and high surface area for faster filtration.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-black/10 dark:border-white/10">
            <p className="text-[9px] text-slate-600 dark:text-slate-400 font-black uppercase tracking-widest mb-3">
              Product Specs
            </p>
            <div className="space-y-2 text-[10px]">
              {[
                { k: 'Appearance', v: 'White leafy flakes' },
                { k: 'Melting Point (pure)', v: '113.5°C (sharp)' },
                { k: 'Odor', v: 'Faint aniline-like' },
                { k: 'Solubility', v: 'Slightly sol. cold water' },
                { k: 'MW', v: '135 g/mol' },
              ].map(({ k, v }) => (
                <div key={k} className="flex justify-between">
                  <span className="text-slate-500">{k}:</span>
                  <span className="text-slate-800 dark:text-slate-800 dark:text-slate-200 font-mono text-[9px]">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto space-y-2">
            {!canAnalyze && (
              <p className="text-[9px] text-slate-500 text-center">
                Wait for filtration to complete…
              </p>
            )}
            <button
              onClick={finishObservation}
              disabled={!canAnalyze}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-slate-300 to-white text-slate-900 font-black text-xs uppercase tracking-widest shadow-lg shadow-white/10 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Analyze Mechanism →
            </button>
          </div>
        </div>
      )}

      renderAnalysisScene={() => (
        <Canvas camera={{ position: [0, 2, 7], fov: 46 }} dpr={[1, 1.8]}
          gl={{ antialias: true }}>
          <Environment preset="night" />
          <ambientLight intensity={0.4} />
          <directionalLight position={[4, 8, 3]} intensity={0.9} castShadow />
          <AnalysisScene />
          <OrbitControls autoRotate autoRotateSpeed={0.55} enablePan={false}
            minDistance={4} maxDistance={16} />
        </Canvas>
      )}

      renderAnalysisSidebar={() => (
        <div className="flex flex-col h-full space-y-4 animate-in fade-in slide-in-from-right-8 duration-700 overflow-y-auto pr-1">

          {/* Balanced equation */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-yellow-500/20">
            <p className="text-[9px] text-yellow-400 font-black uppercase tracking-widest mb-3">
              ① Acetylation Reaction
            </p>
            <div className="bg-slate-200 dark:bg-black/50 px-3 py-3 rounded-xl border border-black/5 dark:border-white/5 text-center space-y-1.5">
              <div className="text-slate-700 dark:text-slate-700 dark:text-slate-300 text-[10px] font-serif">
                <ChemicalFormula formula="C6H5NH2" /> + <ChemicalFormula formula="(CH3CO)2O" />
              </div>
              <div className="text-yellow-400 text-base">⟶</div>
              <div className="text-yellow-300 text-[10px] font-serif font-bold">
                <ChemicalFormula formula="C6H5NHCOCH3" /> + <ChemicalFormula formula="CH3COOH" />
              </div>
              <div className="text-slate-500 text-[8px] mt-1">
                Aniline + Acetic Anhydride → Acetanilide + Acetic Acid
              </div>
            </div>
          </div>

          {/* NAS Mechanism — 4 steps */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-blue-500/20">
            <p className="text-[9px] text-blue-400 font-black uppercase tracking-widest mb-3">
              ② NAS Mechanism (4 Steps)
            </p>
            <div className="space-y-2">
              {[
                {
                  n: '1',
                  title: 'Nucleophilic Attack',
                  desc: '-NH₂ lone pair attacks the electrophilic C=O carbon of acetic anhydride.',
                  color: 'border-blue-500/30 text-blue-300',
                },
                {
                  n: '2',
                  title: 'Tetrahedral Intermediate',
                  desc: 'C–N bond forms. Carbon becomes sp³ hybridized (tetrahedral). Negative charge on oxygen.',
                  color: 'border-purple-500/30 text-purple-300',
                },
                {
                  n: '3',
                  title: 'Elimination of Leaving Group',
                  desc: 'CH₃COO⁻ departs as the leaving group, C=O double bond reforms (sp² carbon).',
                  color: 'border-orange-500/30 text-orange-300',
                },
                {
                  n: '4',
                  title: 'Proton Transfer',
                  desc: 'CH₃COO⁻ accepts proton from N–H⁺ → Acetanilide + Acetic Acid formed.',
                  color: 'border-green-500/30 text-green-300',
                },
              ].map(({ n, title, desc, color }) => (
                <div key={n} className={`bg-black/40 p-2.5 rounded-xl border ${color.split(' ')[0]}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[8px] font-black rounded-full w-4 h-4 flex items-center justify-center border ${color}`}>
                      {n}
                    </span>
                    <span className={`text-[9px] font-bold ${color.split(' ')[1]}`}>{title}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[9px] leading-relaxed pl-6">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Yield calculation */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-emerald-500/20">
            <p className="text-[9px] text-emerald-400 font-black uppercase tracking-widest mb-3">
              ③ Yield Calculation
            </p>
            <div className="space-y-1.5 text-[10px]">
              {[
                { k: 'Aniline volume', v: '5.0 mL' },
                { k: 'Aniline density', v: '1.02 g/mL' },
                { k: 'Mass of Aniline', v: '5.10 g' },
                { k: 'MW of Aniline', v: '93 g/mol' },
                { k: 'Moles of Aniline', v: '5.10 ÷ 93 = 0.0548 mol' },
                { k: 'MW of Acetanilide', v: '135 g/mol' },
                { k: 'Theoretical yield', v: '0.0548 × 135 = 7.40 g' },
              ].map(({ k, v }) => (
                <div key={k} className="flex justify-between">
                  <span className="text-slate-500">{k}:</span>
                  <span className="text-emerald-300 font-mono text-[9px]">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Melting point purity test */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-black/10 dark:border-white/10">
            <p className="text-[9px] text-slate-900 dark:text-slate-900 dark:text-white font-black uppercase tracking-widest mb-3">
              ④ Purity: Melting Point Test
            </p>
            <div className="space-y-2 text-[10px]">
              <div className="flex gap-2 items-start">
                <span className="text-green-400 font-bold shrink-0">Pure:</span>
                <span className="text-slate-700 dark:text-slate-700 dark:text-slate-300">113.5°C — sharp, narrow range (± 1°C)</span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-red-400 font-bold shrink-0">Impure:</span>
                <span className="text-slate-700 dark:text-slate-700 dark:text-slate-300">105–111°C — broad, depressed range</span>
              </div>
              <p className="text-slate-500 text-[9px] italic mt-1">
                Mixed melting point depression confirms identity → mix 1:1 with pure standard.
              </p>
            </div>
          </div>

          {/* Safety */}
          <div className="bg-red-950/20 border border-red-500/20 p-4 rounded-2xl">
            <p className="text-[9px] text-red-400 font-black uppercase tracking-widest mb-2">
              ⑤ Safety
            </p>
            <div className="space-y-1.5 text-[9px]">
              <p className="text-red-600 dark:text-red-300">🔴 <strong>Aniline</strong> — toxic, skin-absorbing. Fume hood + nitrile gloves.</p>
              <p className="text-yellow-300">🟡 <strong>Acetic Anhydride</strong> — lachrymatory, corrosive. Handle with care.</p>
              <p className="text-blue-600 dark:text-blue-300">🔵 <strong>Acetic Acid</strong> — irritant. Avoid breathing vapors.</p>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default AcetanilideLab;
