import React, { useRef, useEffect, useState, useCallback } from 'react';
import { RotateCcw, CheckCircle } from 'lucide-react';

interface FunctionalGroupsLabProps { hex: string; }

const COMPOUNDS = [
  { name: 'Formaldehyde', type: 'Aldehyde', formula: 'HCHO', color: '#dbeafe' },
  { name: 'Acetaldehyde', type: 'Aldehyde', formula: 'CH₃CHO', color: '#e0f2fe' },
  { name: 'Acetone', type: 'Ketone', formula: 'CH₃COCH₃', color: '#fef3c7' },
];

const TESTS: { id: string; name: string; color: string; positiveFor: string[]; positiveResult: string; negativeResult: string }[] = [
  { id: 'tollens', name: "Tollen's Test", color: '#d1d5db', positiveFor: ['Aldehyde'], positiveResult: 'Silver mirror on tube walls! ✨ (Aldehyde confirmed)', negativeResult: 'No silver mirror (Not aldehyde / Ketone)' },
  { id: 'fehling', name: "Fehling's Test", color: '#1d4ed8', positiveFor: ['Aldehyde'], positiveResult: 'Brick-red Cu₂O precipitate! 🧱 (Reducing sugar / Aldehyde)', negativeResult: 'Solution stays blue (Ketone - no reaction)' },
  { id: 'schiff', name: "Schiff's Test", color: '#db2777', positiveFor: ['Aldehyde'], positiveResult: 'Magenta/Pink colour! 💗 (Aldehyde confirmed)', negativeResult: 'No colour change (Ketone does not react)' },
  { id: 'dnp', name: '2,4-DNP Test', color: '#d97706', positiveFor: ['Aldehyde', 'Ketone'], positiveResult: 'Yellow-orange precipitate! 🟡 (Carbonyl group confirmed)', negativeResult: 'No precipitate (No carbonyl group)' },
];

const STEPS = [
  { title: 'Collect Sample', instruction: 'Take 1ml of the unknown organic compound in a clean test tube. Observe its physical properties: colour, smell, state.', action: 'Take Sample 🧪' },
  { title: 'Apply Tollen\'s Test', instruction: 'Add Ammoniacal Silver Nitrate (Tollen\'s Reagent) and heat in a water bath. Silver Mirror = Aldehyde!', action: 'Tollen\'s Test 🪞' },
  { title: "Apply Fehling's Test", instruction: "Add equal parts of Fehling's A (CuSO₄) and B (NaOH+KNa Tartrate). Heat. Brick-red precipitate = reducing sugar/aldehyde.", action: "Fehling's Test 🟥" },
  { title: "Apply Schiff's Test", instruction: "Add a few drops of Schiff's Reagent (Fuchsin-sulphurous acid). Turn magenta = Aldehyde.", action: "Schiff's Test 💗" },
  { title: 'Confirm & Record', instruction: 'Based on test results, identify the functional group. Aldehyde (+/+/+), Ketone (−/−/− for first 3 tests, + for 2,4-DNP).', action: 'Record Result ✅' },
];

const FunctionalGroupsLab: React.FC<FunctionalGroupsLabProps> = ({ hex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [compoundIdx, setCompoundIdx] = useState(0);
  const [appliedTest, setAppliedTest] = useState<string | null>(null);
  const [reactionAnim, setReactionAnim] = useState(0);

  const compound = COMPOUNDS[compoundIdx];
  const test = TESTS.find(t => t.id === appliedTest);
  const isPositive = test ? test.positiveFor.includes(compound.type) : false;

  const getLiquidColor = () => {
    if (!appliedTest) return compound.color;
    if (!isPositive) return test?.color || compound.color;
    switch (appliedTest) {
      case 'tollens': return `rgba(200,200,200,${reactionAnim})`;
      case 'fehling': return `rgba(${Math.floor(185 * reactionAnim + 29 * (1 - reactionAnim))}, ${Math.floor(28 * reactionAnim + 78 * (1 - reactionAnim))}, ${Math.floor(28 * reactionAnim + 216 * (1 - reactionAnim))}, 0.9)`;
      case 'schiff': return `rgba(219, 39, 119, ${0.3 + reactionAnim * 0.6})`;
      case 'dnp': return `rgba(217, 119, 6, ${reactionAnim})`;
      default: return compound.color;
    }
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

    const tx = w / 2, tubW = 60, tubH = 170, tubeTop = 70, tubeBot = tubeTop + tubH;
    const liqColor = getLiquidColor();

    // Liquid
    ctx.beginPath();
    ctx.roundRect(tx - tubW / 2 + 5, tubeTop + 20, tubW - 10, tubH - 28, [0, 0, 14, 14]);
    ctx.fillStyle = liqColor;
    ctx.fill();

    // Silver mirror effect (Tollen's positive)
    if (appliedTest === 'tollens' && isPositive) {
      const mirrorAlpha = reactionAnim * 0.8;
      const mirrorGrad = ctx.createLinearGradient(tx - tubW / 2 + 5, 0, tx + tubW / 2 - 5, 0);
      mirrorGrad.addColorStop(0, `rgba(220,220,220,${mirrorAlpha})`);
      mirrorGrad.addColorStop(0.5, `rgba(255,255,255,${mirrorAlpha * 0.5})`);
      mirrorGrad.addColorStop(1, `rgba(220,220,220,${mirrorAlpha})`);
      ctx.beginPath();
      ctx.roundRect(tx - tubW / 2 + 5, tubeTop + 20, tubW - 10, tubH - 28, [0, 0, 14, 14]);
      ctx.fillStyle = mirrorGrad;
      ctx.fill();
    }

    // Precipitate (Fehling's or DNP positive)
    if ((appliedTest === 'fehling' || appliedTest === 'dnp') && isPositive && reactionAnim > 0.3) {
      const pptColor = appliedTest === 'fehling' ? '#b91c1c' : '#d97706';
      const pptH = reactionAnim * 25;
      ctx.beginPath();
      ctx.ellipse(tx, tubeBot - 14, 22, pptH / 2, 0, 0, Math.PI * 2);
      ctx.fillStyle = pptColor;
      ctx.fill();
      // Settling particles
      for (let i = 0; i < 6; i++) {
        const py = (t * 40 + i * 30) % (tubH - 30) + tubeTop + 20;
        if (py < tubeBot) {
          ctx.beginPath();
          ctx.arc(tx - 15 + i * 7, py, 3, 0, Math.PI * 2);
          ctx.fillStyle = pptColor + '80';
          ctx.fill();
        }
      }
    }

    // Bubbles
    if (reactionAnim > 0.1) {
      for (let i = 0; i < 5; i++) {
        const phase = (t * 1.5 + i * 0.8) % 1;
        ctx.beginPath();
        ctx.arc(tx - 15 + i * 8, tubeBot - 30 - phase * 100, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${(1 - phase) * 0.5})`;
        ctx.fill();
      }
    }

    // Glass tube
    const glassGrad = ctx.createLinearGradient(tx - tubW / 2, 0, tx + tubW / 2, 0);
    glassGrad.addColorStop(0, 'rgba(200,220,255,0.2)');
    glassGrad.addColorStop(0.35, 'rgba(255,255,255,0.04)');
    glassGrad.addColorStop(1, 'rgba(200,220,255,0.18)');
    ctx.beginPath();
    ctx.roundRect(tx - tubW / 2, tubeTop, tubW, tubH, [8, 8, 20, 20]);
    ctx.fillStyle = glassGrad;
    ctx.fill();
    ctx.strokeStyle = 'rgba(148,163,184,0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = 'white';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(compound.formula, tx, tubeTop - 20);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px sans-serif';
    ctx.fillText(compound.name, tx, tubeTop - 8);
    if (test && reactionAnim > 0.5) {
      ctx.fillStyle = isPositive ? '#4ade80' : '#f87171';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(isPositive ? '✅ POSITIVE' : '❌ NEGATIVE', tx, tubeBot + 22);
    }

    animRef.current = requestAnimationFrame(animate);
  }, [step, appliedTest, isPositive, reactionAnim, compound, test]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  const applyTest = (id: string) => {
    setAppliedTest(id);
    setReactionAnim(0);
    let r = 0;
    const iv = setInterval(() => { r += 0.03; setReactionAnim(Math.min(r, 1)); if (r >= 1) clearInterval(iv); }, 40);
  };

  const handleNext = () => {
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else setCompleted(true);
  };
  const reset = () => { setStep(0); setCompleted(false); setAppliedTest(null); setReactionAnim(0); timeRef.current = 0; };
  const current = STEPS[step];

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-slate-950">
      <div className="flex-1 flex items-center justify-center p-4 flex-col gap-4">
        <canvas ref={canvasRef} width={300} height={330} className="rounded-2xl border border-white/10 shadow-2xl" />
        {step >= 1 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {TESTS.map(test => (
              <button key={test.id} onClick={() => applyTest(test.id)}
                className="px-3 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 active:scale-95 border"
                style={{ backgroundColor: test.color + '25', borderColor: test.color + '60', color: appliedTest === test.id ? 'white' : '#d1d5db' }}>
                {test.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="w-full md:w-80 bg-slate-900 border-l border-white/5 flex flex-col">
        <div className="p-5 border-b border-white/5">
          <p className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-1">Step {step + 1} of {STEPS.length}</p>
          <h2 className="text-xl font-bold text-white">{current.title}</h2>
        </div>
        <div className="flex-1 p-5 space-y-4 overflow-y-auto">
          {completed ? (
            <div className="text-center py-4">
              <CheckCircle size={36} className="mx-auto mb-3 text-green-400" />
              <h3 className="text-lg font-bold text-white mb-2">Functional Group Identified!</h3>
              <p className="text-gray-400 text-sm">{compound.name} is an <span className="text-pink-300 font-bold">{compound.type}</span> with formula {compound.formula}</p>
              <button onClick={reset} className="mt-4 flex items-center gap-2 mx-auto px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20"><RotateCcw size={14} /> Reset</button>
            </div>
          ) : (
            <>
              <div className="bg-pink-500/10 border border-pink-500/30 p-4 rounded-xl">
                <p className="text-pink-200 text-sm">{current.instruction}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Compound</p>
                <div className="grid grid-cols-3 gap-2">
                  {COMPOUNDS.map((c, i) => (
                    <button key={c.name} onClick={() => { setCompoundIdx(i); setAppliedTest(null); setReactionAnim(0); }}
                      className="py-2 rounded-xl text-xs font-bold transition-all"
                      style={{ backgroundColor: i === compoundIdx ? '#db2777' + '40' : 'rgba(255,255,255,0.05)', color: i === compoundIdx ? 'white' : '#9ca3af', border: `1px solid ${i === compoundIdx ? '#db2777' : 'rgba(255,255,255,0.1)'}` }}>
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
              {appliedTest && test && (
                <div className="p-3 rounded-xl" style={{ backgroundColor: (isPositive ? '#16a34a' : '#dc2626') + '20', border: `1px solid ${(isPositive ? '#16a34a' : '#dc2626')}40` }}>
                  <p className="text-sm font-bold" style={{ color: isPositive ? '#4ade80' : '#f87171' }}>
                    {isPositive ? test.positiveResult : test.negativeResult}
                  </p>
                </div>
              )}
              <button onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-white bg-pink-700 hover:bg-pink-600 transition-all active:scale-95">
                {step === STEPS.length - 1 ? '✅ Complete' : `${current.action} →`}
              </button>
            </>
          )}
          <div className="flex gap-1">
            {STEPS.map((_, i) => <div key={i} className="flex-1 h-1.5 rounded-full" style={{ backgroundColor: i <= step ? '#db2777' : 'rgba(255,255,255,0.1)' }} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionalGroupsLab;
