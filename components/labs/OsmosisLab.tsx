import React, { useRef, useEffect, useState, useCallback } from 'react';
import { RotateCcw, CheckCircle } from 'lucide-react';
import DraggableSlider from './DraggableSlider';

interface OsmosisLabProps { hex: string; }

const STEPS = [
  { id: 0, title: 'Prepare Potato', instruction: 'Scoop a hollow cavity in the potato using a cork borer. Peel the potato surface.', action: 'Prepare Potato 🥔', done: 'Potato cavity ready!' },
  { id: 1, title: 'Fill with Sugar', instruction: 'Fill the cavity with concentrated sugar solution. Mark the initial level with a pin.', action: 'Add Sugar Solution 🍬', done: 'Sugar solution added!' },
  { id: 2, title: 'Place in Water', instruction: 'Place the potato osmometer in a beaker of pure water. The semi-permeable potato membrane separates the solutions.', action: 'Place in Beaker 💧', done: 'Osmometer placed in water!' },
  { id: 3, title: 'Wait & Observe', instruction: 'Watch water molecules move from hypotonic (beaker) through the potato membrane into the hypertonic cavity (sugar solution). The level rises!', action: 'Observe Osmosis ⏱️', done: 'Observing…' },
  { id: 4, title: 'Record Results', instruction: 'The level in the cavity has risen due to endosmosis. Water moved from low concentration (beaker) to high concentration (sugar) via the potato\'s semi-permeable membrane.', action: 'Record the Rise 📊', done: 'Results recorded! ✅' },
];

const OsmosisLab: React.FC<OsmosisLabProps> = ({ hex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [sugarConc, setSugarConc] = useState(70);
  const [waterLevel, setWaterLevel] = useState(0);
  const [particles, setParticles] = useState<{ x: number; y: number; vx: number; vy: number; inside: boolean }[]>([]);
  const particleRef = useRef(particles);

  useEffect(() => {
    particleRef.current = particles;
  }, [particles]);

  // Initialize particles
  useEffect(() => {
    const p = [];
    for (let i = 0; i < 50; i++) {
      p.push({ x: 80 + Math.random() * 160, y: 200 + Math.random() * 120, vx: (Math.random() - 0.5) * 1.5, vy: (Math.random() - 0.5) * 1.5, inside: false });
    }
    setParticles(p);
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    timeRef.current += 0.025;
    const t = timeRef.current;
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, w, h);

    // === BEAKER ===
    const beakerX = 60, beakerY = 150, beakerW = 220, beakerH = 180;
    // Water in beaker
    const waterY = beakerY + 20;
    ctx.fillStyle = step >= 2 ? 'rgba(59, 130, 246, 0.25)' : 'rgba(59, 130, 246, 0.05)';
    ctx.fillRect(beakerX + 4, waterY, beakerW - 8, beakerH - 24);
    // Animated water ripples
    if (step >= 2) {
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.ellipse(beakerX + beakerW / 2, waterY + 10, 30 + i * 20, 5, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(147, 197, 253, ${0.3 - i * 0.08})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
    // Beaker walls
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.7)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(beakerX, beakerY);
    ctx.lineTo(beakerX, beakerY + beakerH);
    ctx.lineTo(beakerX + beakerW, beakerY + beakerH);
    ctx.lineTo(beakerX + beakerW, beakerY);
    ctx.stroke();
    ctx.fillStyle = 'rgba(148, 163, 184, 0.3)';
    ctx.fillRect(beakerX, beakerY, beakerW, 8);

    // === POTATO ===
    const potX = beakerX + beakerW / 2;
    const potY = waterY + 40;
    const potW = 90, potH = 110;
    // Potato body
    ctx.beginPath();
    ctx.ellipse(potX, potY + potH / 2, potW / 2, potH / 2, 0, 0, Math.PI * 2);
    ctx.fillStyle = step >= 0 ? '#92400e' : '#374151';
    ctx.fill();
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Cavity in potato
    const cavityDepth = 55;
    const cavityW = 28;
    const cavityTop = potY - 5;
    ctx.beginPath();
    ctx.ellipse(potX, cavityTop + cavityDepth / 2, cavityW, cavityDepth / 2 + 5, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#7c3aed20';
    ctx.fill();

    // Sugar solution in cavity (rising)
    const rise = waterLevel;
    if (step >= 1) {
      const solTop = cavityTop + cavityDepth - rise;
      ctx.beginPath();
      ctx.ellipse(potX, solTop + rise / 2, cavityW - 3, rise / 2 + 2, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${sugarConc > 50 ? '167, 139, 250' : '96, 165, 250'}, 0.7)`;
      ctx.fill();
      // Level marker
      ctx.beginPath();
      ctx.moveTo(potX - cavityW + 5, solTop - 2);
      ctx.lineTo(potX + cavityW - 5, solTop - 2);
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#fbbf24';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(`Level: +${Math.round(rise)}px`, potX + cavityW + 35, solTop);
    }

    // Water particle arrows (osmosis flow)
    if (step >= 3) {
      for (let i = 0; i < 5; i++) {
        const phase = (t * 1.5 + i * 0.8) % 1;
        const startX = beakerX + 40 + i * 30;
        const startY = waterY + 50 + Math.sin(t + i) * 10;
        const endX = potX + (startX - potX) * (1 - phase) * 0.3;
        const endY = startY + (cavityTop - startY) * phase;
        ctx.beginPath();
        ctx.arc(endX, endY, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${1 - phase})`;
        ctx.fill();
      }
    }

    // Labels
    if (step >= 2) {
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#93c5fd';
      ctx.fillText('Pure Water (Hypotonic)', potX, beakerY + beakerH + 20);
      if (step >= 1) {
        ctx.fillStyle = '#a78bfa';
        ctx.fillText('Sugar Solution (Hypertonic)', potX, cavityTop - 25);
      }
    }

    if (step >= 3) {
      // Arrow showing water movement direction
      ctx.beginPath();
      ctx.moveTo(beakerX + 20, potY + 30);
      ctx.lineTo(potX - 35, potY);
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#60a5fa';
      ctx.font = '10px bold sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('H₂O →', beakerX + 18, potY + 25);
    }

    animRef.current = requestAnimationFrame(animate);
  }, [step, sugarConc, waterLevel]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  // Rising water level effect
  useEffect(() => {
    if (step >= 3) {
      const interval = setInterval(() => {
        setWaterLevel(w => Math.min(w + 0.5, 30 * (sugarConc / 100)));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [step, sugarConc]);

  const handleNext = () => {
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else setCompleted(true);
  };

  const reset = () => { setStep(0); setCompleted(false); setWaterLevel(0); timeRef.current = 0; };

  const current = STEPS[step];

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-slate-950">
      <div className="flex-1 relative flex items-center justify-center p-4">
        <canvas ref={canvasRef} width={360} height={350} className="rounded-2xl border border-white/10 shadow-2xl" style={{ boxShadow: '0 0 40px #3b82f620' }} />
      </div>

      <div className="w-full md:w-80 bg-slate-900 border-l border-white/5 flex flex-col">
        <div className="p-5 border-b border-white/5">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">Step {step + 1} of {STEPS.length}</p>
          <h2 className="text-xl font-bold text-white">{current.title}</h2>
        </div>
        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          {completed ? (
            <div className="text-center py-6">
              <CheckCircle size={40} className="mx-auto mb-3 text-green-400" />
              <h3 className="text-lg font-bold text-white mb-2">Osmosis Demonstrated! 💧</h3>
              <p className="text-gray-400 text-sm mb-4">Water moved from hypotonic (beaker) to hypertonic (sugar cavity) through the potato's semi-permeable membrane. The level rose by {Math.round(waterLevel)}px!</p>
              <button onClick={reset} className="flex items-center gap-2 mx-auto px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20"><RotateCcw size={14} /> Reset</button>
            </div>
          ) : (
            <>
              <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-xl">
                <p className="text-blue-300 text-sm">{current.instruction}</p>
              </div>
              {step >= 1 && (
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <DraggableSlider label="Sugar Concentration" min={20} max={100} value={sugarConc} onChange={setSugarConc} color="#8b5cf6" unit="%" />
                <p className="text-xs text-gray-500 mt-1">Higher concentration → stronger osmotic pressure</p>
                </div>
              )}
              {step >= 3 && (
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Water Rise</p>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div className="h-3 rounded-full bg-blue-400 transition-all" style={{ width: `${(waterLevel / 30) * 100}%` }} />
                  </div>
                  <p className="text-blue-300 text-sm mt-1">+{Math.round(waterLevel)}px in cavity</p>
                </div>
              )}
              <button onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 transition-all active:scale-95">
                {step === STEPS.length - 1 ? '✅ Complete Experiment' : `${current.action} →`}
              </button>
            </>
          )}
          <div className="grid grid-cols-5 gap-1">
            {STEPS.map((s, i) => (
              <div key={i} className="h-1.5 rounded-full" style={{ backgroundColor: i <= step ? '#3b82f6' : 'rgba(255,255,255,0.1)' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OsmosisLab;
