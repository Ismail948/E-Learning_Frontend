import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Check if auth token is available in sessionStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!sessionStorage.getItem("authToken")
  );
  // Get user email from sessionStorage
  const [userEmail, setUserEmail] = useState(sessionStorage.getItem("userEmail"));
  const [userName, setUserName] = useState(sessionStorage.getItem("userName"));
  const [userToken, setUserToken] = useState(sessionStorage.getItem("authToken"));

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        sessionStorage.setItem("authToken", data.token); // Save the token to sessionStorage
        sessionStorage.setItem("userEmail", email); // Save the email to sessionStorage
        sessionStorage.setItem("userName",data.username);  // Save the username to sessionStorage
        
        setIsAuthenticated(true);
        setUserEmail(email); 
        setUserName(data.username);
        setUserToken(data.token);

        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login Error:", error);
      return false;
    }
  };

  const logout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("userEmail"); // Remove email from sessionStorage on logout
    setIsAuthenticated(false);
    setUserEmail(null); // Reset email state
    setUserName(null);
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userEmail, login, logout ,userName,userToken}}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
