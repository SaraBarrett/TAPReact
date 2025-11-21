/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, createContext } from "react";
 
export const AuthContext = createContext();
 
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
 
 
  const login = async (authData) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
      });
 
      if (!response.ok) {
        throw new Error("Error al autenticar");
      }
 
      const data = await response.json();
      const userData = { role: data.role, token: data.token };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    } catch (error) {
      console.error("Login fallido:", error);
      return false;
    }
  };
 
 
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
 
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};