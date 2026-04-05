import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, RoundedBox, Cylinder, Sphere, Line, Box } from '@react-three/drei';
import * as THREE from 'three';
import { LabProtocolEngine } from './shared/LabProtocolEngine';
import { Dropper } from './shared/props/MicroscopySet';

interface Props { hex: string; }

const PREP_STEPS = [
  { id: 'macerate', name: 'Macerate Sample', action: 'Grind Tissue', desc: 'Mechanically break down the plant tissue (e.g., onion/banana) using a mortar and pestle to destroy cell walls.' },
  { id: 'lyse', name: 'Lysis Buffer', action: 'Add Buffer', desc: 'Add detergent (SDS) to lyse nuclear membranes and NaCl to precipitate proteins, releasing DNA.' },
  { id: 'filter', name: 'Filtration', action: 'Filter Extract', desc: 'Filter the mixture through cheesecloth to remove cellular debris, collecting the clear DNA filtrate.' }
];

const STAGES = [
  { name: 'Aqueous Filtrate', color: '#8b5cf6', desc: 'The collected clear filtrate contains dissolved DNA, while cellular debris has been removed.' },
  { name: 'Ethanol Addition', color: '#06b6d4', desc: 'Ice-cold ethanol is carefully added down the side of the tube. DNA is insoluble in cold alcohol.' },
  { name: 'Precipitation & Spooling', color: '#f0abfc', desc: 'DNA precipitates into a visible white, stringy mass at the interface. Extract it via spooling.' }
];

/* ────────────────────────────────────────────────────────────────────────────
   3D PARTICLES / EFFECTS
   ──────────────────────────────────────────────────────────────────────────── */
const LiquidDebris = ({ active, height }: { active: boolean, height: number }) => {
    const groupRef = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (!groupRef.current || !active) return;
        groupRef.current.children.forEach(c => {
            c.position.y += Math.sin(state.clock.elapsedTime * 2 + c.position.x) * 0.005;
            c.rotation.x += 0.01;
            c.rotation.y += 0.02;
        });
    });

    return (
        <group ref={groupRef} position={[0, -1.4 + height/2, 0]}>
            {[...Array(30)].map((_, i) => (
                <Box key={`debris-${i}`} args={[0.02 + Math.random()*0.03, 0.02 + Math.random()*0.03, 0.02 + Math.random()*0.03]} position={[(Math.random()-0.5)*0.6, (Math.random()-0.5)*height, (Math.random()-0.5)*0.6]}>
                    <meshStandardMaterial color="#22c55e" roughness={0.9} />
                </Box>
            ))}
        </group>
    );
};

const DNAPrecipitate = ({ active, spooling, interfaceY }: { active: boolean, spooling: boolean, interfaceY: number }) => {
    const groupRef = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (!groupRef.current || !active) return;
        groupRef.current.children.forEach((c, i) => {
            c.position.y += Math.random() * 0.002;
            c.position.x += Math.sin(state.clock.elapsedTime + i) * 0.002;
            if (c.position.y > interfaceY + 0.6) {
                c.position.y = interfaceY; 
            }
            if (spooling) {
                c.position.x *= 0.95;
                c.position.z *= 0.95;
            }
        });
    });

    return (
        <group ref={groupRef}>
            {[...Array(40)].map((_, i) => {
                const pts = [];
                let curr = new THREE.Vector3(0,0,0);
                for(let j=0; j<5; j++) {
                    pts.push(curr.clone());
                    curr.add(new THREE.Vector3((Math.random()-0.5)*0.05, Math.random()*0.05+0.02, (Math.random()-0.5)*0.05));
                }
                const px = (Math.random()-0.5)*0.6;
                const pz = (Math.random()-0.5)*0.6;
                return (
                    <group key={`dna-${i}`} position={[px, interfaceY, pz]}>
                        <Line points={pts} color="#ffffff" lineWidth={3} transparent opacity={0.8} />
                    </group>
                );
            })}
        </group>
    );
};

/* ────────────────────────────────────────────────────────────────────────────
   PHASE 1: PREPARATION SCENE (Macro Lab Equipment)
   ──────────────────────────────────────────────────────────────────────────── */
const PreparationScene = ({ prepStep }: { prepStep: number }) => {
  const [animProgress, setAnimProgress] = useState(0);

  React.useEffect(() => {
    setAnimProgress(0);
  }, [prepStep]);

  useFrame((_, dt) => {
    setAnimProgress(p => Math.min(1, p + dt * 1.5));
  });

  return (
    <group position={[0, -1, 0]}>
      {/* Desk */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <boxGeometry args={[10, 1, 6]} />
        <meshStandardMaterial color="#0f172a" roughness={0.8} metalness={0.1} />
      </mesh>
      
      {/* Setup based on step */}
      {prepStep === 0 && (
         <group position={[0, 0, 0]}>
            {/* Mortar */}
            <mesh position={[0, 0.2, 0]} castShadow>
               <cylinderGeometry args={[0.8, 0.5, 0.4, 32]} />
               <meshStandardMaterial color="#f8fafc" roughness={1} />
            </mesh>
            {/* Pestle */}
            <mesh position={[0.2, 0.5 - Math.sin(animProgress*Math.PI*4)*0.1, 0.2]} rotation={[0.4, 0, 0.2]} castShadow>
               <cylinderGeometry args={[0.08, 0.15, 0.8, 16]} />
               <meshStandardMaterial color="#f1f5f9" roughness={0.9} />
            </mesh>
            {/* Splatter / Tissue */}
            <mesh position={[0, 0.41, 0]}>
               <cylinderGeometry args={[0.65, 0.65, 0.01, 32]} />
               <meshStandardMaterial color="#22c55e" roughness={0.9} />
            </mesh>
         </group>
      )}

      {prepStep === 1 && (
         <group position={[0, 0, 0]}>
             <mesh position={[0, 0.6, 0]}>
                 <cylinderGeometry args={[0.6, 0.6, 1.2, 32]} />
                 <meshPhysicalMaterial color="#ffffff" transmission={0.95} transparent roughness={0.1} ior={1.5} side={THREE.DoubleSide} />
             </mesh>
             {/* Liquid */}
             <mesh position={[0, 0.4, 0]}>
                 <cylinderGeometry args={[0.55, 0.55, 0.8 + animProgress*0.2, 32]} />
                 <meshPhysicalMaterial color="#3b82f6" transmission={0.8} transparent opacity={0.6} />
             </mesh>
             {/* Beaker pouring */}
             <group position={[1.2, 1.8 - animProgress*0.5, 0]} rotation={[0, 0, 0.5 + animProgress]}>
                 <mesh position={[0,0,0]}>
                    <cylinderGeometry args={[0.3, 0.3, 0.8, 32]} />
                    <meshPhysicalMaterial color="#ffffff" transmission={0.9} transparent roughness={0.1} side={THREE.DoubleSide}/>
                 </mesh>
                 {animProgress > 0.2 && animProgress < 0.8 && (
                     <mesh position={[-0.4, 0.8, 0]} rotation={[0,0,-0.5]}>
                        <cylinderGeometry args={[0.05, 0.05, 1]} />
                        <meshPhysicalMaterial color="#3b82f6" transmission={0.8} transparent opacity={0.6} />
                     </mesh>
                 )}
             </group>
         </group>
      )}

      {prepStep === 2 && (
         <group position={[0, 0, 0]}>
            {/* Conical Flask */}
            <mesh position={[0, 0.6, 0]}>
               <coneGeometry args={[0.8, 1.2, 32, 1, true]} />
               <meshPhysicalMaterial color="#ffffff" transmission={0.95} transparent roughness={0.1} ior={1.5} side={THREE.DoubleSide} />
            </mesh>
            {/* Funnel */}
            <mesh position={[0, 1.5, 0]} rotation={[Math.PI, 0, 0]}>
               <coneGeometry args={[0.6, 0.6, 32, 1, true]} />
               <meshPhysicalMaterial color="#ffffff" transmission={0.9} transparent roughness={0.1} side={THREE.DoubleSide} />
            </mesh>
            {/* Filtrate drops */}
            {animProgress < 0.8 && (
                <mesh position={[0, 1.2 - (animProgress*10)%0.6, 0]}>
                    <sphereGeometry args={[0.05]} />
                    <meshPhysicalMaterial color="#c4b5fd" transmission={0.8} transparent />
                </mesh>
            )}
            {/* Collected Filtrate */}
            <mesh position={[0, 0.3, 0]}>
                 <coneGeometry args={[0.6, 0.6 * animProgress, 32]} />
                 <meshPhysicalMaterial color="#c4b5fd" transmission={0.8} transparent opacity={0.6} />
            </mesh>
         </group>
      )}
    </group>
  );
};


/* ────────────────────────────────────────────────────────────────────────────
   PHASE 2: OBSERVATION SCENE (Extraction inside Test Tube)
   ──────────────────────────────────────────────────────────────────────────── */
const DNATubeScene = ({ stage }: { stage: number }) => {
    const liquidRef = useRef<THREE.MeshPhysicalMaterial>(null);
    const alcoholLayerRef = useRef<THREE.Mesh>(null);
    const spoolRodRef = useRef<THREE.Group>(null);
    
    const targetHeight = 1.0; 

    useFrame((state) => {
        // Alcohol Layer Fading in Stage 1+
        if (alcoholLayerRef.current) {
            const targetY = stage >= 1 ? 0.8 : 0.01;
            alcoholLayerRef.current.scale.y = THREE.MathUtils.lerp(alcoholLayerRef.current.scale.y, targetY, 0.05);
            alcoholLayerRef.current.position.y = targetHeight - 1 + (alcoholLayerRef.current.scale.y / 2);
            alcoholLayerRef.current.visible = alcoholLayerRef.current.scale.y > 0.05;
        }

        // Spooling rod descending in Stage 2
        if (spoolRodRef.current) {
            const active = stage >= 2;
            const tY = active ? 0 : 3;
            spoolRodRef.current.position.y = THREE.MathUtils.lerp(spoolRodRef.current.position.y, tY, 0.05);
            if (active) {
                // Stirring motion
                spoolRodRef.current.rotation.y += 0.05;
                spoolRodRef.current.position.x = Math.sin(state.clock.elapsedTime * 2) * 0.1;
                spoolRodRef.current.position.z = Math.cos(state.clock.elapsedTime * 2) * 0.1;
            }
        }
    });

    return (
        <group position={[0, -1, 0]}>
            <RoundedBox args={[1.5, 0.2, 1.5]} position={[0, 0.1, 0]} castShadow receiveShadow>
                <meshStandardMaterial color="#475569" />
            </RoundedBox>

            <group position={[0, 1.6, 0]}>
                {/* Glass Tubing */}
                <Cylinder args={[0.4, 0.4, 2.8, 32]} position={[0, 0, 0]} castShadow>
                   <meshPhysicalMaterial color="#ffffff" transmission={0.99} opacity={1} roughness={0} ior={1.5} thickness={0.1} transparent side={THREE.DoubleSide} />
                </Cylinder>
                <Sphere args={[0.4, 32, 16, 0, Math.PI*2, 0, Math.PI/2]} position={[0, -1.4, 0]} rotation={[Math.PI, 0, 0]}>
                   <meshPhysicalMaterial color="#ffffff" transmission={0.99} opacity={1} roughness={0} ior={1.5} thickness={0.1} transparent side={THREE.DoubleSide} />
                </Sphere>

                {/* Base Liquid Filtrate */}
                <mesh position={[0, -1.4 + targetHeight / 2, 0]}>
                    <cylinderGeometry args={[0.38, 0.38, targetHeight, 32]} />
                    <meshPhysicalMaterial ref={liquidRef} color="#c4b5fd" transmission={0.4} opacity={0.9} transparent roughness={0.2} ior={1.33} />
                </mesh>
                <Sphere args={[0.38, 32, 16, 0, Math.PI*2, 0, Math.PI/2]} position={[0, -1.4, 0]} rotation={[Math.PI, 0, 0]}>
                    <meshPhysicalMaterial color="#c4b5fd" transmission={0.4} opacity={0.9} transparent roughness={0.2} ior={1.33} />
                </Sphere>

                {/* Ethanol Layer (Starts Stage 1) */}
                <mesh ref={alcoholLayerRef} position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.38, 0.38, 1, 32]} />
                    <meshPhysicalMaterial color="#cffafe" transmission={0.9} opacity={0.8} transparent roughness={0} ior={1.35} />
                </mesh>

                {/* Interface DNA precipitate (Forms at Stage 1) */}
                {stage >= 1 && <DNAPrecipitate active={stage === 1} spooling={stage === 2} interfaceY={targetHeight - 1} />}

                {/* Spooling Glass Rod (Stage 2) */}
                <group ref={spoolRodRef} position={[0, 3, 0]}>
                    <Cylinder args={[0.04, 0.04, 3, 16]} position={[0, 0, 0]}>
                        <meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0} />
                    </Cylinder>
                    {stage === 2 && (
                         <group position={[0, -1, 0]}>
                            <Sphere args={[0.15, 16, 16]} scale={[1, 2, 1]}>
                                 <meshStandardMaterial color="#fdf4ff" roughness={1} />
                            </Sphere>
                            {[...Array(10)].map((_, i) => (
                                <Cylinder key={`wrap-${i}`} args={[0.16, 0.16, 0.05, 8]} position={[0, (Math.random()-0.5)*0.8, 0]} rotation={[Math.random(), 0, Math.random()]}>
                                    <meshStandardMaterial color="#ffffff" roughness={1} />
                                </Cylinder>
                            ))}
                         </group>
                    )}
                </group>
            </group>
        </group>
    );
};

/* ────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ──────────────────────────────────────────────────────────────────────────── */
const DNAIsolationLab: React.FC<Props> = ({ hex }) => {
  const [stage, setStage] = useState(0);

  return (
    <LabProtocolEngine
      labId="b7"
      labTitle="Molecular Biology: DNA Extraction"
      labSubtitle="Execute chemical cell lysis and isolate macroscopic DNA fibers via cold ethanol precipitation."
      hexColor={hex}
      prepSteps={PREP_STEPS}
      renderSetupScene={(step) => (
        <Canvas camera={{ position: [0, 2, 6], fov: 55 }} dpr={[1, 2]}>
          <Environment preset="apartment" />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 10, 5]} intensity={1.2} />
          <pointLight position={[-5, 5, 5]} intensity={0.5} color="#e0f2fe" />
          <PreparationScene prepStep={step} />
          <OrbitControls enablePan enableZoom minDistance={3} maxDistance={14} target={[0, -0.5, 0]} />
        </Canvas>
      )}
      renderObservationScene={() => (
        <>
          <Canvas camera={{ position: [0, 1, 6], fov: 50 }}>
            <Environment preset="apartment" />
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 10, 5]} intensity={1.5} color={STAGES[stage].color} />
            <pointLight position={[-5, -10, -5]} intensity={0.8} />
            <DNATubeScene stage={stage} />
            <ContactShadows position={[0, -1.05, 0]} opacity={0.6} scale={15} blur={2.5} far={4} color="#000" />
            <OrbitControls enablePan={true} enableZoom={true} target={[0,0,0]} maxPolarAngle={Math.PI/2 + 0.1}/>
          </Canvas>
        </>
      )}
      renderObservationSidebar={(finishObservation) => (
        <>
          <div className="p-4 rounded-xl border shadow-inner transition-all duration-300" style={{ backgroundColor: STAGES[stage].color + '15', borderColor: STAGES[stage].color + '40' }}>
            <p className="font-bold text-sm mb-1" style={{ color: STAGES[stage].color }}>{STAGES[stage].name}</p>
            <p className="text-slate-700 dark:text-slate-700 dark:text-slate-300 text-xs leading-relaxed">{STAGES[stage].desc}</p>
          </div>

          <div>
             <p className="text-[10px] text-slate-600 dark:text-slate-400 uppercase font-bold tracking-widest mb-2 border-t border-black/5 dark:border-white/5 pt-4">Observation Protocol</p>
             <div className="flex flex-col gap-1.5">
               {STAGES.map((s, i) => (
                 <button key={s.name} onClick={() => setStage(i)}
                   className={`py-3 px-4 rounded-lg text-xs font-bold transition-all border text-left flex items-center justify-between ${stage === i ? 'text-white border-current' : 'border-white/10 text-slate-400 bg-slate-950 hover:border-white/30'}`}
                   style={stage === i ? { backgroundColor: s.color + '30', borderColor: s.color, color: '#fff', boxShadow: `0 0 10px ${s.color}20` } : {}}>
                   <span>{i+1}. {s.name}</span>
                   {stage === i && <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded px-2">Active</span>}
                 </button>
               ))}
             </div>
          </div>

          <div className="flex gap-2 pt-2 border-t border-black/5 dark:border-white/5 mt-2">
            <button onClick={() => setStage(Math.max(0, stage - 1))} disabled={stage === 0}
              className="flex-1 py-3 rounded-xl bg-slate-800 text-white text-xs font-bold disabled:opacity-30 hover:bg-slate-700 transition-colors shadow-md">
              ← Prev
            </button>
            <button onClick={() => setStage(Math.min(STAGES.length - 1, stage + 1))} disabled={stage === STAGES.length - 1}
              className="flex-1 py-3 rounded-xl text-slate-900 dark:text-slate-900 dark:text-white text-xs font-bold disabled:opacity-30 transition-all shadow-lg active:scale-95"
              style={{ backgroundColor: STAGES[stage].color, boxShadow: `0 4px 14px ${STAGES[stage].color}40` }}>
              Next Step →
            </button>
          </div>

          {stage === 2 && (
             <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/10 flex flex-col gap-3">
                 <div className="bg-emerald-900/20 border border-emerald-500/30 p-4 rounded-xl backdrop-blur-md animate-fade-in border-l-4 border-l-emerald-500">
                     <p className="text-emerald-300 font-bold text-xs mb-1">DNA Extraction Successful</p>
                     <p className="text-[10px] text-emerald-100/70">High molecular weight genomic DNA recovered.</p>
                 </div>
                 
                 <button onClick={finishObservation} className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-black text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 transition-all">
                     View Lab Analysis Report
                 </button>
             </div>
          )}
        </>
      )}
      renderAnalysisSidebar={() => (
          <div className="flex flex-col h-full space-y-4 animate-fade-in">
              <div className="bg-[#1e293b] rounded-xl p-5 border border-black/10 dark:border-white/10">
                  <h3 className="text-sm font-black text-slate-900 dark:text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-black/10 dark:border-white/10 pb-2">Observation & Inference</h3>
                  
                  <div className="space-y-4">
                      <div>
                          <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1">1. Lysis Action (Detergent)</p>
                          <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Observation:</strong> Tissue formed a homogenous cloudy slurry.</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Inference:</strong> SDS broke down the lipid bilayer of the cell and nuclear membranes, releasing chromatin.</p>
                      </div>

                      <div>
                          <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1">2. Salting Out (NaCl)</p>
                          <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Observation:</strong> Proteins clumped, allowing clear filtrate.</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Inference:</strong> Salt neutralizes the negative charge of the DNA phosphate backbone, helping it separate from histone proteins.</p>
                      </div>

                      <div>
                          <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1">3. Alcohol Precipitation</p>
                          <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Observation:</strong> White, thread-like fibers precipitated at the interface.</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Inference:</strong> DNA is soluble in water but insoluble in cold ethanol, causing it to aggregate into visible strands.</p>
                      </div>
                  </div>
              </div>

              <div className="mt-auto bg-slate-900 rounded-xl p-4 border border-slate-700">
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 italic">"The spooling of these white fibres provides definitive macro-level physical evidence of long-chain nucleic acids."</p>
              </div>
          </div>
      )}
      observationHUD={
        <div style={{
          position: 'absolute', top: 16, right: 16, zIndex: 20,
          background: STAGES[stage].color + '25', border: `1px solid ${STAGES[stage].color}50`,
          borderRadius: 12, padding: '8px 16px', backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.5s ease'
        }}>
          <span style={{ color: STAGES[stage].color, fontWeight: 800, fontSize: 12 }}>{STAGES[stage].name}</span>
        </div>
      }
    />
  );
};

export default DNAIsolationLab;
