import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        {!isAuthenticated ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/privatetodos">Private Todos</Link></li>
            <li><Link to="/publictodos">Public Todos</Link></li>
            <li><button onClick={onLogout} className="logout-button">Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
