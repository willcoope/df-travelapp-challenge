import React, { useState } from 'react';
import axios from 'axios';
import authService from '../../../services/auth.service';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
        const response = await authService.login(username, password);
        console.log(response);
        navigate("/favourites");
        } catch (error) {
        console.log(error);
        setError(error.message);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
        </form>
    );
    };

export default LoginForm;