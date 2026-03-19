import React, { useRef, useEffect, useState, useCallback } from 'react';
import { RotateCcw, CheckCircle } from 'lucide-react';

interface SaltAnalysisLabProps { hex: string; }

const REAGENTS = [
  { id: 'hcl', name: 'Dil. HCl', color: '#fcd34d', desc: 'Group 1 reagent — precipitates Pb²⁺, Ag⁺, Hg₂²⁺ as white chlorides.' },
  { id: 'h2s', name: 'H₂S gas', color: '#a3e635', desc: 'Group 2 reagent (acidic) — precipitates Cu²⁺ (black CuS), Pb²⁺ (black).' },
  { id: 'naoh', name: 'NaOH', color: '#f9a8d4', desc: 'Tests for Cu²⁺ (blue ppt), Fe³⁺ (reddish-brown), Al³⁺ (white).' },
  { id: 'nh4oh', name: 'NH₄OH', color: '#a78bfa', desc: 'Group 3 reagent — Fe(OH)₃ reddish-brown ppt.' },
  { id: 'flame', name: 'Flame Test', color: '#fb923c', desc: 'Na⁺ = Yellow, K⁺ = Lilac, Ca²⁺ = Brick red.' },
];

const CATIONS = [
  { id: 'cu', name: 'Cu²⁺', color: '#1d4ed8', salt: 'CuSO₄', reactions: { hcl: null, h2s: { color: '#1c1917', ppt: 'Black CuS ppt ✓' }, naoh: { color: '#1d4ed8', ppt: 'Blue Cu(OH)₂ ppt ✓' }, nh4oh: { color: '#1e40af', ppt: 'Deep blue with excess NH₄OH ✓' }, flame: { color: '#22d3ee', ppt: 'Blue-green flame ✓' } } },
  { id: 'fe', name: 'Fe³⁺', color: '#b45309', salt: 'FeCl₃', reactions: { hcl: null, h2s: null, naoh: { color: '#b45309', ppt: 'Reddish-brown Fe(OH)₃ ppt ✓' }, nh4oh: { color: '#92400e', ppt: 'Reddish-brown Fe(OH)₃ ppt ✓' }, flame: { color: '#fbbf24', ppt: 'No characteristic flame' } } },
  { id: 'pb', name: 'Pb²⁺', color: '#6b7280', salt: 'Pb(NO₃)₂', reactions: { hcl: { color: '#f0fdf4', ppt: 'White PbCl₂ ppt (Group 1) ✓' }, h2s: { color: '#1c1917', ppt: 'Black PbS ppt ✓' }, naoh: { color: '#e5e7eb', ppt: 'White Pb(OH)₂ ppt ✓' }, nh4oh: { color: '#e5e7eb', ppt: 'White ppt ✓' }, flame: { color: '#9ca3af', ppt: 'No flame color' } } },
];

const STEPS = [
  { title: 'Prepare Salt Solution', instruction: 'Dissolve a small amount of the unknown salt in distilled water in a test tube. Observe any color of the solution.', action: 'Dissolve Salt 🧂' },
  { title: 'Preliminary Tests', instruction: 'Note the color of the solution. Cu²⁺ = Blue, Fe³⁺ = Light yellow-brown, Pb²⁺ = Colorless.', action: 'Note Color 👁️' },
  { title: 'Group 1 Test (HCl)', instruction: 'Add dilute HCl. If white precipitate forms → Pb²⁺, Ag⁺, or Hg₂²⁺. Solubility in hot water confirms Pb²⁺.', action: 'Add Dil. HCl 🧪' },
  { title: 'Confirmatory Tests', instruction: 'Drop reagents one by one. Each cation produces a characteristic precipitate color. Drag reagents onto the test tube!', action: 'Test Reagents 🔬' },
  { title: 'Flame Test', instruction: 'Dip a platinum wire in salt solution and hold in the flame. The color of the flame identifies the metal cation.', action: 'Flame Test 🔥' },
];

const SaltAnalysisLab: React.FC<SaltAnalysisLabProps> = ({ hex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [selectedCation, setSelectedCation] = useState(0);
  const [appliedReagent, setAppliedReagent] = useState<string | null>(null);
  const [animPpt, setAnimPpt] = useState(0);

  const cation = CATIONS[selectedCation];
  const reaction = appliedReagent ? cation.reactions[appliedReagent as keyof typeof cation.reactions] : null;

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

    // === TEST TUBE ===
    const tx = w / 2, tubH = 180, tubW = 55;
    const tubeTop = 70, tubeBot = tubeTop + tubH;

    // Liquid
    const liquidColor = reaction
      ? reaction.color
      : step >= 1 ? (cation.color + 'cc') : '#e2e8f0';
    ctx.beginPath();
    ctx.roundRect(tx - tubW / 2 + 5, tubeTop + 20, tubW - 10, tubH - 30, [0, 0, 15, 15]);
    ctx.fillStyle = liquidColor;
    ctx.fill();

    // Precipitate settling
    if (reaction && animPpt > 0) {
      const pptH = Math.min(animPpt * 40, 35);
      ctx.beginPath();
      ctx.ellipse(tx, tubeBot - 12, tubW / 2 - 8, pptH / 2, 0, 0, Math.PI * 2);
      ctx.fillStyle = reaction.color;
      ctx.fill();
      // Falling particles
      for (let i = 0; i < 8; i++) {
        const py = tubeTop + 20 + (t * 60 + i * 25) % (tubH - 40);
        ctx.beginPath();
        ctx.arc(tx - 15 + i * 8, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = reaction.color + 'aa';
        ctx.fill();
      }
    }

    // Bubbles if H₂S
    if (appliedReagent === 'h2s') {
      for (let i = 0; i < 5; i++) {
        const phase = (t + i * 0.5) % 1;
        ctx.beginPath();
        ctx.arc(tx - 10 + i * 6, tubeBot - 30 - phase * 100, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(163, 230, 53, ${1 - phase})`;
        ctx.fill();
      }
    }

    // Flame when flame test
    if (appliedReagent === 'flame') {
      const fc = cation.reactions.flame?.color || '#fbbf24';
      for (let i = 0; i < 6; i++) {
        const fh = 20 + Math.sin(t * 6 + i) * 10;
        ctx.beginPath();
        ctx.moveTo(tx - 15 + i * 7, tubeTop - 10);
        ctx.quadraticCurveTo(tx - 15 + i * 7 - 5, tubeTop - 10 - fh / 2, tx - 15 + i * 7, tubeTop - 10 - fh);
        ctx.strokeStyle = fc;
        ctx.lineWidth = 3;
        ctx.stroke();
      }
    }

    // Test tube glass
    const glassGrad = ctx.createLinearGradient(tx - tubW/2, 0, tx + tubW/2, 0);
    glassGrad.addColorStop(0, 'rgba(200,220,255,0.25)');
    glassGrad.addColorStop(0.4, 'rgba(255,255,255,0.05)');
    glassGrad.addColorStop(1, 'rgba(200,220,255,0.2)');
    ctx.beginPath();
    ctx.roundRect(tx - tubW / 2, tubeTop, tubW, tubH, [8, 8, 20, 20]);
    ctx.fillStyle = glassGrad;
    ctx.fill();
    ctx.strokeStyle = 'rgba(148,163,184,0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Cation label
    ctx.fillStyle = 'white';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(cation.salt, tx, tubeTop - 20);
    ctx.fillStyle = cation.color;
    ctx.font = '12px sans-serif';
    ctx.fillText(cation.name + ' solution', tx, tubeBot + 25);

    // Result text
    if (reaction) {
      ctx.fillStyle = '#4ade80';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(reaction.ppt, tx, tubeBot + 45);
    } else if (appliedReagent) {
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px sans-serif';
      ctx.fillText('No visible reaction', tx, tubeBot + 45);
    }

    animRef.current = requestAnimationFrame(animate);
  }, [step, selectedCation, appliedReagent, animPpt, cation, reaction]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  const applyReagent = (id: string) => {
    setAppliedReagent(id);
    setAnimPpt(0);
    let p = 0;
    const iv = setInterval(() => {
      p += 0.05;
      setAnimPpt(p);
      if (p >= 1) clearInterval(iv);
    }, 50);
  };

  const handleNext = () => {
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else setCompleted(true);
  };
  const reset = () => { setStep(0); setCompleted(false); setAppliedReagent(null); setAnimPpt(0); timeRef.current = 0; };
  const current = STEPS[step];

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-slate-950">
      <div className="flex-1 flex items-center justify-center p-4 flex-col gap-4">
        <canvas ref={canvasRef} width={320} height={340} className="rounded-2xl border border-white/10 shadow-2xl" />
        {step >= 3 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {REAGENTS.map(r => (
              <button key={r.id} onClick={() => applyReagent(r.id)}
                className="px-3 py-2 rounded-xl text-xs font-bold text-white transition-all hover:scale-105 active:scale-95 border"
                style={{ backgroundColor: r.color + '30', borderColor: r.color + '60', color: r.color }}>
                {r.name} 💧
              </button>
            ))}
            <button onClick={() => { setAppliedReagent(null); setAnimPpt(0); }}
              className="px-3 py-2 rounded-xl text-xs font-bold bg-white/10 text-gray-400 border border-white/20 hover:bg-white/20">
              Clear
            </button>
          </div>
        )}
      </div>
      <div className="w-full md:w-80 bg-slate-900 border-l border-white/5 flex flex-col">
        <div className="p-5 border-b border-white/5">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">Step {step + 1} of {STEPS.length}</p>
          <h2 className="text-xl font-bold text-white">{current.title}</h2>
        </div>
        <div className="flex-1 p-5 space-y-4 overflow-y-auto">
          {completed ? (
            <div className="text-center py-4">
              <CheckCircle size={36} className="mx-auto mb-3 text-green-400" />
              <h3 className="text-lg font-bold text-white mb-2">Cation Identified! ✅</h3>
              <p className="text-gray-400 text-sm">Try a different salt to identify another cation!</p>
              <button onClick={reset} className="mt-4 flex items-center gap-2 mx-auto px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20"><RotateCcw size={14} /> Reset</button>
            </div>
          ) : (
            <>
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl">
                <p className="text-emerald-200 text-sm">{current.instruction}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Unknown Salt</p>
                <div className="grid grid-cols-3 gap-2">
                  {CATIONS.map((c, i) => (
                    <button key={c.id} onClick={() => { setSelectedCation(i); setAppliedReagent(null); setAnimPpt(0); }}
                      className="py-2 px-1 rounded-xl text-xs font-bold transition-all"
                      style={{ backgroundColor: i === selectedCation ? c.color + '40' : 'rgba(255,255,255,0.05)', color: i === selectedCation ? 'white' : '#9ca3af', border: `1px solid ${i === selectedCation ? c.color : 'rgba(255,255,255,0.1)'}` }}>
                      {c.salt}
                    </button>
                  ))}
                </div>
              </div>
              {appliedReagent && (
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                  <p className="text-xs text-gray-400 mb-1">{REAGENTS.find(r => r.id === appliedReagent)?.desc}</p>
                  {reaction ? (
                    <p className="text-green-400 text-sm font-bold">✅ {reaction.ppt}</p>
                  ) : (
                    <p className="text-gray-500 text-sm">No precipitate observed</p>
                  )}
                </div>
              )}
              <button onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-white bg-emerald-700 hover:bg-emerald-600 transition-all active:scale-95">
                {step === STEPS.length - 1 ? '✅ Complete Analysis' : `${current.action} →`}
              </button>
            </>
          )}
          <div className="flex gap-1">
            {STEPS.map((_, i) => <div key={i} className="flex-1 h-1.5 rounded-full" style={{ backgroundColor: i <= step ? '#10b981' : 'rgba(255,255,255,0.1)' }} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaltAnalysisLab;
