import React, { useState } from 'react';
import './Sidebar.css';

const Sidebarmenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebarmenu;