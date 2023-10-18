import Header from "./Header";
import Footer from './Footer';
import { Navigate, useOutlet } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../services/AuthProvider';

function CustomerRole() {
  const outlet = useOutlet();
  const { token } = useContext(AuthContext);

  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Header />
      <div className="content-div">{outlet}</div>
      <Footer />
    </div>
  )
}

export default CustomerRole;