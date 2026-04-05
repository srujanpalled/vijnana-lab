import React, { useRef, useMemo, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Html, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

/* ────────────────────────────────────────────────────────────────────────────
   CONSTANTS & TYPES
   ──────────────────────────────────────────────────────────────────────────── */
interface Props { hex: string; }

const STAGES = [
  {
    name: 'Interphase', color: '#6366f1', icon: '🔬',
    description: 'The cell prepares for division. DNA replicates in the S-phase. The cell grows and synthesises proteins. The nucleus is intact and clearly visible.',
    instruction: 'Observe the intact nuclear envelope. Chromatin (uncondensed DNA) fills the nucleus.'
  },
  {
    name: 'Prophase', color: '#f59e0b', icon: '🧬',
    description: 'Chromatin condenses into visible X-shaped chromosomes. The nuclear envelope begins to dissolve. Centrioles migrate to opposite poles and form spindle fibres.',
    instruction: 'Watch the nuclear membrane disintegrate and chromosomes condense from loose chromatin.'
  },
  {
    name: 'Metaphase', color: '#10b981', icon: '📍',
    description: 'All chromosomes align at the cell\'s equatorial plate (metaphase plate). Spindle fibres attach to each chromosome\'s centromere from both poles.',
    instruction: 'Notice the perfect alignment of chromosomes along the equator, held by spindle fibres.'
  },
  {
    name: 'Anaphase', color: '#ef4444', icon: '⬆️',
    description: 'Centromeres split. Sister chromatids are pulled to opposite poles by shortening spindle fibres. The cell begins to elongate.',
    instruction: 'See the chromatids being dragged apart — the cell visibly elongates.'
  },
  {
    name: 'Telophase & Cytokinesis', color: '#8b5cf6', icon: '🎉',
    description: 'Two new nuclear envelopes form around separated chromosomes. Chromosomes decondense back into chromatin. The cleavage furrow pinches the cell into two identical diploid daughter cells.',
    instruction: 'Cleavage furrow forms! Two identical diploid (2n) daughter cells emerge.'
  }
];

const PREP_STEPS = [
  { id: 'harvest', name: '1. Harvest Root Tip', desc: 'Snippet 2–3 mm of the growing onion root tip (apical meristem).', action: 'Cut Root' },
  { id: 'stain', name: '2. Soften & Stain', desc: 'Apply HCl to soften cell walls, then Acetocarmine to stain chromosomes.', action: 'Apply Stain' },
  { id: 'squash', name: '3. Squashing', desc: 'Apply a coverslip and press vertically to create a single-cell monolayer.', action: 'Squash' },
  { id: 'mount', name: '4. Mount Slide', desc: 'Place the prepared slide on the microscope stage for observation.', action: 'Mount & View' }
];

/* ────────────────────────────────────────────────────────────────────────────
   HELPER: seeded-random positions (stable across renders)
   ──────────────────────────────────────────────────────────────────────────── */
function seededPositions(count: number, radius: number, seed: number) {
  const out: [number, number, number][] = [];
  let s = seed;
  const next = () => { s = (s * 16807 + 0) % 2147483647; return (s / 2147483647) * 2 - 1; };
  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.abs(next()));
    const theta = Math.acos(next());
    const phi = next() * Math.PI;
    out.push([r * Math.sin(theta) * Math.cos(phi), r * Math.sin(theta) * Math.sin(phi), r * Math.cos(theta)]);
  }
  return out;
}

/* ────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENTS: Organelles & particles
   ──────────────────────────────────────────────────────────────────────────── */

/** Mitochondrion — elongated capsule with inner folds */
const Mitochondrion = ({ position, color = '#e85d75' }: { position: [number, number, number]; color?: string }) => {
  const ref = useRef<THREE.Group>(null);
  const speed = useMemo(() => 0.3 + Math.random() * 0.6, []);
  const axis = useMemo(() => new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(), []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotateOnAxis(axis, 0.005 * speed);
    const t = clock.elapsedTime * speed;
    ref.current.position.x = position[0] + Math.sin(t * 1.3) * 0.08;
    ref.current.position.y = position[1] + Math.cos(t * 0.9) * 0.06;
    ref.current.position.z = position[2] + Math.sin(t * 1.1 + 1) * 0.07;
  });

  return (
    <group ref={ref} position={position} scale={0.18}>
      <mesh>
        <capsuleGeometry args={[0.3, 0.8, 8, 16]} />
        <meshStandardMaterial color={color} roughness={0.5} transparent opacity={0.85} />
      </mesh>
      {/* Inner cristae folds */}
      {[0.15, -0.05, -0.25].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.22, 0.03, 6, 12, Math.PI]} />
          <meshStandardMaterial color="#c44569" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
};

/** Ribosome — tiny dotted sphere */
const Ribosome = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  const speed = useMemo(() => 0.5 + Math.random() * 1.0, []);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * speed;
    ref.current.position.x = position[0] + Math.sin(t * 2.1) * 0.05;
    ref.current.position.y = position[1] + Math.cos(t * 1.7) * 0.04;
    ref.current.position.z = position[2] + Math.sin(t * 1.3 + 2) * 0.05;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshStandardMaterial color="#c4b5fd" roughness={0.3} />
    </mesh>
  );
};

/** Vesicle — small transparent bubble */
const Vesicle = ({ position, radius = 0.1 }: { position: [number, number, number]; radius?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  const speed = useMemo(() => 0.2 + Math.random() * 0.4, []);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * speed;
    ref.current.position.x = position[0] + Math.sin(t * 0.8) * 0.06;
    ref.current.position.y = position[1] + Math.cos(t * 0.6) * 0.06;
    ref.current.position.z = position[2] + Math.sin(t * 1.0 + 3) * 0.06;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[radius, 16, 16]} />
      <meshPhysicalMaterial transmission={0.9} roughness={0.1} color="#a5f3fc" ior={1.1} transparent opacity={0.35} depthWrite={false} />
    </mesh>
  );
};

/** Endoplasmic Reticulum fragment — a wavy ribbon */
const ERFragment = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = Math.sin(clock.elapsedTime * 0.4) * 0.2;
  });
  return (
    <mesh ref={ref} position={position} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
      <planeGeometry args={[0.5, 0.12, 8, 1]} />
      <meshStandardMaterial color="#fbbf24" transparent opacity={0.25} side={THREE.DoubleSide} roughness={0.6} />
    </mesh>
  );
};

/** Cytoplasm agents layer — fills the cell with organelles */
const CytoplasmAgents = ({ radius = 1.6, offsetY = 0 }: { radius?: number; offsetY?: number }) => {
  const mitoPositions = useMemo(() => seededPositions(6, radius * 0.75, 42), [radius]);
  const riboPositions = useMemo(() => seededPositions(30, radius * 0.85, 99), [radius]);
  const vesiclePositions = useMemo(() => seededPositions(8, radius * 0.7, 17), [radius]);
  const erPositions = useMemo(() => seededPositions(4, radius * 0.6, 55), [radius]);

  return (
    <group position={[0, offsetY, 0]}>
      {mitoPositions.map((p, i) => <Mitochondrion key={`m${i}`} position={p} />)}
      {riboPositions.map((p, i) => <Ribosome key={`r${i}`} position={p} />)}
      {vesiclePositions.map((p, i) => <Vesicle key={`v${i}`} position={p} />)}
      {erPositions.map((p, i) => <ERFragment key={`e${i}`} position={p} />)}
    </group>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   CHROMOSOME COMPONENTS (enhanced with pulsation)
   ──────────────────────────────────────────────────────────────────────────── */
const ChromosomeX = ({ position, color, size = 1, rotation = [0, 0, 0] }: any) => {
  const ref = useRef<THREE.Group>(null);
  const speed = useMemo(() => 0.8 + Math.random() * 0.5, []);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const s = size * (1 + Math.sin(clock.elapsedTime * speed * 2) * 0.04);
    ref.current.scale.setScalar(s);
  });
  return (
    <group ref={ref} position={position} rotation={rotation} scale={size}>
      <mesh rotation={[0, 0, 0.3]}><capsuleGeometry args={[0.08, 1.0, 8, 16]} /><meshStandardMaterial color={color} roughness={0.4} /></mesh>
      <mesh rotation={[0, 0, -0.3]}><capsuleGeometry args={[0.08, 1.0, 8, 16]} /><meshStandardMaterial color={color} roughness={0.4} /></mesh>
      {/* Centromere */}
      <mesh><sphereGeometry args={[0.13, 12, 12]} /><meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.3} /></mesh>
    </group>
  );
};

const ChromatidI = ({ position, color, size = 1, rotation = [0, 0, 0] }: any) => {
  const ref = useRef<THREE.Group>(null);
  const speed = useMemo(() => 0.6 + Math.random() * 0.6, []);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const s = size * (1 + Math.sin(clock.elapsedTime * speed * 2) * 0.03);
    ref.current.scale.setScalar(s);
  });
  return (
    <group ref={ref} position={position} rotation={rotation} scale={size}>
      <mesh><capsuleGeometry args={[0.08, 1.0, 8, 16]} /><meshStandardMaterial color={color} roughness={0.4} /></mesh>
      <mesh><sphereGeometry args={[0.12, 10, 10]} /><meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.3} /></mesh>
    </group>
  );
};

/** Chromatin cloud inside nucleus */
const Chromatin = () => {
  const groupRef = useRef<THREE.Group>(null);
  const positions = useMemo(() => seededPositions(60, 1.0, 123), []);
  useFrame(({ clock }) => {
    if (groupRef.current) groupRef.current.rotation.y = clock.elapsedTime * 0.15;
  });
  return (
    <group ref={groupRef}>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.04 + (i % 3) * 0.01, 6, 6]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#818cf8' : '#a78bfa'} emissive={i % 2 === 0 ? '#818cf8' : '#a78bfa'} emissiveIntensity={0.15} />
        </mesh>
      ))}
    </group>
  );
};

/** Centriole pair */
const Centriole = ({ position }: { position: [number, number, number] }) => (
  <group position={position}>
    <mesh rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.08, 0.08, 0.35, 9]} />
      <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.4} />
    </mesh>
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0.12, 0, 0]}>
      <cylinderGeometry args={[0.06, 0.06, 0.25, 9]} />
      <meshStandardMaterial color="#fcd34d" emissive="#f59e0b" emissiveIntensity={0.2} />
    </mesh>
    {/* Aster fibres radiating out */}
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      return (
        <mesh key={i} position={[Math.cos(angle) * 0.3, Math.sin(angle) * 0.3, 0]} rotation={[0, 0, angle + Math.PI / 2]}>
          <cylinderGeometry args={[0.005, 0.005, 0.5]} />
          <meshBasicMaterial color="#fbbf24" transparent opacity={0.25} />
        </mesh>
      );
    })}
  </group>
);

/** Spindle fibres between two poles */
const SpindleFibres = ({ count = 8, topY = 1.8, bottomY = -1.8, color = '#10b981' }: any) => {
  const fibres = useMemo(() => {
    const out: [number, number][] = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      out.push([Math.cos(angle) * 0.35, Math.sin(angle) * 0.35]);
    }
    return out;
  }, [count]);

  return (
    <group>
      {fibres.map(([x, z], i) => (
        <mesh key={i} position={[x, (topY + bottomY) / 2, z]}>
          <cylinderGeometry args={[0.008, 0.008, Math.abs(topY - bottomY), 4]} />
          <meshBasicMaterial color={color} transparent opacity={0.2} />
        </mesh>
      ))}
    </group>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   CELL MEMBRANE — organic wobbly sphere
   ──────────────────────────────────────────────────────────────────────────── */
const CellMembrane = ({ radius = 2, scaleY = 1, color = '#0f172a', distort = 0.35, speed = 2 }: any) => (
  <mesh scale={[1, scaleY, 1]}>
    <sphereGeometry args={[radius, 64, 64]} />
    <MeshDistortMaterial
      color={color}
      transparent
      opacity={0.55}
      roughness={0.15}
      distort={distort}
      speed={speed}
      depthWrite={false}
    />
  </mesh>
);

const NucleusEnvelope = ({ radius = 1.2, color = '#4f46e5', opacity = 0.35, distort = 0.2 }: any) => (
  <mesh>
    <sphereGeometry args={[radius, 48, 48]} />
    <MeshDistortMaterial
      color={color}
      transparent
      opacity={opacity}
      roughness={0.2}
      distort={distort}
      speed={1.5}
      depthWrite={false}
    />
  </mesh>
);

import { LabProtocolEngine } from './shared/LabProtocolEngine';
import { CompoundMicroscope, GlassSlide, Coverslip, Dropper, MicroscopeHUD } from './shared/props/MicroscopySet';

/* ────────────────────────────────────────────────────────────────────────────
   LAB PREPARATION SCENE (Phase 1)
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
            
            {/* Root Tip / Sample */}
            <mesh position={[0, 0.05, 0]} castShadow scale={[1, prepStep >= 2 ? Math.max(0.1, 1 - animProgress) : 1, 1]}>
              <cylinderGeometry args={[0.06, 0.08, 0.3, 16]} />
              <meshStandardMaterial color={prepStep >= 1 ? (animProgress > 0.5 ? '#9f1239' : '#e2e8f0') : '#e2e8f0'} roughness={0.4} /> 
            </mesh>

            {prepStep >= 2 && <Coverslip position={[0, Math.max(0.1, 0.5 - animProgress*0.4), 0]} />}
            
            {prepStep === 1 && animProgress < 0.8 && (
                <Dropper position={[0, 1, 0]} liquidColor="#9f1239" animProgress={animProgress} />
            )}
          </group>
      )}

      {/* Onion for Step 0 */}
      {prepStep === 0 && (
         <group position={[1.8, 0.35, 0.5]}>
            <mesh castShadow>
               <sphereGeometry args={[0.6, 32, 32]} />
               <meshStandardMaterial color="#fef3c7" roughness={0.6} metalness={0.1} />
            </mesh>
            <mesh position={[0, 0.6, 0]}><cylinderGeometry args={[0.05, 0.15, 0.2, 16]} /><meshStandardMaterial color="#a3e635" roughness={0.7} /></mesh>
            
            {Array.from({length: 12}).map((_, i) => (
               <mesh key={i} position={[Math.cos(i) * 0.15, -0.7, Math.sin(i) * 0.15]} rotation={[Math.random()*0.2, 0, Math.random()*0.2]}>
                   <cylinderGeometry args={[0.02, 0.02, 0.5 + Math.random()*0.3, 8]} />
                   <meshStandardMaterial color="#f8fafc" />
               </mesh>
            ))}
            <mesh position={[0.3, -0.6, 0.2]} rotation={[0,0,0.3]}><cylinderGeometry args={[0.03, 0.03, 0.5, 16]} /><meshStandardMaterial color="#f8fafc" /></mesh>

            <group position={[0.4, -0.5, 0.3]} rotation={[0.4, 0.5, 0]}>
               <group rotation={[0,0, animProgress > 0.2 && animProgress < 0.8 ? -Math.PI/8 : 0]}>
                  <mesh position={[0.3, 0, 0]}><boxGeometry args={[0.8, 0.05, 0.02]} /><meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.2} /></mesh>
                  <mesh position={[-0.3, 0.15, 0]}><torusGeometry args={[0.15, 0.03, 16, 32]} /><meshStandardMaterial color="#0f172a" roughness={0.7} /></mesh>
               </group>
               <group rotation={[0,0, animProgress > 0.2 && animProgress < 0.8 ? Math.PI/8 : 0]}>
                  <mesh position={[0.3, 0, 0.02]}><boxGeometry args={[0.8, 0.05, 0.02]} /><meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.2} /></mesh>
                  <mesh position={[-0.3, -0.15, 0.02]}><torusGeometry args={[0.15, 0.03, 16, 32]} /><meshStandardMaterial color="#0f172a" roughness={0.7} /></mesh>
               </group>
               <mesh position={[0, 0, 0.01]} rotation={[Math.PI/2, 0, 0]}><cylinderGeometry args={[0.03, 0.03, 0.1, 16]} /><meshStandardMaterial color="#334155" metalness={0.8} /></mesh>
            </group>
         </group>
      )}
    </group>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   MAIN 3D SCENE — Mitosis Stages
   ──────────────────────────────────────────────────────────────────────────── */
const MitosisScene = ({ stage }: { stage: number }) => {
  const tRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (tRef.current) tRef.current.position.y = Math.sin(clock.elapsedTime * 1.5) * 0.04;
  });

  return (
    <group ref={tRef}>
      {/* ──── Stage 0: Interphase ──── */}
      {stage === 0 && (
        <group>
          <CellMembrane radius={2} distort={0.3} speed={1.8} color="#0a1628" />
          <NucleusEnvelope radius={1.2} color="#4f46e5" opacity={0.35} distort={0.2} />
          <Chromatin />
          <CytoplasmAgents radius={1.7} />
        </group>
      )}

      {/* ──── Stage 1: Prophase ──── */}
      {stage === 1 && (
        <group>
          <CellMembrane radius={2} distort={0.35} speed={2} color="#1a1000" />
          {/* Dissolving nucleus — higher transparency, more distort */}
          <NucleusEnvelope radius={1.3} color="#f59e0b" opacity={0.12} distort={0.5} />
          {/* Condensed chromosomes */}
          <ChromosomeX position={[-0.5, 0.5, 0.2]} color="#d97706" rotation={[0.2, 0.4, 0.1]} />
          <ChromosomeX position={[0.5, -0.4, -0.2]} color="#059669" rotation={[-0.4, 0.1, 0.5]} />
          <ChromosomeX position={[0, 0.2, -0.5]} color="#d97706" rotation={[0.1, -0.2, 0.8]} />
          <ChromosomeX position={[-0.2, -0.6, 0.4]} color="#059669" rotation={[0.6, 0.1, -0.2]} />
          {/* Centrioles at poles */}
          <Centriole position={[0, 1.6, 0]} />
          <Centriole position={[0, -1.6, 0]} />
          <CytoplasmAgents radius={1.7} />
        </group>
      )}

      {/* ──── Stage 2: Metaphase ──── */}
      {stage === 2 && (
        <group>
          <CellMembrane radius={2} distort={0.25} speed={1.5} color="#001a10" />
          <Centriole position={[0, 1.8, 0]} />
          <Centriole position={[0, -1.8, 0]} />
          <SpindleFibres count={12} topY={1.8} bottomY={-1.8} color="#10b981" />
          {/* Chromosomes on the metaphase plate */}
          <ChromosomeX position={[-0.6, 0, 0.15]} color="#d97706" rotation={[0, 0, -Math.PI / 2]} />
          <ChromosomeX position={[-0.2, 0, -0.15]} color="#059669" rotation={[0, 0, -Math.PI / 2]} />
          <ChromosomeX position={[0.2, 0, 0.15]} color="#d97706" rotation={[0, 0, -Math.PI / 2]} />
          <ChromosomeX position={[0.6, 0, -0.15]} color="#059669" rotation={[0, 0, -Math.PI / 2]} />
          <CytoplasmAgents radius={1.7} />
        </group>
      )}

      {/* ──── Stage 3: Anaphase ──── */}
      {stage === 3 && (
        <group>
          {/* Elongated cell */}
          <CellMembrane radius={1.8} scaleY={1.35} distort={0.3} speed={2.5} color="#1a0000" />
          <Centriole position={[0, 2.2, 0]} />
          <Centriole position={[0, -2.2, 0]} />
          <SpindleFibres count={10} topY={2.2} bottomY={-2.2} color="#ef4444" />
          {/* Top chromatids being pulled */}
          <ChromatidI position={[-0.5, 1.1, 0.1]} color="#d97706" rotation={[0, 0, Math.PI / 2 + 0.2]} />
          <ChromatidI position={[-0.15, 0.9, -0.1]} color="#059669" rotation={[0, 0, Math.PI / 2 + 0.15]} />
          <ChromatidI position={[0.15, 1.1, 0.1]} color="#d97706" rotation={[0, 0, Math.PI / 2 - 0.15]} />
          <ChromatidI position={[0.5, 0.9, -0.1]} color="#059669" rotation={[0, 0, Math.PI / 2 - 0.2]} />
          {/* Bottom chromatids */}
          <ChromatidI position={[-0.5, -1.1, 0.1]} color="#d97706" rotation={[0, 0, Math.PI / 2 - 0.2]} />
          <ChromatidI position={[-0.15, -0.9, -0.1]} color="#059669" rotation={[0, 0, Math.PI / 2 - 0.15]} />
          <ChromatidI position={[0.15, -1.1, 0.1]} color="#d97706" rotation={[0, 0, Math.PI / 2 + 0.15]} />
          <ChromatidI position={[0.5, -0.9, -0.1]} color="#059669" rotation={[0, 0, Math.PI / 2 + 0.2]} />
          <CytoplasmAgents radius={1.5} />
        </group>
      )}

      {/* ──── Stage 4: Telophase & Cytokinesis ──── */}
      {stage === 4 && (
        <group>
          {/* Two daughter cells forming */}
          <group position={[0, 1.3, 0]}>
            <CellMembrane radius={1.4} distort={0.3} speed={2} color="#0f001a" />
            <NucleusEnvelope radius={0.8} color="#8b5cf6" opacity={0.3} distort={0.2} />
            {/* Decondensing chromatids */}
            {seededPositions(12, 0.7, 201).map((p, i) => (
              <ChromatidI key={i} position={p} color={i % 2 === 0 ? '#d97706' : '#059669'} size={0.25} rotation={[Math.random(), Math.random(), 0]} />
            ))}
            <CytoplasmAgents radius={1.1} offsetY={0} />
          </group>
          <group position={[0, -1.3, 0]}>
            <CellMembrane radius={1.4} distort={0.3} speed={2} color="#0f001a" />
            <NucleusEnvelope radius={0.8} color="#8b5cf6" opacity={0.3} distort={0.2} />
            {seededPositions(12, 0.7, 301).map((p, i) => (
              <ChromatidI key={i} position={p} color={i % 2 === 0 ? '#d97706' : '#059669'} size={0.25} rotation={[Math.random(), Math.random(), 0]} />
            ))}
            <CytoplasmAgents radius={1.1} offsetY={0} />
          </group>
          {/* Cleavage furrow label */}
          <Html position={[0, 0, 0]} center zIndexRange={[100, 0]}>
            <div style={{
              fontWeight: 800, fontSize: 11, color: '#c4b5fd',
              background: 'rgba(88, 28, 135, 0.6)', border: '1px solid rgba(139, 92, 246, 0.25)',
              padding: '5px 12px', borderRadius: 12, backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 24px rgba(139, 92, 246, 0.15)', whiteSpace: 'nowrap'
            }}>
              2 Identical Diploid (2n) Daughter Cells
            </div>
          </Html>
        </group>
      )}
    </group>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ──────────────────────────────────────────────────────────────────────────── */
const MitosisLab: React.FC<Props> = ({ hex }) => {
  const [stage, setStage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [zoom, setZoom] = useState(7);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const toggleAutoPlay = useCallback(() => {
    if (autoPlay) {
      if (autoRef.current) clearInterval(autoRef.current);
      autoRef.current = null;
      setAutoPlay(false);
    } else {
      setAutoPlay(true);
      autoRef.current = setInterval(() => {
        setStage(prev => {
          if (prev >= STAGES.length - 1) {
            if (autoRef.current) clearInterval(autoRef.current);
            autoRef.current = null;
            setAutoPlay(false);
            return prev;
          }
          return prev + 1;
        });
      }, 4000);
    }
  }, [autoPlay]);

  return (
    <LabProtocolEngine
      labId="b13"
      labTitle="Interactive Mitosis"
      labSubtitle="Orbit the 3D cell to observe somatic division through a microscope lens."
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
          <Canvas camera={{ position: [0, 0, zoom], fov: 55 }} dpr={[1, 2]}>
            <Environment preset="apartment" />
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 10, 5]} intensity={1.8} color={STAGES[stage].color} />
            <pointLight position={[-5, -10, -5]} intensity={0.4} color="#94a3b8" />
            <pointLight position={[3, -3, 8]} intensity={0.3} color="#e0f2fe" />
            <MitosisScene stage={stage} />
            <OrbitControls enablePan enableZoom minDistance={3} maxDistance={14} target={[0, 0, 0]} />
          </Canvas>
          <MicroscopeHUD />
          {/* Zoom slider */}
          <div style={{ position: 'absolute', bottom: 48, right: 16, zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 9, color: 'rgba(100,200,255,0.4)', letterSpacing: 2, textTransform: 'uppercase' }}>Zoom</span>
            <input type="range" min={3} max={14} step={0.5} value={zoom} onChange={e => setZoom(Number(e.target.value))}
              style={{ writingMode: 'vertical-lr' as any, direction: 'rtl', height: 100, accentColor: STAGES[stage].color, appearance: 'auto', cursor: 'pointer', opacity: 0.6 }}
            />
          </div>
        </>
      )}
      renderObservationSidebar={(finishObservation) => (
        <div className="flex flex-col h-full max-h-full">
           <div className="flex-1 overflow-y-auto pr-2">
               <div style={{
                 padding: 16, borderRadius: 14,
                 background: STAGES[stage].color + '12',
                 border: `1px solid ${STAGES[stage].color}35`,
                 transition: 'all 0.5s ease'
               }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                   <span style={{ fontSize: 18 }}>{STAGES[stage].icon}</span>
                   <p style={{ fontWeight: 800, fontSize: 14, color: STAGES[stage].color, margin: 0 }}>{STAGES[stage].name}</p>
                 </div>
                 <p style={{ color: '#cbd5e1', fontSize: 12, lineHeight: 1.6, margin: 0, marginBottom: 10 }}>{STAGES[stage].description}</p>
                 <div style={{
                   display: 'flex', gap: 8, alignItems: 'flex-start',
                   background: 'rgba(0,0,0,0.25)', padding: '8px 12px', borderRadius: 10
                 }}>
                   <span style={{ fontSize: 14, flexShrink: 0 }}>👁️</span>
                   <p style={{ fontSize: 11, fontWeight: 500, color: '#e2e8f0', margin: 0, lineHeight: 1.5 }}>{STAGES[stage].instruction}</p>
                 </div>
               </div>

               <div style={{ padding: 12, borderRadius: 12, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', marginTop: 16 }}>
                 <p style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, color: '#64748b', margin: 0, marginBottom: 8 }}>Organelle Key</p>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                   {[
                     { label: 'Mitochondria', color: '#e85d75' },
                     { label: 'Ribosomes', color: '#c4b5fd' },
                     { label: 'Vesicles', color: '#a5f3fc' },
                     { label: 'ER Fragments', color: '#fbbf24' },
                     { label: 'Centromere', color: '#fbbf24' },
                     { label: 'Centrioles', color: '#fcd34d' },
                   ].map(item => (
                     <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                       <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                       <span style={{ fontSize: 10, color: '#94a3b8' }}>{item.label}</span>
                     </div>
                   ))}
                 </div>
               </div>

               <div>
                 <p style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, color: '#64748b', margin: 0, marginBottom: 8, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 16 }}>Cell Cycle</p>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                   {STAGES.map((s, i) => (
                     <button key={s.name} onClick={() => setStage(i)} style={{
                       width: '100%', padding: '12px 16px', borderRadius: 12,
                       fontSize: 12, fontWeight: 700, textAlign: 'left', cursor: 'pointer',
                       display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                       transition: 'all 0.3s ease',
                       background: stage === i ? s.color + '28' : '#020617',
                       border: stage === i ? `1px solid ${s.color}` : '1px solid rgba(255,255,255,0.08)',
                       color: stage === i ? '#fff' : '#94a3b8',
                       boxShadow: stage === i ? `0 0 20px ${s.color}18` : 'none',
                     }}>
                       <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                         <span style={{ fontSize: 14 }}>{s.icon}</span>
                         {s.name}
                       </span>
                       {stage === i && (
                         <span style={{ fontSize: 9, background: 'rgba(0,0,0,0.4)', padding: '3px 8px', borderRadius: 6, color: '#fff' }}>Active</span>
                       )}
                     </button>
                   ))}
                 </div>
               </div>
           </div>

           <div className="flex-none pt-4 mt-2 border-t border-black/5 dark:border-white/5 space-y-3">
             <div style={{ display: 'flex', gap: 8 }}>
               <button onClick={() => setStage(Math.max(0, stage - 1))} disabled={stage === 0}
                 style={{
                   flex: 1, padding: '12px 0', borderRadius: 12, background: '#1e293b', border: 'none',
                   color: '#fff', fontSize: 12, fontWeight: 700, cursor: stage === 0 ? 'default' : 'pointer',
                   opacity: stage === 0 ? 0.3 : 1, transition: 'all 0.2s ease'
                 }}>
                 ← Prev
               </button>
               <button onClick={toggleAutoPlay}
                 style={{
                   width: 48, borderRadius: 12, border: `1px solid ${autoPlay ? '#ef4444' : STAGES[stage].color}50`,
                   background: autoPlay ? '#ef444420' : STAGES[stage].color + '15',
                   color: autoPlay ? '#fca5a5' : STAGES[stage].color,
                   fontSize: 16, cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center'
                 }}
                 title={autoPlay ? 'Stop auto-play' : 'Auto-play all stages'}>
                 {autoPlay ? '⏸' : '▶'}
               </button>
               <button onClick={() => setStage(Math.min(STAGES.length - 1, stage + 1))} disabled={stage === STAGES.length - 1}
                 style={{
                   flex: 1, padding: '12px 0', borderRadius: 12, border: 'none',
                   background: STAGES[stage].color, color: '#fff', fontSize: 12, fontWeight: 700,
                   cursor: stage === STAGES.length - 1 ? 'default' : 'pointer',
                   opacity: stage === STAGES.length - 1 ? 0.3 : 1,
                   boxShadow: `0 4px 14px ${STAGES[stage].color}40`,
                   transition: 'all 0.3s ease'
                 }}>
                 Next Stage →
               </button>
             </div>
             
             {stage === STAGES.length - 1 && (
                 <button 
                     onClick={finishObservation} 
                     className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-black text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105 active:scale-95 transition-all">
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
                          <p className="text-[10px] text-purple-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><span className="text-sm">🔬</span> Interphase</p>
                          <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Observation:</strong> The nucleus is intact and filled with an undifferentiated mass of chromatin.</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Inference:</strong> The cell is undergoing DNA replication (S phase) and active metabolism. Chromosomes are not yet condensed.</p>
                      </div>

                      <div>
                          <p className="text-[10px] text-amber-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><span className="text-sm">🧬</span> Prophase</p>
                          <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Observation:</strong> The nuclear envelope dissolves. Distinct X-shaped structures appear.</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Inference:</strong> Chromatin condenses into visible chromosomes to prevent DNA tangling during division. The nucleolus disappears.</p>
                      </div>

                      <div>
                          <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><span className="text-sm">📍</span> Metaphase</p>
                          <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Observation:</strong> Chromosomes align precisely at the cell equator.</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Inference:</strong> Spindle fibers attach to kinetochores at the centromeres, ensuring equal separation of genetic material.</p>
                      </div>

                      <div>
                          <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><span className="text-sm">⬆️</span> Anaphase</p>
                          <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Observation:</strong> Sister chromatids are violently pulled towards opposite poles. Cell elongates.</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Inference:</strong> Centromeres split. The spindle fibers contract, pulling one complete set of the genome to each pole.</p>
                      </div>

                      <div>
                          <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><span className="text-sm">🎉</span> Telophase & Cytokinesis</p>
                          <p className="text-xs text-slate-700 dark:text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Observation:</strong> Two distinct nuclei form. A cleavage furrow (or cell plate in plants) divides the cytoplasm.</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1"><strong className="text-slate-900 dark:text-slate-900 dark:text-white">Inference:</strong> Nuclear envelopes reform around the decondensing DNA. Cytokinesis physically separates the singular cell into two identical diploid (2n) daughter cells.</p>
                      </div>
                  </div>
              </div>

              <div className="mt-auto bg-slate-900 rounded-xl p-4 border border-slate-700">
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 italic">"Mitosis ensures genetic continuity. The daughter cells possess an exact replica of the parent cell's genome."</p>
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
          <span style={{ fontSize: 16 }}>{STAGES[stage].icon}</span>
          <span style={{ color: STAGES[stage].color, fontWeight: 800, fontSize: 12 }}>{STAGES[stage].name}</span>
        </div>
      }
    />
  );
};

export default MitosisLab;
