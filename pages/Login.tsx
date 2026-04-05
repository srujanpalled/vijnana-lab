
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Atom, Mail, Lock, User, ArrowRight, Check, BookOpen, Building, Globe, Loader2, AlertCircle } from 'lucide-react';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, googleProvider, db, setDoc, doc, getDoc } from '../services/firebase';
import { useAuth } from '../services/AuthContext';

const AVATARS = [
    'bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-red-500',
    'bg-yellow-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
];

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { user: authUser, role: authRole, loading: authLoading } = useAuth();
    const [isSignup, setIsSignup] = useState(false);
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [profileData, setProfileData] = useState({
        grade: '',
        syllabus: '',
        institution: '',
        role: 'Student' as 'Student' | 'Teacher',
        language: 'English',
        avatar: 'bg-blue-500'
    });

    React.useEffect(() => {
        if (!authLoading && authUser) {
            const path = authRole === 'Teacher' ? '/teacher-dashboard' : '/student-dashboard';
            navigate(path);
        }
    }, [authUser, authRole, authLoading, navigate]);

    const handleSignup = async () => {
        if (step === 1) {
            if (!name || !email || !password) throw new Error("Please fill all fields");
            if (password.length < 6) throw new Error("Password must be at least 6 characters");
            setStep(2);
            setLoading(false);
            return;
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
            name,
            email,
            ...profileData,
            progress: { physics: 0, chemistry: 0, biology: 0, math: 0, cs: 0 },
            createdAt: new Date().toISOString()
        });
        navigate(profileData.role === 'Teacher' ? '/teacher-dashboard' : '/student-dashboard');
    };

    const handleLogin = async () => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Fetch role to decide where to navigate
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const role = userDoc.exists() ? userDoc.data().role : 'Student';

        navigate(role === 'Teacher' ? '/teacher-dashboard' : '/student-dashboard');
    };

    const handleGoogleLogin = async () => {
        setError('');
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            // Check if user exists in DB
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            let role = 'Student';
            if (!docSnap.exists()) {
                // New user: Create profile
                await setDoc(docRef, {
                    name: user.displayName || 'User',
                    email: user.email,
                    role: 'Student',
                    grade: '',
                    syllabus: '',
                    institution: '',
                    language: 'English',
                    avatar: user.photoURL || 'bg-blue-500',
                    progress: { physics: 0, chemistry: 0, biology: 0, math: 0, cs: 0 },
                    createdAt: new Date().toISOString()
                });
            } else {
                role = docSnap.data().role || 'Student';
            }
            navigate(role === 'Teacher' ? '/teacher-dashboard' : '/student-dashboard');
        } catch (err: any) {
            setError(err.message || 'Google Sign-In failed');
        } finally {
            setLoading(false);
        }
    };

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isSignup) {
                await handleSignup();
            } else {
                await handleLogin();
            }
        } catch (err: any) {
            setError(err.message || 'Authentication failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden bg-[#020617]">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="w-full max-w-4xl bg-black/5 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10">

                {/* Left Side - Visual */}
                <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-slate-900 to-indigo-950 flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-emerald-600 rounded-lg shadow-lg shadow-emerald-500/20">
                                <Atom className="text-slate-900 dark:text-slate-900 dark:text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-display font-bold text-slate-900 dark:text-slate-900 dark:text-white tracking-tight">Vijnana Lab</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-900 dark:text-white mb-4 leading-tight">
                            {isSignup ? "Start Your Scientific Journey." : "Welcome Back, Explorer."}
                        </h2>
                        <p className="text-emerald-100/70 leading-relaxed font-light">
                            Perform real-time simulations, clear doubts instantly, and grow with smart AI guidance.
                        </p>
                    </div>
                    {/* Decorative Atom */}
                    <div className="absolute -bottom-20 -right-20 text-white/5 rotate-12">
                        <Atom size={300} />
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-1/2 p-8 md:p-12 bg-transparent dark:bg-black/20">
                    <div className="flex justify-end mb-8">
                        <button
                            onClick={() => { setIsSignup(!isSignup); setStep(1); setError(''); }}
                            className="text-sm text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:text-slate-900 dark:text-white transition-colors"
                        >
                            {isSignup ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
                        </button>
                    </div>

                    <form onSubmit={handleAuth} className="space-y-6">
                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm">
                                <AlertCircle size={16} /> {error}
                            </div>
                        )}

                        {/* LOGIN / SIGNUP STEP 1 */}
                        {(!isSignup || step === 1) && (
                            <div className="space-y-4 animate-in slide-in-from-left-8 fade-in duration-300">
                                {isSignup && (
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full bg-transparent dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-black/5 dark:bg-white/5 transition-all"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            required={isSignup}
                                        />
                                    </div>
                                )}
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-transparent dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-black/5 dark:bg-white/5 transition-all"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full bg-transparent dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-black/5 dark:bg-white/5 transition-all"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* SIGNUP STEP 2: PROFILE */}
                        {isSignup && step === 2 && (
                            <div className="space-y-4 animate-in slide-in-from-right-8 fade-in duration-300">
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                                    <select
                                        className="w-full bg-transparent dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl py-3.5 pl-12 pr-10 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/5 dark:bg-white/5 transition-all appearance-none cursor-pointer"
                                        value={profileData.role}
                                        onChange={e => setProfileData({ ...profileData, role: e.target.value as any })}
                                        required
                                    >
                                        <option className="bg-slate-900 text-slate-900 dark:text-white" value="Student">I am a Student</option>
                                        <option className="bg-slate-900 text-slate-900 dark:text-white" value="Teacher">I am a Teacher</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                                    <select
                                        className="w-full bg-transparent dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl py-3.5 pl-12 pr-10 text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-black/5 dark:bg-white/5 transition-all appearance-none cursor-pointer"
                                        value={profileData.grade}
                                        onChange={e => setProfileData({ ...profileData, grade: e.target.value })}
                                        required
                                    >
                                        <option className="bg-slate-900 text-gray-500" value="" disabled>Select Grade / Class</option>
                                        <option className="bg-slate-900 text-slate-900 dark:text-white" value="1st PUC / Class 11">11th / 1st PUC</option>
                                        <option className="bg-slate-900 text-slate-900 dark:text-white" value="2nd PUC / Class 12">12th / 2nd PUC</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                    </div>
                                </div>

                                {/* Board / Syllabus */}
                                <div className="relative group">
                                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                                    <select
                                        className="w-full bg-transparent dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl py-3.5 pl-12 pr-10 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/5 dark:bg-white/5 transition-all appearance-none cursor-pointer"
                                        value={profileData.syllabus}
                                        onChange={e => setProfileData({ ...profileData, syllabus: e.target.value })}
                                        required
                                    >
                                        <option className="bg-slate-900 text-gray-500" value="" disabled>Select Board / Syllabus</option>
                                        <option className="bg-slate-900 text-slate-900 dark:text-white" value="CBSE">CBSE</option>
                                        <option className="bg-slate-900 text-slate-900 dark:text-white" value="Karnataka PUC">Karnataka PUC</option>
                                        <option className="bg-slate-900 text-slate-900 dark:text-white" value="ICSE">ICSE</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                    </div>
                                </div>

                                <div className="relative group">
                                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Institution Name"
                                        className="w-full bg-transparent dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-black/5 dark:bg-white/5 transition-all"
                                        value={profileData.institution}
                                        onChange={e => setProfileData({ ...profileData, institution: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="relative group">
                                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                                    <select
                                        className="w-full bg-transparent dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl py-3.5 pl-12 pr-10 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/5 dark:bg-white/5 transition-all appearance-none cursor-pointer"
                                        value={profileData.language}
                                        onChange={e => setProfileData({ ...profileData, language: e.target.value })}
                                    >
                                        <option className="bg-slate-900 text-slate-900 dark:text-white" value="English">English</option>
                                        <option className="bg-slate-900 text-slate-900 dark:text-white" value="Hindi">Hindi</option>
                                        <option className="bg-slate-900 text-slate-900 dark:text-white" value="Kannada">Kannada</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <span className="block text-xs text-gray-600 dark:text-gray-400 mb-2 ml-1 uppercase">Choose Avatar</span>
                                    <div className="flex flex-wrap gap-3 justify-center">
                                        {AVATARS.map((av) => (
                                            <button
                                                type="button"
                                                key={av}
                                                onClick={() => setProfileData({ ...profileData, avatar: av })}
                                                className={`w-10 h-10 rounded-full ${av} transition-transform hover:scale-110 relative ${profileData.avatar === av ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-110' : 'opacity-70 hover:opacity-100'}`}
                                            >
                                                {profileData.avatar === av && <Check size={14} className="text-slate-900 dark:text-slate-900 dark:text-white absolute inset-0 m-auto" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white font-bold shadow-lg shadow-indigo-600/20 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading && <Loader2 className="animate-spin" size={20} />}
                            {!loading && isSignup && step === 1 && (
                                <>Next Step <ArrowRight size={20} /></>
                            )}
                            {!loading && isSignup && step === 2 && "Create Account"}
                            {!loading && !isSignup && "Log In"}
                        </button>

                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-black/10 dark:border-white/10"></div></div>
                            <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#020617] px-2 text-gray-500">Or continue with</span></div>
                        </div>

                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            disabled={loading}
                            className="w-full py-3.5 rounded-xl bg-white hover:bg-gray-100 text-slate-900 font-bold transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                        >
                            <svg width="20" height="20" viewBox="0 0 18 18"><path d="M17.64 9.2c0-.637-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.18L12.048 13.56c-.806.54-1.836.86-3.048.86-2.344 0-4.328-1.584-5.036-3.715H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/><path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.159 6.656 3.58 9 3.58z" fill="#EA4335"/></svg>
                            Continue with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
