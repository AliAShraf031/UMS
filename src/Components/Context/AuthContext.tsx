import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthContextProvider(props) {
  const [userData, setUserData] = useState(null);

  const saveUserData = () => {
    const encodedToken = localStorage.getItem("accessToken");
    const decodedToken = jwtDecode(encodedToken);
    console.log(decodedToken);
    setUserData(decodedToken);
  };
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      saveUserData();
    }
  }, []);
  return (
    <AuthContext.Provider value={{ saveUserData, userData }}>
      {props.children}
    </AuthContext.Provider>
  );
}
