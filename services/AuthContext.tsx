import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export type ProfileData = {
  name: string;
  email: string;
  role: string;
  grade: string;
  syllabus: string;
  institution: string;
  language: string;
  avatar: string;
};

type AuthContextType = {
  user: User | null;
  role: string | null;
  loading: boolean;
  profileData: ProfileData | null;
  refreshProfile: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  loading: true,
  profileData: null,
  refreshProfile: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const fetchProfile = useCallback(async (uid: string) => {
    try {
      const snap = await getDoc(doc(db, 'users', uid));
      if (snap.exists()) {
        const data = snap.data();
        const profile: ProfileData = {
          name: data.name || '',
          email: data.email || '',
          role: data.role || 'Student',
          grade: data.grade || '',
          syllabus: data.syllabus || '',
          institution: data.institution || '',
          language: data.language || 'English',
          avatar: data.avatar || '',
        };
        setRole(profile.role);
        setProfileData(profile);
      } else {
        setRole('Student');
        setProfileData(null);
      }
    } catch (error) {
      console.error("Auth context error:", error);
      setRole('Student');
      setProfileData(null);
    }
  }, []);

  const refreshProfile = useCallback(async () => {
    if (user) {
      await fetchProfile(user.uid);
    }
  }, [user, fetchProfile]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          setUser(currentUser);
          await fetchProfile(currentUser.uid);
        } else {
          setUser(null);
          setRole(null);
          setProfileData(null);
        }
      } catch (error) {
        console.error("Auth context error:", error);
        setUser(currentUser);
        setRole('Student');
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, [fetchProfile]);

  return (
    <AuthContext.Provider value={{ user, role, loading, profileData, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

