/**
 * SaltAnalysisLab.tsx — Qualitative Salt Analysis (Systematic Cation Detection)
 * ─────────────────────────────────────────────────────────────────────────────
 * REDESIGNED: Replaced unreliable 3D drag-and-drop with a guided, click-based
 * interactive system. The user controls every step but is guided through the
 * systematic analysis procedure used in real CBSE/PUC practicals.
 *
 * Flow:
 *  PREP → select salt appearance → dissolve → original solution
 *  OBSERVATION → click reagent buttons → see 3D animated reaction → record
 *  ANALYSIS → full observation table + confirmed cation + chemical logic
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { LabProtocolEngine, ProtocolStep } from './shared/LabProtocolEngine';
import {
  UltraBeaker as Beaker,
  UltraReagentBottle as ReagentBottle,
  UltraTestTubeRack as TestTubeRack,
  UltraDropper as PhysicalDropper,
} from './shared/UltraApparatus';
import { ultraGlass as glassMat, ultraLiquid as liquidMat } from './shared/UltraMaterials';
import { useChemProgress } from './shared/useChemProgress';
import { ChemicalFormula } from './shared/ChemicalFormula';

interface Props { hex: string; }

// ─── DATA ─────────────────────────────────────────────────────────────────────

const PREP_STEPS: ProtocolStep[] = [
  {
    id: 'observe',
    name: 'Physical Examination',
    action: 'Dissolve the Salt',
    desc: 'Examine the unknown salt sample. Note its color, texture, and crystalline form. This gives preliminary clues — e.g. blue crystals suggest Cu²⁺, white powder suggests Group III/IV cations.',
  },
  {
    id: 'solution',
    name: 'Prepare Original Solution',
    action: 'Begin Systematic Testing',
    desc: 'Dissolve a small amount of the salt in 10 mL distilled water in a clean test tube. If insoluble, try warming gently. This "Original Solution" (O.S.) is used for all subsequent wet tests.',
  },
];

interface Reagent {
  id: string;
  name: string;
  formula: string;
  color: string;
  group: string;
  instruction: string;
}

const REAGENTS: Reagent[] = [
  { id: 'hcl', name: 'Dil. HCl', formula: 'HCl', color: '#fcd34d', group: 'Group I', instruction: 'Add 2-3 drops of dilute HCl to 2 mL of Original Solution.' },
  { id: 'h2s', name: 'H₂S (acidic)', formula: 'H2S', color: '#a3e635', group: 'Group II', instruction: 'Pass H₂S gas through the acidified solution (HCl medium).' },
  { id: 'nh4cl_nh4oh', name: 'NH₄Cl + NH₄OH', formula: 'NH4OH', color: '#c4b5fd', group: 'Group III', instruction: 'Add NH₄Cl followed by excess NH₄OH to the solution.' },
  { id: 'naoh', name: 'NaOH', formula: 'NaOH', color: '#f9a8d4', group: 'Confirmatory', instruction: 'Add 2-3 drops of NaOH to a fresh portion of Original Solution.' },
  { id: 'k4fecn6', name: 'K₄[Fe(CN)₆]', formula: 'K4Fe(CN)6', color: '#fef3c7', group: 'Confirmatory', instruction: 'Add 1-2 drops of potassium ferrocyanide to the O.S.' },
];

interface ReactionResult {
  observation: string;
  color: string;
  inference: string;
  isPositive: boolean;
}

interface Cation {
  id: string;
  name: string;
  ion: string;
  color: string;
  salt: string;
  group: string;
  groupNum: string;
  reactions: Record<string, ReactionResult>;
}

const CATIONS: Cation[] = [
  {
    id: 'cu', name: 'Copper', ion: 'Cu²⁺', color: '#3b82f6', salt: 'CuSO4', group: 'II-B', groupNum: 'Group II',
    reactions: {
      hcl: { observation: 'No precipitate. Solution remains blue.', color: '#3b82f6', inference: 'Group I absent. Proceed to Group II.', isPositive: false },
      h2s: { observation: 'Black precipitate of CuS forms.', color: '#171717', inference: 'Group II cation CONFIRMED. Cu²⁺ or Pb²⁺ possible.', isPositive: true },
      nh4cl_nh4oh: { observation: 'Light blue ppt dissolves → deep blue solution.', color: '#1e3a8a', inference: 'Formation of [Cu(NH₃)₄]²⁺ complex. Cu²⁺ CONFIRMED.', isPositive: true },
      naoh: { observation: 'Pale blue gelatinous precipitate of Cu(OH)₂.', color: '#60a5fa', inference: 'Insoluble hydroxide. Consistent with Cu²⁺.', isPositive: true },
      k4fecn6: { observation: 'Chocolate-brown precipitate of Cu₂[Fe(CN)₆].', color: '#78350f', inference: 'Confirmatory test for Cu²⁺ → POSITIVE.', isPositive: true },
    },
  },
  {
    id: 'fe', name: 'Iron (III)', ion: 'Fe³⁺', color: '#d97706', salt: 'FeCl3', group: 'III', groupNum: 'Group III',
    reactions: {
      hcl: { observation: 'No precipitate. Yellow-brown solution.', color: '#d97706', inference: 'Group I absent. Proceed.', isPositive: false },
      h2s: { observation: 'No precipitate in acidic medium.', color: '#d97706', inference: 'Group II absent. Proceed to Group III.', isPositive: false },
      nh4cl_nh4oh: { observation: 'Reddish-brown ppt of Fe(OH)₃ forms.', color: '#7c2d12', inference: 'Group III cation CONFIRMED. Fe³⁺ or Al³⁺.', isPositive: true },
      naoh: { observation: 'Reddish-brown precipitate of Fe(OH)₃.', color: '#78350f', inference: 'Insoluble in excess NaOH. Fe³⁺ CONFIRMED.', isPositive: true },
      k4fecn6: { observation: 'Prussian Blue precipitate. Intense dark blue.', color: '#1e3a8a', inference: 'Fe₄[Fe(CN)₆]₃ formed → Fe³⁺ CONFIRMED.', isPositive: true },
    },
  },
  {
    id: 'al', name: 'Aluminium', ion: 'Al³⁺', color: '#e2e8f0', salt: 'Al2(SO4)3', group: 'III', groupNum: 'Group III',
    reactions: {
      hcl: { observation: 'No precipitate. Clear solution.', color: '#e2e8f0', inference: 'Group I absent.', isPositive: false },
      h2s: { observation: 'No precipitate.', color: '#e2e8f0', inference: 'Group II absent.', isPositive: false },
      nh4cl_nh4oh: { observation: 'White gelatinous precipitate of Al(OH)₃.', color: '#f1f5f9', inference: 'Group III CONFIRMED. Al³⁺ or Fe³⁺.', isPositive: true },
      naoh: { observation: 'White ppt of Al(OH)₃ — dissolves in excess NaOH.', color: '#f8fafc', inference: 'Amphoteric hydroxide → Al³⁺ likely.', isPositive: true },
      k4fecn6: { observation: 'No significant reaction.', color: '#e2e8f0', inference: 'Not Fe³⁺. Combined with NaOH test → Al³⁺ CONFIRMED.', isPositive: false },
    },
  },
];

// ─── 3D: TEST TUBE WITH ANIMATED REACTION ──────────────────────────────────────

const ReactionTestTube: React.FC<{
  liquidColor: string;
  reactionColor: string | null;
  isReacting: boolean;
  hasPrecipitate: boolean;
}> = ({ liquidColor, reactionColor, isReacting, hasPrecipitate }) => {
  const pptRef = useRef<THREE.Group>(null);

  // Stable precipitate particle positions
  const pptPositions = useMemo(() =>
    Array.from({ length: 20 }, () => ({
      x: (Math.random() - 0.5) * 0.12,
      y: -0.72 + Math.random() * 0.15,
      z: (Math.random() - 0.5) * 0.12,
      s: 0.015 + Math.random() * 0.015,
    })), []);

  useFrame(({ clock }) => {
    if (pptRef.current && hasPrecipitate) {
      pptRef.current.children.forEach((child, i) => {
        child.position.y = pptPositions[i].y + Math.sin(clock.elapsedTime * 0.5 + i) * 0.005;
      });
    }
  });

  const displayColor = (isReacting && reactionColor) ? reactionColor : liquidColor;

  return (
    <group position={[0, 0.33, 0]}>
      {/* Test tube glass walls */}
      <mesh>
        <cylinderGeometry args={[0.11, 0.11, 1.6, 32, 1, true]} />
        {glassMat()}
      </mesh>
      {/* Test tube rounded bottom */}
      <mesh position={[0, -0.80, 0]}>
        <sphereGeometry args={[0.11, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
        {glassMat()}
      </mesh>
      {/* Liquid */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.10, 0.10, 0.8, 32]} />
        {liquidMat(displayColor, 0.5)}
      </mesh>
      {/* Precipitate particles */}
      {hasPrecipitate && reactionColor && (
        <group ref={pptRef}>
          {pptPositions.map((p, i) => (
            <mesh key={i} position={[p.x, p.y, p.z]} scale={p.s}>
              <sphereGeometry args={[1, 8, 8]} />
              <meshStandardMaterial color={reactionColor} roughness={0.8} />
            </mesh>
          ))}
        </group>
      )}
      {/* Dropper animation when reacting */}
      {isReacting && (
        <Float speed={4} rotationIntensity={0.05} floatIntensity={0.3}>
          <PhysicalDropper position={[0, 1.3, 0]} fluidColor={reactionColor || '#fff'} isDripping={true} />
        </Float>
      )}
    </group>
  );
};

// ─── 3D: PREP SCENE ─────────────────────────────────────────────────────────
const PrepScene: React.FC<{ step: number; saltColor: string }> = ({ step, saltColor }) => {
  const progress = useChemProgress(0.08);
  return (
    <group position={[0, -0.8, 0]}>
      {step === 0 && (
        <>
          {/* Salt sample on watch glass */}
          <mesh position={[0, 0.02, 0]}>
            <cylinderGeometry args={[0.8, 0.85, 0.04, 48]} />
            <meshPhysicalMaterial color="#d4eef9" transmission={0.85} ior={1.45} roughness={0.06} clearcoat={1} />
          </mesh>
          <mesh position={[0, 0.06, 0]}>
            <cylinderGeometry args={[0.55, 0.55, 0.04, 36]} />
            <meshStandardMaterial color={saltColor} roughness={0.8} />
          </mesh>
          <Html position={[0, 1.2, 0]} center>
            <div className="text-[9px] text-slate-900 dark:text-white font-bold bg-black/70 px-3 py-2 rounded-xl border border-white/15 backdrop-blur text-center max-w-[160px]">
              Examine: Color, texture, and crystal form
            </div>
          </Html>
        </>
      )}
      {step === 1 && (
        <>
          <Beaker position={[0, 0.5, 0]} fluidLevel={progress * 0.55} fluidColor={saltColor} />
          {progress < 0.5 && (
            <Html position={[0, 2.2, 0]} center>
              <div className="text-[9px] text-blue-600 dark:text-blue-300 font-bold bg-black/70 px-2 py-1 rounded-lg border border-blue-500/30 backdrop-blur animate-pulse whitespace-nowrap">
                Dissolving salt in distilled water…
              </div>
            </Html>
          )}
        </>
      )}
      <ContactShadows position={[0, -0.02, 0]} opacity={0.35} scale={10} blur={2} />
    </group>
  );
};

// ─── 3D: OBSERVATION SCENE ──────────────────────────────────────────────────
const ObservationScene: React.FC<{
  liquidColor: string;
  reactionColor: string | null;
  isReacting: boolean;
  hasPrecipitate: boolean;
}> = (props) => {
  return (
    <group position={[0, -1, 0]}>
      <TestTubeRack position={[0, 0, 0]} />
      <ReactionTestTube {...props} />
      <ContactShadows position={[0, 0, 0]} opacity={0.35} scale={10} blur={2} />
    </group>
  );
};

// ─── 3D: ANALYSIS SCENE ─────────────────────────────────────────────────────
const AnalysisScene: React.FC<{ cationColor: string }> = ({ cationColor }) => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (groupRef.current) groupRef.current.rotation.y = clock.elapsedTime * 0.2;
  });

  const particles = useMemo(() =>
    Array.from({ length: 25 }, () => ({
      x: (Math.random() - 0.5) * 5,
      y: -1.5 + Math.random() * 0.6,
      z: (Math.random() - 0.5) * 5,
      s: 0.05 + Math.random() * 0.08,
    })), []);

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={groupRef}>
          <mesh castShadow>
            <dodecahedronGeometry args={[1.2]} />
            <meshPhysicalMaterial
              color={cationColor} transmission={0.6} ior={1.5} roughness={0.1}
              clearcoat={1} clearcoatRoughness={0.06} thickness={1.5} envMapIntensity={2.5}
            />
          </mesh>
          <mesh scale={1.015}>
            <dodecahedronGeometry args={[1.2]} />
            <meshBasicMaterial color={cationColor} wireframe transparent opacity={0.12} />
          </mesh>
          <pointLight color={cationColor} intensity={3} distance={4} position={[0, -1.5, 0]} />
        </group>
      </Float>
      {particles.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]} scale={p.s}>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial color={cationColor} roughness={0.35} />
        </mesh>
      ))}
      <mesh position={[0, -1.8, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#0c1624" roughness={0.9} />
      </mesh>
      <ContactShadows position={[0, -1.75, 0]} opacity={0.5} scale={12} blur={3} />
    </group>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const SaltAnalysisLab: React.FC<Props> = ({ hex }) => {
  const [selectedCation, setSelectedCation] = useState(0);
  const [testedReagents, setTestedReagents] = useState<string[]>([]);
  const [activeReagentId, setActiveReagentId] = useState<string | null>(null);
  const [isReacting, setIsReacting] = useState(false);

  const cation = CATIONS[selectedCation];

  const handleTestReagent = (reagentId: string) => {
    if (isReacting || testedReagents.includes(reagentId)) return;
    setActiveReagentId(reagentId);
    setIsReacting(true);
    setTimeout(() => {
      setTestedReagents(prev => [...prev, reagentId]);
      setIsReacting(false);
    }, 2200);
  };

  const activeReaction = activeReagentId ? cation.reactions[activeReagentId] : null;
  const lastTestedReagentId = testedReagents.length > 0 ? testedReagents[testedReagents.length - 1] : null;
  const lastReaction = lastTestedReagentId ? cation.reactions[lastTestedReagentId] : null;

  // Find positive confirmatory tests
  const confirmatoryTests = testedReagents.filter(rid => cation.reactions[rid]?.isPositive);
  const hasConfirmed = confirmatoryTests.length >= 2;

  return (
    <LabProtocolEngine
      labId="C-09"
      labTitle="Qualitative Salt Analysis"
      labSubtitle={`Systematic identification of ${cation.ion} (${cation.name})`}
      prepTitle="Physical Examination"
      prepSubtitle="Preliminary tests & solution preparation"
      hexColor={hex}
      prepSteps={PREP_STEPS}

      renderSetupScene={(step) => (
        <Canvas camera={{ position: [2, 2, 5], fov: 46 }} dpr={[1, 1.8]} gl={{ antialias: true }}>
          <Environment preset="studio" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[4, 8, 4]} intensity={1.0} castShadow />
          <PrepScene step={step} saltColor={cation.color} />
          <OrbitControls enablePan={false} minDistance={2} maxDistance={10} />
        </Canvas>
      )}

      renderObservationScene={() => (
        <Canvas camera={{ position: [1, 2.5, 6], fov: 46 }} dpr={[1, 1.8]} gl={{ antialias: true }}>
          <Environment preset="studio" />
          <ambientLight intensity={0.55} />
          <directionalLight position={[4, 8, 4]} intensity={1.1} castShadow />
          <pointLight position={[-3, 5, 2]} intensity={0.5} color={cation.color} />
          <ObservationScene
            liquidColor={cation.color}
            reactionColor={activeReaction?.color || lastReaction?.color || null}
            isReacting={isReacting}
            hasPrecipitate={
              (isReacting && activeReaction?.isPositive === true) ||
              (!isReacting && lastReaction?.isPositive === true)
            }
          />
          <OrbitControls enablePan={false} minDistance={3} maxDistance={12} makeDefault />
        </Canvas>
      )}

      renderObservationSidebar={(finishObservation) => (
        <div className="flex flex-col h-full space-y-3 animate-in fade-in slide-in-from-right-4 duration-500 overflow-y-auto pr-1">
          {/* Salt selector */}
          <div className="bg-slate-900/60 border border-black/10 dark:border-white/10 p-3 rounded-2xl backdrop-blur-md">
            <p className="text-[9px] text-emerald-400 font-black uppercase tracking-widest mb-2">
              Unknown Salt Sample
            </p>
            <div className="flex gap-1.5">
              {CATIONS.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => { setSelectedCation(i); setTestedReagents([]); setActiveReagentId(null); }}
                  className={`flex-1 px-2 py-2 rounded-xl text-[10px] font-bold border transition-all text-center ${
                    selectedCation === i
                      ? 'bg-emerald-500/20 border-emerald-500 text-white shadow-md'
                      : 'bg-black/40 border-white/5 text-slate-500 hover:bg-white/5 hover:text-slate-300'
                  }`}
                >
                  <div className="w-3 h-3 rounded-full mx-auto mb-1 border border-white/20"
                    style={{ backgroundColor: c.color }} />
                  <ChemicalFormula formula={c.salt} className="text-[8px]" />
                </button>
              ))}
            </div>
          </div>

          {/* Guided reagent testing */}
          <div className="bg-slate-900/60 border border-black/10 dark:border-white/10 p-3 rounded-2xl">
            <p className="text-[9px] text-blue-400 font-black uppercase tracking-widest mb-2">
              🧪 Add Reagent (click to test)
            </p>
            <div className="space-y-1.5">
              {REAGENTS.map((r) => {
                const tested = testedReagents.includes(r.id);
                const result = tested ? cation.reactions[r.id] : null;
                const isTesting = isReacting && activeReagentId === r.id;

                return (
                  <button
                    key={r.id}
                    onClick={() => handleTestReagent(r.id)}
                    disabled={tested || isReacting}
                    className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                      isTesting
                        ? 'bg-yellow-500/20 border-yellow-500/50 animate-pulse'
                        : tested
                          ? result?.isPositive
                            ? 'bg-green-900/25 border-green-500/30'
                            : 'bg-slate-800/40 border-white/5'
                          : 'bg-black/30 border-white/8 hover:bg-white/5 hover:border-white/15 cursor-pointer'
                    } disabled:cursor-not-allowed`}
                  >
                    {/* Color dot */}
                    <div className="w-3.5 h-3.5 rounded-full shrink-0 border border-white/20" style={{ backgroundColor: r.color }} />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-900 dark:text-slate-900 dark:text-white truncate">{r.name}</span>
                        <span className="text-[8px] text-slate-500 uppercase shrink-0 ml-1">{r.group}</span>
                      </div>
                      {tested && result && (
                        <p className={`text-[8px] mt-0.5 leading-relaxed ${result.isPositive ? 'text-green-400' : 'text-slate-500'}`}>
                          {result.isPositive ? '✓ ' : '✗ '}{result.observation.slice(0, 60)}
                        </p>
                      )}
                      {isTesting && (
                        <p className="text-[8px] text-yellow-300 mt-0.5 animate-pulse">Adding reagent…</p>
                      )}
                    </div>

                    {/* Status icon */}
                    <div className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
                      {tested ? (result?.isPositive ? '✅' : '➖') : isTesting ? '⏳' : '🔬'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current observation */}
          {activeReagentId && (isReacting || testedReagents.includes(activeReagentId)) && (
            <div className={`p-3 rounded-2xl border animate-in zoom-in-95 duration-300 ${
              (cation.reactions[activeReagentId]?.isPositive)
                ? 'bg-green-950/25 border-green-500/30'
                : 'bg-slate-900/50 border-white/10'
            }`}>
              <p className="text-[9px] text-emerald-400 font-black uppercase tracking-widest mb-1.5">
                Observation
              </p>
              <p className="text-slate-900 dark:text-slate-900 dark:text-white text-[11px] font-bold leading-snug">
                {cation.reactions[activeReagentId]?.observation}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-[9px] mt-1 italic leading-relaxed">
                {cation.reactions[activeReagentId]?.inference}
              </p>
            </div>
          )}

          {/* Progress indicator */}
          <div className="bg-slate-950/50 border border-black/5 dark:border-white/5 p-3 rounded-2xl">
            <div className="flex justify-between text-[9px] mb-1.5">
              <span className="text-slate-500">Tests completed:</span>
              <span className="text-slate-900 dark:text-slate-900 dark:text-white font-mono font-bold">{testedReagents.length}/{REAGENTS.length}</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                style={{ width: `${(testedReagents.length / REAGENTS.length) * 100}%` }}
              />
            </div>
            {hasConfirmed && (
              <p className="text-[8px] text-green-400 mt-1.5 font-bold animate-pulse">
                ✓ Cation confirmed! You may analyze results now.
              </p>
            )}
          </div>

          {/* Analyze button */}
          <div className="mt-auto">
            <button
              onClick={finishObservation}
              disabled={testedReagents.length < 3}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-900/30 active:scale-95 transition-all disabled:opacity-35 disabled:cursor-not-allowed"
            >
              {testedReagents.length < 3 ? `Test ${3 - testedReagents.length} more reagent(s)…` : 'Analyze Results →'}
            </button>
          </div>
        </div>
      )}

      renderAnalysisScene={() => (
        <Canvas camera={{ position: [0, 1.5, 6.5], fov: 46 }} dpr={[1, 1.8]} gl={{ antialias: true }}>
          <Environment preset="night" />
          <ambientLight intensity={0.35} />
          <directionalLight position={[4, 8, 3]} intensity={0.8} castShadow />
          <AnalysisScene cationColor={cation.color} />
          <OrbitControls autoRotate autoRotateSpeed={0.55} enablePan={false} minDistance={4} maxDistance={14} />
        </Canvas>
      )}

      renderAnalysisSidebar={() => (
        <div className="flex flex-col space-y-4 animate-in fade-in slide-in-from-right-8 duration-700 pr-1">

          {/* Identified cation */}
          <div className="bg-emerald-900/20 border border-emerald-500/30 p-4 rounded-2xl shadow-lg">
            <p className="text-[9px] text-emerald-400 font-black uppercase tracking-widest mb-2">
              ✓ Cation Identified
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg border border-emerald-500/30"
                style={{ backgroundColor: cation.color + '30' }}>
                <span className="font-bold text-slate-900 dark:text-slate-900 dark:text-white text-sm">{cation.ion}</span>
              </div>
              <div>
                <p className="text-slate-900 dark:text-slate-900 dark:text-white font-bold text-sm">{cation.name}</p>
                <p className="text-slate-600 dark:text-slate-400 text-[10px]">
                  {cation.groupNum} ({cation.group}) • <ChemicalFormula formula={cation.salt} />
                </p>
              </div>
            </div>
          </div>

          {/* Full observation table */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-black/10 dark:border-white/10">
            <p className="text-[9px] text-blue-400 font-black uppercase tracking-widest mb-3">
              Observation & Inference Table
            </p>
            <div className="space-y-2">
              {REAGENTS.map(r => {
                const result = cation.reactions[r.id];
                const wasTested = testedReagents.includes(r.id);
                return (
                  <div key={r.id} className={`p-2.5 rounded-xl border text-[9px] ${
                    wasTested
                      ? result.isPositive
                        ? 'bg-green-950/20 border-green-500/20'
                        : 'bg-slate-950/50 border-white/5'
                      : 'bg-slate-950/30 border-white/3 opacity-50'
                  }`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-900 dark:text-slate-900 dark:text-white">{r.name}</span>
                      {wasTested && (
                        <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${
                          result.isPositive ? 'bg-green-500/20 text-green-400' : 'bg-slate-700/50 text-slate-500'
                        }`}>
                          {result.isPositive ? 'POSITIVE' : 'NEGATIVE'}
                        </span>
                      )}
                    </div>
                    {wasTested && (
                      <>
                        <p className="text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed">{result.observation}</p>
                        <p className="text-slate-500 mt-0.5 italic">{result.inference}</p>
                      </>
                    )}
                    {!wasTested && (
                      <p className="text-slate-600 italic">Not tested</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chemical logic */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-purple-500/20">
            <p className="text-[9px] text-purple-400 font-black uppercase tracking-widest mb-2">
              Systematic Logic
            </p>
            <div className="space-y-1.5 text-[10px] text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed">
              {cation.id === 'cu' && (
                <>
                  <p>• No Group I precipitation (HCl negative) → Not Pb²⁺ or Ag⁺</p>
                  <p>• Black CuS precipitate in H₂S (acidic medium) → Group II confirmed</p>
                  <p>• Deep blue [Cu(NH₃)₄]²⁺ complex → <strong className="text-blue-600 dark:text-blue-300">Cu²⁺ confirmed</strong></p>
                </>
              )}
              {cation.id === 'fe' && (
                <>
                  <p>• Group I & II negative → Not Group I/II cation</p>
                  <p>• Reddish-brown Fe(OH)₃ with NH₄OH → Group III confirmed</p>
                  <p>• Prussian Blue with K₄[Fe(CN)₆] → <strong className="text-blue-600 dark:text-blue-300">Fe³⁺ confirmed</strong></p>
                </>
              )}
              {cation.id === 'al' && (
                <>
                  <p>• Group I & II negative → Not Group I/II cation</p>
                  <p>• White gelatinous Al(OH)₃ with NH₄OH → Group III confirmed</p>
                  <p>• Dissolves in excess NaOH (amphoteric) → <strong className="text-blue-600 dark:text-blue-300">Al³⁺ confirmed</strong></p>
                </>
              )}
            </div>
          </div>

          <div className="bg-emerald-950/20 border border-emerald-500/20 p-3 rounded-2xl text-center">
            <p className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider italic">
              Salt Analysis Complete ✓
            </p>
          </div>
        </div>
      )}
    />
  );
};

export default SaltAnalysisLab;
