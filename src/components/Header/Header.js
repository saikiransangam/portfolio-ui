import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Research</li>
          <li>About Us</li>
        </ul>
      </nav>
      <div className="auth-links">
        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </header>
  );
};

export default Header;

