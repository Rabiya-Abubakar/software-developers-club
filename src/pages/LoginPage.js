import React, { useState } from 'react';

const LoginPage = () => {
    // State for form fields and error message
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Example validation
        if (!username || !password) {
            setError('Please enter both username and password.');
            return;
        }

        // Example authentication logic (replace with real authentication)
        if (username === 'admin' && password === 'password') {
            // Redirect or perform action on successful login
            alert('Login successful!');
            // Redirect to members page or other action
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <p>Login to access members-only features.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
