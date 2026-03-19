import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, CheckCircle, ArrowDown, ArrowUp, Eye } from 'lucide-react';

interface StackLabProps { hex: string; }

const STEPS = [
  { title: 'Stack Data Structure', instruction: 'A Stack is a LIFO (Last In, First Out) structure. Think of a stack of plates — you can only add or remove from the TOP. The two main operations are PUSH (add) and POP (remove).', action: 'Understand Stack 📚' },
  { title: 'Push Elements', instruction: 'PUSH adds an element to the top of the stack. The stack pointer (Top) moves up. Push elements and watch the stack grow!', action: 'Push Item ⬆️' },
  { title: 'Peek Top', instruction: 'PEEK shows the top element WITHOUT removing it. The top pointer stays at the same position.', action: 'Peek Top 👁️' },
  { title: 'Pop Elements', instruction: 'POP removes and returns the top element. Top pointer decreases. The last pushed element is always the first popped — LIFO!', action: 'Pop Item ⬇️' },
  { title: 'Overflow & Underflow', instruction: 'Stack Overflow: Trying to PUSH when stack is FULL. Stack Underflow: Trying to POP when stack is EMPTY. Always check these conditions!', action: 'Test Limits ⚠️' },
];

const MAX_STACK = 7;

const BOX_COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#ec4899'];
const ITEMS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

const StackLab: React.FC<StackLabProps> = ({ hex }) => {
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [stack, setStack] = useState<string[]>([]);
  const [nextItem, setNextItem] = useState(0);
  const [message, setMessage] = useState('');
  const [msgColor, setMsgColor] = useState('#94a3b8');
  const [animating, setAnimating] = useState(false);
  const [peeked, setPeeked] = useState(false);

  const showMsg = (msg: string, color = '#4ade80') => {
    setMessage(msg);
    setMsgColor(color);
    setTimeout(() => setMessage(''), 2000);
  };

  const push = () => {
    if (animating) return;
    if (stack.length >= MAX_STACK) { showMsg('⚠️ Stack Overflow! Stack is FULL.', '#ef4444'); return; }
    const item = ITEMS[nextItem % ITEMS.length];
    setAnimating(true);
    setTimeout(() => {
      setStack(prev => [...prev, item]);
      setNextItem(n => n + 1);
      setPeeked(false);
      showMsg(`⬆️ PUSH "${item}" → Top = ${stack.length}`);
      setAnimating(false);
    }, 300);
    if (step < 1) setStep(1);
  };

  const pop = () => {
    if (animating) return;
    if (stack.length === 0) { showMsg('⚠️ Stack Underflow! Stack is EMPTY.', '#ef4444'); return; }
    const popped = stack[stack.length - 1];
    setAnimating(true);
    setTimeout(() => {
      setStack(prev => prev.slice(0, -1));
      setPeeked(false);
      showMsg(`⬇️ POP → returned "${popped}"`);
      setAnimating(false);
    }, 300);
    if (step < 3) setStep(3);
  };

  const peek = () => {
    if (stack.length === 0) { showMsg('Stack is empty — nothing to peek!', '#f59e0b'); return; }
    setPeeked(true);
    showMsg(`👁️ PEEK → Top = "${stack[stack.length - 1]}"`, '#f59e0b');
    if (step < 2) setStep(2);
  };

  const reset = () => { setStack([]); setNextItem(0); setStep(0); setCompleted(false); setMessage(''); setPeeked(false); };

  const current = STEPS[Math.min(step, STEPS.length - 1)];

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-slate-950">
      {/* Stack visual */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4">
          {/* Stack frame */}
          <div className="relative">
            {/* Container */}
            <div className="w-40 border-2 border-white/10 rounded-xl bg-slate-900 overflow-hidden shadow-inner relative flex flex-col-reverse p-1"
              style={{ height: `${MAX_STACK * 44 + 8}px` }}>
              {/* Empty slots background representation */}
              <div className="absolute inset-x-1 inset-y-1 flex flex-col-reverse pointer-events-none z-0">
                {Array.from({ length: MAX_STACK }).map((_, i) => (
                  <div key={`empty-${i}`} className="w-full h-[38px] mb-1 rounded-lg border-2 border-dashed border-slate-700/50 opacity-50" />
                ))}
              </div>

              <div className="z-10 flex flex-col-reverse">
                <AnimatePresence initial={false}>
                  {stack.map((item, i) => {
                    const isTop = i === stack.length - 1;
                    return (
                      <motion.div
                        key={`${item}-${i}`}
                        layout
                        initial={{ opacity: 0, y: -40, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: isTop && peeked ? 1.05 : 1 }}
                        exit={{ opacity: 0, x: 40, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="w-full h-[38px] rounded-lg mb-1 flex items-center justify-center font-bold text-white text-lg relative shadow-lg"
                        style={{ 
                          backgroundColor: BOX_COLORS[i % BOX_COLORS.length],
                          boxShadow: isTop && peeked ? `0 0 20px ${BOX_COLORS[i % BOX_COLORS.length]}` : 'inset 0 2px 4px rgba(255,255,255,0.2)',
                          border: isTop ? '2px solid rgba(255,255,255,0.8)' : '1px solid rgba(255,255,255,0.1)'
                        }}
                      >
                        {item}
                        {isTop && (
                          <motion.span 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="absolute -right-20 text-xs font-bold text-yellow-300 whitespace-nowrap flex items-center"
                          >
                            ← Top
                          </motion.span>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
            {/* Index labels */}
            <div className="absolute left-full ml-4 flex flex-col-reverse gap-1 top-1" style={{ height: `${MAX_STACK * 44 + 8}px` }}>
              {Array.from({ length: MAX_STACK }).map((_, i) => (
                <div key={i} className="h-[38px] mb-1 flex items-center">
                  <span className={`text-xs font-mono transition-colors ${i < stack.length ? 'text-slate-400 font-bold' : 'text-slate-700'}`}>[{i}]</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom base */}
          <div className="w-44 h-2 rounded-full bg-white/20" />
          <div className="text-center">
            <p className="text-xs text-gray-500">Size: {stack.length}/{MAX_STACK}</p>
            <div className="mt-1 w-44 bg-white/10 rounded-full h-2">
              <div className="h-2 rounded-full transition-all" style={{ width: `${(stack.length / MAX_STACK) * 100}%`, backgroundColor: stack.length >= MAX_STACK ? '#ef4444' : '#3b82f6' }} />
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-3 mt-2">
            <button onClick={push} className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all active:scale-95 flex items-center gap-1.5"><ArrowUp size={16}/> Push</button>
            <button onClick={peek} className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition-all active:scale-95 flex items-center gap-1.5"><Eye size={16}/> Peek</button>
            <button onClick={pop} className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-all active:scale-95 flex items-center gap-1.5"><ArrowDown size={16}/> Pop</button>
          </div>

          {message && (
            <div className="px-4 py-2 rounded-xl font-bold text-sm transition-all" style={{ color: msgColor, backgroundColor: msgColor + '20', border: `1px solid ${msgColor}40` }}>
              {message}
            </div>
          )}
        </div>
      </div>

      {/* Info panel */}
      <div className="w-full md:w-72 bg-slate-900 border-l border-white/5 flex flex-col">
        <div className="p-5 border-b border-white/5">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">Stack — CS Lab</p>
          <h2 className="text-xl font-bold text-white">{current.title}</h2>
        </div>
        <div className="flex-1 p-5 space-y-4 overflow-y-auto">
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-xl">
            <p className="text-blue-200 text-sm">{current.instruction}</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 font-mono text-sm">
            <p className="text-gray-400">Stack = <span className="text-white">[{stack.join(', ')}]</span></p>
            <p className="text-gray-400">Top = <span className="text-yellow-300">{stack.length > 0 ? stack[stack.length - 1] : 'null'}</span></p>
            <p className="text-gray-400">Size = <span className="text-blue-300">{stack.length}</span></p>
            <p className="text-gray-400">isEmpty = <span className={stack.length === 0 ? 'text-red-400' : 'text-gray-500'}>{String(stack.length === 0)}</span></p>
            <p className="text-gray-400">isFull = <span className={stack.length >= MAX_STACK ? 'text-red-400' : 'text-gray-500'}>{String(stack.length >= MAX_STACK)}</span></p>
          </div>
          <div className="text-xs text-gray-500 bg-white/5 p-3 rounded-xl border border-white/10">
            <p className="font-bold text-gray-300 mb-1">Applications:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Undo/Redo in text editors</li>
              <li>Browser back button</li>
              <li>Function call stack</li>
              <li>Balanced parentheses</li>
            </ul>
          </div>
          <button onClick={reset} className="w-full py-2 rounded-xl text-gray-400 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm">
            <RotateCcw size={14} /> Reset Stack
          </button>
          <div className="flex gap-1">
            {STEPS.map((_, idx) => <div key={idx} className="flex-1 h-1.5 rounded-full" style={{ backgroundColor: idx <= step ? '#3b82f6' : 'rgba(255,255,255,0.1)' }} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackLab;
