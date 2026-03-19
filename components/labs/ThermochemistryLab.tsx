import React, { useRef, useEffect, useState, useCallback } from 'react';
import { RotateCcw, CheckCircle, Thermometer } from 'lucide-react';
import DraggableSlider from './DraggableSlider';

interface ThermochemistryLabProps { hex: string; }

const STEPS = [
  { title: 'Prepare Calorimeter', instruction: 'Set up a polystyrene cup as calorimeter inside a beaker (less heat loss). Place a thermometer inside. This minimizes heat exchange with surroundings.', action: 'Setup Calorimeter ☕' },
  { title: 'Measure HCl Temperature', instruction: 'Measure and record the initial temperature of 50mL of 1M HCl solution. Wait until stable.', action: 'Record T₁ (HCl) 🌡️' },
  { title: 'Measure NaOH Temperature', instruction: 'In a separate beaker, measure 50mL of 1M NaOH. Record its initial temperature T₂.', action: 'Record T₂ (NaOH) 🌡️' },
  { title: 'Mix & Observe!', instruction: 'Quickly pour the NaOH into the HCl-filled calorimeter. Stir gently. Record the maximum temperature reached (Tmax). Temperature RISES — this is exothermic!', action: 'Pour & Mix! 🔥' },
  { title: 'Calculate ΔH', instruction: 'ΔT = Tmax - T_avg. Q = mcΔT = 100g × 4.18 × ΔT J. ΔH = −Q/n kJ/mol (Standard value ≈ −57.1 kJ/mol)', action: 'Calculate ΔH 📐' },
];

const ThermochemistryLab: React.FC<ThermochemistryLabProps> = ({ hex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [t1, setT1] = useState(25);
  const [t2, setT2] = useState(26);
  const [mixed, setMixed] = useState(false);
  const [mixAnim, setMixAnim] = useState(0);
  const [currentTemp, setCurrentTemp] = useState(25.5);

  const tMax = ((t1 + t2) / 2) + 5.7;
  const deltaT = mixed ? (currentTemp - ((t1 + t2) / 2)) : 0;
  const Q = mixed ? (100 * 4.18 * deltaT).toFixed(1) : null;
  const deltaH = Q ? (-(+Q) / 0.05 / 1000).toFixed(2) : null;

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    timeRef.current += 0.03;
    const t = timeRef.current;
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, w, h);

    // === CALORIMETER (cup 1) ===
    const cal1X = w / 2 - 70, calY = 130, calW = 90, calH = 120;
    // Cup shadow
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(cal1X + calW / 2, calY + calH + 8, calW / 2, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    // Cup body
    ctx.beginPath();
    ctx.moveTo(cal1X + 8, calY);
    ctx.lineTo(cal1X, calY + calH);
    ctx.lineTo(cal1X + calW, calY + calH);
    ctx.lineTo(cal1X + calW - 8, calY);
    ctx.closePath();
    const hclLiqH = step >= 1 ? calH - 20 : 0;
    const hclColor = mixed ? `rgba(239,68,68,${0.4 + mixAnim * 0.3})` : 'rgba(96,165,250,0.5)';
    if (hclLiqH > 0) {
      ctx.fillStyle = hclColor;
      ctx.fill();
    }
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Particles / heat shimmer
    if (mixed && mixAnim > 0.5) {
      for (let i = 0; i < 10; i++) {
        const px = cal1X + 10 + Math.random() * (calW - 20);
        const py = calY + 20 + Math.random() * (calH - 30);
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(251,146,60,${Math.random() * 0.6})`;
        ctx.fill();
      }
      // Steam
      for (let i = 0; i < 4; i++) {
        const phase = (t * 0.8 + i * 0.5) % 1;
        const sx = cal1X + 20 + i * 15;
        ctx.beginPath();
        ctx.arc(sx, calY - 10 - phase * 30, 4 - phase * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.3 - phase * 0.25})`;
        ctx.fill();
      }
    }

    // Labels on cup
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(mixed ? 'HCl + NaOH' : '1M HCl', cal1X + calW / 2, calY + calH + 20);

    // === CUP 2 (NaOH) - pours at step 3 ===
    const cup2X = w / 2 + 10, cup2Y = mixed ? calY - mixAnim * 60 : calY, cup2W = 70, cup2H = 90;
    if (step >= 2 && !mixed) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cup2X + 5, cup2Y);
      ctx.lineTo(cup2X, cup2Y + cup2H);
      ctx.lineTo(cup2X + cup2W, cup2Y + cup2H);
      ctx.lineTo(cup2X + cup2W - 5, cup2Y);
      ctx.fillStyle = 'rgba(167,139,250,0.5)';
      ctx.fill();
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
      ctx.fillStyle = '#a78bfa';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('1M NaOH', cup2X + cup2W / 2, cup2Y + cup2H + 16);
    }

    // Pouring stream
    if (step >= 3 && mixAnim > 0 && mixAnim < 1) {
      const streamFromX = cup2X + cup2W / 2;
      const streamFromY = mixed ? calY - (1 - mixAnim) * 50 : calY;
      ctx.beginPath();
      ctx.moveTo(streamFromX, streamFromY + cup2H);
      ctx.bezierCurveTo(streamFromX, streamFromY + cup2H + 20, cal1X + calW / 2, calY - 10, cal1X + calW / 2, calY);
      ctx.strokeStyle = 'rgba(167,139,250,0.8)';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.stroke();
    }

    // === THERMOMETER ===
    const thermX = cal1X + calW + 25, thermY = calY - 30, thermH = 160;
    // Mercury tube
    ctx.beginPath();
    ctx.roundRect(thermX - 4, thermY, 8, thermH - 20, 4);
    ctx.fillStyle = '#1e293b';
    ctx.fill();
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.stroke();
    // Mercury level
    const displayTemp = currentTemp;
    const minT = 20, maxT = tMax + 2;
    const mercH = ((displayTemp - minT) / (maxT - minT)) * (thermH - 30);
    ctx.beginPath();
    ctx.roundRect(thermX - 2, thermY + thermH - 30 - mercH, 4, mercH, 2);
    ctx.fillStyle = mixed && mixAnim > 0.5 ? '#ef4444' : '#60a5fa';
    ctx.fill();
    // Bulb
    ctx.beginPath();
    ctx.arc(thermX, thermY + thermH - 15, 10, 0, Math.PI * 2);
    ctx.fillStyle = mixed && mixAnim > 0.5 ? '#ef4444' : '#60a5fa';
    ctx.fill();
    // Temp tick marks
    for (let temp = minT; temp <= maxT + 1; temp += 2) {
      const ty = thermY + thermH - 30 - ((temp - minT) / (maxT - minT)) * (thermH - 30);
      ctx.beginPath();
      ctx.moveTo(thermX + 4, ty);
      ctx.lineTo(thermX + 9, ty);
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = '#94a3b8';
      ctx.font = '8px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(temp + '°', thermX + 11, ty + 3);
    }
    // Current temp label
    ctx.fillStyle = mixed && mixAnim > 0.5 ? '#ef4444' : '#60a5fa';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(displayTemp.toFixed(1) + '°C', thermX, thermY - 10);

    animRef.current = requestAnimationFrame(animate);
  }, [step, mixed, mixAnim, currentTemp, t1, t2]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  const handleMix = () => {
    setMixed(true);
    let m = 0;
    const avgT = (t1 + t2) / 2;
    const iv = setInterval(() => {
      m += 0.02;
      setMixAnim(m);
      setCurrentTemp(avgT + (tMax - avgT) * Math.min(m * 1.5, 1));
      if (m >= 1) clearInterval(iv);
    }, 40);
  };

  const handleNext = () => {
    if (step === 3) handleMix();
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else setCompleted(true);
  };
  const reset = () => { setStep(0); setCompleted(false); setMixed(false); setMixAnim(0); setCurrentTemp((t1 + t2) / 2); timeRef.current = 0; };
  const current = STEPS[step];

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-slate-950">
      <div className="flex-1 flex items-center justify-center p-4">
        <canvas ref={canvasRef} width={360} height={360} className="rounded-2xl border border-white/10 shadow-2xl" style={{ boxShadow: '0 0 40px #ef444420' }} />
      </div>
      <div className="w-full md:w-80 bg-slate-900 border-l border-white/5 flex flex-col">
        <div className="p-5 border-b border-white/5">
          <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-1">Step {step + 1} of {STEPS.length}</p>
          <h2 className="text-xl font-bold text-white">{current.title}</h2>
        </div>
        <div className="flex-1 p-5 space-y-4 overflow-y-auto">
          {completed ? (
            <div className="text-center py-4">
              <CheckCircle size={36} className="mx-auto mb-3 text-green-400" />
              <h3 className="text-lg font-bold text-white mb-3">ΔH Calculated! 🔥</h3>
              <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl text-left space-y-2">
                <div className="flex justify-between text-sm"><span className="text-gray-400">T₁ (HCl)</span><span className="text-white">{t1}°C</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-400">T₂ (NaOH)</span><span className="text-white">{t2}°C</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-400">Tₘₐₓ</span><span className="text-red-300">{currentTemp.toFixed(1)}°C</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-400">ΔT</span><span className="text-orange-300">{deltaT.toFixed(1)}°C</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-400">Q</span><span className="text-yellow-300">{Q} J</span></div>
                <div className="flex justify-between font-bold"><span className="text-gray-300">ΔH (Calc)</span><span className="text-red-400">{deltaH} kJ/mol</span></div>
                <p className="text-xs text-gray-500">Standard: −57.1 kJ/mol</p>
              </div>
              <button onClick={reset} className="mt-4 flex items-center gap-2 mx-auto px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20"><RotateCcw size={14} /> Reset</button>
            </div>
          ) : (
            <>
              <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl">
                <p className="text-red-200 text-sm">{current.instruction}</p>
              </div>
              {step >= 1 && (
                <div className="space-y-2">
                  <div>
                    <DraggableSlider label="T₁ HCl" min={20} max={30} value={t1} onChange={setT1} color="#60a5fa" unit="°C" step={0.5} />
                  </div>
                  {step >= 2 && (
                    <div>
                    <DraggableSlider label="T₂ NaOH" min={20} max={30} value={t2} onChange={setT2} color="#a78bfa" unit="°C" step={0.5} />
                    </div>
                  )}
                </div>
              )}
              {mixed && (
                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-xl flex items-center gap-3">
                  <Thermometer className="text-red-400" size={18} />
                  <div>
                    <p className="text-red-300 font-bold">Tₘₐₓ = {currentTemp.toFixed(1)}°C 🔥</p>
                    <p className="text-xs text-gray-400">Exothermic reaction! Temperature rose.</p>
                  </div>
                </div>
              )}
              <button onClick={handleNext}
                className="w-full py-3 rounded-xl font-bold text-white bg-red-700 hover:bg-red-600 transition-all active:scale-95">
                {step === STEPS.length - 1 ? '✅ Complete' : `${current.action} →`}
              </button>
            </>
          )}
          <div className="flex gap-1">
            {STEPS.map((_, i) => <div key={i} className="flex-1 h-1.5 rounded-full" style={{ backgroundColor: i <= step ? '#ef4444' : 'rgba(255,255,255,0.1)' }} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThermochemistryLab;
