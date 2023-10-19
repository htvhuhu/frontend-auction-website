import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { setAuthorizationHeader } from './HttpService';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState('');
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    // console.log("token changed: ", token);
    if (token) {
      localStorage.setItem("token", token);
      setAuthorizationHeader(token);

      const decodedToken = jwtDecode(token);
      setUser(decodedToken.sub);
      setRoles(decodedToken.roles);

    } else {
      localStorage.removeItem("token");
      setAuthorizationHeader(null);
    }
  }, [token]);

  const handleLogout = () => {
    setToken();
    setUser('');
    setRoles([]);
    setAuthorizationHeader(null);
  };

  // // Memoized value of the authentication context
  // const contextValue = useMemo(
  //   () => ({
  //     token,
  //     setToken,
  //   }),
  //   [token]
  // );

  // Provide the authentication context to the children components
  return (
    // <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    <AuthContext.Provider value={{ token, setToken, user, roles, handleLogout }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;