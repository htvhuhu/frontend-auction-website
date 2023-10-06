import Header from "./Header";
import Footer from './Footer';
import { useOutlet } from "react-router-dom";

function SellerRole() {
  const outlet = useOutlet();

  return (
    <div>
      <Header />
      {outlet}
      <Footer />
    </div>
  )
}

export default SellerRole;