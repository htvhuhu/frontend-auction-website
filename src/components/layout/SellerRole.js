import Header from "./Header";
import Footer from './Footer';
import { Navigate, useOutlet } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../services/AuthProvider';

function SellerRole() {
  const outlet = useOutlet();
  const { token, hasSellerRole } = useContext(AuthContext);

  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }
  if (!hasSellerRole()) {
    // If not seller, go to NotFound page
    return <Navigate to="/404" />;
  }

  return (
    <div>
      <Header />
      {outlet}
      <Footer />
    </div>
  )
}

export default SellerRole;