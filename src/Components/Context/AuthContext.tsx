import { jwtDecode } from "jwt-decode";
import { createContext, ReactNode, useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  userData: User | null;
  saveUserData: () => void;
}
export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextProviderProps {
  children: ReactNode;
}

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [userData, setUserData] = useState<User | null>(null);

  const saveUserData = () => {
    const encodedToken = localStorage.getItem("accessToken");
    if (encodedToken) {
      const decodedToken = jwtDecode<User>(encodedToken);
      console.log(decodedToken);
      setUserData(decodedToken);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      saveUserData();
    }
  }, []);
  return (
    <AuthContext.Provider value={{ saveUserData, userData }}>
      {children}
    </AuthContext.Provider>
  );
}
