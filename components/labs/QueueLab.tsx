import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Plus, Minus, Eye, Layers } from 'lucide-react';

interface QueueLabProps {
  hex: string;
}

const MAX_SIZE = 8;
const COLORS = [
  'from-blue-600 to-blue-400', 'from-purple-600 to-purple-400', 
  'from-pink-600 to-pink-400', 'from-amber-600 to-amber-400', 
  'from-emerald-600 to-emerald-400', 'from-red-600 to-red-400', 
  'from-cyan-600 to-cyan-400', 'from-orange-600 to-orange-400'
];

interface QueueItem {
  id: string; // unique ID for AnimatePresence
  val: number;
  colorClass: string;
}

export default function QueueLab({ hex }: QueueLabProps) {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [nextVal, setNextVal] = useState(1);
  const [message, setMessage] = useState('Workspace Ready. Enqueue an element to begin.');
  const [highlightedFront, setHighlightedFront] = useState(false);

  const handleEnqueue = () => {
    if (queue.length >= MAX_SIZE) {
      setMessage('⚠️ Queue Overflow! Cannot add more elements.');
      return;
    }
    const newItem = {
      id: `item-${Date.now()}-${nextVal}`,
      val: nextVal,
      colorClass: COLORS[(nextVal - 1) % COLORS.length]
    };
    setQueue(prev => [...prev, newItem]);
    setNextVal(v => v + 1);
    setMessage(`Enqueued ${nextVal} at the REAR.`);
  };

  const handleDequeue = () => {
    if (queue.length === 0) {
      setMessage('⚠️ Queue Underflow! Queue is already empty.');
      return;
    }
    const dequeued = queue[0];
    setQueue(prev => prev.slice(1));
    setMessage(`Dequeued ${dequeued.val} from the FRONT.`);
  };

  const handlePeek = () => {
    if (queue.length === 0) {
      setMessage('Queue is empty! Nothing to peek.');
      return;
    }
    setHighlightedFront(true);
    setMessage(`FRONT element is ${queue[0].val}. (Peek does not remove it)`);
    setTimeout(() => setHighlightedFront(false), 1500);
  };

  const handleReset = () => {
    setQueue([]);
    setNextVal(1);
    setMessage('Queue reset. Workspace Ready.');
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#030712] overflow-hidden font-sans text-slate-200 select-none">
      
      {/* HEADER: Glassmorphic premium */}
      <div className="flex shrink-0 items-center justify-between px-6 py-4 border-b border-white/[0.05] bg-white/[0.01] backdrop-blur-2xl z-20 shadow-lg">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-3">
            <span className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400"><Layers size={18} /></span>
            Queue Data Structure
          </h2>
          <p className="text-[11px] font-medium text-slate-500 uppercase tracking-widest mt-1">First-In-First-Out (FIFO) Architecture</p>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-6 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-2xl">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase font-semibold text-slate-400">Size</span>
            <span className="font-mono text-sm font-semibold text-white">{queue.length} <span className="text-slate-600">/ {MAX_SIZE}</span></span>
          </div>
          <div className="w-px h-6 bg-white/10"></div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase font-semibold text-slate-400">Front</span>
            <span className="font-mono text-sm font-semibold text-green-400">{queue.length > 0 ? queue[0].val : '—'}</span>
          </div>
          <div className="w-px h-6 bg-white/10"></div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase font-semibold text-slate-400">Rear</span>
            <span className="font-mono text-sm font-semibold text-blue-400">{queue.length > 0 ? queue[queue.length - 1].val : '—'}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        
        {/* MAIN VISUALIZATION AREA */}
        <div className="flex-1 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,#0e1526,#000000_80%)] relative p-8">
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: 'center center' }} />

          {/* Central Queue Container */}
          <div className="relative w-full max-w-4xl h-48 border-[3px] border-y-white/20 border-x-transparent flex items-center justify-start px-8 rounded-[40px] shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] bg-black/40 backdrop-blur-sm z-10">
            
            {/* Entry/Exit Arrows */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 flex flex-col items-center opacity-40">
              <span className="text-[10px] uppercase font-bold text-red-400 tracking-widest mb-1">Exit (Front)</span>
              <motion.div animate={{ x: [-5, -15, -5] }} transition={{ repeat: Infinity, duration: 2 }} className="text-red-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m10 19-7-7 7-7"/></svg>
              </motion.div>
            </div>

            <div className="absolute -right-20 top-1/2 -translate-y-1/2 flex flex-col items-center opacity-40">
              <span className="text-[10px] uppercase font-bold text-blue-400 tracking-widest mb-1">Entry (Rear)</span>
              <motion.div animate={{ x: [5, 15, 5] }} transition={{ repeat: Infinity, duration: 2 }} className="text-blue-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </motion.div>
            </div>

            {/* Render slots underneath */}
            <div className="absolute inset-0 flex items-center gap-4 px-8 opacity-20 pointer-events-none">
              {Array.from({ length: MAX_SIZE }).map((_, i) => (
                <div key={i} className="w-20 h-24 border-2 border-dashed border-white/50 rounded-2xl shrink-0" />
              ))}
            </div>

            {/* Apple-level Spring Animated Queue Elements */}
            <div className="flex gap-4 relative z-20">
              <AnimatePresence mode="popLayout">
                {queue.map((item, index) => {
                  const isFront = index === 0;
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8, x: 100, rotateY: -90 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        x: 0, 
                        rotateY: 0,
                        filter: isFront && highlightedFront ? 'brightness(1.5) drop-shadow(0 0 20px rgba(255,255,255,0.8))' : 'brightness(1) drop-shadow(0 0 0px rgba(0,0,0,0))'
                      }}
                      exit={{ opacity: 0, scale: 0.5, x: -100, rotateY: 90, filter: 'blur(10px)' }}
                      transition={{ 
                        type: 'spring', 
                        damping: 20, 
                        stiffness: 150, 
                        mass: 0.8 
                      }}
                      className={`relative w-20 h-24 rounded-2xl bg-gradient-to-br ${item.colorClass} shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_2px_10px_rgba(255,255,255,0.4)] flex flex-col items-center justify-center border border-white/20 shrink-0 transform-style-3d`}
                    >
                      {/* Glossy overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-2xl" />
                      
                      {/* Value */}
                      <span className="text-3xl font-black text-white drop-shadow-md z-10">{item.val}</span>
                      
                      {/* Index badge */}
                      <span className="absolute bottom-2 text-[9px] font-mono text-white/70 bg-black/30 px-1.5 rounded-full z-10">[{index}]</span>

                      {/* FRONT label on first element */}
                      {isFront && (
                        <motion.div 
                          className="absolute -top-10 bg-green-500/20 text-green-400 text-[10px] font-bold px-3 py-1 rounded-full border border-green-500/50 backdrop-blur-md"
                          layoutId="frontLabel"
                        >
                          FRONT
                        </motion.div>
                      )}
                      {/* REAR label on last element */}
                      {index === queue.length - 1 && queue.length > 1 && (
                        <motion.div 
                          className="absolute -bottom-10 bg-blue-500/20 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-500/50 backdrop-blur-md"
                          layoutId="rearLabel"
                        >
                          REAR
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            
          </div>

          {/* Interactive Control Console */}
          <div className="absolute bottom-12 flex gap-4 p-4 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            <button 
              onClick={handleEnqueue}
              disabled={queue.length >= MAX_SIZE}
              className="group relative px-6 py-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100 flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] shrink-0"
            >
              <div className="bg-white/20 p-1 rounded-full"><Plus size={16} /></div>
              Enqueue (Add)
            </button>

            <button 
              onClick={handleDequeue}
              disabled={queue.length === 0}
              className="group relative px-6 py-4 rounded-2xl bg-gradient-to-br from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100 flex items-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.3)] shrink-0"
            >
              <div className="bg-white/20 p-1 rounded-full"><Minus size={16} /></div>
              Dequeue (Remove)
            </button>

            <button 
              onClick={handlePeek}
              disabled={queue.length === 0}
              className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100 flex items-center gap-2 shrink-0"
            >
              <Eye size={18} /> Peek Front
            </button>

            <div className="w-px bg-white/10 mx-2" />

            <button 
              onClick={handleReset}
              className="p-4 rounded-2xl bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-slate-400 transition-all active:scale-95 flex items-center justify-center shrink-0"
            >
              <RotateCcw size={18} />
            </button>
          </div>

          {/* Terminal output */}
          <motion.div 
            key={message}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`absolute top-8 px-6 py-3 rounded-full text-xs font-mono font-bold border backdrop-blur-md shadow-lg
              ${message.includes('Overflow') || message.includes('Underflow') 
                ? 'bg-red-500/10 text-red-400 border-red-500/30' 
                : 'bg-green-500/10 text-green-400 border-green-500/30'}`}
          >
            {message}
          </motion.div>

        </div>

      </div>
    </div>
  );
}
