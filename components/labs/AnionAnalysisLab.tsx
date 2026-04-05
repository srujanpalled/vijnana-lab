import React, { useState, useRef, useEffect } from 'react';
import { RotateCcw, FlaskConical, Beaker, CheckCircle } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, RoundedBox, Html, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { LabProtocolEngine } from './shared/LabProtocolEngine';

interface Props { hex: string; }

const PREP_STEPS = [
  { id: 'solution', name: 'Original Solution', action: 'Proceed to Wet Tests', desc: 'Prepare the Original Solution (OS) or Sodium Carbonate Extract to perform wet tests for acid radicals (anions). Heating with concentrated acids may be required.' }
];

const ANION_TESTS = [
  {
    id: 'cl', name: 'Cl⁻ (Chloride)', reagent: 'AgNO₃ + Dil HNO₃',
    observation: 'Curdy white ppt. of AgCl — soluble in NH₄OH',
    precipColor: '#f0f0f0', confirmColor: '#e0f0e0',
    reagentColor: '#e8f8ff',
  },
  {
    id: 'br', name: 'Br⁻ (Bromide)', reagent: 'AgNO₃',
    observation: 'Pale yellow ppt. AgBr — partially soluble in NH₄OH',
    precipColor: '#f5f0a0', confirmColor: '#f5f0a0',
    reagentColor: '#e8f8ff',
  },
  {
    id: 'i', name: 'I⁻ (Iodide)', reagent: 'AgNO₃',
    observation: 'Yellow ppt. AgI — insoluble in NH₄OH',
    precipColor: '#e8d040', confirmColor: '#e8d040',
    reagentColor: '#e8f8ff',
  },
  {
    id: 'so4', name: 'SO₄²⁻ (Sulphate)', reagent: 'BaCl₂ + Dil HCl',
    observation: 'White ppt. BaSO₄ — insoluble in HCl',
    precipColor: '#ffffff', confirmColor: '#ffffff',
    reagentColor: '#fffde8',
  },
  {
    id: 'co3', name: 'CO₃²⁻ (Carbonate)', reagent: 'Dil HCl → CO₂ brisk effervescence',
    observation: 'Brisk CO₂ bubbles. Gas turns lime water milky.',
    precipColor: 'transparent', confirmColor: 'rgba(200,255,200,0.3)',
    reagentColor: '#ffe8e8',
  },
  {
    id: 'no3', name: 'NO₃⁻ (Nitrate)', reagent: 'Brown ring test (FeSO₄ + conc H₂SO₄)',
    observation: 'Brown ring at interface of FeSO₄ + H₂SO₄ layers',
    precipColor: '#6b3a00', confirmColor: '#4b2800',
    reagentColor: '#ffd8a0',
  },
];

const FallingDrop = ({ color }: { color: string }) => {
    const ref = useRef<THREE.Mesh>(null);
    useFrame(() => {
        if(ref.current) {
            ref.current.position.y -= 0.1;
        }
    });

    return (
        <mesh ref={ref} position={[0, -0.6, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshPhysicalMaterial color={color} transmission={0.8} />
        </mesh>
    );
};

const Bubbles = ({ active }: { active: boolean }) => {
    const groupRef = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (!groupRef.current || !active) return;
        groupRef.current.children.forEach((c) => {
            c.position.y += Math.random() * 0.05 + 0.02;
            c.position.x += (Math.random() - 0.5) * 0.02;
            if (c.position.y > 1.2) {
                c.position.y = 0;
                c.position.x = (Math.random() - 0.5) * 0.6;
            }
        });
    });

    return (
        <group ref={groupRef}>
            {[...Array(20)].map((_, i) => (
                <Sphere key={`bubble-${i}`} args={[0.04, 8, 8]} position={[(Math.random()-0.5)*0.6, Math.random(), (Math.random()-0.5)*0.6]}>
                    <meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0} />
                </Sphere>
            ))}
        </group>
    );
};

interface FlaskSceneProps {
    selectedAnion: typeof ANION_TESTS[0];
    testProgress: number;
    testDone: boolean;
    setupMode?: boolean;
}

const AnionFlaskScene = ({ selectedAnion, testProgress, testDone, setupMode }: FlaskSceneProps) => {
   const brownRingRef = useRef<THREE.Mesh>(null);
   const dropperGroupRef = useRef<THREE.Group>(null);
   
   useFrame((state) => {
       if (dropperGroupRef.current) {
           const active = testProgress > 0 && testProgress < 0.5;
           const targetY = active ? 2.5 : 4;
           dropperGroupRef.current.position.y = THREE.MathUtils.lerp(dropperGroupRef.current.position.y, targetY, 0.1);
       }
   });

   return (
    <group position={[0, -1.5, 0]}>
       {/* Laboratory Bench */}
       <Cylinder args={[5, 5, 0.2, 32]} position={[0, -0.1, 0]} receiveShadow>
         <meshPhysicalMaterial color="#1a202c" roughness={0.9} />
       </Cylinder>

       {/* Flask Stand base */}
       <RoundedBox args={[2, 0.2, 2]} position={[0, 0.1, 0]} castShadow receiveShadow>
           <meshStandardMaterial color="#475569" />
       </RoundedBox>

       {/* Test Tube */}
       <group position={[0, 1.8, 0]}>
          <Cylinder args={[0.5, 0.5, 3.2, 32]} position={[0, 0, 0]} castShadow>
             <meshPhysicalMaterial color="#ffffff" transmission={0.99} opacity={1} roughness={0.0} ior={1.5} thickness={0.1} transparent side={THREE.DoubleSide} />
          </Cylinder>
          <Sphere args={[0.5, 32, 16, 0, Math.PI*2, 0, Math.PI/2]} position={[0, -1.6, 0]} rotation={[Math.PI, 0, 0]}>
             <meshPhysicalMaterial color="#ffffff" transmission={0.99} opacity={1} roughness={0.0} ior={1.5} thickness={0.1} transparent side={THREE.DoubleSide} />
          </Sphere>
          
          <Cylinder args={[0.55, 0.55, 0.1, 32]} position={[0, 1.6, 0]}>
             <meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0.1} />
          </Cylinder>

          {/* Liquid Inside */}
          <Cylinder args={[0.48, 0.48, 1.6, 32]} position={[0, -0.8, 0]} receiveShadow>
              <meshPhysicalMaterial color="#c8e8ff" transmission={0.6} opacity={0.9} roughness={0.2} transparent ior={1.33} />
          </Cylinder>
          <Sphere args={[0.48, 32, 16, 0, Math.PI*2, 0, Math.PI/2]} position={[0, -1.6, 0]} rotation={[Math.PI, 0, 0]}>
              <meshPhysicalMaterial color="#c8e8ff" transmission={0.6} opacity={0.9} roughness={0.2} transparent ior={1.33} />
          </Sphere>

          {!setupMode && (
             <>
                {/* Precipitate */}
                {testDone && selectedAnion.precipColor !== 'transparent' && selectedAnion.id !== 'no3' && (
                    <Sphere args={[0.46, 32, 16, 0, Math.PI*2, 0, Math.PI/2]} position={[0, -1.58, 0]} rotation={[Math.PI, 0, 0]}>
                        <meshPhysicalMaterial color={selectedAnion.precipColor} roughness={0.9} transmission={0} />
                    </Sphere>
                )}

                {/* Brown Ring */}
                {testDone && selectedAnion.id === 'no3' && (
                     <Cylinder ref={brownRingRef} args={[0.48, 0.48, 0.1, 32]} position={[0, 0, 0]}>
                         <meshStandardMaterial color={selectedAnion.precipColor} opacity={0.9} transparent />
                     </Cylinder>
                )}

                {/* Effervescence Bubbles */}
                {testProgress > 0 && selectedAnion.id === 'co3' && (
                    <group position={[0, -1.2, 0]}>
                       <Bubbles active={testProgress < 1} />
                    </group>
                )}
             </>
          )}

       </group>

       {/* Animated Dropper */}
       {!setupMode && (
           <group ref={dropperGroupRef} position={[0, 4, 0]}>
             <Cylinder args={[0.1, 0.1, 1, 16]} position={[0, 0, 0]}>
                 <meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0.1} />
             </Cylinder>
             <Cylinder args={[0.2, 0.2, 0.5, 16]} position={[0, 0.7, 0]}>
                 <meshStandardMaterial color="#334155" />
             </Cylinder>
             <Cylinder args={[0.08, 0.08, 0.6, 16]} position={[0, -0.2, 0]}>
                 <meshPhysicalMaterial color={selectedAnion.reagentColor} />
             </Cylinder>

             {testProgress > 0.2 && testProgress < 0.6 && (
                 <FallingDrop color={selectedAnion.reagentColor} />
             )}
           </group>
       )}
    </group>
   );
};

const AnionAnalysisLab: React.FC<Props> = ({ hex }) => {
  const [selectedAnion, setSelectedAnion] = useState(ANION_TESTS[0]);
  const [testDone, setTestDone] = useState(false);
  const [testProgress, setTestProgress] = useState(0); 
  const sweepRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const runTest = () => {
    setTestProgress(0);
    setTestDone(false);
    clearInterval(sweepRef.current);
    sweepRef.current = setInterval(() => {
      setTestProgress(p => {
        if (p >= 1) { 
            clearInterval(sweepRef.current); 
            setTestDone(true); 
            return 1; 
        }
        return p + 0.05;
      });
    }, 80);
  };

  const resetTest = () => {
     setTestDone(false);
     setTestProgress(0);
  };

  return (
    <LabProtocolEngine
      labId="c08"
      labTitle="Qualitative Anion Analysis"
      labSubtitle="Perform wet tests for acid radicals (anions)."
      prepTitle="Analyte Preparation"
      prepSubtitle="Dissolving the Unknown Salt"
      hexColor={hex}
      prepSteps={PREP_STEPS}

      renderSetupScene={() => (
        <Canvas camera={{ position: [0, 2, 8], fov: 40 }} dpr={[1, 2]}>
          <Environment preset="apartment" />
          <ambientLight intensity={0.6} />
          <pointLight position={[0, 10, 5]} intensity={1.5} color="#cbd5e1" />
          <AnionFlaskScene selectedAnion={selectedAnion} testProgress={0} testDone={false} setupMode={true} />
          <ContactShadows position={[0, -1.5, 0]} opacity={0.6} scale={15} blur={3} color="#000" />
          <OrbitControls enablePan enableZoom target={[0, 0, 0]} maxPolarAngle={Math.PI/2} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      )}

      renderObservationScene={() => (
        <Canvas camera={{ position: [0, 2, 8], fov: 40 }} dpr={[1, 2]}>
          <Environment preset="apartment" />
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 10, 5]} intensity={1.5} />
          <pointLight position={[-5, 5, -5]} color="#06b6d4" intensity={1} />
          
          <AnionFlaskScene selectedAnion={selectedAnion} testProgress={testProgress} testDone={testDone} />
          
          <ContactShadows position={[0, -1.5, 0]} opacity={0.6} scale={15} blur={3} color="#000" />
          <OrbitControls enablePan enableZoom target={[0, 0, 0]} maxPolarAngle={Math.PI/2}/>
        </Canvas>
      )}

      observationHUD={
         testDone && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-sm flex items-center gap-4 bg-black/80 p-4 rounded-xl border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-md animate-fade-in-up">
                <div className="flex-1">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 mb-1">Visual Observation</p>
                    <p className="font-bold text-slate-900 dark:text-slate-900 dark:text-white leading-snug">{selectedAnion.observation}</p>
                </div>
                <div className="shrink-0 bg-cyan-900/40 p-3 rounded-xl border border-cyan-500/20 text-center">
                    <CheckCircle size={18} className="mx-auto text-cyan-400 mb-1" />
                    <p className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest">Confirmed</p>
                </div>
            </div>
         )
      }

      renderObservationSidebar={(finishObservation) => (
        <div className="flex flex-col h-full animate-fade-in pr-2">
           <div className="bg-slate-900 border border-black/10 dark:border-white/10 rounded-xl p-4 shadow-inner mb-4">
              <p className="text-[10px] text-slate-600 dark:text-slate-400 uppercase font-bold tracking-widest mb-3 border-b border-black/5 dark:border-white/5 pb-2">Select Unknown Analyte</p>
              <div className="space-y-2 mb-4">
                 {ANION_TESTS.map(a => (
                   <button key={a.id} onClick={() => { setSelectedAnion(a); resetTest(); }}
                     className={`w-full p-2.5 rounded-lg text-left transition-all ${selectedAnion.id === a.id ? 'border-cyan-500 bg-cyan-900/20 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'border-white/10 bg-black/40 hover:bg-white/5'}`}
                     style={{ border: `1px solid ${selectedAnion.id === a.id ? '#06b6d4' : 'rgba(255,255,255,0.05)'}` }}>
                     <span className={`font-bold text-sm ${selectedAnion.id === a.id ? 'text-cyan-300' : 'text-slate-300'}`}>{a.name}</span>
                   </button>
                 ))}
              </div>

               <div className="bg-[#111] p-3 rounded-lg border border-black/5 dark:border-white/5 shadow-inner mb-4">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Required Reagent</p>
                  <p className="font-mono text-cyan-400 text-sm font-bold truncate">{selectedAnion.reagent}</p>
               </div>

               <button onClick={runTest} disabled={testProgress > 0 && testProgress < 1}
                  className="w-full py-3 rounded-xl font-bold text-slate-900 dark:text-slate-900 dark:text-white transition-all shadow-lg active:scale-95 disabled:opacity-50"
                  style={{ backgroundColor: hex }}>
                  Dispense & Test
               </button>
               
               <button onClick={resetTest} className="mt-3 w-full py-1.5 rounded bg-slate-800 text-slate-400 text-[10px] uppercase font-bold tracking-wider hover:bg-slate-700 hover:text-white transition-colors">
                  Clear Reaction
               </button>
           </div>
           
           <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                <button 
                    onClick={finishObservation} 
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg"
                    disabled={!testDone}>
                    Finalize Diagnosis
                </button>
           </div>
        </div>
      )}

      renderAnalysisSidebar={() => (
        <div className="flex flex-col h-full space-y-4 animate-fade-in overflow-y-auto pr-2">
            <div className="bg-[#1e293b] rounded-xl p-5 border border-black/10 dark:border-white/10 shadow-xl">
                <div className="flex items-center gap-3 mb-4 border-b border-black/10 dark:border-white/10 pb-3">
                   <div className="text-3xl text-cyan-400">✅</div>
                   <div>
                       <h3 className="text-sm font-black text-slate-900 dark:text-slate-900 dark:text-white uppercase tracking-wider">Acid Radical Indentified</h3>
                       <p className="text-cyan-300 font-bold">{selectedAnion.name}</p>
                   </div>
                </div>
                
                <div className="space-y-4 mt-4">
                    <div>
                        <p className="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2">Chemistry Behind Test</p>
                        <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed text-justify mb-2">
                            Anions (acid radicals) are identified based on their reaction with dilute and concentrated acids, leading to the evolution of characteristic gases or precipitates.
                        </p>
                        
                        <div className="bg-slate-200 dark:bg-black/50 p-3 rounded-lg font-mono text-xs text-green-600 dark:text-green-300 break-words">
                            {selectedAnion.id === 'cl' && "NaCl + AgNO₃ ⟶ AgCl↓(white) + NaNO₃"}
                            {selectedAnion.id === 'br' && "NaBr + AgNO₃ ⟶ AgBr↓(pale-yellow) + NaNO₃"}
                            {selectedAnion.id === 'i' && "NaI + AgNO₃ ⟶ AgI↓(yellow) + NaNO₃"}
                            {selectedAnion.id === 'so4' && "Na₂SO₄ + BaCl₂ ⟶ BaSO₄↓(white) + 2NaCl"}
                            {selectedAnion.id === 'co3' && "Na₂CO₃ + 2HCl ⟶ 2NaCl + H₂O + CO₂↑"}
                            {selectedAnion.id === 'no3' && "NO₃⁻ + 3Fe²⁺ + 4H⁺ ⟶ NO + 3Fe³⁺ + 2H₂O\n[Fe(H₂O)₆]²⁺ + NO ⟶ [Fe(H₂O)₅(NO)]²⁺(brown ring) + H₂O"}
                        </div>
                    </div>

                    <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/20">
                       <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-1">Inference</p>
                       <p className="text-xs text-slate-800 dark:text-slate-800 dark:text-slate-200">{selectedAnion.observation}. This strongly signifies the presence of the {selectedAnion.name} radical in the given salt.</p>
                    </div>
                </div>
            </div>
        </div>
      )}
    />
  );
};

export default AnionAnalysisLab;
