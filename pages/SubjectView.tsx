
import React from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { SUBJECTS } from '../constants';
import GlassCard from '../components/GlassCard';
import { Clock, Play, BookOpen, Loader2, UserCog } from 'lucide-react';
import type { Board, Standard } from '../types';
import { useAuth } from '../services/AuthContext';

const SubjectView: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const { user: authUser, loading: authLoading, profileData } = useAuth();
  
  const [selectedBoard, setSelectedBoard] = React.useState<Board | null>(null);
  const [selectedStandard, setSelectedStandard] = React.useState<Standard | null>(null);

  const subject = SUBJECTS.find(s => s.id === subjectId);

  // Normalize old grade strings to canonical Standard type
  // This handles existing users who signed up with "11th Grade (PUC I)" etc.
  const normalizeStandard = (raw: string | null | undefined): Standard | null => {
    if (!raw) return null;
    // Already canonical
    if (raw === '1st PUC / Class 11' || raw === '2nd PUC / Class 12') return raw;
    // Map old signup strings
    const lower = raw.toLowerCase();
    if (lower.includes('11') || lower.includes('1st puc')) return '1st PUC / Class 11';
    if (lower.includes('12') || lower.includes('2nd puc')) return '2nd PUC / Class 12';
    return null;
  };

  const normalizeBoard = (raw: string | null | undefined): Board | null => {
    if (!raw) return null;
    if (raw === 'CBSE' || raw === 'Karnataka PUC' || raw === 'ICSE') return raw;
    // Fuzzy match for existing data
    const lower = raw.toLowerCase();
    if (lower.includes('cbse')) return 'CBSE';
    if (lower.includes('karnataka') || lower.includes('puc')) return 'Karnataka PUC';
    if (lower.includes('icse') || lower.includes('isc')) return 'ICSE';
    return null;
  };

  // Keep filters reactive — always sync when profileData changes
  React.useEffect(() => {
    if (!authLoading) {
      const rawBoard = profileData?.syllabus || localStorage.getItem('vl_board');
      const rawStandard = profileData?.grade || localStorage.getItem('vl_standard');
      setSelectedBoard(normalizeBoard(rawBoard));
      setSelectedStandard(normalizeStandard(rawStandard));
    }
  }, [authLoading, profileData]);

  if (!subject) {
    return <Navigate to="/subjects" replace />;
  }

  if (authLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
          <Loader2 className="animate-spin text-blue-500" size={40} />
      </div>
    );
  }

  // If profile not set, prompt user (fallback to localStorage for instant sync)
  const profileBoard = normalizeBoard(profileData?.syllabus || localStorage.getItem('vl_board'));
  const profileStandard = normalizeStandard(profileData?.grade || localStorage.getItem('vl_standard'));
  const profileIncomplete = !profileBoard || !profileStandard;

  // Filter labs strictly by selected board AND standard
  const filteredLabs = subject.labs.filter(lab => {
    if (profileIncomplete) return true; // show all if profile not set (fallback)
    if (!lab.boards && !lab.standards) return true;
    
    const boardMatch = !selectedBoard || !lab.boards || lab.boards.includes(selectedBoard);
    const stdMatch = !selectedStandard || !lab.standards || lab.standards.includes(selectedStandard);
    return boardMatch && stdMatch;
  });

  const boardsList: Board[] = ['CBSE', 'Karnataka PUC', 'ICSE'];
  const standardsList: Standard[] = ['1st PUC / Class 11', '2nd PUC / Class 12'];

  return (
    <div className="pt-28 px-6 md:px-12 lg:px-20 min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-300">

        {/* Profile Not Set Banner */}
        {profileIncomplete && (
          <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20">
                <UserCog size={22} className="text-amber-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-amber-300">Profile not configured</p>
                <p className="text-xs text-amber-400/70">Set your Syllabus & Grade in your Profile to see only your relevant experiments.</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/profile')}
              className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold transition-colors shadow-lg shadow-amber-500/20 shrink-0"
            >
              Go to Profile →
            </button>
          </div>
        )}

        {/* Filters Section */}
        {!profileIncomplete && (
        <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col gap-3 w-full">
            {/* Board Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider mr-2">Board:</span>
              {boardsList.map(b => (
                <button
                  key={b}
                  onClick={() => setSelectedBoard(b)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                    selectedBoard === b 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-white/5 text-gray-500 hover:text-gray-300 border border-white/5 hover:bg-white/10'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
            
            {/* Standard Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider mr-2">Grade:</span>
              {standardsList.map(s => (
                <button
                  key={s}
                  onClick={() => setSelectedStandard(s)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                    selectedStandard === s 
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' 
                    : 'bg-white/5 text-gray-500 hover:text-gray-300 border border-white/5 hover:bg-white/10'
                  }`}
                >
                  {s.includes('1st') ? 'Class 11' : 'Class 12'}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-end shrink-0">
             <span className="text-sm font-bold text-gray-400 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
               {filteredLabs.length} Labs Available
             </span>
             {profileBoard && profileStandard && (selectedBoard !== profileBoard || selectedStandard !== profileStandard) && (
               <button
                 onClick={() => {
                   setSelectedBoard(profileBoard);
                   setSelectedStandard(profileStandard);
                 }}
                 className="mt-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
               >
                 Reset to Profile ↺
               </button>
             )}
          </div>
        </div>
        )}

        {/* Header */}
        <div className="mb-12 relative overflow-hidden glass-panel rounded-3xl p-8 md:p-12 border-none">
            <div 
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -mr-20 -mt-20 opacity-20"
                style={{ backgroundColor: subject.hex }}
            ></div>
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-white/50 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/5">
                        <subject.icon size={32} style={{ color: subject.hex }} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white transition-colors text-glow">{subject.name} Lab</h1>
                </div>
                <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl transition-colors">{subject.description}</p>
            </div>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {filteredLabs.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <BookOpen size={48} className="mx-auto text-gray-600 mb-4" />
                <p className="text-lg font-bold text-gray-400">No experiments found</p>
                <p className="text-sm text-gray-500 mt-1">Try switching the Board or Grade filter above.</p>
              </div>
            ) : (
            filteredLabs.map((lab) => (
                <GlassCard key={lab.id} className="flex flex-col h-full group" color={subject.color}>
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-500 border border-slate-300 dark:border-gray-700 px-2 py-1 rounded">
                            {lab.category}
                        </span>
                        <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                            style={{ backgroundColor: `${subject.hex}20` }}
                        >
                            <Play size={16} style={{ color: subject.hex, fill: subject.hex }} />
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">
                        {lab.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400 mb-2 flex-1">{lab.description}</p>
                    
                    {/* Board/Standard tags */}
                    {lab.boards && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {lab.boards.map(b => (
                          <span key={b} className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/5 text-gray-500 border border-white/5">{b}</span>
                        ))}
                        {lab.standards?.map(s => (
                          <span key={s} className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            {s.includes('1st') ? '11th' : '12th'}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-gray-500 border-t border-slate-200 dark:border-white/5 pt-4">
                        <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{lab.duration}</span>
                        </div>
                    </div>
                    <Link to={`/subjects/${subject.id}/${lab.id}`} className="absolute inset-0" />
                </GlassCard>
            ))
            )}
        </div>
    </div>
  );
};

export default SubjectView;
