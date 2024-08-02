// src/Header.js
import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-menu">
        <div className="logo">MyApp</div>
        <nav className="header-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="header-search">
          <input type="text" placeholder="Search..." />
          <button className="search-btn">Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
