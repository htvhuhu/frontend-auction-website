import '../../css/components/layout/Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import MainNavigation from './MainNavigation';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../services/AuthProvider';

function Header() {
  const { user, roles } = useContext(AuthContext);
  return (
    <>
      <Navbar className='header'>
        <Container>
          <Navbar.Brand href="#home">
            <img src='/logo.png' alt='Logo' />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{user}</a>
              <Button variant="warning" className='ms-3'>
                <Link to='/logout'>Logout</Link>
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