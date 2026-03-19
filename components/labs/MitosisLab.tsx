import React, { useRef, useEffect, useState, useCallback } from 'react';
import { RotateCcw, ChevronRight, CheckCircle } from 'lucide-react';

interface MitosisLabProps { hex: string; }

const STAGES = [
  {
    name: 'Interphase',
    color: '#6366f1',
    description: 'Cell prepares for division. DNA replicates inside the nucleus. The cell grows and produces proteins.',
    action: 'Observe the enlarged nucleus with chromatin (DNA) replicating inside.',
    instruction: '🔬 Look at the nucleus — it\'s getting ready to divide! DNA is duplicating.',
    draw: (ctx: CanvasRenderingContext2D, t: number, w: number, h: number) => {
      const cx = w / 2, cy = h / 2;
      // Cell membrane
      ctx.beginPath();
      ctx.arc(cx, cy, 100, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(99, 102, 241, 0.1)';
      ctx.fill();
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 3;
      ctx.stroke();
      // Nucleus - pulsing
      const pulse = Math.sin(t * 2) * 5;
      ctx.beginPath();
      ctx.arc(cx, cy, 45 + pulse, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(99, 102, 241, 0.25)';
      ctx.fill();
      ctx.strokeStyle = '#818cf8';
      ctx.lineWidth = 2;
      ctx.stroke();
      // Chromatin threads
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + t * 0.3;
        const r = 25 + Math.sin(t + i) * 8;
        ctx.beginPath();
        ctx.arc(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#4f46e5';
        ctx.fill();
      }
      // Label
      ctx.fillStyle = '#6366f1';
      ctx.font = 'bold 14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Nucleus (DNA replicating)', cx, cy + 130);
    }
  },
  {
    name: 'Prophase',
    color: '#f59e0b',
    description: 'Chromosomes condense and become visible. Nuclear membrane begins to dissolve. Spindle fibers form.',
    action: 'Watch chromosomes condense — they become thick and visible under the microscope!',
    instruction: '🧬 Chromosomes are condensing! Each one has two chromatids joined at the centromere.',
    draw: (ctx: CanvasRenderingContext2D, t: number, w: number, h: number) => {
      const cx = w / 2, cy = h / 2;
      ctx.beginPath();
      ctx.arc(cx, cy, 100, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 158, 11, 0.1)';
      ctx.fill();
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 3;
      ctx.stroke();
      // Condensed chromosomes (X shapes)
      const chroms = [[cx-30, cy-20], [cx+20, cy-30], [cx-20, cy+25], [cx+30, cy+15], [cx, cy-10], [cx+10, cy+30]];
      chroms.forEach(([x, y], i) => {
        const angle = t * 0.5 + i;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        // X chromosome shape
        ctx.fillStyle = '#d97706';
        ctx.fillRect(-6, -2, 12, 4);
        ctx.fillRect(-2, -6, 4, 12);
        // Centromere
        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#fbbf24';
        ctx.fill();
        ctx.restore();
      });
      // Fading nuclear membrane
      const alpha = Math.max(0, 0.5 - t * 0.1);
      ctx.beginPath();
      ctx.arc(cx, cy, 48, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Chromosomes condensing!', cx, cy + 130);
    }
  },
  {
    name: 'Metaphase',
    color: '#10b981',
    description: 'Chromosomes line up at the cell\'s equator (metaphase plate). Spindle fibers attach to centromeres.',
    action: 'See all chromosomes perfectly aligned in the middle — this is the best stage to count them!',
    instruction: '📍 All chromosomes are lined up at the center (equatorial plate). Count them!',
    draw: (ctx: CanvasRenderingContext2D, t: number, w: number, h: number) => {
      const cx = w / 2, cy = h / 2;
      ctx.beginPath();
      ctx.arc(cx, cy, 100, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(16, 185, 129, 0.1)';
      ctx.fill();
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 3;
      ctx.stroke();
      // Equatorial plate line
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy);
      ctx.lineTo(cx + 100, cy);
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
      // Chromosomes on metaphase plate
      const positions = [-60, -30, 0, 30, 60, -45, 45];
      positions.forEach((dx, i) => {
        const bobY = cy + Math.sin(t * 2 + i) * 3;
        ctx.fillStyle = '#059669';
        ctx.fillRect(cx + dx - 7, bobY - 10, 5, 20);
        ctx.fillRect(cx + dx + 2, bobY - 10, 5, 20);
        ctx.beginPath();
        ctx.arc(cx + dx, bobY, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#34d399';
        ctx.fill();
        // Spindle fibers
        ctx.beginPath();
        ctx.moveTo(cx + dx, bobY);
        ctx.lineTo(cx, cy - 95);
        ctx.moveTo(cx + dx, bobY);
        ctx.lineTo(cx, cy + 95);
        ctx.strokeStyle = 'rgba(52, 211, 153, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Metaphase Plate — Count: 7', cx, cy + 130);
    }
  },
  {
    name: 'Anaphase',
    color: '#ef4444',
    description: 'Sister chromatids separate and move to opposite poles pulled by spindle fibers.',
    action: 'Chromatids are being pulled apart to opposite ends of the cell!',
    instruction: '⬆️⬇️ Chromatids are separating and moving to opposite poles!',
    draw: (ctx: CanvasRenderingContext2D, t: number, w: number, h: number) => {
      const cx = w / 2, cy = h / 2;
      // Cell elongates slightly
      ctx.beginPath();
      ctx.ellipse(cx, cy, 95, 110, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(239, 68, 68, 0.1)';
      ctx.fill();
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.stroke();
      // Chromatids moving to poles
      const separation = 30 + Math.sin(t * 0.5) * 10;
      [cy - separation - 20, cy + separation + 20].forEach((poleY, poleIdx) => {
        [-40, -20, 0, 20, 40, -30, 30].forEach((dx) => {
          ctx.fillStyle = poleIdx === 0 ? '#dc2626' : '#b91c1c';
          const y = poleIdx === 0 ? poleY : poleY;
          ctx.fillRect(cx + dx - 3, y - 8, 6, 16);
          ctx.beginPath();
          ctx.arc(cx + dx, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#fca5a5';
          ctx.fill();
        });
      });
      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Chromatids → Opposite Poles!', cx, cy + 135);
    }
  },
  {
    name: 'Telophase',
    color: '#8b5cf6',
    description: 'Two new nuclei form around separated chromosomes. Cell plate forms between the two nuclei.',
    action: 'Two new nuclei are forming! Cell is pinching in the middle.',
    instruction: '🎉 Two daughter nuclei forming! Cytokinesis (cell plate) begins.',
    draw: (ctx: CanvasRenderingContext2D, t: number, w: number, h: number) => {
      const cx = w / 2, cy = h / 2;
      // Cell pinching
      const pinch = 30 + t * 5;
      ctx.beginPath();
      ctx.ellipse(cx, cy - 50, 80, 60, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(139, 92, 246, 0.1)';
      ctx.fill();
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(cx, cy + 50, 80, 60, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(139, 92, 246, 0.1)';
      ctx.fill();
      ctx.strokeStyle = '#8b5cf6';
      ctx.stroke();
      // Cell plate
      ctx.beginPath();
      ctx.moveTo(cx - 80, cy);
      ctx.lineTo(cx + 80, cy);
      ctx.strokeStyle = '#a78bfa';
      ctx.lineWidth = 3;
      ctx.setLineDash([6, 3]);
      ctx.stroke();
      ctx.setLineDash([]);
      // New nuclei
      [cy - 50, cy + 50].forEach(ny => {
        ctx.beginPath();
        ctx.arc(cx, ny, 25, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.3)';
        ctx.fill();
        ctx.strokeStyle = '#c4b5fd';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
      ctx.fillStyle = '#8b5cf6';
      ctx.font = 'bold 14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('2 Daughter Cells Forming! 🎉', cx, cy + 135);
    }
  }
];

const MitosisLab: React.FC<MitosisLabProps> = ({ hex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const [stage, setStage] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [zoom, setZoom] = useState(1);

  const currentStage = STAGES[stage];

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    timeRef.current += 0.03;
    const t = timeRef.current;
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    // Background grid
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 30) {
      for (let y = 0; y < h; y += 30) {
        ctx.fillStyle = 'rgba(255,255,255,0.03)';
        ctx.fillRect(x, y, 1, 1);
      }
    }
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.scale(zoom, zoom);
    ctx.translate(-w / 2, -h / 2);
    currentStage.draw(ctx, t, w, h);
    ctx.restore();
    animRef.current = requestAnimationFrame(animate);
  }, [stage, zoom, currentStage]);

  useEffect(() => {
    timeRef.current = 0;
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  const nextStep = () => {
    if (stage < STAGES.length - 1) setStage(s => s + 1);
    else setCompleted(true);
  };

  const reset = () => { setStage(0); setCompleted(false); timeRef.current = 0; };

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-slate-950">
      {/* Canvas */}
      <div className="flex-1 relative flex items-center justify-center p-4">
        <div className="relative">
          <canvas ref={canvasRef} width={400} height={350} className="rounded-2xl border border-white/10 shadow-2xl" style={{ boxShadow: `0 0 40px ${currentStage.color}20` }} />
          {/* Stage indicator pills */}
          <div className="absolute top-3 left-3 flex gap-1">
            {STAGES.map((s, i) => (
              <div key={i} className="w-6 h-2 rounded-full transition-all duration-300" style={{ backgroundColor: i <= stage ? s.color : 'rgba(255,255,255,0.1)' }} />
            ))}
          </div>
          {/* Zoom */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/60 rounded-full px-3 py-1.5">
            <button onClick={() => setZoom(z => Math.max(0.7, z - 0.1))} className="text-white text-lg font-bold w-6 h-6 flex items-center justify-center hover:text-yellow-300">−</button>
            <span className="text-xs text-white/70 w-8 text-center">{Math.round(zoom * 100)}%</span>
            <button onClick={() => setZoom(z => Math.min(2, z + 0.1))} className="text-white text-lg font-bold w-6 h-6 flex items-center justify-center hover:text-yellow-300">+</button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full md:w-80 bg-slate-900 border-l border-white/5 flex flex-col">
        <div className="p-5 border-b border-white/5">
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: currentStage.color }}>Stage {stage + 1} of {STAGES.length}</p>
          <h2 className="text-2xl font-bold text-white">{currentStage.name}</h2>
        </div>
        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          {completed ? (
            <div className="text-center py-8">
              <CheckCircle size={48} className="mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-bold text-white mb-2">🎉 Mitosis Complete!</h3>
              <p className="text-gray-400 text-sm mb-4">You've observed all 5 stages of mitosis — the cell has divided into two identical daughter cells!</p>
              <button onClick={reset} className="flex items-center gap-2 mx-auto px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20">
                <RotateCcw size={14} /> Restart
              </button>
            </div>
          ) : (
            <>
              <div className="p-4 rounded-xl border" style={{ backgroundColor: `${currentStage.color}15`, borderColor: `${currentStage.color}40` }}>
                <p className="text-sm font-medium" style={{ color: currentStage.color }}>{currentStage.instruction}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">What's happening?</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{currentStage.description}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Your Action</h4>
                <p className="text-white text-sm">{currentStage.action}</p>
              </div>
              <button
                onClick={nextStep}
                className="w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all hover:brightness-110 active:scale-95"
                style={{ backgroundColor: currentStage.color, boxShadow: `0 8px 20px -8px ${currentStage.color}80` }}
              >
                {stage === STAGES.length - 1 ? '🎉 Complete Mitosis!' : `Next Stage →`}
              </button>
            </>
          )}
          {/* Stage nav */}
          <div className="grid grid-cols-5 gap-1 pt-2">
            {STAGES.map((s, i) => (
              <button key={i} onClick={() => { setStage(i); setCompleted(false); timeRef.current = 0; }}
                className="text-xs py-1.5 rounded-lg font-medium transition-all"
                style={{ backgroundColor: i === stage ? s.color : 'rgba(255,255,255,0.05)', color: i === stage ? 'white' : '#9ca3af' }}>
                {s.name.slice(0, 4)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MitosisLab;
