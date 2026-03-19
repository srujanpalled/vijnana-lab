import React, { useRef, useEffect, useState, useCallback } from 'react';
import { RotateCcw, CheckCircle } from 'lucide-react';

interface ChromatographyLabProps { hex: string; }

const PIGMENTS = [
  { name: 'β-Carotene', color: '#f59e0b', rf: 0.98, description: 'Orange pigment, most soluble. Travels furthest.' },
  { name: 'Xanthophyll', color: '#fbbf24', rf: 0.71, description: 'Yellow pigment, moderate solubility.' },
  { name: 'Chlorophyll a', color: '#16a34a', rf: 0.65, description: 'Blue-green, major photosynthetic pigment.' },
  { name: 'Chlorophyll b', color: '#4d7c0f', rf: 0.45, description: 'Yellow-green, least mobile.' },
];

const STEPS = [
  { title: 'Extract Pigment', instruction: 'Grind fresh spinach leaves in acetone/petroleum ether. Filter to get a green pigment extract.', action: 'Grind Leaves 🌿' },
  { title: 'Spot on Paper', instruction: 'Draw a pencil line 3cm from the bottom of chromatography paper. Apply a concentrated spot of extract. Allow to dry. Repeat 5 times for a dark spot.', action: 'Spot Extract 🖊️' },
  { title: 'Prepare Solvent', instruction: 'Pour petroleum ether-acetone mixture in a jar, 1cm deep. The solvent front must NOT touch the spot!', action: 'Add Solvent 🧪' },
  { title: 'Run Chromatogram', instruction: 'Dip paper. Watch solvent rise. Different pigments travel at different speeds based on solubility and adsorption.', action: 'Start Run ▶️' },
  { title: 'Calculate Rf Values', instruction: 'Remove paper when solvent is 2cm from top. Mark solvent front. Calculate Rf = Distance by pigment ÷ Distance by solvent.', action: 'Calculate Rf 📐' },
];

const ChromatographyLab: React.FC<ChromatographyLabProps> = ({ hex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0); // 0-1 solvent run
  const [selectedPigment, setSelectedPigment] = useState<number | null>(null);

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

    // === PAPER STRIP ===
    const paperX = w / 2 - 50, paperW = 100;
    const paperBottom = h - 60, paperTop = 80;
    const paperH = paperBottom - paperTop;

    // Paper background
    const paperGrad = ctx.createLinearGradient(paperX, 0, paperX + paperW, 0);
    paperGrad.addColorStop(0, '#fef9ec');
    paperGrad.addColorStop(0.5, '#fffef5');
    paperGrad.addColorStop(1, '#fef9ec');
    ctx.fillStyle = step >= 0 ? paperGrad : '#374151';
    ctx.fillRect(paperX, paperTop, paperW, paperH);
    ctx.strokeStyle = 'rgba(200,180,140,0.6)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(paperX, paperTop, paperW, paperH);

    // Baseline (pencil line)
    const baseline = paperBottom - 40;
    ctx.beginPath();
    ctx.moveTo(paperX, baseline);
    ctx.lineTo(paperX + paperW, baseline);
    ctx.strokeStyle = '#9ca3af';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 2]);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#9ca3af';
    ctx.font = '9px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('Baseline', paperX - 3, baseline + 4);

    // Initial spot
    if (step >= 1) {
      ctx.beginPath();
      ctx.arc(paperX + paperW / 2, baseline, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#1e5128';
      ctx.fill();
    }

    // Solvent front
    if (step >= 2 && progress >= 0) {
      const solventY = baseline - progress * (paperH - 50);
      const papY = Math.max(paperTop, solventY);

      // Wet paper area
      ctx.fillStyle = 'rgba(190,210,255,0.2)';
      ctx.fillRect(paperX, papY, paperW, baseline - papY);

      // Pigment bands
      PIGMENTS.forEach((pig, i) => {
        if (progress * pig.rf < 0.02) return;
        const bandY = baseline - progress * pig.rf * (paperH - 50);
        const bandIntensity = Math.min(1, progress * pig.rf * 2);
        const bandH = 8 + i * 2;
        ctx.beginPath();
        ctx.ellipse(paperX + paperW / 2, bandY, 35, bandH / 2, 0, 0, Math.PI * 2);
        ctx.fillStyle = pig.color + Math.floor(bandIntensity * 200).toString(16).padStart(2, '0');
        ctx.fill();
        // Label
        if (progress > 0.3) {
          ctx.fillStyle = pig.color;
          ctx.font = `bold 9px sans-serif`;
          ctx.textAlign = 'left';
          ctx.fillText(pig.name, paperX + paperW + 5, bandY + 3);
          if (progress >= 0.95) {
            ctx.fillStyle = 'rgba(255,255,255,0.6)';
            ctx.font = '8px sans-serif';
            ctx.fillText(`Rf=${pig.rf}`, paperX + paperW + 5, bandY + 13);
          }
        }
      });

      // Solvent front line
      ctx.beginPath();
      ctx.moveTo(paperX, solventY);
      ctx.lineTo(paperX + paperW, solventY);
      ctx.strokeStyle = 'rgba(96,165,250,0.8)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 3]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#60a5fa';
      ctx.font = '9px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText('Solvent ↑', paperX - 3, solventY + 4);
    }

    // Beaker / jar
    const jarX = paperX - 20, jarW = paperW + 40, jarH = 50, jarY = paperBottom;
    ctx.beginPath();
    ctx.roundRect(jarX, jarY, jarW, jarH, [0, 0, 8, 8]);
    ctx.fillStyle = step >= 2 ? 'rgba(203,213,225,0.2)' : 'rgba(100,116,139,0.1)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(148,163,184,0.6)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    if (step >= 2) {
      ctx.fillStyle = 'rgba(96,165,250,0.3)';
      ctx.fillRect(jarX + 3, jarY + 25, jarW - 6, 20);
      ctx.fillStyle = '#93c5fd';
      ctx.font = '9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Solvent', jarX + jarW / 2, jarY + 40);
    }

    // Hanging clip
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(paperX + paperW / 2 - 4, paperTop - 20, 8, 20);
    ctx.beginPath();
    ctx.arc(paperX + paperW / 2, paperTop - 22, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#64748b';
    ctx.fill();

    animRef.current = requestAnimationFrame(animate);
  }, [step, progress]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  const handleNext = () => {
    if (step === 3) {
      setRunning(true);
      let p = 0;
      const iv = setInterval(() => {
        p += 0.005;
        setProgress(p);
        if (p >= 1) { clearInterval(iv); setRunning(false); setStep(4); }
      }, 50);
      return;
    }
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else setCompleted(true);
  };

  const reset = () => { setStep(0); setCompleted(false); setProgress(0); setRunning(false); timeRef.current = 0; };
  const current = STEPS[step];

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-slate-950">
      <div className="flex-1 flex items-center justify-center p-4">
        <canvas ref={canvasRef} width={380} height={400} className="rounded-2xl border border-white/10 shadow-2xl" />
      </div>
      <div className="w-full md:w-80 bg-slate-900 border-l border-white/5 flex flex-col">
        <div className="p-5 border-b border-white/5">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">Step {step + 1} of {STEPS.length}</p>
          <h2 className="text-xl font-bold text-white">{current.title}</h2>
        </div>
        <div className="flex-1 p-5 space-y-4 overflow-y-auto">
          {completed ? (
            <div className="text-center py-4">
              <CheckCircle size={36} className="mx-auto mb-3 text-green-400" />
              <h3 className="text-lg font-bold text-white mb-3">Chromatogram Complete! 🌈</h3>
              <div className="space-y-2">
                {PIGMENTS.map(p => (
                  <div key={p.name} className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: p.color }} />
                    <div className="text-left flex-1">
                      <p className="text-sm font-bold text-white">{p.name}</p>
                      <p className="text-xs text-gray-400">Rf = {p.rf}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={reset} className="mt-4 flex items-center gap-2 mx-auto px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20"><RotateCcw size={14} /> Reset</button>
            </div>
          ) : (
            <>
              <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl">
                <p className="text-amber-200 text-sm">{current.instruction}</p>
              </div>
              {running && (
                <div>
                  <p className="text-blue-400 text-sm font-bold mb-2">🧪 Chromatogram running… {Math.round(progress * 100)}%</p>
                  <div className="h-2 bg-white/10 rounded-full">
                    <div className="h-2 rounded-full bg-blue-500 transition-all" style={{ width: `${progress * 100}%` }} />
                  </div>
                </div>
              )}
              {step >= 4 && (
                <div className="space-y-2">
                  {PIGMENTS.map((p, i) => (
                    <button key={p.name} onClick={() => setSelectedPigment(i === selectedPigment ? null : i)}
                      className="w-full flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                      <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
                      <div className="text-left flex-1">
                        <p className="text-sm text-white font-bold">{p.name} — Rf={p.rf}</p>
                        {selectedPigment === i && <p className="text-xs text-gray-400 mt-1">{p.description}</p>}
                      </div>
                    </button>
                  ))}
                </div>
              )}
              {!running && (
                <button onClick={handleNext}
                  className="w-full py-3 rounded-xl font-bold text-white bg-amber-700 hover:bg-amber-600 transition-all active:scale-95">
                  {step === STEPS.length - 1 ? '✅ Complete' : `${current.action} →`}
                </button>
              )}
            </>
          )}
          <div className="flex gap-1">
            {STEPS.map((_, i) => <div key={i} className="flex-1 h-1.5 rounded-full" style={{ backgroundColor: i <= step ? '#d97706' : 'rgba(255,255,255,0.1)' }} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChromatographyLab;
