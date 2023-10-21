import Header from "./Header";
import Footer from './Footer';
import { Navigate, useOutlet } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../services/AuthProvider';

function CustomerRole() {
  const outlet = useOutlet();
  const { token } = useContext(AuthContext);

  if (!token) {
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