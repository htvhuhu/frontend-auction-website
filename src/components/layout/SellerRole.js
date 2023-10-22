import Header from "./Header";
import Footer from './Footer';
import { Navigate, useOutlet } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../services/AuthProvider';

function SellerRole() {
  const outlet = useOutlet();
  const { hasSellerRole } = useContext(AuthContext);

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