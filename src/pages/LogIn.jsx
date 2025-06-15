import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const predefinedUsers = [
  { username: 'admin', password: '1234' },
  { username: 'user1', password: 'password' },
  { username: 'guest', password: 'guest123' }
];

export default function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const isValidUser = predefinedUsers.some(
      (user) => user.username === username && user.password === password
    );

    if (isValidUser) {
      localStorage.setItem('loggedInUser', username);  // Save to localStorage
      navigate('/home');
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Log In</h2>
      <p>Enter your username and password to log in.</p>

      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '10px' }}>
          <label>Username:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>Log In</button>
      </form>

      {message && (
        <p style={{ marginTop: '15px', color: 'red' }}>{message}</p>
      )}
    </div>
  );
}
