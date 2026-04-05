import React, { useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, RoundedBox, Html, Text } from '@react-three/drei';
import * as THREE from 'three';
import { LabProtocolEngine } from './shared/LabProtocolEngine';
import { CompoundMicroscope, GlassSlide, Coverslip, Dropper, MicroscopeHUD } from './shared/props/MicroscopySet';

interface Props { hex: string; }

const PREP_STEPS = [
  { id: 'extract', name: 'Extract Epidermis', action: 'Tear Leaf', desc: 'Carefully tear a Tradescantia (Rhoeo) leaf to expose and extract a thin, purple-tinged epidermal peel.' },
  { id: 'mount', name: 'Wet Mount', action: 'Mount in Water', desc: 'Place the peel on a slide, add a drop of pure water to maintain turgor, and cover with a coverslip.' },
  { id: 'stage', name: 'Mount Slide', action: 'Place on Stage', desc: 'Mount the prepared slide onto the microscope stage to observe the turgid cells.' }
];

/* ────────────────────────────────────────────────────────────────────────────
   PLANT CELL COMPONENT 
   ──────────────────────────────────────────────────────────────────────────── */
interface PlantCellProps {
  position: [number, number, number];
  saltConc: number;
  plasmolysisLevel: number;
  label?: string;
  showArrows?: boolean;
}

const PlantCell = ({ position, saltConc, plasmolysisLevel, label, showArrows }: PlantCellProps) => {
  const shrink = plasmolysisLevel / 100;
  
  // Membrane scaling
  const mShrink = 1 - shrink * 0.35;
  const mScaleV = new THREE.Vector3(mShrink, mShrink, mShrink);
  
  // Vacuole scaling 
  const vShrink = 1 - shrink * 0.8;
  const vScaleV = new THREE.Vector3(vShrink, vShrink, vShrink);

  const isTurgid = plasmolysisLevel < 10;
  const isFlaccid = plasmolysisLevel >= 10 && plasmolysisLevel < 40;
  
  const mColor = isTurgid ? '#86efac' : isFlaccid ? '#4ade80' : '#16a34a';
  const vColor = isTurgid ? '#93c5fd' : '#60a5fa';

  const tRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
     if(tRef.current && showArrows) {
        // Arrow particle flow
        tRef.current.children.forEach((c: any, i: number) => {
           if(c.isMesh) {
              const speed = isTurgid ? -0.5 : 0.5; // Turgid: inward (endosmosis), Plasmolysed: outward (exosmosis)
              // If flaccid (isotonic), no net movement, arrows hover
              if (plasmolysisLevel > 10 && plasmolysisLevel < 25) {
                 c.position.y = c.userData.oy + Math.sin(clock.elapsedTime * 2 + i) * 0.05;
                 c.material.opacity = 0;
                 return;
              }
              
              c.material.opacity = 0.6;
              const tPhase = (clock.elapsedTime * speed + i * 0.2) % 1;
              const phase = tPhase < 0 ? 1 + tPhase : tPhase;
              
              const startR = isTurgid ? 1.5 : (0.5 * mShrink);
              const endR = isTurgid ? 0.5 : 1.5;
              
              const r = startR + (endR - startR) * phase;
              c.position.x = Math.cos(c.userData.ang) * r;
              c.position.y = Math.sin(c.userData.ang) * r;
           }
        });
     }
  });

  return (
    <group position={position}>
       {/* Rigid Cell Wall */}
       <RoundedBox args={[2, 2, 2]} radius={0.1} smoothness={4}>
         <meshPhysicalMaterial color="#65a30d" transmission={0.9} transparent opacity={0.3} roughness={0.4} wireframe={false} />
       </RoundedBox>
       
       <RoundedBox args={[2.05, 2.05, 2.05]} radius={0.1} smoothness={4} >
         <meshBasicMaterial color="#65a30d" wireframe transparent opacity={0.2} />
       </RoundedBox>

       {/* Shrinking Membrane (Cytoplasm) */}
       <RoundedBox args={[1.9, 1.9, 1.9]} radius={0.15} smoothness={4} scale={mScaleV}>
         <meshPhysicalMaterial color={mColor} transmission={0.6} transparent opacity={0.6} roughness={0.2} ior={1.3} />
       </RoundedBox>

       {/* Sub-cellular organelles inside membrane */}
       <group scale={mScaleV}>
         {/* Shrinking Central Vacuole */}
         <mesh scale={vScaleV}>
           <sphereGeometry args={[0.7, 32, 32]} />
           <meshPhysicalMaterial color={vColor} transmission={0.9} transparent opacity={0.8} roughness={0.1} ior={1.3} />
         </mesh>
         
         {/* Chloroplasts embedded in cytoplasm layer */}
         {Array.from({length: 8}).map((_, i) => (
           <mesh key={`c-${i}`} position={[
             Math.cos(i*Math.PI/4) * 0.8,
             Math.sin((i%2)*Math.PI/2) * 0.6,
             Math.sin(i*Math.PI/4) * 0.8
           ]} rotation={[Math.random(), Math.random(), 0]}>
             <sphereGeometry args={[0.15, 16, 16]} />
             <meshStandardMaterial color="#166534" roughness={0.2} />
           </mesh>
         ))}

         {/* Nucleus */}
         <mesh position={[0.6, -0.6, 0.6]}>
            <sphereGeometry args={[0.25, 16, 16]} />
            <meshStandardMaterial color="#fbbf24" roughness={0.3} />
         </mesh>
       </group>

       {/* Osmosis Particles */}
       {showArrows && (
         <group ref={tRef}>
            {Array.from({length: 12}).map((_, i) => (
               <mesh key={i} userData={{ ang: (i/12) * Math.PI * 2, oy: 0 }}>
                 <sphereGeometry args={[0.04]} />
                 <meshBasicMaterial color={isTurgid ? "#60a5fa" : "#ef4444"} transparent opacity={0.6} />
               </mesh>
            ))}
         </group>
       )}

       {label && (
         <Text position={[0, -1.5, 0]} fontSize={0.2} color="#94a3b8" anchorX="center" anchorY="middle">
            {label}
         </Text>
       )}
    </group>
  );
};


/* ────────────────────────────────────────────────────────────────────────────
   PREPARATION SCENE (Phase 1)
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
      
      <CompoundMicroscope position={[-2.5, 0, -1]} rotation={[0, 0.5, 0]} isMounted={prepStep === 2 && animProgress > 0.5} />

      {/* Bench elements */}
      {(prepStep < 2 || (prepStep === 2 && animProgress < 0.5)) && (
          <group position={[0, 0, 0.5]}>
            {prepStep >= 1 && <GlassSlide position={[0, 0.02, 0]} rotation={[0,0,0]} />}
            
            {/* Epidermal Peel Sample */}
            <group position={prepStep === 0 ? [2, 0.5, 0] : [0, 0.05, 0]}>
               {prepStep === 0 && (
                  <mesh position={[0,-0.4,0]} castShadow>
                     {/* Leaf */}
                     <boxGeometry args={[0.8, 0.02, 1.5]} />
                     <meshStandardMaterial color="#166534" />
                     {/* Tweezers pulling peel */}
                     <mesh position={[0, 0.1 + animProgress*0.2, 0]} rotation={[animProgress*0.2, 0, 0]}>
                        <planeGeometry args={[0.3, 0.6]} />
                        <meshStandardMaterial color="#c084fc" transparent opacity={0.6} side={THREE.DoubleSide}/>
                     </mesh>
                  </mesh>
               )}
               {prepStep >= 1 && (
                  <mesh castShadow rotation={[-Math.PI/2, 0, 0]}>
                    <planeGeometry args={[0.3, 0.4]} />
                    <meshStandardMaterial color="#c084fc" transparent opacity={0.6} side={THREE.DoubleSide} />
                  </mesh>
               )}
            </group>

            {/* Dropper adding Water */}
            {prepStep === 1 && animProgress < 0.8 && (
                <Dropper position={[0, 1, 0]} liquidColor="#60a5fa" animProgress={animProgress} />
            )}

            {/* Coverslip */}
            {prepStep >= 1 && <Coverslip position={[0, Math.max(0.1, 0.5 - animProgress*0.4), 0]} />}
          </group>
      )}
    </group>
  );
};


/* ────────────────────────────────────────────────────────────────────────────
   MAIN LAB ENGINE WRAPPER
   ──────────────────────────────────────────────────────────────────────────── */
const PlasmolysisLab: React.FC<Props> = ({ hex }) => {
  const [saltConc, setSaltConc] = useState(0); // 0 = water, 100 = hypertonic
  const [mode, setMode] = useState<'cell' | 'experiment'>('cell');

  // Plasmolysis level: 0=turgid, 100=plasmolysed
  const plasmolysisLevel = Math.max(0, (saltConc - 15) / 85) * 100;

  return (
    <LabProtocolEngine
      labId="b11"
      labTitle="Cell Plasmolysis & Osmosis"
      labSubtitle="Observe cellular membrane behavior under hypotonic, isotonic, and hypertonic conditions."
      hexColor={hex}
      prepSteps={PREP_STEPS}
      renderSetupScene={(step) => (
        <Canvas camera={{ position: [0, 2, 6], fov: 55 }} dpr={[1, 2]}>
          <Environment preset="apartment" />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 10, 5]} intensity={1.2} />
          <pointLight position={[-5, 5, 5]} intensity={0.5} color="#4ade80" />
          <PreparationScene prepStep={step} />
          <OrbitControls enablePan enableZoom minDistance={3} maxDistance={14} target={[0, -0.5, 0]} />
        </Canvas>
      )}
      renderObservationScene={() => (
        <>
          <Canvas camera={{ position: [0, 1, 6], fov: 50 }}>
            <Environment preset="apartment" />
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 10, 5]} intensity={1.5} color="#4ade80" />
            <pointLight position={[-5, -10, -5]} intensity={0.8} />

            {mode === 'cell' ? (
                <group position={[0,0,0]}>
                  <PlantCell position={[-2.5, 0, 0]} saltConc={0} plasmolysisLevel={0} label="Turgid (Pure H₂O)" showArrows={false} />
                  <PlantCell position={[0, 0, 0]} saltConc={50} plasmolysisLevel={45} label="Flaccid (Isotonic)" showArrows={false} />
                  <PlantCell position={[2.5, 0, 0]} saltConc={100} plasmolysisLevel={100} label="Plasmolysed (Saline)" showArrows={false} />
                </group>
            ) : (
                <PlantCell position={[0, 0.5, 0]} saltConc={saltConc} plasmolysisLevel={plasmolysisLevel} showArrows={true} />
            )}
            
            <ContactShadows position={[0, -1.8, 0]} opacity={0.4} scale={15} blur={2} far={4} color="#000" />
            <OrbitControls enablePan={true} enableZoom={true} target={[0,0,0]} maxPolarAngle={Math.PI/2 + 0.1}/>
          </Canvas>
          <MicroscopeHUD />
        </>
      )}
      renderObservationSidebar={(finishObservation) => (
        <div className="flex flex-col h-full">
          <div className="flex-none grid grid-cols-2 gap-2 bg-slate-950 p-1.5 rounded-xl border border-black/10 dark:border-white/10 mb-4">
            {['cell', 'experiment'].map(m => (
              <button key={m} onClick={() => setMode(m as any)}
                className={`py-2 rounded-lg text-xs font-bold transition-all capitalize shadow-sm ${mode === m ? 'text-green-950 bg-green-400' : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'}`}>
                {m === 'cell' ? '📊 Compare States' : '🔬 Live Experiment'}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
              {mode === 'experiment' && (
                <div className="bg-transparent dark:bg-black/20 p-4 rounded-xl border border-black/10 dark:border-white/10 space-y-4 shadow-inner">
                  <div className="flex justify-between text-xs items-center">
                    <span className="text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">Extracellular Salinity</span>
                    <span className={`font-mono font-bold px-2 py-0.5 rounded text-xs ${saltConc > 50 ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{saltConc.toFixed(0)}%</span>
                  </div>
                  <input type="range" min={0} max={100} value={saltConc} onChange={e => setSaltConc(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700/50 rounded-full appearance-none cursor-pointer accent-green-500" />
                  <div className="flex justify-between text-[9px] text-slate-500 font-bold">
                    <span className="text-green-500/60">0% (Pure H₂O)</span>
                    <span className="text-red-500/60">100% (High Saline)</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Cell State', val: plasmolysisLevel < 10 ? 'Turgid' : plasmolysisLevel < 40 ? 'Flaccid' : plasmolysisLevel < 70 ? 'Plasmolysing' : 'Plasmolysed', color: plasmolysisLevel < 10 ? '#4ade80' : plasmolysisLevel < 40 ? '#fbbf24' : '#ef4444' },
                  { label: 'Vacuole', val: plasmolysisLevel < 20 ? 'Full Volume' : plasmolysisLevel < 60 ? 'Shrinking' : 'Collapsed', color: '#60a5fa' },
                  { label: 'Net Flow', val: saltConc < 10 ? 'Endosmosis (In)' : saltConc < 25 ? 'Isotonic Equil.' : 'Exosmosis (Out)', color: saltConc < 10 ? '#4ade80' : saltConc < 25 ? '#a78bfa' : '#f87171' },
                  { label: 'Wall Pressure', val: plasmolysisLevel < 20 ? 'High Turgor' : 'Zero (Detached)', color: '#fbbf24' },
                ].map(m => (
                  <div key={m.label} className="bg-slate-950 border border-black/5 dark:border-white/5 rounded-xl p-3 text-center shadow-lg transition-colors" style={{borderColor: `${m.color}20`, backgroundColor: `${m.color}05`}}>
                    <div className="text-[9px] text-slate-500 uppercase font-bold mb-1 tracking-wider">{m.label}</div>
                    <div className="font-bold text-xs drop-shadow-sm" style={{ color: m.color }}>{m.val}</div>
                  </div>
                ))}
              </div>
          </div>

          <div className="flex-none pt-4 mt-2 border-t border-black/5 dark:border-white/5">
              <button 
                  onClick={finishObservation} 
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-teal-500 text-white font-black text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-105 active:scale-95 transition-all">
                  Complete Data & Analyze
              </button>
          </div>
        </div>
      )}
      renderAnalysisSidebar={() => (
          <div className="flex flex-col h-full space-y-4 animate-fade-in">
              <div className="bg-[#1e293b] rounded-xl p-5 border border-black/10 dark:border-white/10">
                  <h3 className="text-sm font-black text-slate-900 dark:text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-black/10 dark:border-white/10 pb-2">Plasmolysis Analysis Report</h3>
                  
                  <div className="space-y-4">
                      <div className="bg-green-950/30 p-3 rounded-lg border border-green-500/20 shadow-inner">
                          <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-1">👉 Hypotonic Environment</p>
                          <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Observation:</strong> In pure water (0% saline), the cell expands and becomes fully inflated.</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Inference:</strong> Endosmosis occurs. Water moves *into* the cell due to lower water potential inside. The rigid plant cell wall prevents the cell from bursting, creating high **Turgor Pressure**.</p>
                      </div>

                      <div className="bg-yellow-950/30 p-3 rounded-lg border border-yellow-500/20 shadow-inner">
                          <p className="text-[10px] text-yellow-500 font-bold uppercase tracking-widest mb-1 flex items-center gap-1">👉 Isotonic Environment</p>
                          <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Observation:</strong> At moderate isotonic concentrations, the cell loses rigidity.</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Inference:</strong> Zero net flow. Water enters and exits at the exact same rate. The cell becomes **flaccid**.</p>
                      </div>

                      <div className="bg-red-950/30 p-3 rounded-lg border border-red-500/20 shadow-inner">
                          <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-1">👉 Hypertonic Environment</p>
                          <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Observation:</strong> In high saline, the internal membrane detached from the fixed cell wall, shrinking the cytoplasm/vacuole.</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Inference:</strong> Exosmosis occurs. Water moves *out* of the cell towards the higher solute concentration. The detachment of the protoplast from the cell wall is formally known as **Plasmolysis**.</p>
                      </div>
                  </div>
              </div>
          </div>
      )}
      observationHUD={
        <div style={{
          position: 'absolute', top: 16, left: 16 + 280 /* offset from timeline */, zIndex: 20,
          background: 'rgba(0,0,0,0.6)', border: `1px solid rgba(255,255,255,0.1)`,
          borderRadius: 8, padding: '6px 12px', backdropFilter: 'blur(10px)',
        }}>
          <p className="text-[9px] text-slate-600 dark:text-slate-400 uppercase font-bold tracking-wider m-0">Cell Membrane</p>
          <p className={`text-xs font-bold leading-none m-0 pt-0.5 ${plasmolysisLevel > 80 ? 'text-red-400' : 'text-green-400'}`}>
             {plasmolysisLevel.toFixed(1)}% Detached
          </p>
        </div>
      }
    />
  );
};

export default PlasmolysisLab;
