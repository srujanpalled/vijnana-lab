import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// --- SHARED MATERIALS ---
export const glassMat = (color = "#e0f2fe", opacity = 0.3) => (
  <meshPhysicalMaterial 
    transmission={0.95} 
    thickness={0.05} 
    roughness={0.05} 
    ior={1.45} 
    color={color} 
    transparent 
    opacity={opacity} 
    side={THREE.DoubleSide} 
    metalness={0.1}
  />
);

export const liquidMat = (color: string, opacity = 0.8) => (
  <meshPhysicalMaterial 
    transmission={0.5} 
    thickness={0.5} 
    roughness={0.1} 
    color={color} 
    transparent 
    opacity={opacity}
    metalness={0.1}
  />
);

// --- APPARATUS COMPONENTS ---

export const Beaker: React.FC<{ 
  position?: [number, number, number], 
  scale?: number, 
  fluidLevel?: number, 
  fluidColor?: string 
}> = ({ position = [0, 0, 0], scale = 1, fluidLevel = 0.5, fluidColor = "#34d399" }) => {
  return (
    <group position={position} scale={scale}>
      {/* Glass Body */}
      <mesh>
        <cylinderGeometry args={[0.8, 0.8, 2, 32, 1, true]} />
        {glassMat()}
      </mesh>
      {/* Bottom */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.05, 32]} />
        {glassMat("#ffffff", 0.5)}
      </mesh>
      {/* Fluid */}
      {fluidLevel > 0 && (
        <mesh position={[0, -1 + fluidLevel, 0]}>
          <cylinderGeometry args={[0.78, 0.78, fluidLevel * 2, 32]} />
          {liquidMat(fluidColor)}
        </mesh>
      )}
      {/* Spout */}
      <mesh position={[0, 0.95, -0.75]} rotation={[-0.3, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.05, 0.2, 16]} />
        {glassMat()}
      </mesh>
    </group>
  );
};

export const ConicalFlask: React.FC<{ 
  position?: [number, number, number], 
  scale?: number, 
  fluidLevel?: number, 
  fluidColor?: string 
}> = ({ position = [0, 0, 0], scale = 1, fluidLevel = 0.4, fluidColor = "#60a5fa" }) => {
  return (
    <group position={position} scale={scale}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 1.2, 1.8, 32, 1, true]} />
        {glassMat()}
      </mesh>
      {/* Neck */}
      <mesh position={[0, 1.3, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.8, 16, 1, true]} />
        {glassMat()}
      </mesh>
      {/* Rim */}
      <mesh position={[0, 1.7, 0]}>
        <torusGeometry args={[0.3, 0.03, 16, 32]} />
        {glassMat()}
      </mesh>
      {/* Bottom */}
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.05, 32]} />
        {glassMat("#ffffff", 0.5)}
      </mesh>
      {/* Fluid */}
      {fluidLevel > 0 && (
        <mesh position={[0, -0.9 + fluidLevel * 0.9, 0]}>
          <cylinderGeometry args={[0.3 + (1.2-0.3)*(1-fluidLevel), 1.2, fluidLevel * 1.8, 32]} />
          {liquidMat(fluidColor)}
        </mesh>
      )}
    </group>
  );
};

export const BunsenBurner: React.FC<{ 
  position?: [number, number, number], 
  active?: boolean 
}> = ({ position = [0, 0, 0], active = true }) => {
  const flameRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (flameRef.current && active) {
      flameRef.current.scale.y = 1 + Math.sin(clock.elapsedTime * 20) * 0.1;
      flameRef.current.scale.x = 1 + Math.sin(clock.elapsedTime * 25) * 0.05;
    }
  });

  return (
    <group position={position}>
      {/* Base */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.6, 0.8, 0.2, 32]} />
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Barrel */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1.2, 16]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Air hole */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.2, 16]} />
        <meshStandardMaterial color="#475569" />
      </mesh>
      
      {/* Flame */}
      {active && (
        <group position={[0, 1.4, 0]}>
          <mesh ref={flameRef}>
            <coneGeometry args={[0.15, 0.6, 16]} />
            <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} />
          </mesh>
          <mesh position={[0, -0.1, 0]} scale={0.6}>
            <coneGeometry args={[0.1, 0.3, 16]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
          </mesh>
          <pointLight color="#38bdf8" intensity={2} distance={3} />
        </group>
      )}
    </group>
  );
};

export const DigitalBalance: React.FC<{ 
  position?: [number, number, number], 
  weight?: number 
}> = ({ position = [0, 0, 0], weight = 0 }) => {
  return (
    <group position={position}>
      {/* Main Body */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[2.5, 0.4, 2.5]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.2} />
      </mesh>
      {/* Weighing Pan */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.1} />
      </mesh>
      {/* Display Screen */}
      <group position={[0, 0.2, 1.26]}>
        <mesh>
          <boxGeometry args={[1.2, 0.3, 0.05]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        <Text
          position={[0, 0, 0.03]}
          fontSize={0.15}
          color="#22d3ee"
        >
          {weight.toFixed(2)} g
        </Text>
      </group>
    </group>
  );
};

export const Spatula: React.FC<{ 
  position?: [number, number, number], 
  rotation?: [number, number, number],
  powderColor?: string,
  hasPowder?: boolean
}> = ({ position = [0, 0, 0], rotation = [0,0,0], powderColor = "#ffffff", hasPowder = false }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Handle */}
      <mesh position={[0, 0, 0.5]}>
        <boxGeometry args={[0.1, 0.02, 1.5]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Flat End */}
      <mesh position={[0, 0, -0.4]}>
        <boxGeometry args={[0.3, 0.01, 0.4]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Powder on Spatula */}
      {hasPowder && (
        <mesh position={[0, 0.02, -0.4]}>
          <sphereGeometry args={[0.12, 16, 8, 0, Math.PI*2, 0, Math.PI/2]} />
          <meshStandardMaterial color={powderColor} roughness={1} />
        </mesh>
      )}
    </group>
  );
};

export const RoundBottomFlask: React.FC<{
  position?: [number, number, number],
  scale?: number,
  fluidLevel?: number,
  fluidColor?: string
}> = ({ position = [0, 0, 0], scale = 1, fluidLevel = 0.4, fluidColor = "#f59e0b" }) => {
  return (
    <group position={position} scale={scale}>
      {/* Ball */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        {glassMat()}
      </mesh>
      {/* Neck */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 1, 16, 1, true]} />
        {glassMat()}
      </mesh>
      {/* Rim */}
      <mesh position={[0, 1.7, 0]}>
        <torusGeometry args={[0.25, 0.03, 16, 32]} />
        {glassMat()}
      </mesh>
      {/* Fluid */}
      {fluidLevel > 0 && (
        <mesh position={[0, -1 + fluidLevel, 0]}>
          <sphereGeometry args={[0.98, 32, 16, 0, Math.PI*2, Math.PI/2, Math.PI/2]} />
          {liquidMat(fluidColor)}
        </mesh>
      )}
    </group>
  );
};

// --- NEW MANUAL INTERACTION COMPONENTS ---

export const ReagentBottle: React.FC<{
  position?: [number, number, number],
  color?: string,
  label?: string,
  onPointerDown?: (e: any) => void
}> = ({ position = [0,0,0], color = "#3b82f6", label = "HCl", onPointerDown }) => {
  return (
    <group position={position} onPointerDown={onPointerDown}>
      {/* Bottle Body */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.8, 16]} />
        {glassMat()}
      </mesh>
      {/* Shoulder */}
      <mesh position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.3, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        {glassMat()}
      </mesh>
      {/* Neck */}
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} />
        {glassMat()}
      </mesh>
      {/* Liquid */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.5, 16]} />
        {liquidMat(color, 0.4)}
      </mesh>
      {/* Label */}
      <group position={[0, 0.4, 0.31]}>
        <mesh>
          <planeGeometry args={[0.4, 0.3]} />
          <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide} />
        </mesh>
        <Text position={[0, 0, 0.01]} fontSize={0.06} color="#0f172a" anchorX="center" anchorY="middle">
          {label}
        </Text>
      </group>
    </group>
  );
};

export const TestTubeRack: React.FC<{
  position?: [number, number, number]
}> = ({ position = [0,0,0] }) => {
  return (
    <group position={position}>
      {/* Bottom Bar */}
      <mesh position={[0, -0.6, 0]}>
        <boxGeometry args={[2, 0.1, 0.5]} />
        <meshStandardMaterial color="#4b2c20" />
      </mesh>
      {/* Top Bar with holes */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[2, 0.1, 0.5]} />
        <meshStandardMaterial color="#4b2c20" />
      </mesh>
      {/* Pillars */}
      <mesh position={[-0.9, -0.1, 0]}><cylinderGeometry args={[0.04, 0.04, 1, 8]} /><meshStandardMaterial color="#4b2c20" /></mesh>
      <mesh position={[0.9, -0.1, 0]}><cylinderGeometry args={[0.04, 0.04, 1, 8]} /><meshStandardMaterial color="#4b2c20" /></mesh>
    </group>
  );
};

export const PhysicalDropper: React.FC<{
  position?: [number, number, number],
  rotation?: [number, number, number],
  fluidColor?: string,
  isDripping?: boolean
}> = ({ position = [0,0,0], rotation = [0,0,0], fluidColor = "#ef4444", isDripping = false }) => {
  const dripRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (dripRef.current && isDripping) {
      dripRef.current.children.forEach((d, i) => {
        d.position.y -= 0.05;
        if (d.position.y < -1) d.position.y = 0;
      });
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Rubber Bulb */}
      <mesh position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#ef4444" roughness={0.8} />
      </mesh>
      {/* Glass Stem */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.05, 0.02, 1, 16, 1, true]} />
        {glassMat()}
      </mesh>
      {/* Fluid inside stem */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.04, 0.015, 0.6, 16]} />
        <meshBasicMaterial color={fluidColor} transparent opacity={0.6} />
      </mesh>
      
      {/* Drip Effect */}
      <group ref={dripRef}>
        {isDripping && [1,2,3].map(i => (
           <mesh key={i} position={[0, -i * 0.3, 0]}>
             <sphereGeometry args={[0.02]} />
             <meshBasicMaterial color={fluidColor} />
           </mesh>
        ))}
      </group>
    </group>
  );
};
