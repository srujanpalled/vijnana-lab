import React from 'react';

// Enhanced Compound Microscope Prop
export const CompoundMicroscope = ({ position, rotation, isMounted }: any) => (
  <group position={position} rotation={rotation}>
    {/* Base */}
    <mesh position={[0, 0.15, 0]} castShadow><boxGeometry args={[1.2, 0.3, 1.6]} /><meshStandardMaterial color="#1e293b" roughness={0.6} metalness={0.5} /></mesh>
    {/* Arm */}
    <mesh position={[0, 1.2, -0.5]} rotation={[0.2, 0, 0]} castShadow><boxGeometry args={[0.4, 2, 0.4]} /><meshStandardMaterial color="#334155" roughness={0.5} metalness={0.6} /></mesh>
    {/* Stage */}
    <mesh position={[0, 1.0, 0.1]} castShadow><boxGeometry args={[1.1, 0.05, 1.1]} /><meshStandardMaterial color="#0f172a" roughness={0.8} /></mesh>
    {/* Stage translation knobs */}
    <mesh position={[0.65, 0.9, 0.1]} rotation={[0, 0, Math.PI/2]} castShadow><cylinderGeometry args={[0.08, 0.08, 0.2, 16]} /><meshStandardMaterial color="#94a3b8" metalness={0.8} /></mesh>
    {/* Eyepiece tube */}
    <mesh position={[0, 2.0, 0.1]} rotation={[-0.3, 0, 0]} castShadow><cylinderGeometry args={[0.15, 0.15, 0.8, 16]} /><meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.8} /></mesh>
    {/* Eyepiece lens */}
    <mesh position={[0, 2.45, 0.25]} rotation={[-0.3, 0, 0]} castShadow><cylinderGeometry args={[0.08, 0.08, 0.2, 16]} /><meshStandardMaterial color="#0f172a" /></mesh>
    {/* Objective mounting ring */}
    <mesh position={[0, 1.5, 0.1]} castShadow><cylinderGeometry args={[0.3, 0.35, 0.2, 16]} /><meshStandardMaterial color="#e2e8f0" metalness={0.3} roughness={0.2} /></mesh>
    {/* Objectives */}
    <mesh position={[0, 1.3, 0.3]} castShadow><cylinderGeometry args={[0.08, 0.1, 0.3, 16]} /><meshStandardMaterial color="#94a3b8" metalness={0.9} /></mesh>
    <mesh position={[-0.2, 1.3, 0]} rotation={[0.2, 0, -0.2]} castShadow><cylinderGeometry args={[0.08, 0.1, 0.2, 16]} /><meshStandardMaterial color="#94a3b8" metalness={0.9} /></mesh>
    
    {/* Slide on microscope stage if isMounted */}
    {isMounted && (
        <mesh position={[0, 1.03, 0.1]} castShadow>
          <boxGeometry args={[0.8, 0.02, 0.3]} />
          <meshPhysicalMaterial transmission={0.9} roughness={0.1} color="#e2e8f0" transparent opacity={0.6} />
        </mesh>
    )}
  </group>
);

// Glassmorphic Blank Slide
export const GlassSlide = ({ position, rotation }: any) => (
  <mesh position={position} rotation={rotation} castShadow receiveShadow>
    <boxGeometry args={[2.5, 0.04, 0.8]} />
    <meshPhysicalMaterial transmission={0.98} opacity={1} ior={1.5} roughness={0.02} thickness={0.1} color="#f8fafc" />
  </mesh>
);

// Glass Coverslip
export const Coverslip = ({ position }: any) => (
  <mesh position={position}>
     <boxGeometry args={[0.6, 0.01, 0.6]} />
     <meshPhysicalMaterial transmission={0.95} roughness={0.01} ior={1.5} color="#e2e8f0" transparent opacity={0.6} clearcoat={1} />
  </mesh>
);

// Dropper Prop with dynamic liquid height and drop
export const Dropper = ({ position, liquidColor, animProgress }: any) => (
  <group position={position}>
     {/* Glass barrel */}
     <mesh position={[0, 0.5, 0]}><cylinderGeometry args={[0.04, 0.04, 0.8, 16]} /><meshPhysicalMaterial transmission={0.9} roughness={0.1} color="#f1f5f9" transparent opacity={0.7} ior={1.5}/></mesh>
     {/* Glass tip */}
     <mesh position={[0, 0.1, 0]}><cylinderGeometry args={[0.01, 0.04, 0.2, 16]} /><meshPhysicalMaterial transmission={0.9} roughness={0.1} color="#f1f5f9" transparent opacity={0.7} ior={1.5}/></mesh>
     {/* Rubber bulb */}
     <mesh position={[0, 1.05, 0]}><capsuleGeometry args={[0.15, 0.2, 16, 16]} /><meshStandardMaterial color="#ef4444" roughness={0.6} /></mesh>
     
     {/* Internal liquid */}
     <mesh position={[0, 0.4, 0]}><cylinderGeometry args={[0.03, 0.03, 0.5, 16]} /><meshStandardMaterial color={liquidColor} transparent opacity={0.6} /></mesh>

     {/* Drop falling */}
     {animProgress > 0.2 && animProgress < 0.6 && (
         <mesh position={[0, -0.2 - (animProgress * 1.5), 0]} scale={[1, 1.2, 1]}>
           <sphereGeometry args={[0.05, 16, 16]} />
           <meshPhysicalMaterial color={liquidColor} transmission={0.8} roughness={0.1} ior={1.33} />
         </mesh>
     )}
  </group>
);

// CSS Microscope HUD Overlay
export const MicroscopeHUD = () => (
  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10 }}>
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.92) 80%)' }} />
    <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'rgba(100, 200, 255, 0.1)' }} />
    <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'rgba(100, 200, 255, 0.1)' }} />
    {[
      { top: '48%', left: '20%' }, { top: '48%', right: '20%' },
      { top: '20%', left: '48%' }, { bottom: '20%', left: '48%' }
    ].map((style, i) => (
      <div key={i} style={{ position: 'absolute', ...style, width: i < 2 ? 12 : 1, height: i < 2 ? 1 : 12, background: 'rgba(100, 200, 255, 0.2)', borderRadius: 1 }} />
    ))}
    <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', fontSize: 9, fontFamily: 'monospace', color: 'rgba(100,200,255,0.3)', letterSpacing: 3, textTransform: 'uppercase' }}>
      40× Objective · Light Microscope
    </div>
  </div>
);
