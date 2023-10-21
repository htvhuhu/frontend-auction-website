import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function NotFound() {

  return (
    <div>
      <Header />
      <div className="p-5 fw-b fs-4">
        <span className="me-3">Lost your way?</span>
        <Link to="/">Go Home</Link>
      </div>        
      <Footer />
    </div>
  )
}

export default NotFound;