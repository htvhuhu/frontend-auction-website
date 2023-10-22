import Nav from 'react-bootstrap/Nav';
import { AuthContext } from '../../services/AuthProvider';
import { useContext } from 'react';

function MainNavigation() {
  const { hasSellerRole } = useContext(AuthContext);

  return (
    <div className='main-nav'>
      <Nav defaultActiveKey="/" >
        <Nav.Item>
          <Nav.Link href="/" className='item'>HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/bid-history' className='item'>BID HISTORY</Nav.Link>
        </Nav.Item>
        {hasSellerRole() && <Nav.Item>
          <Nav.Link href='/seller/products' className='item'>MY PRODUCTS</Nav.Link>
        </Nav.Item>}
      </Nav>
    </div>
  )
}

export default MainNavigation;