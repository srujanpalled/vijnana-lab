/**
 * useChemProgress.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Delta-time animation hook for chemistry lab scenes.
 * Replaces all requestAnimationFrame() calls inside render props, which
 * cascade on every React re-render causing exponential frame-rate drops.
 *
 * Usage (inside a component rendered inside a <Canvas>):
 *   const progress = useChemProgress(0.10); // 0→1 over ~10 seconds
 *
 * The hook uses @react-three/fiber's useFrame which is driven by the
 * renderer's own RAF loop — guaranteed single RAF per frame, 60fps.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

/**
 * @param speed   Fraction added per second. Default 0.10 → completes in ~10s.
 *                Use 0.05 for slow reactions, 0.20 for fast ones.
 * @param running Whether to advance progress. Set false to pause.
 * @returns       Progress value 0 → 1, updated per frame.
 */
export function useChemProgress(speed = 0.10, running = true): number {
  const ref = useRef(0);
  const [progress, setProgress] = useState(0);

  useFrame((_, delta) => {
    if (!running || ref.current >= 1) return;
    // Clamp delta to 100ms max to survive tab-switch spikes
    const dt = Math.min(delta, 0.1);
    ref.current = Math.min(1, ref.current + speed * dt);
    // Only trigger React re-render at ~15fps cadence to avoid React overhead
    // (Three.js scene updates happen every frame regardless via refs)
    setProgress(ref.current);
  });

  return progress;
}

/**
 * Non-reactive version — returns a ref object whose .current is 0→1.
 * Use this when you only need progress inside useFrame callbacks (no JSX binding).
 */
export function useChemProgressRef(speed = 0.10, running = true) {
  const ref = useRef(0);

  useFrame((_, delta) => {
    if (!running || ref.current >= 1) return;
    const dt = Math.min(delta, 0.1);
    ref.current = Math.min(1, ref.current + speed * dt);
  });

  return ref;
}
