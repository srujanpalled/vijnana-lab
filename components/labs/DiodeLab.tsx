import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Activity, Power, Zap, RotateCcw } from 'lucide-react';

interface DiodeLabProps {
  hex: string;
}

export default function DiodeLab({ hex }: DiodeLabProps) {
  const [mode, setMode] = useState<'forward' | 'reverse'>('forward');
  const [voltage, setVoltage] = useState(0); // 0 to 1 for forward (V), 0 to 50 for reverse (V)
  const [readings, setReadings] = useState<{ v: number; i: number }[]>([]);

  // Physics params
  const VT = 0.026; // Thermal voltage ~26mV at 300K
  const Is_F = 1e-9; // Saturation current in mA for forward scale
  const Is_R = 1.5;   // Saturation current in uA for reverse scale
  const breakdownV = 35; // Zener/Avalanche breakdown voltage

  // Springs for buttery smooth Apple-style fluid UI
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const animatedVoltage = useSpring(voltage, springConfig);

  // Calculate current based on Shockley Diode Equation
  // I = Is * (e^(V/(n*VT)) - 1)
  const V_disp = mode === 'forward' ? voltage : -voltage;
  let I_disp = 0;

  if (mode === 'forward') {
    // Current in mA
    // V is 0 to 1V. n=1.5
    I_disp = Is_F * (Math.exp(voltage / (1.5 * VT)) - 1);
    if (I_disp > 100) I_disp = 100; // clamp max
  } else {
    // Reverse bias: Current in uA
    // V is 0 to 50V. 
    // Before breakdown, I = -Is_R
    // After breakdown, current shoots up negatively
    if (voltage < breakdownV) {
      I_disp = Is_R * (1 - Math.exp(-voltage / VT)); // Approaches Is_R
    } else {
      I_disp = Is_R + Math.pow(voltage - breakdownV, 2) * 5; // Breakdown curve
    }
  }

  // Animated path for the trace
  const [pathStr, setPathStr] = useState("");

  useEffect(() => {
    // Reset voltage on mode switch
    setVoltage(0);
    setReadings([]);
    setPathStr("");
  }, [mode]);

  useEffect(() => {
    animatedVoltage.set(voltage);
  }, [voltage, animatedVoltage]);

  // Generate reference curve for background
  const drawBgCurve = () => {
    let pts = [];
    if (mode === 'forward') {
      for(let v=0; v<=1.0; v+=0.02) {
        let i = Is_F * (Math.exp(v/(1.5*VT))-1);
        if(i > 100) i = 100;
        pts.push(`${v*400},${300 - (i*3)}`);
      }
    } else {
      for(let v=0; v<=50; v+=1) {
        let i = 0;
        if(v < breakdownV) i = Is_R * (1 - Math.exp(-v/VT));
        else i = Is_R + Math.pow(v-breakdownV, 2)*5;
        if(i > 100) i = 100;
        pts.push(`${400 - v*8},${100 + i*2}`); // Reverse goes left and down
      }
    }
    return `M ${mode==='forward'?'0,300':'400,100'} L ${pts.join(' L ')}`;
  };

  const handleLog = () => {
    // Avoid duplicates near the same voltage
    if (readings.some(r => Math.abs(r.v - V_disp) < 0.01)) return;
    const newR = [...readings, { v: V_disp, i: mode === 'forward' ? I_disp : -I_disp }];
    newR.sort((a,b) => Math.abs(a.v) - Math.abs(b.v));
    setReadings(newR);

    // Update trace path
    if (newR.length > 1) {
      const pts = newR.map(pt => {
        if (mode === 'forward') return `${Math.abs(pt.v)*400},${300 - (Math.abs(pt.i)*3)}`;
        else return `${400 - Math.abs(pt.v)*8},${100 + Math.abs(pt.i)*2}`;
      });
      setPathStr(`M ${mode==='forward'?'0,300':'400,100'} L ${pts.join(' L ')}`);
    }
  };

  const depletionWidth = useTransform(animatedVoltage, v => {
    if (mode === 'forward') return Math.max(2, 20 - (v * 18)); // Shrinks
    return 20 + (v * 1.5); // Widens in reverse
  });

  return (
    <div className="flex flex-col h-full w-full bg-[#050505] overflow-hidden text-slate-200 select-none">
      
      {/* HEADER: Glassmorphic premium */}
      <div className="flex shrink-0 items-center justify-between px-6 py-4 border-b border-white/[0.05] bg-white/[0.01] backdrop-blur-2xl z-20 shadow-lg">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-orange-500/20 text-orange-400"><Activity size={18} /></span>
            Semiconductor Diode P-N Junction
          </h2>
          <p className="text-[11px] font-medium text-slate-500 uppercase tracking-widest mt-1">I-V Characteristics Curve Tracer</p>
        </div>

        {/* Dynamic Mode Switcher (Apple Style Segmented Control) */}
        <div className="flex bg-[#0a0a0a] p-1 rounded-xl border border-white/5 shadow-inner">
          <button 
            onClick={() => setMode('forward')}
            className={`relative px-6 py-2 rounded-lg text-xs font-bold transition-colors ${mode === 'forward' ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
          >
            {mode === 'forward' && <motion.div layoutId="modesel" className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.4)]" />}
            <span className="relative z-10">Forward Bias</span>
          </button>
          <button 
            onClick={() => setMode('reverse')}
            className={`relative px-6 py-2 rounded-lg text-xs font-bold transition-colors ${mode === 'reverse' ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
          >
            {mode === 'reverse' && <motion.div layoutId="modesel" className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg shadow-[0_0_15px_rgba(248,113,113,0.4)]" />}
            <span className="relative z-10">Reverse Bias</span>
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        
        {/* MAIN VISUALIZATION AREA */}
        <div className="flex-1 flex flex-col items-center bg-[radial-gradient(ellipse_at_top,#0e1526,#000000_80%)] relative p-8">
          
          {/* 1. Microscopic P-N Junction View (Animated) */}
          <div className="w-full max-w-2xl h-32 mb-8 relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md overflow-hidden shadow-2xl flex items-center justify-center">
            {/* P-Type */}
            <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-blue-900/40 to-transparent flex items-center justify-start p-4">
              <span className="text-4xl font-black text-blue-500/20 absolute left-4">P</span>
              <div className="flex flex-wrap gap-2 w-32 opacity-80">
                {Array.from({length: 12}).map((_, i) => <div key={i} className="w-2 h-2 rounded-full border border-blue-400" />)}
              </div>
            </div>
            
            {/* N-Type */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-red-900/40 to-transparent flex items-center justify-end p-4">
              <span className="text-4xl font-black text-red-500/20 absolute right-4">N</span>
              <div className="flex flex-wrap gap-2 w-32 justify-end opacity-80">
                {Array.from({length: 12}).map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-red-500" />)}
              </div>
            </div>

            {/* Depletion Region (Animated width) */}
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500/10 via-white/5 to-red-500/10 border-x border-white/20 relative z-10 flex items-center justify-center overflow-hidden"
              style={{ width: depletionWidth }}
            >
              {/* Electric field lines */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, white 2px, white 4px)' }} />
            </motion.div>

            {/* Electron Flow Animation Overlay */}
            <AnimatePresence>
              {mode === 'forward' && I_disp > 1 && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 pointer-events-none"
                >
                  {Array.from({length: 20}).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-red-400 rounded-full shadow-[0_0_8px_rgba(248,113,113,1)]"
                      initial={{ left: '100%', top: `${15 + Math.random()*70}%` }}
                      animate={{ left: '0%' }}
                      transition={{ repeat: Infinity, duration: 0.5 + Math.random(), ease: "linear", delay: Math.random() }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 2. Real-time Oscilloscope Grid */}
          <div className="flex-1 w-full max-w-3xl relative rounded-3xl border border-white/10 bg-[#020202] shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
            
            <svg width="100%" height="100%" viewBox="0 0 450 350" className="absolute inset-0 overflow-visible">
              <defs>
                <filter id="neonBlur"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                <linearGradient id="traceGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
              </defs>

              {/* Axes depending on mode */}
              {mode === 'forward' ? (
                <>
                  <line x1="0" y1="300" x2="450" y2="300" stroke="#334155" strokeWidth="2" />
                  <line x1="0" y1="300" x2="0" y2="0" stroke="#334155" strokeWidth="2" />
                  <text x="420" y="320" fill="#64748b" fontSize="12" fontWeight="bold">V_F (V)</text>
                  <text x="10" y="20" fill="#64748b" fontSize="12" fontWeight="bold">I_F (mA)</text>
                  {/* Grid Labels */}
                  {[0.2, 0.4, 0.6, 0.8, 1.0].map(v => <text key={v} x={v*400} y={315} fill="#475569" fontSize="9">{v}</text>)}
                  {[20, 40, 60, 80, 100].map(i => <text key={i} x={5} y={300 - (i*3)} fill="#475569" fontSize="9">{i}</text>)}
                </>
              ) : (
                <>
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#334155" strokeWidth="2" />
                  <line x1="400" y1="0" x2="400" y2="350" stroke="#334155" strokeWidth="2" />
                  <text x="10" y="90" fill="#64748b" fontSize="12" fontWeight="bold">V_R (V)</text>
                  <text x="410" y="340" fill="#64748b" fontSize="12" fontWeight="bold">I_R (μA)</text>
                  {[10, 20, 30, 40, 50].map(v => <text key={v} x={400 - v*8} y={90} fill="#475569" fontSize="9">-{v}</text>)}
                  {[20, 40, 60, 80, 100].map(i => <text key={i} x={410} y={100 + i*2} fill="#475569" fontSize="9">-{i}</text>)}
                </>
              )}

              {/* Ideal theoretical background curve */}
              <path d={drawBgCurve()} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="4 4" />

              {/* Logged points path */}
              {pathStr && <path d={pathStr} fill="none" stroke="url(#traceGrad)" strokeWidth="3" filter="url(#neonBlur)" />}
              
              {/* Logged Data Points */}
              {readings.map((pt, i) => {
                const cx = mode === 'forward' ? Math.abs(pt.v)*400 : 400 - Math.abs(pt.v)*8;
                const cy = mode === 'forward' ? 300 - Math.abs(pt.i)*3 : 100 + Math.abs(pt.i)*2;
                return <circle key={i} cx={cx} cy={cy} r="3" fill="#fff" stroke="#3b82f6" strokeWidth="1" filter="url(#neonBlur)" />;
              })}

              {/* Animated Live Cursor (glows brightly) */}
              <motion.g style={{
                  x: useTransform(animatedVoltage, v => mode === 'forward' ? v*400 : 400 - v*8),
                  y: mode === 'forward' 
                    ? useTransform(animatedVoltage, v => { let i = Is_F*(Math.exp(v/(1.5*VT))-1); if(i>100)i=100; return 300 - i*3; })
                    : useTransform(animatedVoltage, v => { let i = v<breakdownV ? Is_R*(1-Math.exp(-v/VT)) : Is_R + Math.pow(v-breakdownV,2)*5; if(i>100)i=100; return 100 + i*2; })
                }}>
                <circle cx="0" cy="0" r="15" fill={mode==='forward'?'#3b82f640':'#f9731640'} />
                <circle cx="0" cy="0" r="5" fill="#fff" filter="url(#neonBlur)" />
              </motion.g>

            </svg>

            {/* Live Data Overlay on Graph */}
            <div className="absolute top-6 right-6 flex items-center gap-4 bg-black/60 p-3 rounded-xl backdrop-blur-md border border-white/10">
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Voltage</span>
                <span className="font-mono text-lg font-bold text-white tracking-tight">{V_disp.toFixed(2)} V</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Current</span>
                <span className="font-mono text-lg font-bold tracking-tight" style={{ color: mode==='forward'?'#60a5fa':'#fb923c' }}>
                  {I_disp.toFixed(2)} {mode==='forward' ? 'mA' : 'μA'}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT CONTROL PANEL */}
        <div className="w-80 shrink-0 bg-white/[0.02] backdrop-blur-3xl border-l border-white/5 flex flex-col z-20 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]">
          <div className="p-6 flex-1 overflow-y-auto space-y-8">
            
            {/* Control Dial / Slider */}
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2"><Power size={14} className="text-amber-400" /> DC Power Supply</h3>
              </div>
              
              <div className="bg-[#0b1120] rounded-2xl p-6 border border-white/5 shadow-inner relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                
                <div className="text-center mb-6">
                  <div className="font-mono text-4xl font-light text-white tracking-tighter shadow-sm">{voltage.toFixed(2)}<span className="text-lg text-slate-500 ml-1">V</span></div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-500 mt-1">Output Volts</div>
                </div>

                <div className="relative h-2 bg-slate-800 rounded-full">
                  <div className="absolute left-0 top-0 bottom-0 bg-amber-500 rounded-full" style={{ width: `${(voltage / (mode === 'forward' ? 1 : 50)) * 100}%` }} />
                  <input 
                    type="range" 
                    min="0" max={mode === 'forward' ? 1 : 50} step={mode === 'forward' ? 0.01 : 0.5} 
                    value={voltage} onChange={e => setVoltage(parseFloat(e.target.value))} 
                    className="absolute inset-0 w-full opacity-0 cursor-ew-resize"
                  />
                  <motion.div 
                    className="absolute w-6 h-6 bg-white rounded-full shadow-lg pointer-events-none"
                    style={{ top: '-10px', left: `calc(${(voltage / (mode === 'forward' ? 1 : 50)) * 100}% - 12px)` }}
                  />
                </div>
              </div>
            </div>

            {/* Log Button */}
            <button 
              onClick={handleLog}
              className="w-full py-3.5 rounded-xl text-sm font-bold text-white active:scale-95 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
              style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)' }}
            >
              Log Data Point
            </button>

            {/* Readings Table */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Observation Table</h3>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-400">{readings.length} pts</span>
              </div>
              <div className="bg-[#0b1120] rounded-xl border border-white/5 overflow-hidden">
                <div className="max-h-48 overflow-y-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-white/5 sticky top-0 backdrop-blur-md">
                      <tr>
                        <th className="px-3 py-2 text-slate-400 font-medium">V (Volts)</th>
                        <th className="px-3 py-2 text-slate-400 font-medium">I ({mode==='forward'?'mA':'μA'})</th>
                      </tr>
                    </thead>
                    <tbody>
                      {readings.length === 0 && (
                        <tr><td colSpan={2} className="px-3 py-4 text-center text-slate-600 italic text-[10px]">No readings taken</td></tr>
                      )}
                      {readings.map((r, i) => (
                        <motion.tr initial={{opacity:0, y:-5}} animate={{opacity:1, y:0}} key={i} className="border-t border-white/5 hover:bg-white/5">
                          <td className="px-3 py-1.5 font-mono text-slate-300">{r.v.toFixed(2)}</td>
                          <td className="px-3 py-1.5 font-mono" style={{ color: mode==='forward'?'#60a5fa':'#fb923c' }}>{Math.abs(r.i).toFixed(2)}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Theory Peek */}
            <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
              <h4 className="text-[10px] font-bold uppercase text-blue-400 flex items-center gap-1.5 mb-2"><Zap size={10} /> Physics Core</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {mode === 'forward' 
                  ? "In Forward Bias, the applied V opposes the barrier potential. Depletion width shrinks. Current rises exponentially once cut-in voltage (~0.7V for Si) is overcome."
                  : `In Reverse Bias, V aids the barrier. Depletion width increases. Only a tiny minority carrier drift current (saturation I₀ = ${Is_R}μA) flows until Zener/Avalanche breakdown at ${breakdownV}V.`}
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
