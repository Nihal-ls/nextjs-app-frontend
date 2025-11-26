'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "@/Firebase/firebase";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider()

  const SignInwithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const registeruser = (email, password) => {
    setLoading(true)

    return createUserWithEmailAndPassword(auth, email, password)
  }
const loginuser = (email,password) => {
 return signInWithEmailAndPassword(auth,email,password)
}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, loading, logout, SignInwithGoogle,registeruser,setUser,loginuser}}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
