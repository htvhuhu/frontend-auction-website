import { useRouteError } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Error() {
  const error = useRouteError();
  console.log('error==', error);

  return (
    <div>
      <Header />
      <div className="p-5 fw-b fs-4">
        There is something wrong. Please try again.
      </div>
      <Footer />
    </div>
  )
}

export default Error;