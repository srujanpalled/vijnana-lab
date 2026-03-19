import React, { useRef, useEffect, useState, useCallback } from 'react';
import { RotateCcw, CheckCircle, Thermometer } from 'lucide-react';
import DraggableSlider from './DraggableSlider';

interface BenedictsTestLabProps { hex: string; }

const STEPS = [
  { title: 'Take Urine Sample', instruction: 'Take 2ml of the urine sample in a clean test tube using a pipette.', action: 'Pipette Sample 🧪', color: '#f8fafc' },
  { title: "Add Benedict's Reagent", instruction: "Add 5 drops of Benedict's reagent (deep blue copper sulphate solution) to the urine sample.", action: "Add Benedict's 💙", color: '#1d4ed8' },
  { title: 'Heat in Water Bath', instruction: 'Place the test tube in a boiling water bath for 3–5 minutes. Heat causes the copper ions to react with reducing sugars.', action: 'Heat (3 min) 🔥', color: '#ef4444' },
  { title: 'Observe Result', instruction: "Observe the colour change. Blue = No sugar. Green = Trace. Yellow = Moderate. Brick Red = High glucose (Diabetes indicator!).", action: 'Read Result 👁️', color: '#f59e0b' },
  { title: 'Record Diagnosis', instruction: 'Record the result. A brick-red precipitate indicates presence of reducing sugar (glucose) — a sign of glucosuria/diabetes mellitus.', action: 'Record Diagnosis 📋', color: '#10b981' },
];

const COLOR_SCALE = ['#1d4ed8', '#16a34a', '#ca8a04', '#b45309', '#b91c1c']; // Blue → Brick Red

const BenedictsTestLab: React.FC<BenedictsTestLabProps> = ({ hex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [glucose, setGlucose] = useState(50);
  const [heating, setHeating] = useState(false);
  const [heatProgress, setHeatProgress] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const getLiquidColor = () => {
    if (step === 0) return { r: 240, g: 240, b: 240 }; // clear urine
    if (step === 1 || (step >= 2 && !showResult)) return { r: 29, g: 78, b: 216 }; // blue Benedict's
    // After heating, color based on glucose
    const idx = Math.min(4, Math.floor((glucose / 100) * 5));
    const colors = [
      { r: 29, g: 78, b: 216 },   // blue (0)
      { r: 22, g: 163, b: 74 },   // green (1)
      { r: 202, g: 138, b: 4 },   // yellow (2)
      { r: 180, g: 83, b: 9 },    // orange-brown (3)
      { r: 185, g: 28, b: 28 },   // brick red (4)
    ];
    return colors[idx];
  };

  const getResultText = () => {
    if (glucose < 20) return { text: 'NEGATIVE 🟦', sub: 'No glucose detected', color: '#3b82f6' };
    if (glucose < 40) return { text: 'TRACE 🟩', sub: 'Trace glucose', color: '#22c55e' };
    if (glucose < 60) return { text: 'MODERATE 🟨', sub: 'Moderate glucose (1+)', color: '#eab308' };
    if (glucose < 80) return { text: 'HIGH 🟧', sub: 'High glucose (2+)', color: '#f97316' };
    return { text: 'DIABETIC ⚠️ 🟥', sub: 'Brick Red — Glucose+++ (Glucosuria!)', color: '#ef4444' };
  };

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    timeRef.current += 0.04;
    const t = timeRef.current;
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, w, h);

    const lc = getLiquidColor();

    // === TEST TUBE ===
    const tx = w / 2, tubH = 200, tubW = 60;
    const tubeTop = 60, tubeBot = tubeTop + tubH;

    // Glass gradient
    const grad = ctx.createLinearGradient(tx - tubW / 2, 0, tx + tubW / 2, 0);
    grad.addColorStop(0, 'rgba(200,220,255,0.2)');
    grad.addColorStop(0.3, 'rgba(255,255,255,0.05)');
    grad.addColorStop(1, 'rgba(200,220,255,0.15)');

    // Liquid in tube
    const liquidH = step >= 1 ? tubH - 30 : step === 0 ? tubH * 0.3 : 0;
    const liquidTop = tubeBot - liquidH;
    ctx.beginPath();
    ctx.roundRect(tx - tubW / 2 + 4, liquidTop, tubW - 8, liquidH, [0, 0, 15, 15]);
    ctx.fillStyle = `rgba(${lc.r},${lc.g},${lc.b},0.85)`;
    ctx.fill();

    // Bubbles when heating
    if (heating || step === 3) {
      for (let i = 0; i < 8; i++) {
        const bx = tx - 20 + Math.random() * 40;
        const by = liquidTop + Math.random() * liquidH;
        const phase = (t * 2 + i * 0.7) % 1;
        ctx.beginPath();
        ctx.arc(tx - 15 + i * 8, tubeBot - 20 - phase * liquidH * 0.8, 3 + i % 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.4 - phase * 0.3})`;
        ctx.fill();
      }
    }

    // Precipitate when high glucose + heat
    if (showResult && glucose > 50) {
      const precipH = 10 + (glucose / 100) * 20;
      ctx.beginPath();
      ctx.ellipse(tx, tubeBot - 10, 20, precipH, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${lc.r},${lc.g},${lc.b},0.9)`;
      ctx.fill();
    }

    // Surface shine
    ctx.beginPath();
    ctx.ellipse(tx, liquidTop, tubW / 2 - 5, 5, 0, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,0.2)`;
    ctx.fill();

    // Test tube glass
    ctx.beginPath();
    ctx.roundRect(tx - tubW / 2, tubeTop, tubW, tubH, [10, 10, 20, 20]);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.8)';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Graduation marks
    for (let i = 1; i <= 5; i++) {
      const gy = tubeTop + (tubH / 6) * i;
      ctx.beginPath();
      ctx.moveTo(tx + tubW / 2 - 8, gy);
      ctx.lineTo(tx + tubW / 2 - 2, gy);
      ctx.strokeStyle = 'rgba(148,163,184,0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = 'rgba(148,163,184,0.6)';
      ctx.font = '8px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`${(6 - i)}ml`, tx + tubW / 2 + 3, gy + 3);
    }

    // Heating flames
    if (heating || step === 3) {
      for (let i = 0; i < 5; i++) {
        const fx = tx - 20 + i * 10;
        const fh = 15 + Math.sin(t * 5 + i) * 8;
        ctx.beginPath();
        ctx.moveTo(fx, tubeBot + 20);
        ctx.quadraticCurveTo(fx - 5, tubeBot + 10, fx, tubeBot + 20 - fh);
        ctx.quadraticCurveTo(fx + 5, tubeBot + 10, fx, tubeBot + 20);
        ctx.fillStyle = `rgba(251,${150 + i * 20},0,0.9)`;
        ctx.fill();
      }
    }

    // Water bath
    if (step >= 2) {
      ctx.beginPath();
      ctx.roundRect(tx - 70, tubeBot + 18, 140, 30, 5);
      ctx.fillStyle = 'rgba(59,130,246,0.3)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(59,130,246,0.5)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.fillStyle = '#93c5fd';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Water Bath 🔥', tx, tubeBot + 38);
    }

    // Color label
    ctx.font = 'bold 13px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    if (showResult) {
      const r = getResultText();
      ctx.fillStyle = r.color;
      ctx.fillText(r.text, tx, tubeTop - 15);
    }

    animRef.current = requestAnimationFrame(animate);
  }, [step, heating, showResult, glucose]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  const handleNext = () => {
    if (step === 2) {
      setHeating(true);
      let p = 0;
      const iv = setInterval(() => {
        p += 2;
        setHeatProgress(p);
        if (p >= 100) { clearInterval(iv); setHeating(false); setShowResult(true); setStep(3); }
      }, 60);
      return;
    }
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else setCompleted(true);
  };

  const reset = () => { setStep(0); setCompleted(false); setHeatProgress(0); setHeating(false); setShowResult(false); timeRef.current = 0; };
  const current = STEPS[step];
  const result = getResultText();

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-slate-950">
      <div className="flex-1 flex items-center justify-center p-4">
        <canvas ref={canvasRef} width={320} height={380} className="rounded-2xl border border-white/10 shadow-2xl" />
      </div>
      <div className="w-full md:w-80 bg-slate-900 border-l border-white/5 flex flex-col">
        <div className="p-5 border-b border-white/5">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">Step {step + 1} of {STEPS.length}</p>
          <h2 className="text-xl font-bold text-white">{current.title}</h2>
        </div>
        <div className="flex-1 p-5 space-y-4 overflow-y-auto">
          {completed ? (
            <div className="text-center py-6">
              <CheckCircle size={40} className="mx-auto mb-3 text-green-400" />
              <h3 className="text-lg font-bold text-white mb-2">Experiment Complete!</h3>
              <div className="p-4 rounded-xl border" style={{ borderColor: result.color + '50', backgroundColor: result.color + '15' }}>
                <p className="font-bold text-lg" style={{ color: result.color }}>{result.text}</p>
                <p className="text-gray-300 text-sm mt-1">{result.sub}</p>
              </div>
              <button onClick={reset} className="mt-4 flex items-center gap-2 mx-auto px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20"><RotateCcw size={14} /> Reset</button>
            </div>
          ) : (
            <>
              <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl">
                <p className="text-amber-200 text-sm">{current.instruction}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <DraggableSlider label="Glucose Level" min={0} max={100} value={glucose} onChange={setGlucose} color="#ef4444" unit="%" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Normal</span><span>Diabetic</span>
                </div>
              </div>
              {heating && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer size={14} className="text-red-400 animate-bounce" />
                    <span className="text-red-400 text-sm font-bold">Heating... {heatProgress}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full">
                    <div className="h-2 rounded-full bg-red-500 transition-all" style={{ width: `${heatProgress}%` }} />
                  </div>
                </div>
              )}
              {showResult && step === 3 && (
                <div className="p-4 rounded-xl border" style={{ borderColor: result.color + '60', backgroundColor: result.color + '15' }}>
                  <p className="font-bold text-lg" style={{ color: result.color }}>{result.text}</p>
                  <p className="text-gray-300 text-sm">{result.sub}</p>
                </div>
              )}
              {!heating && (
                <button onClick={handleNext}
                  className="w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 transition-all active:scale-95">
                  {step === STEPS.length - 1 ? '✅ Complete' : `${current.action} →`}
                </button>
              )}
            </>
          )}
          <div className="flex gap-1 mt-2">
            {STEPS.map((_, i) => <div key={i} className="flex-1 h-1.5 rounded-full" style={{ backgroundColor: i <= step ? '#f59e0b' : 'rgba(255,255,255,0.1)' }} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenedictsTestLab;
