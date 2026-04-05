import React, { useState, useRef, useEffect } from 'react';
import { RotateCcw, CheckCircle, Thermometer, Flame } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, RoundedBox, Html, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import DraggableSlider from './DraggableSlider';
import { LabProtocolEngine } from './shared/LabProtocolEngine';

interface BenedictsTestLabProps { hex: string; }

const PREP_STEPS = [
  { id: 'reagent', name: 'Sample Mixing', action: 'Heat Sample', desc: 'Add 5 drops of Benedict’s reagent (deep blue copper(II) citrate complex) to 2mL of biological sample in a test tube.' },
  { id: 'boil', name: 'Water Bath Boiling', action: 'Observe Results', desc: 'Place test tube in a boiling water bath for 3–5 minutes. Heat catalyzes the reduction of copper ions by any reducing sugars present.' }
];

const getResultText = (glucose: number) => {
    if (glucose < 20) return { text: 'NEGATIVE', sub: 'No glucose detected', color: '#3b82f6', hex: '#1d4ed8' };
    if (glucose < 40) return { text: 'TRACE', sub: 'Trace glucose (1+)', color: '#22c55e', hex: '#16a34a' };
    if (glucose < 60) return { text: 'MODERATE', sub: 'Moderate glucose (2+)', color: '#eab308', hex: '#ca8a04' };
    if (glucose < 80) return { text: 'HIGH', sub: 'High glucose (3+)', color: '#f97316', hex: '#ea580c' };
    return { text: 'DIABETIC', sub: 'Brick Red — Glucose+++', color: '#ef4444', hex: '#b91c1c' };
};

const BoilingBubbles = ({ active, tubeRadius, height }: { active: boolean, tubeRadius: number, height: number }) => {
    const groupRef = useRef<THREE.Group>(null);
    useFrame(() => {
        if (!groupRef.current || !active) return;
        groupRef.current.children.forEach(c => {
            c.position.y += Math.random() * 0.08 + 0.02;
            c.position.x += (Math.random() - 0.5) * 0.05;
            if (c.position.y > height) {
                c.position.y = -0.5;
                c.position.x = (Math.random() - 0.5) * tubeRadius;
            }
        });
    });

    return (
        <group ref={groupRef} position={[0, -1, 0]}>
            {[...Array(15)].map((_, i) => (
                <Sphere key={i} args={[0.03 + Math.random()*0.02, 8, 8]} position={[(Math.random()-0.5)*tubeRadius, Math.random()*height, (Math.random()-0.5)*tubeRadius]}>
                    <meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0} />
                </Sphere>
            ))}
        </group>
    );
};

const Droplet = ({ color }: { color: string }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if(meshRef.current) {
            const t = (state.clock.elapsedTime * 2) % 1;
            meshRef.current.position.y = -0.5 - (t * 2);
            meshRef.current.scale.setScalar(1 - (t * 0.5));
            meshRef.current.visible = t < 0.9;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, -0.5, 0]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshPhysicalMaterial color={color} transmission={0.8} />
        </mesh>
    );
}

const BenedictsScene = ({ step, glucose, isObservation }: any) => {
    const liquidRef = useRef<THREE.MeshPhysicalMaterial>(null);
    const bathRef = useRef<THREE.Group>(null);
    const flameRef = useRef<THREE.Group>(null);
    const dropperRef = useRef<THREE.Group>(null);
    
    useFrame((state) => {
        if (liquidRef.current) {
            const targetColor = isObservation ? getResultText(glucose).hex : '#1d4ed8';
            liquidRef.current.color.lerp(new THREE.Color(targetColor), 0.05);
        }

        if (dropperRef.current) {
            const active = step === 0 && !isObservation;
            const targetY = active ? 2.5 : 4.5;
            dropperRef.current.position.y = THREE.MathUtils.lerp(dropperRef.current.position.y, targetY, 0.1);
        }

        if (bathRef.current) {
            const bathActive = step === 1 && !isObservation;
            const targetY = bathActive ? 0 : -2.5;
            bathRef.current.position.y = THREE.MathUtils.lerp(bathRef.current.position.y, targetY, 0.05);
        }

        if (flameRef.current) {
             const scale = 1 + Math.sin(state.clock.elapsedTime * 10) * 0.1;
             flameRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <group position={[0, -1.2, 0]}>
            {/* Lab Bench */}
            <Cylinder args={[5, 5, 0.2, 32]} position={[0, -0.1, 0]}>
               <meshPhysicalMaterial color="#0f172a" roughness={0.9} />
            </Cylinder>

            <RoundedBox args={[1.5, 0.2, 1.5]} position={[0, 0.1, 0]}>
                <meshStandardMaterial color="#334155" />
            </RoundedBox>

            {/* Test Tube */}
            <group position={[0, 1.6, 0]}>
                <Cylinder args={[0.3, 0.3, 2.5, 32]} position={[0, 0, 0]}>
                   <meshPhysicalMaterial color="#ffffff" transmission={0.99} opacity={1} roughness={0} ior={1.5} thickness={0.1} transparent side={THREE.DoubleSide} />
                </Cylinder>
                <Sphere args={[0.3, 32, 16, 0, Math.PI*2, 0, Math.PI/2]} position={[0, -1.25, 0]} rotation={[Math.PI, 0, 0]}>
                   <meshPhysicalMaterial color="#ffffff" transmission={0.99} opacity={1} roughness={0} ior={1.5} thickness={0.1} transparent side={THREE.DoubleSide} />
                </Sphere>
                
                <Cylinder args={[0.35, 0.35, 0.05, 32]} position={[0, 1.25, 0]}><meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0.1} /></Cylinder>

                {/* Liquid Volume */}
                <Cylinder args={[0.28, 0.28, 1.5, 32]} position={[0, -0.5, 0]}>
                    <meshPhysicalMaterial ref={liquidRef} color="#1d4ed8" transmission={0.6} opacity={0.9} transparent roughness={0.1} ior={1.33} />
                </Cylinder>
                
                <Sphere args={[0.28, 32, 16, 0, Math.PI*2, 0, Math.PI/2]} position={[0, -1.25, 0]} rotation={[Math.PI, 0, 0]}>
                    <meshPhysicalMaterial color="#1d4ed8" transmission={0.6} opacity={0.9} transparent roughness={0.1} ior={1.33} />
                </Sphere>

                {/* Bubbles if heating */}
                {(step === 1 && !isObservation) && <BoilingBubbles tubeRadius={0.2} active={true} height={1.5} />}
            </group>

            {/* Dropper */}
            {!isObservation && (
              <group ref={dropperRef} position={[0, 4.5, 0]}>
                   <Cylinder args={[0.08, 0.08, 0.8, 16]} position={[0, 0, 0]}><meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0.1} /></Cylinder>
                   <Cylinder args={[0.15, 0.15, 0.4, 16]} position={[0, 0.6, 0]}><meshStandardMaterial color="#1e293b" /></Cylinder>
                   {step === 0 && <Droplet color="#1d4ed8" />}
              </group>
            )}

            {/* Water Bath Setup */}
            <group ref={bathRef} position={[0, -2.5, 0]}>
                <Cylinder args={[1.2, 1.2, 2, 32]} position={[0, 1.5, 0]}>
                   <meshPhysicalMaterial color="#ffffff" transmission={0.99} opacity={1} roughness={0} ior={1.5} thickness={0.1} transparent side={THREE.DoubleSide} />
                </Cylinder>
                <Cylinder args={[1.15, 1.15, 1.8, 32]} position={[0, 1.4, 0]}>
                   <meshPhysicalMaterial color="#60a5fa" transmission={0.8} opacity={0.6} transparent ior={1.33} />
                </Cylinder>
                
                {(step === 1 && !isObservation) && <group position={[0, 1, 0]}><BoilingBubbles tubeRadius={0.8} active={true} height={1.5} /></group>}

                <Cylinder args={[0.05, 0.05, 0.8, 8]} position={[-0.8, 0.4, 0.8]}><meshStandardMaterial color="#64748b" /></Cylinder>
                <Cylinder args={[0.05, 0.05, 0.8, 8]} position={[0.8, 0.4, 0.8]}><meshStandardMaterial color="#64748b" /></Cylinder>
                <Cylinder args={[0.05, 0.05, 0.8, 8]} position={[0, 0.4, -1]}><meshStandardMaterial color="#64748b" /></Cylinder>
                <Cylinder args={[1.3, 1.3, 0.05, 32]} position={[0, 0.8, 0]}><meshStandardMaterial color="#cbd5e1" wireframe /></Cylinder>

                <Cylinder args={[0.4, 0.4, 0.3, 32]} position={[0, 0.15, 0]}><meshStandardMaterial color="#b91c1c" /></Cylinder>
                <Cylinder args={[0.2, 0.2, 0.2, 32]} position={[0, 0.35, 0]}><meshStandardMaterial color="#1e293b" /></Cylinder>
                
                <group ref={flameRef} position={[0, 0.55, 0]}>
                    <Cylinder args={[0, 0.3, 0.5, 16]} position={[0, 0.25, 0]}><meshPhysicalMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} transparent opacity={0.8} /></Cylinder>
                    <Cylinder args={[0, 0.15, 0.3, 16]} position={[0, 0.15, 0]}><meshPhysicalMaterial color="#60a5fa" emissive="#93c5fd" emissiveIntensity={1} transparent opacity={0.9} /></Cylinder>
                </group>
            </group>
        </group>
    );
};

const BenedictsTestLab: React.FC<BenedictsTestLabProps> = ({ hex }) => {
  const [glucose, setGlucose] = useState(50);
  const result = getResultText(glucose);

  return (
    <LabProtocolEngine
      labId="c15"
      labTitle="Benedict's Test"
      labSubtitle="Qualitative analysis for reducing sugars in biological samples."
      prepTitle="Assay Preparation"
      prepSubtitle="Test for glucosuria"
      hexColor={hex}
      prepSteps={PREP_STEPS}

      renderSetupScene={(step) => (
        <Canvas camera={{ position: [0, 2, 7], fov: 45 }} dpr={[1, 2]}>
            <Environment preset="city" />
            <ambientLight intensity={0.4} />
            <pointLight position={[5, 10, 5]} intensity={1.5} />
            <BenedictsScene step={step} glucose={0} isObservation={false} />
            <ContactShadows position={[0, -1.5, 0]} opacity={0.6} scale={15} blur={2.5} color="#000" />
            <OrbitControls enablePan enableZoom maxPolarAngle={Math.PI / 2 - 0.05} />
        </Canvas>
      )}

      renderObservationScene={() => (
        <Canvas camera={{ position: [0, 1.5, 6], fov: 45 }} dpr={[1, 2]}>
            <Environment preset="city" />
            <ambientLight intensity={0.4} />
            <pointLight position={[5, 10, 5]} intensity={1.5} />
            <pointLight position={[-5, 5, -5]} color={result.color} intensity={0.5} />
            
            <BenedictsScene step={2} glucose={glucose} isObservation={true} />
            
            <ContactShadows position={[0, -1.5, 0]} opacity={0.6} scale={15} blur={2.5} color="#000" />
            <OrbitControls enablePan enableZoom maxPolarAngle={Math.PI / 2 - 0.05} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      )}

      renderObservationSidebar={(finishObservation) => (
        <div className="flex flex-col h-full animate-fade-in pr-2">
           <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-inner mb-4">
               <h3 className="text-slate-900 dark:text-slate-900 dark:text-white font-bold text-sm mb-2">Simulate Patient Sample</h3>
               <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">Adjust the glucose concentration to observe the varying extent of Cu₂O precipitation.</p>
               
               <div className="bg-[#111] p-4 rounded-xl border border-black/5 dark:border-white/5 shadow-inner">
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-black/10 dark:border-white/10 pb-2">Urine Glucose Target</p>
                 <DraggableSlider label="" min={0} max={100} value={glucose} onChange={setGlucose} color={result.color} unit="%" formatValue={(v) => v > 80 ? 'HIGH' : v > 50 ? 'MED' : v > 20 ? 'LOW' : 'NONE'} />
               </div>
           </div>

           <div className="bg-black/60 p-5 rounded-xl border backdrop-blur-md shadow-lg" style={{ borderColor: result.color }}>
               <p className="text-[10px] uppercase font-bold tracking-widest mb-1 shadow-sm" style={{ color: result.color }}>Clinical Diagnosis</p>
               <p className="font-black text-2xl text-slate-900 dark:text-slate-900 dark:text-white mb-1 select-none">{result.text}</p>
               <p className="text-sm font-medium text-slate-700 dark:text-slate-700 dark:text-slate-300">{result.sub}</p>
           </div>

           <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                <button 
                    onClick={finishObservation} 
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg">
                    Analyze Reaction
                </button>
           </div>
        </div>
      )}

      renderAnalysisSidebar={() => (
        <div className="flex flex-col h-full space-y-4 animate-fade-in overflow-y-auto pr-2">
            <div className="bg-[#1e293b] rounded-xl p-5 border border-black/10 dark:border-white/10">
                <h3 className="text-sm font-black text-slate-900 dark:text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-black/10 dark:border-white/10 pb-2">Biochemical Mechanism</h3>
                
                <div className="space-y-4">
                    <div>
                        <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><span className="text-sm">🧪</span> Copper Reduction</p>
                        <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed">Benedict's reagent contains complexed Copper(II) ions (Cu²⁺) which are blue in color. Under heat, the free aldehyde or ketone group in a reducing sugar reduces Cu²⁺ to Cu⁺.</p>
                    </div>

                    <div>
                        <p className="text-[10px] text-orange-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><span className="text-sm">🔬</span> Precipitation</p>
                        <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed mb-2">The resulting Copper(I) forms insoluble Copper(I) Oxide (Cu₂O), which precipitates out as a brick-red solid.</p>
                        <div className="bg-black/40 p-3 rounded border border-black/5 dark:border-white/5 overflow-x-auto text-center">
                            <p className="text-slate-900 dark:text-slate-900 dark:text-white font-mono text-[10px] whitespace-nowrap">
                                <span className="text-blue-400">2Cu²⁺</span> + R-CHO ⟶ <span className="text-red-400">Cu₂O↓</span> + R-COOH
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><span className="text-sm">⚕️</span> Clinical Application</p>
                        <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Glucosuria:</strong> The presence of significant amounts of glucose in urine indicates that the renal threshold for glucose has been exceeded, a classic diagnostic marker for Diabetes Mellitus.</p>
                    </div>
                </div>
            </div>

            <div className="mt-auto bg-slate-900 rounded-xl p-4 border border-slate-700">
                <p className="text-[10px] text-slate-600 dark:text-slate-400 italic text-center text-justify">Note: Sucrose is not a reducing sugar and will yield a negative Benedict's test unless hydrolyzed first.</p>
            </div>
        </div>
      )}
    />
  );
};

export default BenedictsTestLab;
