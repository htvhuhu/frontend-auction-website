import DisplayMessage from '../components/layout/DisplayMessage';
import "../css/pages/Login.css";
import { useState } from 'react';
import Footer from '../components/layout/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  const [error, setError] = useState();
  const [user, setUser] = useState({ email: '', password: '' });

  function changeHandler(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    alert("fffff")

    // handle login
  }

  return (
    <Form className='login' onSubmit={submitHandler}>
      <div className='box'>
        <h1>Login</h1>
        <div className='error_container'>
          {error && <DisplayMessage message={error} type="error" />}
        </div>
        <Form.Group className="mb-3" controlId="emailGroup">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name='email'
            onChange={changeHandler} required value={user.email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordGroup">
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' name='password' value={user.password}
            onChange={changeHandler} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="btnGroup">
          <Button variant="primary" onClick={submitHandler}>Login</Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerGroup">
          <span className='me-2'>No account?</span>
          <a href="/register">Register</a>
          <a href="/forget" className='ms-4'>Forgot Password</a>
        </Form.Group>
      </div>
      <Footer />
    </Form>
  )
}

export default Login;