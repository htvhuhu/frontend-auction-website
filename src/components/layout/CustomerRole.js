import Header from "./Header";
import Footer from './Footer';
import { useOutlet } from "react-router-dom";

function CustomerRole() {
  const outlet = useOutlet();

  return (
    <div>
      <Header />
      <div className="content-div">{outlet}</div>
      <Footer />
    </div>
  )
}

export default CustomerRole;