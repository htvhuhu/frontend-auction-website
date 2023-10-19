import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { setAuthorizationHeader } from './HttpService';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      setAuthorizationHeader(token);
    } else {
      localStorage.removeItem("token");
      setAuthorizationHeader(null);
    }
  }, [token]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;