// src/Signup.js
import React, { useState } from 'react';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        // Here you would typically send the username and password to your backend for registration
        console.log('User  registered:', { username, password });
        
        // Clear the form
        setUsername('');
        setPassword('');
        setError('');
        alert("User  registered successfully!");
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;