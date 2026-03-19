
/**
 * ScrewGaugeLab3D
 * Features:
 *  - CSS 3D-perspective rotating thimble
 *  - Moving spindle with gap for object
 *  - Full MSR/CSR readout
 *  - Real-world pitch/LC settings
 *  - Multiple readings table & statistics
 *  - Particle spark on jaw contact
 */
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Trash2, RotateCcw } from 'lucide-react';
import ParticleEngine, { Particle, createSpark } from './ParticleEngine';
import { screwGaugeReading, analyzeReadings } from '../../services/simulationEngine';

const PITCH = 0.5; // mm
const DIVS = 50; 
const LC = 0.01; // mm

// ─── CIRCULAR SCALE (THIMBLE) ────────────────────────────────────────────────
const ThimbleScale: React.FC<{ reading: number }> = ({ reading }) => {
  const scrollY = (reading % DIVS) * 4; // 4px per division
  return (
    <div className="relative h-16 w-20 bg-slate-400 border-l border-r border-slate-600 overflow-hidden" 
      style={{ background: 'linear-gradient(180deg, #94a3b8 0%, #cbd5e1 50%, #94a3b8 100%)' }}>
      <div className="absolute left-0 w-full flex flex-col items-end pr-1 transition-all duration-100"
        style={{ transform: `translateY(${-scrollY + 32}px)` }}>
        {Array.from({ length: DIVS * 3 }, (_, i) => {
          const val = (i % DIVS);
          return (
            <div key={i} className="flex items-center gap-1 shrink-0" style={{ height: 4 }}>
              {val % 5 === 0 && <span className="text-[6px] font-mono leading-none opacity-60">{val}</span>}
              <div style={{ width: val % 5 === 0 ? 8 : 4, height: 1, background: '#1e293b' }} />
            </div>
          );
        })}
      </div>
      {/* Index Line Alignment */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-red-500 opacity-50 z-20" />
    </div>
  );
};

// ─── 3D SCREW GAUGE BODY ─────────────────────────────────────────────────────
const ScrewGaugeBody3D: React.FC<{ displayedMm: number; zeroError: number }> = ({ displayedMm, zeroError }) => {
  const corrected = Math.max(0, displayedMm - zeroError);
  const gapPx = Math.min(corrected * 10, 100); // 1mm = 10px scale for visual

  return (
    <div className="relative select-none" style={{ perspective: 1000, height: 160, width: '100%' }}>
      {/* U-Frame */}
      <div style={{
        position: 'absolute', top: 30, left: 40, width: 220, height: 100,
        border: '14px solid #334155', borderRadius: '0 0 80px 80px', borderTop: 'none',
        boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
      }}>
        {/* Anvil (fixed) */}
        <div style={{
          position: 'absolute', top: -40, left: -14, width: 20, height: 40,
          background: 'linear-gradient(90deg, #475569, #94a3b8)',
          border: '1px solid rgba(255,255,255,0.1)',
        }} />
      </div>

      {/* Main Sleeve (Fixed) */}
      <div style={{
        position: 'absolute', top: 58, left: 246, width: 120, height: 44,
        background: 'linear-gradient(180deg, #cbd5e1 0%, #94a3b8 50%, #cbd5e1 100%)',
        border: '1px solid #475569', borderRadius: '0 4px 4px 0',
        boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.4)', zIndex: 5,
      }}>
        {/* Reference Line */}
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: '#1e293b' }} />
        {/* mm Scale */}
        {Array.from({ length: 11 }, (_, i) => (
          <div key={i} style={{ position: 'absolute', left: `${i * 10 + 10}px`, top: 0, bottom: 0 }}>
             <div style={{ position: 'absolute', left: 0, top: 0, width: 1, height: 14, background: '#475569' }} />
             <div style={{ position: 'absolute', left: 5, bottom: 0, width: 1, height: 10, background: '#64748b' }} />
             {i % 5 === 0 && <span style={{ position: 'absolute', left: -2, top: 16, fontSize: 7, color: '#334155', fontFamily: 'monospace' }}>{i}</span>}
          </div>
        ))}
      </div>

      {/* Spindle (Moves with thimble) */}
      <div style={{
        position: 'absolute', top: 72, height: 16, width: 160,
        left: `${100 + gapPx}px`,
        background: 'linear-gradient(180deg, #94a3b8 0%, #f1f5f9 40%, #475569 100%)',
        border: '1px solid #475569', borderRadius: '0 4px 4px 0',
        transition: 'left 0.15s ease', zIndex: 3,
      }} />

      {/* Moving Thimble */}
      <div className="flex items-center" style={{
        position: 'absolute', top: 52, left: `${246 + gapPx}px`,
        transition: 'left 0.15s ease', zIndex: 10,
      }}>
        {/* Beveled Edge */}
        <div style={{
          width: 32, height: 56, background: '#94a3b8',
          clipPath: 'polygon(100% 0, 100% 100%, 0 85%, 0 15%)',
          borderRight: '1px solid #1e293b',
        }} />
        {/* Main Thimble Cylinder */}
        <div style={{
          width: 80, height: 56,
          background: 'linear-gradient(180deg, #475569 0%, #cbd5e1 45%, #94a3b8 55%, #1e293b 100%)',
          border: '1px solid #1e293b', borderRadius: '0 6px 6px 0',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Knurled horizontal lines simulation */}
          {Array.from({ length: 14 }, (_, i) => (
            <div key={i} style={{ position: 'absolute', top: `${i * 4}px`, left: 0, right: 0, height: 1, background: 'rgba(0,0,0,0.1)' }} />
          ))}
        </div>
      </div>

      {/* Object being measured */}
      {gapPx > 2 && (
        <div style={{
          position: 'absolute', top: 70, left: 46,
          width: `${gapPx}px`, height: 20,
          background: 'linear-gradient(90deg, #1e3a8a, #3b82f6)',
          border: '1px solid #1d4ed8', borderRadius: 2,
          boxShadow: '0 0 10px rgba(59,130,246,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'width 0.15s ease',
        }}>
          <span style={{ fontSize: 7, color: 'white', fontWeight: 'bold' }}>{corrected.toFixed(3)} mm</span>
        </div>
      )}
    </div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const ScrewGaugeLab3D: React.FC<{ hex: string; onLog?: (data: any) => void }> = ({ hex, onLog }) => {
  const [diameter, setDiameter] = useState(2.25); // mm
  const [zeroError, setZeroError] = useState(0.0); // mm
  const [readings, setReadings] = useState<number[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [tab, setTab] = useState<'gauge' | 'table' | 'guide'>('gauge');

  // Logic: 1/f = 1/v + 1/u (wait, that's mirror)
  // Screw gauge: Total Reading = MSR + (CSR * LC) - Zero Error
  const result = screwGaugeReading(diameter, zeroError);
  const { displayed_value } = result;
  
  // Back-calculate scales for display
  const totalInDivs = displayed_value / LC;
  const msr = Math.floor(displayed_value / PITCH) * PITCH;
  const csr = Math.round((displayed_value - msr) / LC);
  
  const logReading = useCallback(() => {
    const val = displayed_value - zeroError;
    setReadings(prev => [...prev, val]);
    setParticles(prev => [...prev, ...Array.from({ length: 12 }, () => createSpark(80, 100, '#3b82f6'))]);
    
    if (onLog) {
      onLog({
        id: readings.length + 1,
        thickness: parseFloat(val.toFixed(3)),
        msr: msr,
        csr: csr
      });
    }
  }, [displayed_value, zeroError, onLog, readings.length, msr, csr]);

  const stats = readings.length >= 2 ? analyzeReadings(readings) : null;

  const GUIDE = [
    { icon: '🔧', title: 'Find Zero Error', desc: 'Screw the spindle until it touches anvil. Note the circular scale reading against index line.' },
    { icon: '🔩', title: 'Insert Object', desc: 'Place the wire or metal sheet in the gap. Rotate thimble until spindle touches it.' },
    { icon: '⚙️', title: 'Use Ratchet', desc: 'Always use the ratchet (end knob) for final tightening to ensure uniform pressure and prevent damage.' },
    { icon: '👁️', title: 'Read Scale', desc: 'MSR is the last visible mark on sleeve. CSR is the thimble division coinciding with index line.' },
    { icon: '📋', title: 'Log Reading', desc: 'Apply: Reading = MSR + (CSR × LC) - ZE. Take readings at different spots.' },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-950 overflow-hidden">
      <div className="flex border-b border-white/10 bg-slate-900 shrink-0">
        {([
          { key: 'gauge', label: '🔩 Screw Gauge' },
          { key: 'table', label: '📋 Table' },
          { key: 'guide', label: '📖 Guide' },
        ] as const).map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-colors ${tab === t.key
              ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-500 hover:text-white'}`}>
            {t.label}
          </button>
        ))}
        <div className="flex-1" />
        <span className="flex items-center pr-4 text-xs font-mono text-blue-400">{readings.length} recorded</span>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col overflow-y-auto p-4 gap-4"
          style={{ background: 'radial-gradient(ellipse at 50% 30%, #0c1a3a 0%, #020617 80%)', position: 'relative' }}>

          <ParticleEngine particles={particles} setParticles={setParticles} width={500} height={300} />

          {tab === 'gauge' && (
            <>
              <ScrewGaugeBody3D displayedMm={displayed_value} zeroError={zeroError} />

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/80 border border-white/10 rounded-xl p-3">
                  <div className="text-[9px] font-bold text-slate-500 uppercase mb-2">Thimble Scale Zoom</div>
                  <div className="flex items-center justify-center p-4 bg-slate-950 rounded-lg border border-white/5">
                    <ThimbleScale reading={csr} />
                  </div>
                  <div className="text-[10px] text-blue-400 mt-2 text-center">
                    Coinciding: <strong>{csr}</strong> (CSR)
                  </div>
                </div>

                <div className="bg-slate-900/80 border border-white/10 rounded-xl p-3 flex flex-col justify-center">
                  <div className="text-[9px] font-bold text-slate-500 uppercase mb-2">Measurement Readout</div>
                  <div className="space-y-1 font-mono">
                    {[
                      { label: 'MSR', val: msr.toFixed(1), unit: 'mm' },
                      { label: 'CSR', val: csr, unit: '' },
                      { label: 'Raw', val: (msr + csr * LC).toFixed(3), unit: 'mm' },
                      { label: 'ZE', val: zeroError.toFixed(2), unit: 'mm' },
                      { label: 'Corrected', val: (displayed_value - zeroError).toFixed(3), unit: 'mm' },
                    ].map(r => (
                      <div key={r.label} className="flex justify-between text-xs">
                        <span className="text-slate-500">{r.label}</span>
                        <span className="text-white font-bold">{r.val} <small className="text-slate-600 uppercase">{r.unit}</small></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 'table' && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-900 text-slate-400 uppercase font-bold">
                      <th className="p-2 text-left">#</th>
                      <th className="p-2 text-left">Thickness (mm)</th>
                      <th className="p-2 text-left">Dev</th>
                      <th className="p-2 text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {readings.length === 0 && <tr><td colSpan={4} className="text-center p-8 text-slate-600 italic">No readings recorded</td></tr>}
                    {readings.map((r, i) => (
                      <tr key={i} className="border-b border-white/5">
                        <td className="p-2 text-slate-500">{i + 1}</td>
                        <td className="p-2 text-white font-mono font-bold">{r.toFixed(3)}</td>
                        <td className="p-2 text-slate-400 font-mono text-[10px]">
                          {stats ? (r - stats.mean).toFixed(4) : '--'}
                        </td>
                        <td className="p-2 text-right">
                          <button onClick={() => setReadings(rx => rx.filter((_, idx) => idx !== i))} className="text-red-500 opacity-50 hover:opacity-100">
                             <Trash2 size={12}/>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {stats && (
                <div className="bg-slate-900 p-4 rounded-xl border border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[9px] text-slate-500 uppercase font-bold mb-2">Statistical Results</div>
                    <div className="font-mono text-xs text-blue-300">Mean: {stats.mean.toFixed(4)} mm</div>
                    <div className="font-mono text-xs text-slate-400">Std Dev: ±{stats.std_deviation.toFixed(4)}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] text-slate-500 uppercase font-bold mb-2">Final Dimension</div>
                    <div className="text-lg font-bold text-white leading-tight">{stats.mean.toFixed(2)}</div>
                    <div className="text-[9px] text-slate-400">± {stats.absolute_uncertainty.toFixed(3)} mm</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {tab === 'guide' && (
            <div className="space-y-3">
              {GUIDE.map((g, i) => (
                <div key={i} className="bg-slate-900 border border-white/10 rounded-xl p-3 flex gap-4">
                  <span className="text-2xl">{g.icon}</span>
                  <div>
                    <div className="text-xs font-bold text-white">{g.title}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-64 shrink-0 border-l border-white/10 bg-slate-900 p-4 flex flex-col gap-4 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Thimble Rotation</span>
                <div className="flex bg-black/40 px-2 py-0.5 rounded-md border border-white/10">
                  <span className="font-mono text-[10px] text-white font-bold">{diameter.toFixed(3)}</span>
                  <span className="text-[9px] text-slate-500 ml-1">mm</span>
                </div>
              </div>
              <div className="relative h-2 bg-[#0a0f1a] rounded-full border border-white/5 shadow-inner">
                <div className="absolute left-0 top-0 bottom-0 rounded-full bg-blue-500" style={{ width: `${((diameter - 0) / (10 - 0)) * 100}%` }} />
                <input type="range" min="0" max="10" step="0.01" value={diameter} onChange={e => setDiameter(parseFloat(e.target.value))} className="absolute inset-0 w-full opacity-0 cursor-ew-resize z-20" />
                <motion.div className="absolute w-5 h-5 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.5)] pointer-events-none z-10" style={{ top: -6, left: `calc(${((diameter - 0) / (10 - 0)) * 100}% - 10px)` }} />
              </div>
            </div>

            <div className="pt-2">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Zero Error</span>
                <div className="flex bg-black/40 px-2 py-0.5 rounded-md border border-white/10">
                  <span className={`font-mono text-[10px] font-bold ${zeroError !== 0 ? 'text-red-400' : 'text-green-400'}`}>
                    {zeroError>=0?'+':''}{zeroError.toFixed(2)}
                  </span>
                  <span className="text-[9px] text-slate-500 ml-1">mm</span>
                </div>
              </div>
              <div className="relative h-2 bg-[#0a0f1a] rounded-full border border-white/5 shadow-inner">
                <div className="absolute left-1/2 top-0 bottom-0 rounded-full bg-red-500" style={{ width: `${Math.abs(zeroError) / 0.05 * 50}%`, left: zeroError < 0 ? `calc(50% - ${Math.abs(zeroError) / 0.05 * 50}%)` : '50%' }} />
                <input type="range" min="-0.05" max="0.05" step="0.01" value={zeroError} onChange={e => setZeroError(parseFloat(e.target.value))} className="absolute inset-0 w-full opacity-0 cursor-ew-resize z-20" />
                <motion.div className="absolute w-5 h-5 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.5)] pointer-events-none z-10" style={{ top: -6, left: `calc(${((zeroError - -0.05) / (0.05 - -0.05)) * 100}% - 10px)` }} />
              </div>
            </div>

            <button onClick={logReading}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white transition-all active:scale-95"
              style={{ backgroundColor: hex, boxShadow: `0 6px 16px -6px ${hex}80` }}>
              Log Thickness
            </button>

            <button onClick={() => setReadings([])}
              className="w-full py-2 rounded-xl text-xs bg-slate-800 text-slate-500 flex items-center justify-center gap-1.5 hover:text-red-400">
              <RotateCcw size={11}/> Clear All
            </button>
          </div>

          <div className="bg-slate-950 border border-white/5 rounded-xl p-3 space-y-2">
            <div className="text-[9px] font-bold text-slate-500 uppercase">Instrument Specs</div>
            <div className="flex justify-between text-[10px]">
              <span className="text-slate-500">Pitch</span>
              <span className="text-white font-mono">{PITCH} mm</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-slate-500">LC</span>
              <span className="text-white font-mono">{LC} mm</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-slate-500">Divisions</span>
              <span className="text-white font-mono">{DIVS}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrewGaugeLab3D;
