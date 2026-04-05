import React, { useRef, useEffect, useState } from 'react';
import { RotateCcw, CheckCircle, FlaskConical } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Html, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { LabProtocolEngine } from './shared/LabProtocolEngine';

interface Props { hex: string; }

const COMPOUNDS = [
  { name: 'Formaldehyde', type: 'Aldehyde', formula: 'HCHO', color: '#dbeafe' },
  { name: 'Acetaldehyde', type: 'Aldehyde', formula: 'CH₃CHO', color: '#e0f2fe' },
  { name: 'Acetone', type: 'Ketone', formula: 'CH₃COCH₃', color: '#fef3c7' },
];

const TESTS = [
  { id: 'tollens', name: "Tollen's Test", color: '#d1d5db', positiveFor: ['Aldehyde'], positiveResult: 'Silver mirror on tube walls!', negativeResult: 'No silver mirror (Not aldehyde)' },
  { id: 'fehling', name: "Fehling's Test", color: '#1d4ed8', positiveFor: ['Aldehyde'], positiveResult: 'Brick-red Cu₂O precipitate!', negativeResult: 'Solution stays blue' },
  { id: 'schiff', name: "Schiff's Test", color: '#db2777', positiveFor: ['Aldehyde'], positiveResult: 'Magenta/Pink colour!', negativeResult: 'No colour change' },
  { id: 'dnp', name: '2,4-DNP Test', color: '#d97706', positiveFor: ['Aldehyde', 'Ketone'], positiveResult: 'Yellow-orange precipitate!', negativeResult: 'No precipitate' },
];

const PREP_STEPS = [
  { id: 'sample', name: 'Take Unknown Sample', action: 'Proceed to Reactions', desc: 'Collect 2mL of the unknown organic compound in a clean test tube for functional group analysis.' }
];

interface TubeContentsProps {
    compound: typeof COMPOUNDS[0];
    test: typeof TESTS[0] | undefined;
    isPositive: boolean;
    reactionAnim: number;
}

const TubeContents = ({ compound, test, isPositive, reactionAnim }: TubeContentsProps) => {
   const tRef = useRef<THREE.Group>(null);
   const dripRef = useRef<THREE.Mesh>(null);

   let targetColor = compound.color;
   let opacity = 0.6;
   let roughness = 0.1;
   let transmission = 0.9;
   let metalness = 0;
   
   if (test) {
      if (!isPositive) {
         if (test.id === 'fehling') targetColor = '#1e3a8a';
         else if (test.id === 'dnp') targetColor = '#d97706';
         else targetColor = compound.color;
      } else {
         if (test.id === 'tollens') {
            metalness = reactionAnim;
            roughness = 0;
            transmission = 1 - reactionAnim;
         } else if (test.id === 'fehling') {
            targetColor = '#b91c1c';
            opacity = 0.9;
            transmission = 1 - reactionAnim * 0.8;
         } else if (test.id === 'schiff') {
            targetColor = '#be185d';
         } else if (test.id === 'dnp') {
            targetColor = '#d97706';
            opacity = 0.9;
            transmission = 1 - reactionAnim * 0.8;
         }
      }
   }

   const currentColor = new THREE.Color(compound.color).lerp(new THREE.Color(targetColor), reactionAnim);

   useFrame(({ clock }) => {
      if (dripRef.current && test && reactionAnim < 0.2 && reactionAnim > 0) {
          const p = reactionAnim * 5; 
          dripRef.current.visible = true;
          
          if (p < 0.2) {
             dripRef.current.position.y = 1.5;
             dripRef.current.scale.set(1 - p, 1 + p*2, 1 - p);
          } else if (p < 0.8) {
             const fallP = (p - 0.2) / 0.6;
             dripRef.current.position.y = THREE.MathUtils.lerp(1.5, -0.25, fallP);
             dripRef.current.scale.set(0.8, 1.4, 0.8);
          } else if (p < 0.9) {
             const impactP = (p - 0.8) / 0.1;
             dripRef.current.position.y = -0.25;
             dripRef.current.scale.set(1.4 + impactP, 0.4 - impactP * 0.2, 1.4 + impactP);
          } else {
             const splashP = (p - 0.9) / 0.1;
             dripRef.current.position.y = -0.25 + Math.sin(splashP * Math.PI) * 0.2;
             dripRef.current.scale.set(1 + splashP * 0.2, 1 + splashP * 0.5, 1 + splashP * 0.2);
          }
      } else if (dripRef.current) {
          dripRef.current.visible = false;
          dripRef.current.scale.setScalar(1);
      }
   });

   return (
     <group ref={tRef}>
        {/* Glass Tube Layer */}
        <mesh position={[0, -0.2, 0]}>
           <cylinderGeometry args={[0.3, 0.3, 3, 32, 1, true]} />
           <meshPhysicalMaterial transmission={0.95} roughness={0} ior={1.4} thickness={0.1} color="#f8fafc" side={THREE.DoubleSide} metalness={metalness} />
        </mesh>
        <mesh position={[0, -1.7, 0]}>
           <sphereGeometry args={[0.3, 32, 16, 0, Math.PI*2, Math.PI/2, Math.PI/2]} />
           <meshPhysicalMaterial transmission={0.95} roughness={0} ior={1.4} thickness={0.1} color="#f8fafc" side={THREE.DoubleSide} metalness={metalness} />
        </mesh>

        {/* Liquid Volume */}
        <mesh position={[0, -1, 0]}>
           <cylinderGeometry args={[0.26, 0.26, 1.4, 32]} />
           <meshPhysicalMaterial transmission={transmission} color={currentColor} roughness={roughness} transparent opacity={opacity} />
        </mesh>
        <mesh position={[0, -1.7, 0]}>
           <sphereGeometry args={[0.26, 32, 16, 0, Math.PI*2, Math.PI/2, Math.PI/2]} />
           <meshPhysicalMaterial transmission={transmission} color={currentColor} roughness={roughness} transparent opacity={opacity} />
        </mesh>

        {/* Dropper Animation */}
        <mesh ref={dripRef} position={[0, 1.5, 0]}>
           <sphereGeometry args={[0.08]} />
           <meshPhysicalMaterial color={test ? test.color : "#fff"} transmission={0.8} />
        </mesh>

        {/* Precipitate Bubbles / Boiling */}
        {(test && reactionAnim > 0.5 && isPositive && (test.id === 'fehling' || test.id === 'tollens' || test.id === 'dnp')) && (
           <group position={[0, -1.5, 0]}>
              {Array.from({length: 10}).map((_, i) => (
                <mesh key={`bubble-${i}`} position={[(Math.random()-0.5)*0.3, Math.random()*0.5, (Math.random()-0.5)*0.3]}>
                  <sphereGeometry args={[0.03]} />
                  <meshBasicMaterial color={test.id==='tollens' ? "#fff" : test.id==='fehling' ? "#fca5a5" : "#fcd34d"} />
                </mesh>
              ))}
           </group>
        )}
     </group>
   );
};

const FunctionalGroupsLab: React.FC<Props> = ({ hex }) => {
  const [compoundIdx, setCompoundIdx] = useState(0);
  const [appliedTest, setAppliedTest] = useState<string | null>(null);
  const [reactionAnim, setReactionAnim] = useState(0);
  const [completedTests, setCompletedTests] = useState<string[]>([]);
  const sweepRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const compound = COMPOUNDS[compoundIdx];
  const test = TESTS.find(t => t.id === appliedTest);
  const isPositive = test ? test.positiveFor.includes(compound.type) : false;

  const applyTest = (tId: string) => {
    setAppliedTest(tId);
    setReactionAnim(0);
    clearInterval(sweepRef.current);
    let r = 0;
    sweepRef.current = setInterval(() => {
       r += 0.02; // ~2 seconds
       setReactionAnim(Math.min(r, 1));
       if (r >= 1) {
           clearInterval(sweepRef.current);
           setCompletedTests(prev => Array.from(new Set([...prev, tId])));
       }
    }, 40);
  };

  const handleCompoundChange = (idx: number) => {
     setCompoundIdx(idx);
     setAppliedTest(null);
     setReactionAnim(0);
     setCompletedTests([]);
  };

  return (
    <LabProtocolEngine
      labId="c10"
      labTitle="3D Functional Groups Analysis"
      labSubtitle="Identify carbonyl groups via chemical precipitates."
      prepTitle="Prepare Sample"
      prepSubtitle="Select Unknown Organic Compound"
      hexColor="#ec4899"
      prepSteps={PREP_STEPS}

      renderSetupScene={() => (
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
          <Environment preset="apartment" />
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 10, 5]} intensity={1.5} color="#fbcfe8" />
          
          <TubeContents compound={compound} test={undefined} isPositive={false} reactionAnim={0} />
          
          <ContactShadows position={[0, -2.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#000" />
          <OrbitControls enablePan enableZoom target={[0, 0, 0]} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      )}

      renderObservationScene={() => (
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
          <Environment preset="apartment" />
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 10, 5]} intensity={1.5} color="#fbcfe8" />
          <pointLight position={[-5, -10, -5]} intensity={0.5} />
          
          <TubeContents compound={compound} test={test} isPositive={isPositive} reactionAnim={reactionAnim} />
          
          <ContactShadows position={[0, -2.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#000" />
          <OrbitControls enablePan enableZoom target={[0, 0, 0]} />
        </Canvas>
      )}

      observationHUD={
         test && reactionAnim > 0 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-sm flex items-center gap-4 bg-black/80 p-4 rounded-xl border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-md animate-fade-in-up">
                <div className="flex-1">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-pink-400 mb-1">{test.name} Result</p>
                    <p className="font-bold text-slate-900 dark:text-slate-900 dark:text-white leading-snug">
                       {reactionAnim < 1 ? 'Reacting...' : (isPositive ? test.positiveResult : test.negativeResult)}
                    </p>
                </div>
                {reactionAnim >= 1 && (
                    <div className="shrink-0 bg-pink-900/40 p-3 rounded-xl border border-pink-500/20 text-center">
                        <span className="text-xl">{isPositive ? '✅' : '❌'}</span>
                    </div>
                )}
            </div>
         )
      }

      renderObservationSidebar={(finishObservation) => (
        <div className="flex flex-col h-full animate-fade-in pr-2">
           <div className="bg-slate-900 border border-black/10 dark:border-white/10 rounded-xl p-4 shadow-inner mb-4">
              <p className="text-[10px] text-slate-600 dark:text-slate-400 uppercase font-bold tracking-widest mb-3 border-b border-black/5 dark:border-white/5 pb-2">Unknown Samples Rack</p>
              <div className="grid grid-cols-1 gap-1.5 mb-4 max-h-[150px] overflow-y-auto custom-scrollbar pr-2">
                 {COMPOUNDS.map((c, i) => (
                    <button key={c.name} onClick={() => handleCompoundChange(i)}
                      className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold text-left transition-all border flex justify-between items-center ${compoundIdx === i ? 'text-white border-pink-500 bg-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.2)]' : 'border-white/10 text-slate-400 bg-black/40 hover:bg-white/5'}`}>
                      <span>{c.name}</span>
                      <span className="font-mono opacity-50">{c.formula}</span>
                    </button>
                 ))}
              </div>

               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-t border-black/5 dark:border-white/5 pt-3">Chemical Reagents</p>
               <div className="grid grid-cols-2 gap-2">
                 {TESTS.map(t => {
                    const isTested = completedTests.includes(t.id);
                    return (
                        <button key={t.id} onClick={() => applyTest(t.id)} disabled={reactionAnim > 0 && reactionAnim < 1}
                           className={`px-3 py-2 rounded-lg text-xs font-bold transition-all border shadow flex flex-col items-center text-center justify-center gap-1 min-h-[60px] ${(appliedTest === t.id && reactionAnim > 0) ? 'border-white text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : isTested ? 'border-white/40 text-white' : 'border-white/10 text-slate-300 hover:bg-white/10'}`}
                           style={{ backgroundColor: t.color + ((appliedTest === t.id && reactionAnim > 0) ? '80' : isTested ? '40' : '20') }}>
                           <FlaskConical size={14} />
                           {t.name}
                        </button>
                    );
                 })}
               </div>
           </div>
           
           <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                <button 
                    onClick={finishObservation} 
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 text-white font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg"
                    disabled={completedTests.length === 0}>
                    Finalize Analysis
                </button>
           </div>
        </div>
      )}

      renderAnalysisSidebar={() => (
        <div className="flex flex-col h-full space-y-4 animate-fade-in overflow-y-auto pr-2">
            <div className="bg-[#1e293b] rounded-xl p-5 border border-black/10 dark:border-white/10 shadow-xl">
                <div className="flex items-center gap-3 mb-4 border-b border-black/10 dark:border-white/10 pb-3">
                   <div className="text-3xl text-pink-400">✅</div>
                   <div>
                       <h3 className="text-sm font-black text-slate-900 dark:text-slate-900 dark:text-white uppercase tracking-wider">Functional Group Verified</h3>
                       <p className="text-pink-300 font-bold">{compound.type}</p>
                   </div>
                </div>
                
                <div className="space-y-4 mt-4">
                    <div className="bg-black/40 p-4 rounded-xl border border-black/5 dark:border-white/5 space-y-2">
                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest border-b border-black/5 dark:border-white/5 pb-1">Sample Profile</p>
                        <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400 text-xs">Name</span><span className="font-bold text-slate-900 dark:text-slate-900 dark:text-white text-xs">{compound.name}</span></div>
                        <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400 text-xs">Formula</span><span className="font-mono text-pink-300 text-xs">{compound.formula}</span></div>
                    </div>

                    <div>
                        <p className="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">Chemical Inference</p>
                        <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed text-justify mb-2">
                            Aldehydes (+/+/+) show positive reactions to Tollen's, Fehling's, and Schiff's reagents due to their easily oxidizable nature. Ketones (−/−/−) resist oxidation by these mild oxidizing agents.
                        </p>
                        <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                            Both Aldehydes and Ketones test positive for 2,4-DNP, confirming the presence of a carbonyl group (&gt;C=O).
                        </p>
                    </div>
                </div>
            </div>
        </div>
      )}
    />
  );
};

export default FunctionalGroupsLab;
