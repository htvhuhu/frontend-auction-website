import '../../css/components/layout/Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import MainNavigation from './MainNavigation';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../services/AuthProvider';

function Header() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/logout');
  }

  return (
    <>
      <Navbar className='header'>
        <Container>
          <Navbar.Brand href="/">
            <img src='/logo.png' alt='Logo' />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <b>{user}</b>
              <Button variant="warning" className='ms-3' onClick={handleLogout}>
                Logout
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MainNavigation />
    </>
  )
}

export default Header;