import React, { useRef, useEffect, useState, useCallback } from 'react';
import { RotateCcw, CheckCircle } from 'lucide-react';

interface PHLabSimulationProps { hex: string; }

const SOLUTIONS = [
  { name: 'Lemon Juice', ph: 2.2, color: '#fde047', icon: '🍋' },
  { name: 'Cola', ph: 3.0, color: '#92400e', icon: '🥤' },
  { name: 'Tomato Juice', ph: 4.2, color: '#ef4444', icon: '🍅' },
  { name: 'Milk', ph: 6.5, color: '#fefce8', icon: '🥛' },
  { name: 'Pure Water', ph: 7.0, color: '#dbeafe', icon: '💧' },
  { name: 'Baking Soda', ph: 8.4, color: '#d1fae5', icon: '🧁' },
  { name: 'Soap', ph: 10.0, color: '#ede9fe', icon: '🫧' },
  { name: 'Bleach', ph: 12.5, color: '#f0fdf4', icon: '🧼' },
];

const getPHColor = (ph: number): string => {
  if (ph < 2) return '#ef4444';
  if (ph < 4) return '#f97316';
  if (ph < 6) return '#eab308';
  if (ph < 7) return '#84cc16';
  if (ph === 7) return '#22c55e';
  if (ph < 9) return '#14b8a6';
  if (ph < 11) return '#3b82f6';
  if (ph < 13) return '#8b5cf6';
  return '#a855f7';
};

const STEPS = [
  { title: 'Set Up pH Paper', instruction: 'Tear a 2cm strip of Universal Indicator pH paper. These strips change colour based on the H⁺ ion concentration of the solution.', action: 'Get pH Paper 🧻' },
  { title: 'Select Solution', instruction: 'Pick a solution from the panel. Observe its appearance. Try to predict if it will be acidic, basic, or neutral before testing.', action: 'Choose Solution 🫙' },
  { title: 'Dip pH Paper', instruction: 'Dip the pH paper into the solution for 1–2 seconds. Do NOT leave it in too long as colours may bleed.', action: 'Dip Paper 📄' },
  { title: 'Compare with Scale', instruction: 'Hold the paper against the standard pH colour chart. Match the colour to find the pH value.', action: 'Read pH Scale 📊' },
  { title: 'Record All Results', instruction: 'Test all 8 solutions and record their pH values. A pH < 7 is acidic, = 7 neutral, > 7 basic (alkaline).', action: 'Record Results 📝' },
];

const PHLabSimulation: React.FC<PHLabSimulationProps> = ({ hex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [selectedSol, setSelectedSol] = useState(0);
  const [dipped, setDipped] = useState(false);
  const [paperColor, setPaperColor] = useState('#f8fafc');
  const [tested, setTested] = useState<Set<number>>(new Set());
  const [dipAnim, setDipAnim] = useState(0); // 0-1

  const sol = SOLUTIONS[selectedSol];
  const phColor = getPHColor(sol.ph);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    timeRef.current += 0.02;
    const t = timeRef.current;
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, w, h);

    // === SOLUTION CONTAINER ===
    const solX = w / 2 - 55, solY = 180, solW = 110, solH = 90;
    ctx.beginPath();
    ctx.roundRect(solX, solY, solW, solH, [8, 8, 16, 16]);
    ctx.fillStyle = sol.color + '80';
    ctx.fill();
    ctx.strokeStyle = sol.color;
    ctx.lineWidth = 2;
    ctx.stroke();
    // Liquid label
    ctx.fillStyle = 'white';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(sol.icon + ' ' + sol.name, w / 2, solY + solH + 18);

    // Liquid surface shimmer
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.ellipse(w / 2, solY + 10, 30 - i * 8, 3, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,255,255,${0.15 - i * 0.04})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // === pH PAPER STRIP ===
    const paperW = 20, paperH = 70;
    const paperX = w / 2 - paperW / 2;
    const paperY = dipAnim > 0 ? solY + 10 - paperH + (dipAnim * (paperH - 20)) : 80;
    const col = dipped ? phColor : paperColor;

    ctx.beginPath();
    ctx.roundRect(paperX, paperY, paperW, paperH, 3);
    ctx.fillStyle = col;
    ctx.fill();
    ctx.strokeStyle = 'rgba(200,200,200,0.5)';
    ctx.lineWidth = 1;
    ctx.stroke();
    // Paper grain lines
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.moveTo(paperX + 2, paperY + 5 + i * 8);
      ctx.lineTo(paperX + paperW - 2, paperY + 5 + i * 8);
      ctx.strokeStyle = 'rgba(0,0,0,0.08)';
      ctx.stroke();
    }

    // === pH SCALE BAR ===
    const scaleX = 30, scaleY = 40, scaleW = w - 60, scaleH = 18;
    const scaleGrad = ctx.createLinearGradient(scaleX, 0, scaleX + scaleW, 0);
    const colors = ['#ef4444','#f97316','#f59e0b','#eab308','#84cc16','#22c55e','#14b8a6','#3b82f6','#6366f1','#8b5cf6','#a855f7','#d946ef','#ec4899','#f43f5e'];
    colors.forEach((c, i) => scaleGrad.addColorStop(i / (colors.length - 1), c));
    ctx.beginPath();
    ctx.roundRect(scaleX, scaleY, scaleW, scaleH, 9);
    ctx.fillStyle = scaleGrad;
    ctx.fill();

    // pH labels 0-14
    for (let ph = 0; ph <= 14; ph++) {
      const lx = scaleX + (ph / 14) * scaleW;
      ctx.fillStyle = 'white';
      ctx.font = ph % 2 === 0 ? 'bold 8px sans-serif' : '7px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(String(ph), lx, scaleY + scaleH + 10);
    }
    ctx.fillStyle = 'white'; ctx.font = 'bold 9px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('←  ACIDIC  |  NEUTRAL  |  BASIC  →', w / 2, scaleY - 5);

    // Indicator needle
    if (dipped || step >= 3) {
      const needleX = scaleX + (sol.ph / 14) * scaleW;
      ctx.beginPath();
      ctx.moveTo(needleX, scaleY - 2);
      ctx.lineTo(needleX - 5, scaleY - 12);
      ctx.lineTo(needleX + 5, scaleY - 12);
      ctx.fillStyle = phColor;
      ctx.fill();
      ctx.fillStyle = phColor;
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`pH ${sol.ph}`, needleX, scaleY - 18);
    }

    animRef.current = requestAnimationFrame(animate);
  }, [step, sol, dipped, paperColor, phColor, dipAnim]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  const handleDip = () => {
    if (step < 2) return;
    let d = 0;
    const iv = setInterval(() => {
      d += 0.05;
      setDipAnim(Math.min(d, 1));
      if (d >= 1) {
        clearInterval(iv);
        setTimeout(() => {
          setDipped(true);
          setPaperColor(phColor);
          setDipAnim(0);
          setTested(prev => new Set([...prev, selectedSol]));
        }, 300);
      }
    }, 30);
  };

  const handleNext = () => {
    if (step === 2) { handleDip(); }
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else setCompleted(true);
  };
  const reset = () => { setStep(0); setCompleted(false); setDipped(false); setPaperColor('#f8fafc'); setDipAnim(0); setTested(new Set()); timeRef.current = 0; };
  const current = STEPS[step];

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-slate-950">
      <div className="flex-1 flex items-center justify-center p-4 flex-col gap-3">
        <canvas ref={canvasRef} width={360} height={320} className="rounded-2xl border border-white/10 shadow-2xl" />
        {dipped && (
          <div className="px-4 py-2 rounded-xl font-bold text-white" style={{ backgroundColor: phColor + '30', border: `1px solid ${phColor}60`, color: phColor }}>
            pH {sol.ph} — {sol.ph < 7 ? '🔴 Acidic' : sol.ph === 7 ? '🟢 Neutral' : '🔵 Basic'}
          </div>
        )}
      </div>
      <div className="w-full md:w-80 bg-slate-900 border-l border-white/5 flex flex-col">
        <div className="p-5 border-b border-white/5">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-1">Step {step + 1} of {STEPS.length}</p>
          <h2 className="text-xl font-bold text-white">{current.title}</h2>
        </div>
        <div className="flex-1 p-5 space-y-4 overflow-y-auto">
          {completed ? (
            <div className="text-center py-4">
              <CheckCircle size={36} className="mx-auto mb-3 text-green-400" />
              <h3 className="text-lg font-bold text-white mb-3">pH Lab Complete! ⚗️</h3>
              <div className="space-y-1">
                {SOLUTIONS.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg" style={{ backgroundColor: tested.has(i) ? getPHColor(s.ph) + '20' : 'transparent' }}>
                    <span>{s.icon}</span>
                    <span className="text-sm text-white flex-1">{s.name}</span>
                    <span className="text-xs font-bold" style={{ color: getPHColor(s.ph) }}>{tested.has(i) ? `pH ${s.ph}` : '—'}</span>
                  </div>
                ))}
              </div>
              <button onClick={reset} className="mt-4 flex items-center gap-2 mx-auto px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20"><RotateCcw size={14} /> Reset</button>
            </div>
          ) : (
            <>
              <div className="bg-cyan-500/10 border border-cyan-500/30 p-4 rounded-xl">
                <p className="text-cyan-200 text-sm">{current.instruction}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Select Solution</p>
                <div className="grid grid-cols-2 gap-2">
                  {SOLUTIONS.map((s, i) => (
                    <button key={i} onClick={() => { setSelectedSol(i); setDipped(false); setPaperColor('#f8fafc'); setDipAnim(0); }}
                      className="p-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all"
                      style={{ backgroundColor: i === selectedSol ? s.color + '30' : 'rgba(255,255,255,0.05)', border: `1px solid ${i === selectedSol ? s.color : 'rgba(255,255,255,0.1)'}`, color: i === selectedSol ? 'white' : '#9ca3af' }}>
                      {s.icon} {s.name}
                      {tested.has(i) && <span style={{ color: getPHColor(s.ph) }}>✓</span>}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-white bg-cyan-700 hover:bg-cyan-600 transition-all active:scale-95">
                {step === STEPS.length - 1 ? '✅ Complete' : `${current.action} →`}
              </button>
            </>
          )}
          <div className="flex gap-1">
            {STEPS.map((_, i) => <div key={i} className="flex-1 h-1.5 rounded-full" style={{ backgroundColor: i <= step ? '#06b6d4' : 'rgba(255,255,255,0.1)' }} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PHLabSimulation;
