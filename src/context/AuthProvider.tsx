import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
type AuthType = {
  isAuth: boolean;
  setIsAuth: (arg: boolean) => void;
  logOut: () => void;
};
const Auth = createContext<AuthType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(() => {
    const storedAuth = localStorage.getItem("isAuth");
    return storedAuth == "true";
  });
  useEffect(() => {
    localStorage.setItem("isAuth", String(isAuth));
  }, [isAuth]);
  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
  };
  return (
    <Auth.Provider value={{ isAuth, setIsAuth, logOut }}>
      {children}
    </Auth.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(Auth);
  if (!context) {
    throw new Error("some thing went wrong");
  }
  return context;
};
