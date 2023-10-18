import { useNavigate } from "react-router-dom";
import {AuthContext } from "../services/AuthProvider";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../components/layout/Footer";
import { useContext } from 'react';

const Logout = () => {
    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        // fake clearing token
        setToken();
        navigate("/login", { replace: true });
    };

    return (
        <Form className='login' onSubmit={handleLogout}>
            <div className='box'>
                <h1>Logout</h1>
                <Form.Group className="mb-3" controlId="btnGroup">
                    <Button variant="primary" onClick={handleLogout}>Logout</Button>
                </Form.Group>
            </div>
            <Footer />
        </Form>
    )
};

export default Logout;