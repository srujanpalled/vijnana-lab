
import React from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { SUBJECTS } from '../constants';
import GlassCard from '../components/GlassCard';
import { Clock, Play, BookOpen, Loader2 } from 'lucide-react';
import type { Board, Standard } from '../types';
import { useAuth } from '../services/AuthContext';
import { db, doc, getDoc } from '../services/firebase';

const SubjectView: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const { user: authUser, loading: authLoading } = useAuth();
  const [profileData, setProfileData] = React.useState<{board: Board | null, standard: Standard | null}>({
    board: null,
    standard: null
  });
  const [loading, setLoading] = React.useState(true);

  const subject = SUBJECTS.find(s => s.id === subjectId);

  React.useEffect(() => {
    const fetchSyllabus = async () => {
      if (!authLoading) {
        if (authUser) {
          try {
            const docRef = doc(db, "users", authUser.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              const data = docSnap.data();
              setProfileData({
                board: data.syllabus as Board || null,
                standard: data.grade as Standard || null
              });
            }
          } catch (error) {
            console.error("Error fetching syllabus from profile:", error);
          }
        }
        
        // Fallback or override with localStorage if profile is empty
        setProfileData(prev => ({
          board: prev.board || (localStorage.getItem('vl_board') as Board | null),
          standard: prev.standard || (localStorage.getItem('vl_standard') as Standard | null)
        }));
        setLoading(false);
      }
    };

    fetchSyllabus();
  }, [authUser, authLoading]);

  if (!subject) {
    return <Navigate to="/subjects" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
          <Loader2 className="animate-spin text-blue-500" size={40} />
      </div>
    );
  }

  const { board, standard } = profileData;

  // Filter labs by selected syllabus (if set)
  const filteredLabs = subject.labs.filter(lab => {
    // If lab has no boards/standards tags, show it always (legacy labs)
    if (!lab.boards && !lab.standards) return true;
    if (!board || !standard) return true; // no filter set, show all
    const boardMatch = !lab.boards || lab.boards.includes(board);
    const stdMatch = !lab.standards || lab.standards.includes(standard);
    return boardMatch && stdMatch;
  });

  return (
    <div className="pt-28 px-6 md:px-12 lg:px-20 min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
        {/* Syllabus chip */}
        {board && standard && (
          <div className="mb-4 flex items-center gap-3 flex-wrap">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <BookOpen size={14} className="text-blue-400" />
              <span className="text-sm font-bold text-gray-300">{board} · {standard}</span>
            </div>
            <button
              onClick={() => navigate('/syllabus')}
              className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider"
            >
              Change Syllabus ↗
            </button>
            <span className="text-xs text-gray-500">{filteredLabs.length} labs</span>
          </div>
        )}
        {!board && (
          <div className="mb-4">
            <button
              onClick={() => navigate('/syllabus')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-bold hover:bg-blue-600/30 transition-all"
            >
              <BookOpen size={14} /> Select Your Syllabus to filter labs
            </button>
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
            {filteredLabs.map((lab) => (
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
            ))}
        </div>
    </div>
  );
};

export default SubjectView;
