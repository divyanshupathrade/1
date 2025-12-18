import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const token = await firebaseUser.getIdToken();
        localStorage.setItem("token", token);
        setUser(firebaseUser);
      } else {
        localStorage.removeItem("token");
        setUser(null);
      }
      setLoading(false);
    });

    return unsub;
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
