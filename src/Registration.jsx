import React, { useState } from 'react';
import './register.css'; // CSS file for styling
import { Navigate } from 'react-router-dom';

const Registration = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [redirect, setRedirect] = useState(false); // This is used for the redirecting

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Field changed: ${name} = ${value}`);
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage('');
        setSuccessMessage('');

        if (user.password !== user.cpassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch('http://localhost:8082/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                console.error(`HTTP error! Status: ${response.status}`);
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setSuccessMessage("Registration successful!");
            setRedirect(true);
            setUser({
                username: '',
                email: '',
                password: '',
                cpassword: '',
            });
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage("Registration failed. Please try again.");
        }
    };

    if (redirect) {
        return <Navigate to="/Login" />; 
    }

    return (
        <div className="registration-container">
        <div className="image-section">
            <img src="./register.avif" alt="" className="side-image" />
        </div>
            <div className="form-section">
                <h2 id="regtitle">Registration</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        name="cpassword"
                        value={user.cpassword}
                        onChange={handleChange}
                        required
                    />
                    <button id="btnreg" type="submit">Signup</button>
                </form>

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </div>
        </div>
    );
};

export default Registration;
