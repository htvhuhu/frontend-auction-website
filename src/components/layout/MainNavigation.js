import Nav from 'react-bootstrap/Nav';

function MainNavigation() {
  return (
    <div className='main-nav'>
      <Nav defaultActiveKey="/" >
        <Nav.Item>
          <Nav.Link href="/" className='item'>HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className='item'>BID HISTORY</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/seller/products' className='item'>SELLER</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default MainNavigation;