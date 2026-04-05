/**
 * MohrsaltLab.tsx — Synthesis of Mohr's Salt
 * ─────────────────────────────────────────────────────────────────────────────
 * FeSO₄ + (NH₄)₂SO₄ + 6H₂O → FeSO₄·(NH₄)₂SO₄·6H₂O
 *
 * Architecture:
 *  - 3-phase LabProtocolEngine (PREP → OBSERVATION → ANALYSIS)
 *  - All animations driven by useChemProgress (useFrame delta-time) — no RAF
 *  - Steam: InstancedMesh (30 spheres) — single draw call
 *  - Crystals: InstancedMesh (60 octahedra) — single draw call
 *  - Color lerp via THREE.Color.lerp — no per-frame state updates for color
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float, Html, Text } from '@react-three/drei';
import * as THREE from 'three';
import { LabProtocolEngine, ProtocolStep } from './shared/LabProtocolEngine';
import {
  UltraBeaker as Beaker,
  UltraBunsenBurner as BunsenBurner,
  UltraDigitalBalance as DigitalBalance,
  UltraSpatula as Spatula,
} from './shared/UltraApparatus';
import { useChemProgress } from './shared/useChemProgress';
import { ChemicalFormula } from './shared/ChemicalFormula';

interface Props { hex: string; }

// ─── PROTOCOL STEPS ──────────────────────────────────────────────────────────
const PREP_STEPS: ProtocolStep[] = [
  {
    id: 'weigh',
    name: 'Weigh Reagents',
    action: 'Transfer to Beaker',
    desc: 'Weigh exactly 7.00 g of Ferrous Sulphate (FeSO₄) and 3.52 g of Ammonium Sulphate [(NH₄)₂SO₄] on the analytical balance. These are equimolar quantities (0.046 mol each).',
  },
  {
    id: 'dissolve',
    name: 'Dissolve & Acidify',
    action: 'Heat on Water Bath',
    desc: 'Transfer both salts into a 250 mL beaker with 30 mL distilled water. Add 5 mL dilute H₂SO₄ carefully to prevent hydrolysis of Fe²⁺. Stir until completely dissolved — the solution should be pale green.',
  },
  {
    id: 'evaporate',
    name: 'Concentrate Solution',
    action: 'Begin Crystallization',
    desc: 'Heat the beaker on a water bath (not direct flame) with constant stirring until the solution reaches its crystallization point. You will see steam rising and the volume decreasing by ~60%.',
  },
];

// ─── SCENE: PREPARATION ──────────────────────────────────────────────────────
// Each scene uses useChemProgress (useFrame-driven) — zero RAF cascade.

const WeighScene: React.FC = () => {
  const progress = useChemProgress(0.08);
  return (
    <group position={[0, -0.5, 0]}>
      <DigitalBalance position={[0, 0, 0]} weight={progress * 10.52} />
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
        <Spatula
          position={[0.6, 1.3, 0.5]}
          rotation={[0, Math.PI / 4, -0.3]}
          hasPowder={progress < 0.85}
          powderColor="#6ee7b7"
        />
      </Float>
      {progress > 0.5 && (
        <Html position={[1.8, 1.2, 0]} center>
          <div className="text-[9px] text-emerald-300 font-bold bg-black/70 px-2 py-1 rounded-lg border border-emerald-500/30 backdrop-blur whitespace-nowrap">
            FeSO₄: 7.00 g + (NH₄)₂SO₄: 3.52 g
          </div>
        </Html>
      )}
      <ContactShadows position={[0, 0, 0]} opacity={0.35} scale={10} blur={2} />
    </group>
  );
};

const DissolveScene: React.FC = () => {
  const progress = useChemProgress(0.09);
  return (
    <group position={[0, -0.5, 0]}>
      <Beaker position={[0, 0.5, 0]} fluidLevel={0.1 + progress * 0.45} fluidColor="#6ee7b7" />
      {/* H₂SO₄ dropper tilting in */}
      <group position={[1.4, 1.8, 0]} rotation={[0, 0, -(0.3 + progress * 0.9)]}>
        <mesh>
          <cylinderGeometry args={[0.06, 0.03, 0.8, 16]} />
          <meshPhysicalMaterial color="#d4eef9" transmission={0.85} ior={1.45} roughness={0.04} clearcoat={1} />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <capsuleGeometry args={[0.08, 0.18, 8, 16]} />
          <meshStandardMaterial color="#f59e0b" roughness={0.85} />
        </mesh>
      </group>
      {progress > 0.3 && progress < 0.9 && (
        <Html position={[0, 2.2, 0]} center>
          <div className="text-[9px] text-yellow-300 font-bold bg-black/70 px-2 py-1 rounded-lg border border-yellow-500/30 backdrop-blur animate-pulse whitespace-nowrap">
            Adding dil. H₂SO₄ — prevents Fe²⁺ oxidation
          </div>
        </Html>
      )}
      <ContactShadows position={[0, 0, 0]} opacity={0.35} scale={10} blur={2} />
    </group>
  );
};

// Steam InstancedMesh — 30 particles, single draw call
const SteamParticles: React.FC<{ active: boolean }> = ({ active }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const vels = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      x: (Math.random() - 0.5) * 0.8,
      y: 0.35 + Math.random() * 0.6 + i * 0.01,
      z: (Math.random() - 0.5) * 0.8,
      vy: 0.008 + Math.random() * 0.006,
    })), []);

  useFrame(() => {
    if (!meshRef.current || !active) return;
    vels.forEach((v, i) => {
      v.y += v.vy;
      if (v.y > 2.2) { v.y = 0.35; }
      const scale = 0.03 + (v.y - 0.35) * 0.04;
      dummy.position.set(v.x, v.y, v.z);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, 30]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshStandardMaterial color="#e2e8f0" transparent opacity={0.22} depthWrite={false} />
    </instancedMesh>
  );
};

// Crystal InstancedMesh — 60 monoclinic-like crystals
const CrystalBloom: React.FC<{ progress: number }> = ({ progress }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const positions = useMemo(() =>
    Array.from({ length: 60 }, () => ({
      x: (Math.random() - 0.5) * 3.2,
      y: -1.8 + Math.random() * 0.5,
      z: (Math.random() - 0.5) * 3.2,
      rx: Math.random() * Math.PI,
      ry: Math.random() * Math.PI,
      s: 0.06 + Math.random() * 0.08,
    })), []);

  useEffect(() => {
    if (!meshRef.current) return;
    const count = Math.floor((progress - 0.85) / 0.15 * 60);
    for (let i = 0; i < 60; i++) {
      if (i < count) {
        const p = positions[i];
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
  }, [progress, dummy, positions]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, 60]} castShadow>
      <octahedronGeometry args={[1]} />
      <meshStandardMaterial color="#6ee7b7" roughness={0.25} metalness={0.1} />
    </instancedMesh>
  );
};

const ConcentrateScene: React.FC = () => {
  const progress = useChemProgress(0.055);
  const colorRef = useRef(new THREE.Color('#34d399'));
  const targetColor = useMemo(() => new THREE.Color('#064e3b'), []);

  useFrame(() => {
    colorRef.current.lerp(targetColor, 0.005);
  });

  const pct = Math.round(progress * 100);

  return (
    <group position={[0, -1.0, 0]}>
      <BunsenBurner position={[0, 0, 0]} active={progress < 0.92} />
      {/* Water bath tray */}
      <mesh position={[0, 1.4, 0]} receiveShadow>
        <cylinderGeometry args={[1.4, 1.4, 0.14, 40]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.75} roughness={0.3} />
      </mesh>
      <Beaker
        position={[0, 1.7, 0]}
        fluidLevel={Math.max(0.05, 0.55 - progress * 0.42)}
        fluidColor="#34d399"
      />
      <SteamParticles active={progress < 0.92} />
      {progress >= 0.85 && <CrystalBloom progress={progress} />}
      <Html position={[2.2, 1.6, 0]} center>
        <div className="text-[9px] font-bold bg-black/75 px-2.5 py-1.5 rounded-xl border border-emerald-500/40 backdrop-blur text-center w-28">
          <div className="text-[8px] text-emerald-400 uppercase tracking-widest mb-0.5">Concentration</div>
          <div className="text-emerald-300 font-mono text-xs">{pct}%</div>
          {progress >= 0.85 && (
            <div className="text-[7px] text-yellow-300 mt-0.5 animate-pulse">⬡ Crystals forming</div>
          )}
        </div>
      </Html>
      <ContactShadows position={[0, 0, 0]} opacity={0.4} scale={10} blur={2} />
    </group>
  );
};

// ─── SCENE: OBSERVATION (Crystallization Reveal) ─────────────────────────────
const CrystalRevealScene: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const groupRef = useRef<THREE.Group>(null);
  const calledRef = useRef(false);
  const progress = useChemProgress(0.07);

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.003;
    if (progress >= 0.95 && !calledRef.current) {
      calledRef.current = true;
      onComplete();
    }
  });

  const smallPositions = useMemo(() =>
    Array.from({ length: 40 }, () => ({
      x: (Math.random() - 0.5) * 5,
      y: -1.8 + Math.random() * 0.6,
      z: (Math.random() - 0.5) * 5,
      rx: Math.random() * Math.PI,
      ry: Math.random() * Math.PI,
      s: 0.05 + Math.random() * 0.09,
    })), []);

  return (
    <group>
      {/* Evaporation dish */}
      <mesh position={[0, -1.9, 0]} receiveShadow>
        <cylinderGeometry args={[2.1, 2.1, 0.08, 48]} />
        <meshStandardMaterial color="#1e293b" roughness={0.9} />
      </mesh>

      {/* Primary large monoclinic crystal */}
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.5}>
        <group ref={groupRef}>
          <mesh castShadow>
            <octahedronGeometry args={[1.1]} />
            <meshPhysicalMaterial
              color="#34d399"
              transmission={0.55}
              ior={1.48}
              roughness={0.12}
              clearcoat={1}
              clearcoatRoughness={0.08}
              thickness={1.5}
              envMapIntensity={2}
            />
          </mesh>
          {/* Wireframe edge highlight */}
          <mesh scale={1.01}>
            <octahedronGeometry args={[1.1]} />
            <meshBasicMaterial color="#6ee7b7" wireframe transparent opacity={0.12} />
          </mesh>
          {/* Caustic glow underneath */}
          <pointLight color="#34d399" intensity={2} distance={3} position={[0, -1.5, 0]} />
        </group>
      </Float>

      {/* Satellite crystals */}
      {smallPositions.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]} rotation={[p.rx, p.ry, 0]} scale={p.s} castShadow>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial color="#6ee7b7" roughness={0.3} metalness={0.05} />
        </mesh>
      ))}

      <ContactShadows position={[0, -1.9, 0]} opacity={0.5} scale={12} blur={3} />
    </group>
  );
};

// ─── SCENE: ANALYSIS (Rotating crystal structure) ─────────────────────────────
const AnalysisScene: React.FC = () => {
  const outerRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (outerRef.current) outerRef.current.rotation.y = clock.elapsedTime * 0.18;
  });

  const crystalPos = useMemo(() =>
    Array.from({ length: 30 }, () => ({
      x: (Math.random() - 0.5) * 6,
      y: -2 + Math.random() * 0.8,
      z: (Math.random() - 0.5) * 6,
      s: 0.04 + Math.random() * 0.07,
    })), []);

  return (
    <group>
      <group ref={outerRef}>
        {/* Hero crystal */}
        <mesh castShadow>
          <octahedronGeometry args={[1.4]} />
          <meshPhysicalMaterial
            color="#34d399"
            transmission={0.7}
            ior={1.48}
            roughness={0.08}
            clearcoat={1}
            clearcoatRoughness={0.05}
            thickness={2}
            envMapIntensity={3}
          />
        </mesh>
        {/* Unit cell wireframe */}
        <mesh scale={1.02}>
          <octahedronGeometry args={[1.4]} />
          <meshBasicMaterial color="#6ee7b7" wireframe transparent opacity={0.15} />
        </mesh>
        <pointLight color="#34d399" intensity={3.5} distance={4} position={[0, -1.8, 0]} />
      </group>

      {/* Field of small crystals */}
      {crystalPos.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]} scale={p.s}>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial color="#6ee7b7" roughness={0.35} />
        </mesh>
      ))}

      {/* Laboratory floor */}
      <mesh position={[0, -2.1, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#0c1624" roughness={0.9} />
      </mesh>
      <ContactShadows position={[0, -2.05, 0]} opacity={0.55} scale={12} blur={3} />
    </group>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const MohrsaltLab: React.FC<Props> = ({ hex }) => {
  // Shared state for gating the "Analyze" button
  const [canAnalyze, setCanAnalyze] = React.useState(false);

  return (
    <LabProtocolEngine
      labId="C-01"
      labTitle="Synthesis of Mohr's Salt"
      labSubtitle="FeSO₄·(NH₄)₂SO₄·6H₂O — Ferrous Ammonium Sulphate Hexahydrate"
      prepTitle="Bench Preparation"
      prepSubtitle="Inorganic double-salt synthesis protocol"
      hexColor={hex}
      prepSteps={PREP_STEPS}

      renderSetupScene={(step) => (
        <Canvas camera={{ position: [3.5, 3, 5.5], fov: 48 }} dpr={[1, 1.8]}
          gl={{ antialias: true }}>
          <Environment preset="studio" />
          <ambientLight intensity={0.45} />
          <directionalLight position={[4, 8, 4]} intensity={1.2} castShadow
            shadow-mapSize={[1024, 1024]} />
          <pointLight position={[-3, 4, -2]} intensity={0.6} color="#34d399" />
          {step === 0 && <WeighScene />}
          {step === 1 && <DissolveScene />}
          {step === 2 && <ConcentrateScene />}
          <OrbitControls enablePan={false} minDistance={3} maxDistance={12} />
        </Canvas>
      )}

      renderObservationScene={() => (
        <Canvas camera={{ position: [0, 2, 7], fov: 46 }} dpr={[1, 1.8]}
          gl={{ antialias: true }}>
          <Environment preset="night" />
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 8, 3]} intensity={1.0} castShadow />
          <CrystalRevealScene onComplete={() => setCanAnalyze(true)} />
          <OrbitControls enablePan={false} minDistance={3} maxDistance={14} />
        </Canvas>
      )}

      renderObservationSidebar={(finishObservation) => (
        <div className="flex flex-col h-full space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
          {/* Live observation card */}
          <div className="bg-slate-900/60 border border-emerald-500/20 p-4 rounded-2xl backdrop-blur-md">
            <h3 className="text-slate-900 dark:text-slate-900 dark:text-white font-bold text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Crystallization
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
              As the solution cools below the saturation point, pale-green monoclinic
              crystals of Mohr's Salt nucleate. The addition of{' '}
              <ChemicalFormula formula="H2SO4" /> keeps iron in the{' '}
              <ChemicalFormula formula="Fe^2+" /> oxidation state.
            </p>
          </div>

          {/* Observation log */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-emerald-500/15">
            <p className="text-[9px] text-emerald-400 font-black uppercase tracking-widest mb-3">
              Experimental Log
            </p>
            <div className="space-y-2.5">
              {[
                { label: 'Color', value: 'Pale green → deep green' },
                { label: 'State change', value: 'Solution → crystal nucleation' },
                { label: 'Volume loss', value: '~60% (evaporation)' },
                { label: 'Oxidation guard', value: 'H₂SO₄ added (5 mL)' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-[10px]">
                  <span className="text-slate-500">{label}:</span>
                  <span className="text-slate-700 dark:text-slate-700 dark:text-slate-300 font-mono text-right ml-2">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gated analyze button */}
          <div className="mt-auto space-y-2">
            {!canAnalyze && (
              <p className="text-[9px] text-slate-500 text-center">
                Wait for crystallization to complete…
              </p>
            )}
            <button
              onClick={finishObservation}
              disabled={!canAnalyze}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-900/30 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Analyze Molecular Data →
            </button>
          </div>
        </div>
      )}

      renderAnalysisScene={() => (
        <Canvas camera={{ position: [0, 1.2, 6.5], fov: 46 }} dpr={[1, 1.8]}
          gl={{ antialias: true }}>
          <Environment preset="night" />
          <ambientLight intensity={0.35} />
          <directionalLight position={[4, 8, 4]} intensity={0.8} castShadow />
          <AnalysisScene />
          <OrbitControls autoRotate autoRotateSpeed={0.6} enablePan={false}
            minDistance={4} maxDistance={14} />
        </Canvas>
      )}

      renderAnalysisSidebar={() => (
        <div className="flex flex-col h-full space-y-4 animate-in fade-in slide-in-from-right-8 duration-700 overflow-y-auto pr-1">

          {/* Synthesis equation */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-emerald-500/20 shadow-lg">
            <p className="text-[9px] text-emerald-400 font-black uppercase tracking-widest mb-3">
              ① Balanced Equation
            </p>
            <div className="bg-slate-200 dark:bg-black/50 px-3 py-3 rounded-xl border border-black/5 dark:border-white/5 text-center space-y-1">
              <div className="text-slate-800 dark:text-slate-800 dark:text-slate-200 text-[11px] font-serif leading-relaxed">
                <ChemicalFormula formula="FeSO4" /> + <ChemicalFormula formula="(NH4)2SO4" /> + <ChemicalFormula formula="6H2O" />
              </div>
              <div className="text-emerald-400 text-lg">⟶</div>
              <div className="text-emerald-300 text-[11px] font-serif font-bold">
                <ChemicalFormula formula="FeSO4.(NH4)2SO4.6H2O" />
              </div>
            </div>
          </div>

          {/* Stoichiometry */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-blue-500/20">
            <p className="text-[9px] text-blue-400 font-black uppercase tracking-widest mb-3">
              ② Stoichiometry
            </p>
            <table className="w-full text-[10px] border-collapse">
              <thead>
                <tr className="text-slate-500 border-b border-black/5 dark:border-white/5">
                  <th className="text-left pb-1.5">Reagent</th>
                  <th className="text-right pb-1.5">MW</th>
                  <th className="text-right pb-1.5">Mass</th>
                  <th className="text-right pb-1.5">Moles</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-700 dark:text-slate-300 space-y-1">
                {[
                  { f: 'FeSO4', mw: '152', mass: '7.00 g', mol: '0.046' },
                  { f: '(NH4)2SO4', mw: '132', mass: '3.52 g', mol: '0.046' },
                ].map(r => (
                  <tr key={r.f} className="border-b border-black/5 dark:border-white/5">
                    <td className="py-1.5 font-serif"><ChemicalFormula formula={r.f} /></td>
                    <td className="text-right font-mono">{r.mw}</td>
                    <td className="text-right font-mono">{r.mass}</td>
                    <td className="text-right text-emerald-400 font-mono font-bold">{r.mol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[9px] text-emerald-400 mt-2">
              ✅ Equimolar ratio confirmed (0.046 mol each)
            </p>
          </div>

          {/* KSCN purity test */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-yellow-500/20">
            <p className="text-[9px] text-yellow-400 font-black uppercase tracking-widest mb-3">
              ③ Purity Test — KSCN
            </p>
            <div className="space-y-2 text-[10px]">
              <div className="flex gap-2 items-start">
                <span className="text-green-400 font-bold shrink-0">✓ Pure:</span>
                <span className="text-slate-700 dark:text-slate-700 dark:text-slate-300">No color change with KSCN → confirms Fe²⁺ only</span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-red-400 font-bold shrink-0">✗ Impure:</span>
                <span className="text-slate-700 dark:text-slate-700 dark:text-slate-300">Blood-red color → Fe³⁺ contamination (partial oxidation occurred)</span>
              </div>
              <div className="mt-2 bg-black/40 px-3 py-2 rounded-lg border border-black/5 dark:border-white/5 font-serif text-[10px] text-slate-700 dark:text-slate-300">
                <ChemicalFormula formula="Fe^3+" /> + 3SCN<sup>–</sup> →{' '}
                <span className="text-red-400">[Fe(SCN)₃]</span> (blood red)
              </div>
            </div>
          </div>

          {/* Crystal & double salt data */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-purple-500/20">
            <p className="text-[9px] text-purple-400 font-black uppercase tracking-widest mb-3">
              ④ Crystal & Double Salt Data
            </p>
            <div className="space-y-1.5 text-[10px]">
              {[
                { k: 'Crystal System', v: 'Monoclinic (P2₁/c)' },
                { k: 'Color', v: 'Pale blue-green' },
                { k: 'Dissociation', v: 'Fe²⁺ + 2NH₄⁺ + 2SO₄²⁻ (complete)' },
                { k: 'MW of Product', v: '392 g/mol' },
                { k: 'Water of Crystallization', v: '6 H₂O molecules' },
              ].map(({ k, v }) => (
                <div key={k} className="flex justify-between gap-2">
                  <span className="text-slate-500 shrink-0">{k}:</span>
                  <span className="text-slate-800 dark:text-slate-800 dark:text-slate-200 text-right font-mono text-[9px]">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-950/25 border border-emerald-500/20 p-3 rounded-2xl text-center">
            <p className="text-[9px] text-emerald-400 font-bold uppercase tracking-wide italic">
              "A double salt completely dissociates in water —<br />distinct from a complex salt."
            </p>
          </div>
        </div>
      )}
    />
  );
};

export default MohrsaltLab;
