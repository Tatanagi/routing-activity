import './App.css';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import React from 'react';

// Page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LogIn from './pages/LogIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav style={{ padding: '1rem', background: '#eee' }}>
          <h1>Rafalis Website</h1>
          <NavLink to="/home" style={{ marginRight: '1rem' }}>Home</NavLink>
          <NavLink to="/about" style={{ marginRight: '1rem' }}>About</NavLink>
          <NavLink to="/contact" style={{ marginRight: '1rem' }}>Contact</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />             
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />  
          <Route path="/login" element={<LogIn />} />
          
          {/* Redirect any unknown path to Login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
