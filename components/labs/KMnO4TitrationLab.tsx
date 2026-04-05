import React, { useRef, useEffect, useState } from 'react';
import { RotateCcw, Droplets } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Html } from '@react-three/drei';
import * as THREE from 'three';
import DraggableSlider from './DraggableSlider';
import { LabProtocolEngine } from './shared/LabProtocolEngine';

interface Props { hex: string; }

const PREP_STEPS = [
  { id: 'flask', name: 'Prepare Analyte', action: 'Fill Burette', desc: 'Pipette 20.0 mL of FeSO₄ solution into a conical flask. Add a test-tube full of dilute sulphuric acid (H₂SO₄) to provide the necessary acidic medium.' },
  { id: 'burette', name: 'Prepare Titrant', action: 'Begin Titration', desc: 'Rinse and fill the burette with the given standard KMnO₄ solution. Ensure there are no air bubbles in the nozzle and record the initial reading.' }
];

function getKMnO4Color(volAdded: number, vEq: number): string {
  const frac = volAdded / vEq;
  if (frac < 0.95) return '#e0f2fe'; // transparent/colorless
  if (frac < 1.0) return '#fbcfe8'; // very faint pink
  if (frac <= 1.02) return '#f472b6'; // permanent pink endpoint
  return '#9333ea'; // dark purple excess
}

const glassMat = <meshPhysicalMaterial transmission={0.9} thickness={0.1} roughness={0} ior={1.4} color="#e0f2fe" transparent opacity={0.6} side={THREE.DoubleSide} />;

import {
  UltraBurette, UltraConicalFlask, UltraDropper, UltraReagentBottle, 
  UltraIronStand, UltraMagneticStirrer, UltraBeaker
} from './shared/UltraApparatus';

const SetupScene = ({ step, progress }: { step: number, progress: number }) => {
  return (
    <group position={[0, -1, 0]}>
       {/* Setup Step 0: Pipetting Analyte */}
       {step === 0 && (
         <group>
           {/* Conical Flask receiving analyte */}
           <UltraConicalFlask position={[0, 0, 0]} scale={1.2} fluidLevel={progress * 0.3} fluidColor="#e0f2fe" label="FeSO₄" />
           
           {/* Pipette (Dropper) delivering analyte */}
           <UltraDropper position={[0, 3 + (1-progress), 0]} scale={1.5} fluidColor="#e0f2fe" isDripping={progress > 0.1 && progress < 0.9} />
         </group>
       )}

       {/* Setup Step 1: Filling Burette */}
       {step === 1 && (
         <group>
           <UltraIronStand position={[-1, 0, 0]} height={6} />
           {/* Burette being filled */}
           <UltraBurette position={[0, 2.5, 0]} scale={0.8} fluidLevel={progress} fluidColor="#7e22ce" />
           {/* Beaker pouring (visual proxy) */}
           <UltraBeaker position={[0.5, 6 + (1-progress), 0]} rotation={[0, 0, Math.PI/6]} scale={0.5} fluidLevel={0.8 - progress*0.5} fluidColor="#7e22ce" label="KMnO₄" />
         </group>
       )}
    </group>
  );
};


const TitrationScene = ({ volAdded, running, endpointReached, vEq }: any) => {
  const flaskLiquidColor = getKMnO4Color(volAdded, vEq);
  // mapping volAdded (0 to 30) to fluidLevel (1.0 to 0.4)
  const buretteLevel = 1.0 - (volAdded / 50.0); // 50mL burette

  return (
    <group position={[0, -1, 0]}>
      <UltraIronStand position={[-1, -1, 0]} height={6} />
      
      {/* Burette Setup */}
      <UltraBurette 
          position={[0, 1.5, 0]} 
          scale={0.8} 
          fluidLevel={buretteLevel} 
          fluidColor="#7e22ce" 
          isDraining={running} 
          stopcockOpen={running}
      />
      
      {/* Magnetic Stirrer Base */}
      <UltraMagneticStirrer position={[0, -2.8, 0]} scale={0.8} stirring={running || endpointReached} />

      {/* Titration Flask */}
      <UltraConicalFlask 
          position={[0, -2.3, 0]} 
          scale={1.0} 
          fluidLevel={0.4 + (volAdded / 100)} // Volume slightly increases
          fluidColor={flaskLiquidColor} 
      />
    </group>
  );
}


const KMnO4TitrationLab: React.FC<Props> = ({ hex }) => {
  const [setupAnim, setSetupAnim] = useState(0);

  const [volAdded, setVolAdded] = useState(0);
  const [running, setRunning] = useState(false);
  const [endpointReached, setEndpointReached] = useState(false);
  const vEq = 20.0;

  useEffect(() => {
    setSetupAnim(0);
  }, []);

  useEffect(() => {
    if (volAdded >= vEq && !endpointReached) setEndpointReached(true);
  }, [volAdded, endpointReached, vEq]);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setVolAdded(v => {
        if (v >= 30) { setRunning(false); return v; }
        return parseFloat((v + 0.1).toFixed(2));
      });
    }, 50);
    return () => clearInterval(id);
  }, [running]);

  const resetTitration = () => { setVolAdded(0); setRunning(false); setEndpointReached(false); };

  return (
    <LabProtocolEngine
      labId="c6"
      labTitle="Redox Titration (KMnO₄ vs FeSO₄)"
      labSubtitle="Determine the molarity of a given solution via self-indicator."
      prepTitle="Titration Setup"
      prepSubtitle="Pipetting and filling apparatus"
      hexColor={hex}
      prepSteps={PREP_STEPS}

      renderSetupScene={(step) => {
        requestAnimationFrame(() => setSetupAnim(p => Math.min(1, p + 0.01)));

        return (
          <Canvas camera={{ position: [0, 1.5, 7], fov: 55 }} dpr={[1, 2]}>
            <Environment preset="night" />
            <ambientLight intensity={0.8} />
            <pointLight position={[5, 10, 5]} intensity={1.5} color={hex} />
            
            <SetupScene step={step} progress={setupAnim} />
            
            <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={15} blur={2.5} />
            <OrbitControls enablePan enableZoom target={[0, 0, 0]} />
          </Canvas>
        );
      }}

      renderObservationScene={() => {
        return (
          <Canvas camera={{ position: [0, 0.5, 8], fov: 60 }} dpr={[1, 2]}>
            <Environment preset="night" />
            <ambientLight intensity={0.8} />
            <pointLight position={[5, 10, 5]} intensity={1.5} color="#fbcfe8" />
            
            <TitrationScene volAdded={volAdded} running={running} endpointReached={endpointReached} vEq={vEq} />
            
            <ContactShadows position={[0, -3.8, 0]} opacity={0.6} scale={10} blur={2.5} color="#000" />
            <OrbitControls enablePan enableZoom target={[0, 0, 0]} maxPolarAngle={Math.PI/2 - 0.1}/>
          </Canvas>
        );
      }}

      renderObservationSidebar={(finishObservation) => (
        <div className="flex flex-col h-full animate-fade-in pr-2">
           <div className={`p-4 rounded-xl border shadow-inner mb-4 transition-colors ${endpointReached ? 'bg-pink-500/10 border-pink-500/30' : 'bg-purple-500/10 border-purple-500/30'}`}>
             <h3 className={`text-sm font-bold mb-1 ${endpointReached ? 'text-pink-300' : 'text-purple-300'}`}>
               {endpointReached ? '✅ Endpoint Reached' : 'Titration in Progress'}
             </h3>
             <p className={`text-xs ${endpointReached ? 'text-pink-200' : 'text-purple-200/70'} leading-relaxed`}>
               {endpointReached ? 'Permanent pale pink color obtained. Reaction is complete.' : 'Slowly add KMnO₄. Fe²⁺ reacts rendering the purple solution colorless until equivalence.'}
             </p>
           </div>

           <div className="bg-slate-950 p-4 rounded-xl border border-black/5 dark:border-white/5 shadow-inner mb-4">
             <DraggableSlider label="Burette Addition" min={0} max={30} step={0.1} value={volAdded} onChange={setVolAdded} color="#c084fc" unit="mL" />
             
             <div className="grid grid-cols-2 gap-2 mt-4">
               {[
                 { label: 'Vol Added', val: `${volAdded.toFixed(1)} mL`, color: '#c084fc' },
                 { label: 'Calculated Eq', val: `${vEq.toFixed(1)} mL`, color: '#a855f7' },
                 { label: 'Indicator', val: 'Self', color: '#fb923c' },
                 { label: 'State', val: endpointReached ? 'Pink' : 'Clear', color: endpointReached ? '#f472b6' : '#94a3b8' },
               ].map(m => (
                 <div key={m.label} className="bg-slate-900 border border-black/5 dark:border-white/5 rounded-xl p-2.5 text-center shadow-sm">
                   <div className="text-[9px] text-slate-500 uppercase font-bold tracking-wider mb-1">{m.label}</div>
                   <div className="font-mono font-bold text-sm bg-black/40 rounded py-0.5" style={{ color: m.color }}>{m.val}</div>
                 </div>
               ))}
             </div>
           </div>

           <div className="flex gap-2">
             <button onClick={() => setRunning(r => !r)} disabled={volAdded >= 30}
               className={`flex-1 py-3 rounded-xl text-sm font-bold text-white transition-all shadow-lg flex items-center justify-center gap-2 ${running ? 'bg-red-600 shadow-red-600/20' : 'bg-purple-600 shadow-purple-600/20'} disabled:opacity-50`}>
               <Droplets size={16} /> {running ? 'Stop Titration' : 'Start Drip'}
             </button>
             <button onClick={resetTitration}
               className="px-4 py-3 rounded-xl bg-slate-800 text-red-400 hover:bg-red-900/30 transition-colors">
               <RotateCcw size={16} />
             </button>
           </div>

           <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                <button 
                    onClick={finishObservation} 
                    disabled={!endpointReached}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all disabled:opacity-50">
                    Calculate Molarity
                </button>
           </div>
        </div>
      )}

      renderAnalysisSidebar={() => (
        <div className="flex flex-col h-full space-y-4 animate-fade-in overflow-y-auto pr-2">
            <div className="bg-[#1e293b] rounded-xl p-5 border border-black/10 dark:border-white/10">
                <h3 className="text-sm font-black text-slate-900 dark:text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-black/10 dark:border-white/10 pb-2">Redox Principles & Calculations</h3>
                
                <div className="space-y-4">
                    <div>
                        <p className="text-[10px] text-purple-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><span className="text-sm">⚡</span> Reduction Half-Reaction</p>
                        <p className="text-[10px] font-mono text-purple-600 dark:text-purple-300 bg-black/40 p-2 mt-1 rounded border border-black/5 dark:border-white/5">
                            MnO₄⁻ + 8H⁺ + 5e⁻ ⟶ Mn²⁺ + 4H₂O
                        </p>
                    </div>

                    <div>
                        <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><span className="text-sm">⚡</span> Oxidation Half-Reaction</p>
                        <p className="text-[10px] font-mono text-green-600 dark:text-green-300 bg-black/40 p-2 mt-1 rounded border border-black/5 dark:border-white/5">
                            5Fe²⁺ ⟶ 5Fe³⁺ + 5e⁻
                        </p>
                    </div>

                    <div>
                        <p className="text-[10px] text-yellow-500 font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><span className="text-sm">🧮</span> Molarity Calculation</p>
                        <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed mb-2"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Formula:</strong> According to stoichiometry (1 mole of KMnO₄ reacts with 5 moles of FeSO₄):</p>
                        <div className="bg-black/40 p-3 rounded border border-black/5 dark:border-white/5 overflow-x-auto text-center flex flex-col items-center gap-2">
                            <p className="text-slate-900 dark:text-slate-900 dark:text-white font-mono text-xs whitespace-nowrap">
                                <span className="text-purple-600 dark:text-purple-300">M₁V₁/1</span> = <span className="text-green-600 dark:text-green-300">M₂V₂/5</span>
                            </p>
                            <div className="w-full h-px bg-black/10 dark:bg-white/10"></div>
                            <p className="text-slate-600 dark:text-slate-400 font-mono text-[10px]">
                                M₂ = <span className="text-purple-600 dark:text-purple-300">(5 × M₁ × {volAdded.toFixed(1)})</span> / 20.0
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-auto bg-slate-900 rounded-xl p-4 border border-slate-700">
                <p className="text-[10px] text-slate-600 dark:text-slate-400 italic text-center text-justify">Why acidic medium? In neutral or alkaline medium, KMnO₄ is reduced to MnO₂, making the solution brown instead of colorless.</p>
            </div>
        </div>
      )}
    />
  );
};

export default KMnO4TitrationLab;
