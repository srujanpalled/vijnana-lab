import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
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

const PROFILE_CACHE_KEY = 'vl_profile_cache';
const ROLE_CACHE_KEY = 'vl_role_cache';

// Instantly read cached profile so loading can start as false
const getCachedProfile = (): ProfileData | null => {
  try {
    const raw = localStorage.getItem(PROFILE_CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const getCachedRole = (): string | null => {
  try {
    return localStorage.getItem(ROLE_CACHE_KEY);
  } catch {
    return null;
  }
};

const cacheProfile = (profile: ProfileData) => {
  try {
    localStorage.setItem(PROFILE_CACHE_KEY, JSON.stringify(profile));
    localStorage.setItem(ROLE_CACHE_KEY, profile.role);
  } catch {
    // localStorage full or unavailable — silently ignore
  }
};

const clearProfileCache = () => {
  try {
    localStorage.removeItem(PROFILE_CACHE_KEY);
    localStorage.removeItem(ROLE_CACHE_KEY);
  } catch {
    // ignore
  }
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  loading: true,
  profileData: null,
  refreshProfile: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Hydrate immediately from cache — no spinner needed if cache exists
  const cachedProfile = useRef(getCachedProfile());
  const cachedRole = useRef(getCachedRole());
  const hasCachedData = cachedProfile.current !== null;

  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(cachedRole.current);
  // Start with loading=false if we have cached data, so no spinner shows
  const [loading, setLoading] = useState(!hasCachedData);
  const [profileData, setProfileData] = useState<ProfileData | null>(cachedProfile.current);

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
        // Persist to cache for next page load
        cacheProfile(profile);
      } else {
        setRole('Student');
        setProfileData(null);
        clearProfileCache();
      }
    } catch (error) {
      console.error("Auth context error:", error);
      // On network error, keep cached data if available — don't wipe it
      if (!cachedProfile.current) {
        setRole('Student');
        setProfileData(null);
      }
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
          // Background fetch — UI already rendered from cache
          await fetchProfile(currentUser.uid);
        } else {
          setUser(null);
          setRole(null);
          setProfileData(null);
          clearProfileCache();
        }
      } catch (error) {
        console.error("Auth context error:", error);
        setUser(currentUser);
        if (!cachedRole.current) setRole('Student');
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

