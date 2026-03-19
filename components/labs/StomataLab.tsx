import React, { useRef, useEffect, useState, useCallback } from 'react';
import { RotateCcw, CheckCircle } from 'lucide-react';
import DraggableSlider from './DraggableSlider';

interface StomataLabProps { hex: string; }

const STEPS = [
  { title: 'Peel Epidermis', instruction: 'Hold the leaf firmly and peel a thin transparent strip of epidermis from the lower surface using fine forceps. Be gentle!', action: 'Peel Epidermis 🌿' },
  { title: 'Stain with Safranin', instruction: 'Place the peel on a glass slide and add 2 drops of Safranin stain. Wait 2 minutes. This stains nuclei of guard cells red.', action: 'Add Safranin 🔴' },
  { title: 'Mount in Glycerin', instruction: 'Wash off excess stain with water. Add a drop of glycerin and cover with a coverslip. Press gently.', action: 'Mount Slide 🔬' },
  { title: 'Focus Microscope', instruction: 'Place slide under the microscope. Start with low power (10x) then switch to 40x to see stomata clearly.', action: 'Focus (40×) 🔭' },
  { title: 'Count & Record', instruction: 'Count the stomata visible in one field of view. Calculate the Stomatal Index. Switch between upper and lower surfaces.', action: 'Count Stomata 📊' },
];

const StomataLab: React.FC<StomataLabProps> = ({ hex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [light, setLight] = useState(60);
  const [humidity, setHumidity] = useState(50);
  const [showUpper, setShowUpper] = useState(false);
  const [microscope, setMicroscope] = useState(false);

  // Stomatal open degree (0-1)
  const openness = Math.min(1, (light / 100) * 0.6 + (1 - humidity / 100) * 0.4);
  const stomataCnt = showUpper ? Math.floor(8 + openness * 10) : Math.floor(18 + openness * 15);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    timeRef.current += 0.02;
    const t = timeRef.current;
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    if (!microscope) {
      // === LEAF VIEW ===
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      // Leaf shape
      ctx.beginPath();
      ctx.ellipse(w / 2, h / 2, 120, 80, -0.2, 0, Math.PI * 2);
      const leafGrad = ctx.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, 120);
      leafGrad.addColorStop(0, step >= 1 ? '#4ade80' : '#16a34a');
      leafGrad.addColorStop(1, '#14532d');
      ctx.fillStyle = leafGrad;
      ctx.fill();

      // Mid rib
      ctx.beginPath();
      ctx.moveTo(w / 2 - 110, h / 2);
      ctx.bezierCurveTo(w / 2 - 50, h / 2 - 10, w / 2 + 50, h / 2 + 10, w / 2 + 110, h / 2);
      ctx.strokeStyle = '#15803d';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Veins
      for (let i = -2; i <= 2; i++) {
        if (i === 0) continue;
        ctx.beginPath();
        ctx.moveTo(w / 2, h / 2);
        ctx.quadraticCurveTo(w / 2 + i * 30, h / 2 + i * 20, w / 2 + i * 80, h / 2 + i * 15);
        ctx.strokeStyle = 'rgba(21,128,61,0.7)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Peel highlight
      if (step >= 0) {
        ctx.beginPath();
        ctx.ellipse(w / 2 - 10, h / 2 + 30, 40, 20, 0.3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(250,250,250,0.3)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(250,250,250,0.8)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 3]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Stain overlay
      if (step >= 1) {
        ctx.beginPath();
        ctx.ellipse(w / 2 - 10, h / 2 + 30, 38, 18, 0.3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(239,68,68,0.25)';
        ctx.fill();
      }
      ctx.fillStyle = '#4ade80';
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(showUpper ? 'Upper Surface (Fewer Stomata)' : 'Lower Surface (More Stomata)', w / 2, h - 20);
    } else {
      // === MICROSCOPE VIEW ===
      ctx.fillStyle = '#111827';
      ctx.fillRect(0, 0, w, h);
      // Circular view
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, 130, 0, Math.PI * 2);
      ctx.fillStyle = step >= 1 ? '#fef2f2' : '#f0fdf4';
      ctx.fill();

      // Cell pattern background
      for (let cx = w / 2 - 110; cx < w / 2 + 110; cx += 28) {
        for (let cy = h / 2 - 110; cy < h / 2 + 110; cy += 22) {
          const dist = Math.sqrt((cx - w / 2) ** 2 + (cy - h / 2) ** 2);
          if (dist < 125) {
            ctx.beginPath();
            ctx.ellipse(cx, cy, 12, 9, 0.3, 0, Math.PI * 2);
            ctx.strokeStyle = step >= 1 ? 'rgba(239,68,68,0.4)' : 'rgba(22,163,74,0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Stomata
      const positions = [
        [w/2 - 50, h/2 - 30], [w/2 + 30, h/2 - 50], [w/2, h/2 + 20],
        [w/2 - 20, h/2 + 60], [w/2 + 60, h/2 + 30], [w/2 - 70, h/2 + 20],
        [w/2 + 10, h/2 - 10], [w/2 - 40, h/2 - 70], [w/2 + 70, h/2 - 20]
      ].slice(0, Math.min(9, stomataCnt));

      positions.forEach(([sx, sy]) => {
        const openW = 12 * openness + 2;
        // Guard cells
        ctx.beginPath();
        ctx.ellipse(sx - 6, sy, 10, 14, 0.3, 0, Math.PI * 2);
        ctx.fillStyle = step >= 1 ? '#b91c1c' : '#15803d';
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(sx + 6, sy, 10, 14, -0.3, 0, Math.PI * 2);
        ctx.fillStyle = step >= 1 ? '#b91c1c' : '#15803d';
        ctx.fill();
        // Stomatal pore
        if (openness > 0.05) {
          ctx.beginPath();
          ctx.ellipse(sx, sy, openW, 4, 0, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(30,30,60,0.8)';
          ctx.fill();
        }
      });

      // Circular vignette
      const vign = ctx.createRadialGradient(w / 2, h / 2, 100, w / 2, h / 2, 140);
      vign.addColorStop(0, 'rgba(0,0,0,0)');
      vign.addColorStop(1, 'rgba(0,0,0,1)');
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, 140, 0, Math.PI * 2);
      ctx.fillStyle = vign;
      ctx.fill();

      ctx.fillStyle = 'white';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`Stomata counted: ${stomataCnt} | Status: ${openness > 0.5 ? 'OPEN 🟢' : 'CLOSED 🔴'}`, w / 2, h - 15);
    }

    animRef.current = requestAnimationFrame(animate);
  }, [step, light, humidity, showUpper, microscope, openness, stomataCnt]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  const handleNext = () => {
    if (step === 3) setMicroscope(true);
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else setCompleted(true);
  };
  const reset = () => { setStep(0); setCompleted(false); setMicroscope(false); timeRef.current = 0; };

  const current = STEPS[step];
  const si = ((stomataCnt / (stomataCnt + 60)) * 100).toFixed(1);

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-slate-950">
      <div className="flex-1 flex items-center justify-center p-4 flex-col gap-3">
        <canvas ref={canvasRef} width={360} height={330} className="rounded-2xl border border-white/10 shadow-2xl" style={{ boxShadow: '0 0 40px #16a34a20' }} />
        <div className="flex gap-3">
          <button onClick={() => setShowUpper(!showUpper)} className="text-xs px-3 py-1.5 rounded-full bg-green-600/20 border border-green-500/40 text-green-300 hover:bg-green-600/30">
            {showUpper ? 'Lower Surface' : 'Upper Surface'} ↕
          </button>
          {step >= 3 && <button onClick={() => setMicroscope(!microscope)} className="text-xs px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20">
            {microscope ? '🌿 Leaf View' : '🔬 Microscope'}
          </button>}
        </div>
      </div>
      <div className="w-full md:w-80 bg-slate-900 border-l border-white/5 flex flex-col">
        <div className="p-5 border-b border-white/5">
          <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-1">Step {step + 1} of {STEPS.length}</p>
          <h2 className="text-xl font-bold text-white">{current.title}</h2>
        </div>
        <div className="flex-1 p-5 space-y-4 overflow-y-auto">
          {completed ? (
            <div className="text-center py-6">
              <CheckCircle size={40} className="mx-auto mb-3 text-green-400" />
              <h3 className="text-lg font-bold text-white mb-2">Stomata Study Complete! 🌿</h3>
              <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-xl text-left">
                <p className="text-green-300 text-sm">Stomatal Index = {si}%</p>
                <p className="text-gray-400 text-xs mt-1">Lower surface: {stomataCnt} stomata | Upper: {Math.floor(stomataCnt * 0.4)}</p>
              </div>
              <button onClick={reset} className="mt-4 flex items-center gap-2 mx-auto px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20"><RotateCcw size={14} /> Reset</button>
            </div>
          ) : (
            <>
              <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-xl">
                <p className="text-green-200 text-sm">{current.instruction}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
                <div>
                  <DraggableSlider label="☀️ Light Intensity" min={0} max={100} value={light} onChange={setLight} color="#facc15" unit="%" />
                </div>
                <div>
                  <DraggableSlider label="💧 Humidity" min={0} max={100} value={humidity} onChange={setHumidity} color="#60a5fa" unit="%" />
                </div>
                <div className="text-xs text-gray-400 flex justify-between pt-1">
                  <span>Stomata: <b className="text-white">{openness > 0.5 ? 'OPEN' : 'CLOSED'}</b></span>
                  <span>SI: <b className="text-green-400">{si}%</b></span>
                </div>
              </div>
              <button onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-white bg-green-700 hover:bg-green-600 transition-all active:scale-95">
                {step === STEPS.length - 1 ? '✅ Complete' : `${current.action} →`}
              </button>
            </>
          )}
          <div className="flex gap-1">
            {STEPS.map((_, i) => <div key={i} className="flex-1 h-1.5 rounded-full" style={{ backgroundColor: i <= step ? '#16a34a' : 'rgba(255,255,255,0.1)' }} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StomataLab;
