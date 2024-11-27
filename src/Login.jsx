import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const response = await fetch('http://localhost:8082/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();
            if (response.ok) {
                navigate('/Dashboard');
            } else {
                setErrorMessage(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage("An error occurred. Please try again.");
        }
    };

    const handleHome = () => {
        navigate("/");
    };

    return (
        <div className="container">
            <button className="back-button" onClick={handleHome}>Back to Home</button>

            <div className="content">
                {/* Left side image */}
                <div className="loginimage">
                    <img src="loginimg.png" alt="Login" className="login-image" />
                </div>

                {/* Right side login form */}
                <div className="login-form-container">
                    <div className="login-header">
                        <h1 id="lg">Login</h1>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="divusername">
                            <label htmlFor="username" className="username" id="user">
                                <strong>User Name</strong>
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="username"
                                name="email"
                                placeholder="  User name"
                                value={credentials.email}
                                onChange={handleChange}
                                required
                                autoFocus
                            />
                        </div>

                        <div className="passindiv">
                            <label htmlFor="thisispass" className="password" id="passw">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                id="thisispass"
                                className="password"
                                name="password"
                                placeholder="  Password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {errorMessage && <p className="error">{errorMessage}</p>}

                        <div className="dont">
                            <p id="dha">
                                Don't have an account? <Link to="/Registration">Register</Link> here
                            </p>
                        </div>

                        <div className="btn">
                            <button type="submit" id="lgn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
