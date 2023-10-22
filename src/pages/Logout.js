import { useNavigate } from "react-router-dom";
import { AuthContext } from "../services/AuthProvider";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../components/layout/Footer";
import { useContext, useEffect } from 'react';

const Logout = () => {
    const { handleLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        handleLogout();
        navigate("/login", { replace: true });
    }, []);

    return (
        <div>Logging out...</div>
    )
};

export default Logout;