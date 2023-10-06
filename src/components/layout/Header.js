import '../../css/components/layout/Header.css';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <>
    <div className="header">
      <img src='logo.png' alt='Logo'/>
      <div>
        <Button variant="outline-primary">LOGIN</Button>
        <Button variant="outline-danger ml">REGISTER</Button>
      </div>
    </div>
    <div className='main-nav'>

    </div>
    </>
  )
}

export default Header;