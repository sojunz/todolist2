import React from 'react';
import './Footer.css';
import logo from './images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="footer-logo" />
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;