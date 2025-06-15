import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setUsername(storedUser);
    } else {
      navigate('/');
    }
  }, [navigate]);

  if (!username) return null; // Prevent rendering before redirect or username is set

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome, {username}!</h2>
      <p>You have successfully logged in.</p>
    </div>
  );
}
