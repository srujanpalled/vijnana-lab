import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import * as THREE from 'three';
import { LabProtocolEngine } from './shared/LabProtocolEngine';
import { CompoundMicroscope, GlassSlide, Coverslip, Dropper, MicroscopeHUD } from './shared/props/MicroscopySet';

interface Props { hex: string; }

const STAGES = [
  { name: 'Interphase', color: '#22c55e', desc: 'DNA replicates (S phase). Cell prepares for division. Chromatin not yet condensed.', chrom: 'duplicate' },
  { name: 'Prophase I', color: '#3b82f6', desc: 'Homologous chromosomes pair (synapsis). Crossing over occurs. Chromosomes condense.', chrom: 'prophase1' },
  { name: 'Metaphase I', color: '#8b5cf6', desc: 'Bivalents align at metaphase plate. Independent assortment of chromosomes.', chrom: 'metaphase1' },
  { name: 'Anaphase I', color: '#f59e0b', desc: 'Homologous chromosomes separate and move to opposite poles. Chromatids remain joined.', chrom: 'anaphase1' },
  { name: 'Telophase I', color: '#f97316', desc: 'Cell divides (Cytokinesis I). 2 haploid cells formed.', chrom: 'telophase1' },
  { name: 'Prophase II', color: '#06b6d4', desc: 'Chromosomes condense again in both cells. No DNA replication between divisions.', chrom: 'prophase2' },
  { name: 'Metaphase II', color: '#a78bfa', desc: 'Chromosomes align at metaphase plate. Centromeres attached to spindle fibers.', chrom: 'metaphase2' },
  { name: 'Anaphase II', color: '#f472b6', desc: 'Sister chromatids separate to opposite poles. Centromeres split.', chrom: 'anaphase2' },
  { name: 'Telophase II', color: '#4ade80', desc: '4 haploid daughter cells formed (gametes). Each has half the genetic material.', chrom: 'telophase2' },
];

const PREP_STEPS = [
  { id: 'harvest', name: 'Harvest Anthers', action: 'Extract Flower Bud', desc: 'Select an onion floral bud and extract the yellow anthers where pollen mother cells undergo meiosis.' },
  { id: 'stain', name: 'Stain & Smear', action: 'Apply Acetocarmine Stain', desc: 'Place anthers on a slide. Add a drop of Acetocarmine stain to color the condensing chromosomes.' },
  { id: 'squash', name: 'Coverslip & Squash', action: 'Apply Coverslip', desc: 'Place a coverslip and apply gentle, even pressure to squash the anthers into a thin monolayer of cells.' },
  { id: 'mount', name: 'Mount on Stage', action: 'Mount Slide', desc: 'Place the prepared slide on the microscope stage and adjust the objective lens to begin observation.' }
];

/* ────────────────────────────────────────────────────────────────────────────
   3D MATERIALS & PRIMITIVES
   ──────────────────────────────────────────────────────────────────────────── */
const cellMat = <meshPhysicalMaterial transmission={0.95} roughness={0.2} color="#0f172a" ior={1.3} transparent opacity={0.6} depthWrite={false} />;

interface ChromoProps { position: [number, number, number]; color: string; size?: number; rotation?: [number, number, number] }

const ChromosomeX = ({ position, color, size = 1, rotation = [0,0,0] }: ChromoProps) => (
  <group position={position} rotation={rotation} scale={size}>
     <mesh rotation={[0,0,0.3]}><cylinderGeometry args={[0.08, 0.08, 1.2, 16]} /><meshStandardMaterial color={color}/></mesh>
     <mesh rotation={[0,0,-0.3]}><cylinderGeometry args={[0.08, 0.08, 1.2, 16]} /><meshStandardMaterial color={color}/></mesh>
     <mesh><sphereGeometry args={[0.12]} /><meshStandardMaterial color="#fbbf24"/></mesh>
  </group>
);
const ChromatidI = ({ position, color, size = 1, rotation = [0,0,0] }: ChromoProps) => (
  <group position={position} rotation={rotation} scale={size}>
     <mesh><cylinderGeometry args={[0.08, 0.08, 1.2, 16]} /><meshStandardMaterial color={color}/></mesh>
     <mesh><sphereGeometry args={[0.12]} /><meshStandardMaterial color="#fbbf24"/></mesh>
  </group>
);

const Chromatin = () => {
   const groupRef = useRef<THREE.Group>(null);
   useFrame(({ clock }) => {
     if (groupRef.current) groupRef.current.rotation.y = clock.elapsedTime * 0.2;
   });
   return (
     <group ref={groupRef}>
       {Array.from({length: 40}).map((_, i) => (
         <mesh key={i} position={[(Math.random()-0.5), (Math.random()-0.5), (Math.random()-0.5)]}>
           <sphereGeometry args={[0.06]} />
           <meshBasicMaterial color="#4ade80" />
         </mesh>
       ))}
     </group>
   )
}

/* ────────────────────────────────────────────────────────────────────────────
   MEIOSIS PREPARATION SCENE (Phase 1)
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
      {/* Premium Desk */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <boxGeometry args={[10, 1, 6]} />
        <meshStandardMaterial color="#0f172a" roughness={0.8} metalness={0.1} />
      </mesh>
      
      <CompoundMicroscope position={[-2.5, 0, -1]} rotation={[0, 0.5, 0]} isMounted={prepStep === 3 && animProgress > 0.5} />

      {/* Bench Surface Elements */}
      {(prepStep < 3 || (prepStep === 3 && animProgress < 0.5)) && (
          <group position={[0, 0, 0.5]}>
            <GlassSlide position={[0, 0.02, 0]} rotation={[0,0,0]} />
            
            {/* Anther / Sample */}
            <group position={[0, 0.05, 0]}>
               {/* Show anther material shrinking as squashed */}
               {prepStep >= 1 && (
                  <mesh castShadow scale={[1, prepStep >= 2 ? Math.max(0.04, 1 - animProgress) : 1, 1]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial color={prepStep >= 1 ? (animProgress > 0.5 ? '#9f1239' : '#fef08a') : '#fef08a'} roughness={0.6} /> 
                  </mesh>
               )}
            </group>

            {/* Dropper adding Acetocarmine Stain */}
            {prepStep === 1 && animProgress < 0.8 && (
                <Dropper position={[0, 1, 0]} liquidColor="#9f1239" animProgress={animProgress} />
            )}

            {/* Coverslip & Squash */}
            {prepStep >= 2 && <Coverslip position={[0, Math.max(0.1, 0.5 - animProgress*0.4), 0]} />}
          </group>
      )}

      {/* Onion Floral Bud for Step 0 */}
      {prepStep === 0 && (
         <group position={[1.8, 0.35, 0.5]}>
            {/* Green Pedicel/Stem */}
            <mesh position={[0, -0.4, 0]}><cylinderGeometry args={[0.04, 0.06, 0.5, 16]} /><meshStandardMaterial color="#22c55e" roughness={0.8}/></mesh>
            {/* Bud Base (Receptacle) */}
            <mesh position={[0, -0.1, 0]}><sphereGeometry args={[0.2, 16, 16]} /><meshStandardMaterial color="#4ade80" roughness={0.6}/></mesh>
            {/* Petals (Tepals) */}
            {Array.from({length: 6}).map((_, i) => (
               <mesh key={i} position={[
                   Math.cos(i * Math.PI/3) * 0.1, 
                   0.1, 
                   Math.sin(i * Math.PI/3) * 0.1
                 ]} rotation={[Math.PI/6, i * Math.PI/3, 0]}>
                   <capsuleGeometry args={[0.1, 0.4, 16, 16]} />
                   <meshStandardMaterial color="#f8fafc" transparent opacity={0.8} />
               </mesh>
            ))}
            {/* Tweezers extracting an anther */}
            <group position={[-0.3 + animProgress*0.3, 0.5 - animProgress*0.2, 0.1]} rotation={[0, 0, -Math.PI/4]}>
               <mesh position={[0, 0.4, 0.02]} rotation={[0,0,-0.05]}><boxGeometry args={[0.05, 0.8, 0.1]}/><meshStandardMaterial color="#94a3b8" metalness={0.8}/></mesh>
               <mesh position={[0, 0.4, -0.02]} rotation={[0,0,0.05]}><boxGeometry args={[0.05, 0.8, 0.1]}/><meshStandardMaterial color="#94a3b8" metalness={0.8}/></mesh>
               {/* Extracted Anther in tweezers */}
               {animProgress > 0.5 && <mesh position={[0,-0.05,0]}><sphereGeometry args={[0.06]}/><meshStandardMaterial color="#fef08a"/></mesh>}
            </group>
         </group>
      )}
    </group>
  );
};


/* ────────────────────────────────────────────────────────────────────────────
   MEIOSIS OBSERVATION SCENE (Phase 2)
   ──────────────────────────────────────────────────────────────────────────── */
const MeiosisScene = ({ stage }: { stage: number }) => {
  const tRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (tRef.current) {
       tRef.current.position.y = Math.sin(clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <group ref={tRef} position={[0,0,0]}>
      
      {/* STAGE 0: INTERPHASE */}
      {stage === 0 && (
         <group>
            <mesh><sphereGeometry args={[1.5, 32, 32]} />{cellMat}</mesh>
            <mesh><sphereGeometry args={[1.1, 32, 32]} /><meshPhysicalMaterial transmission={0.9} color="#334155" opacity={0.3} transparent/></mesh>
            <Chromatin />
         </group>
      )}

      {/* STAGE 1: PROPHASE I */}
      {stage === 1 && (
         <group>
            <mesh><sphereGeometry args={[1.5, 32, 32]} />{cellMat}</mesh>
            <ChromosomeX position={[-0.3, 0.2, 0]} color="#3b82f6" />
            <ChromosomeX position={[0.3, 0.2, 0]} color="#f87171" />
            <ChromosomeX position={[-0.3, -0.4, 0]} color="#3b82f6" size={0.7} />
            <ChromosomeX position={[0.3, -0.4, 0]} color="#f87171" size={0.7} />
            {/* Chiasmata visualization */}
            <mesh position={[0,0.2,0.1]}><sphereGeometry args={[0.1]}/><meshBasicMaterial color="#fef08a"/></mesh>
         </group>
      )}

      {/* STAGE 2: METAPHASE I */}
      {stage === 2 && (
         <group>
            <mesh><sphereGeometry args={[1.5, 32, 32]} />{cellMat}</mesh>
            {/* Spindle Fibers */}
            <mesh rotation={[0,0,Math.PI/2]}><cylinderGeometry args={[0.01, 0.01, 2.5]} /><meshBasicMaterial color="#94a3b8" transparent opacity={0.3} /></mesh>
            {/* Chromosomes at plate */}
            <ChromosomeX position={[0, 0.4, 0.2]} color="#3b82f6" />
            <ChromosomeX position={[0, 0.4, -0.2]} color="#f87171" />
            <ChromosomeX position={[0, -0.4, 0.2]} color="#f87171" size={0.7} />
            <ChromosomeX position={[0, -0.4, -0.2]} color="#3b82f6" size={0.7} />
         </group>
      )}

      {/* STAGE 3: ANAPHASE I */}
      {stage === 3 && (
         <group>
            <mesh><sphereGeometry args={[1.4, 32, 32]} scale={[1, 1.4, 1]} />{cellMat}</mesh>
            <ChromosomeX position={[0, 0.8, 0]} color="#3b82f6" />
            <ChromosomeX position={[0, 0.6, 0.3]} color="#f87171" size={0.7}/>
            <ChromosomeX position={[0, -0.8, 0]} color="#f87171" />
            <ChromosomeX position={[0, -0.6, 0.3]} color="#3b82f6" size={0.7} />
         </group>
      )}

      {/* STAGE 4: TELOPHASE I */}
      {stage === 4 && (
         <group>
            <mesh position={[0, 1, 0]}><sphereGeometry args={[1.2, 32, 32]} />{cellMat}</mesh>
            <mesh position={[0, -1, 0]}><sphereGeometry args={[1.2, 32, 32]} />{cellMat}</mesh>
            <ChromosomeX position={[0, 1.2, 0]} color="#3b82f6" />
            <ChromosomeX position={[0, 0.8, 0]} color="#f87171" size={0.7}/>
            <ChromosomeX position={[0, -0.8, 0]} color="#f87171" />
            <ChromosomeX position={[0, -1.2, 0]} color="#3b82f6" size={0.7} />
         </group>
      )}

      {/* STAGE 5: PROPHASE II */}
      {stage === 5 && (
         <group>
            <mesh position={[0, 1.2, 0]}><sphereGeometry args={[1.1, 32, 32]} />{cellMat}</mesh>
            <mesh position={[0, -1.2, 0]}><sphereGeometry args={[1.1, 32, 32]} />{cellMat}</mesh>
            <ChromosomeX position={[0, 1.2, 0]} color="#3b82f6" />
            <ChromosomeX position={[0, 1.4, 0.2]} color="#f87171" size={0.7}/>
            <ChromosomeX position={[0, -1.2, 0]} color="#f87171" />
            <ChromosomeX position={[0, -1.4, 0.2]} color="#3b82f6" size={0.7} />
         </group>
      )}

      {/* STAGE 6: METAPHASE II */}
      {stage === 6 && (
         <group>
            <mesh position={[0, 1.2, 0]}><sphereGeometry args={[1.1, 32, 32]} />{cellMat}</mesh>
            <mesh position={[0, -1.2, 0]}><sphereGeometry args={[1.1, 32, 32]} />{cellMat}</mesh>
            {/* Cell 1 Plate */}
            <ChromosomeX position={[0, 1.2, 0.2]} color="#3b82f6" rotation={[0,Math.PI/2,0]} />
            <ChromosomeX position={[0, 1.2, -0.2]} color="#f87171" size={0.7} rotation={[0,Math.PI/2,0]}/>
            {/* Cell 2 Plate */}
            <ChromosomeX position={[0, -1.2, 0.2]} color="#f87171" rotation={[0,Math.PI/2,0]}/>
            <ChromosomeX position={[0, -1.2, -0.2]} color="#3b82f6" size={0.7} rotation={[0,Math.PI/2,0]} />
         </group>
      )}

      {/* STAGE 7: ANAPHASE II */}
      {stage === 7 && (
         <group>
            <mesh position={[0, 1.2, 0]}><sphereGeometry args={[1, 32, 32]} scale={[1.4, 1, 1]} />{cellMat}</mesh>
            <mesh position={[0, -1.2, 0]}><sphereGeometry args={[1, 32, 32]} scale={[1.4, 1, 1]} />{cellMat}</mesh>
            {/* Cell 1 separating */}
            <ChromatidI position={[-0.4, 1.2, 0.1]} color="#3b82f6" rotation={[0,0,Math.PI/2]} />
            <ChromatidI position={[0.4, 1.2, 0.1]} color="#3b82f6" rotation={[0,0,Math.PI/2]} />
            <ChromatidI position={[-0.4, 1.2, -0.2]} color="#f87171" size={0.7} rotation={[0,0,Math.PI/2]} />
            <ChromatidI position={[0.4, 1.2, -0.2]} color="#f87171" size={0.7} rotation={[0,0,Math.PI/2]} />
            {/* Cell 2 separating */}
            <ChromatidI position={[-0.4, -1.2, 0.1]} color="#f87171" rotation={[0,0,Math.PI/2]} />
            <ChromatidI position={[0.4, -1.2, 0.1]} color="#f87171" rotation={[0,0,Math.PI/2]} />
            <ChromatidI position={[-0.4, -1.2, -0.2]} color="#3b82f6" size={0.7} rotation={[0,0,Math.PI/2]} />
            <ChromatidI position={[0.4, -1.2, -0.2]} color="#3b82f6" size={0.7} rotation={[0,0,Math.PI/2]} />
         </group>
      )}

      {/* STAGE 8: TELOPHASE II */}
      {stage === 8 && (
         <group>
            <mesh position={[-1, 1.2, 0]}><sphereGeometry args={[0.8, 32, 32]} />{cellMat}</mesh>
            <mesh position={[1, 1.2, 0]}><sphereGeometry args={[0.8, 32, 32]} />{cellMat}</mesh>
            <mesh position={[-1, -1.2, 0]}><sphereGeometry args={[0.8, 32, 32]} />{cellMat}</mesh>
            <mesh position={[1, -1.2, 0]}><sphereGeometry args={[0.8, 32, 32]} />{cellMat}</mesh>
            
            <ChromatidI position={[-1, 1.2, 0]} color="#3b82f6" />
            <ChromatidI position={[-1, 1.4, 0.1]} color="#f87171" size={0.7} />

            <ChromatidI position={[1, 1.2, 0]} color="#3b82f6" />
            <ChromatidI position={[1, 1.4, 0.1]} color="#f87171" size={0.7} />

            <ChromatidI position={[-1, -1.2, 0]} color="#f87171" />
            <ChromatidI position={[-1, -1.4, 0.1]} color="#3b82f6" size={0.7} />

            <ChromatidI position={[1, -1.2, 0]} color="#f87171" />
            <ChromatidI position={[1, -1.4, 0.1]} color="#3b82f6" size={0.7} />

            <Html position={[0, 0, 0]} center zIndexRange={[100,0]}>
              <div className="font-bold text-green-400 bg-green-900/40 border border-green-500/20 px-3 py-1 rounded-full text-xs shadow-lg backdrop-blur whitespace-nowrap">
                4 Haploid Gametes (n)
              </div>
            </Html>
         </group>
      )}
    </group>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ──────────────────────────────────────────────────────────────────────────── */
const MeiosisLab: React.FC<Props> = ({ hex }) => {
  const [stage, setStage] = useState(0);

  return (
    <LabProtocolEngine
      labId="b14"
      labTitle="3D Meiosis Cell Division"
      labSubtitle="Orbit around the cells to observe homologous chromosome interactions."
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
          <Canvas camera={{ position: [0, 0, 6], fov: 65 }}>
            <Environment preset="apartment" />
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 10, 5]} intensity={1.5} color={STAGES[stage].color} />
            <pointLight position={[-5, -10, -5]} intensity={0.8} />
            <MeiosisScene stage={stage} />
            <OrbitControls enablePan={true} enableZoom={true} target={[0, 0, 0]} />
          </Canvas>
          <MicroscopeHUD />
        </>
      )}
      renderObservationSidebar={(finishObservation) => (
        <div className="flex flex-col h-full max-h-full">
           <div className="flex-1 overflow-y-auto pr-2">
               <div className="p-4 rounded-xl border shadow-inner transition-all duration-300" style={{ backgroundColor: STAGES[stage].color + '15', borderColor: STAGES[stage].color + '40' }}>
                 <p className="font-bold text-sm mb-1" style={{ color: STAGES[stage].color }}>{STAGES[stage].name}</p>
                 <p className="text-slate-700 dark:text-slate-700 dark:text-slate-300 text-xs leading-relaxed">{STAGES[stage].desc}</p>
               </div>

               <div>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 uppercase font-bold tracking-widest mb-2 border-t border-black/5 dark:border-white/5 pt-4">Select Phase</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {STAGES.map((s, i) => (
                      <button key={s.name} onClick={() => setStage(i)}
                        className={`py-2 rounded-lg text-xs font-bold transition-all border ${stage === i ? 'text-white border-current' : 'border-white/10 text-slate-400 bg-slate-950 hover:border-white/30'}`}
                        style={stage === i ? { backgroundColor: s.color + '30', borderColor: s.color, color: '#fff', boxShadow: `0 0 10px ${s.color}20` } : {}}>
                        {s.name}
                      </button>
                    ))}
                  </div>
               </div>

               <div className="bg-slate-950 p-4 rounded-xl border border-black/10 dark:border-white/10 text-xs space-y-2 mt-4 shadow-inner">
                 <p className="text-slate-600 dark:text-slate-400 font-bold text-[10px] uppercase tracking-widest border-b border-black/5 dark:border-white/5 pb-1">Cellular Physics Summary</p>
                 {[['Divisions','2 Divs (Meiosis I/II)'],['Input','1 Diploid Cell (2n)'],['Output','4 Haploid Gametes (n)'],['Crossing Over','Prophase I']].map(([k,v]) => (
                   <div key={k} className="flex justify-between items-center bg-transparent dark:bg-black/20 p-1.5 rounded"><span className="text-slate-500 font-bold">{k}</span><span className="text-slate-700 dark:text-slate-700 dark:text-slate-300 font-mono text-[10px]">{v}</span></div>
                 ))}
               </div>
           </div>

           <div className="flex-none pt-4 mt-2 border-t border-black/5 dark:border-white/5 space-y-3">
               <div className="flex gap-2">
                 <button onClick={() => setStage(Math.max(0, stage - 1))} disabled={stage === 0}
                   className="flex-1 py-3 rounded-xl bg-slate-800 text-white text-xs font-bold disabled:opacity-30 hover:bg-slate-700 transition-colors shadow-md">
                   ← Prev
                 </button>
                 <button onClick={() => setStage(Math.min(STAGES.length - 1, stage + 1))} disabled={stage === STAGES.length - 1}
                   className="flex-1 py-3 rounded-xl text-slate-900 dark:text-slate-900 dark:text-white text-xs font-bold disabled:opacity-30 transition-all shadow-lg active:scale-95"
                   style={{ backgroundColor: STAGES[stage].color, boxShadow: `0 4px 14px ${STAGES[stage].color}40` }}>
                   Next →
                 </button>
               </div>
                
               {stage === STAGES.length - 1 && (
                   <button 
                       onClick={finishObservation} 
                       className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-black text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95 transition-all">
                       View Complete Analysis
                   </button>
               )}
           </div>
        </div>
      )}
      renderAnalysisSidebar={() => (
          <div className="flex flex-col h-full space-y-4 animate-fade-in overflow-y-auto pr-2">
              <div className="bg-[#1e293b] rounded-xl p-5 border border-black/10 dark:border-white/10">
                  <h3 className="text-sm font-black text-slate-900 dark:text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-black/10 dark:border-white/10 pb-2">Observation & Inference</h3>
                  
                  <div className="space-y-4">
                      <div>
                          <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><span className="text-sm">🧬</span> Meiosis I: Reductional Division</p>
                          <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Observation:</strong> Homologous chromosomes (one from each parent) pair up to form bivalents. They then separate into two different cells during Anaphase I.</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Inference:</strong> This is a reductional division. The chromosome number is officially halved from diploid (2n) to haploid (n) because whole chromosomes are separated, rather than just sister chromatids.</p>
                      </div>

                      <div>
                          <p className="text-[10px] text-fuchsia-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><span className="text-sm">🔄</span> Crossing Over (Prophase I)</p>
                          <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Observation:</strong> Non-sister chromatids of homologous chromosomes physically overlap at chiasmata.</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Inference:</strong> Genetic recombination occurs as DNA segments are exchanged. This is the primary driver of genetic diversity in sexually reproducing offspring.</p>
                      </div>

                      <div>
                          <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><span className="text-sm">✂️</span> Meiosis II: Equational Division</p>
                          <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Observation:</strong> The two haploid cells divide again. This time, centromeres split and sister chromatids are pulled apart.</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Inference:</strong> This mimics mitosis. It is an equational division because the ploidy level remains haploid (n), it merely separates the replicated DNA copies into four distinct gametic cells.</p>
                      </div>
                  </div>
              </div>

              <div className="mt-auto bg-slate-900 rounded-xl p-4 border border-slate-700">
                  <p className="text-[11px] text-amber-500/80 italic">"The entire cellular dance of meiosis guarantees genetic diversity across generations while maintaining a stable chromosome count upon fertilization."</p>
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

export default MeiosisLab;
