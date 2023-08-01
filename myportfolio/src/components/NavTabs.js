import React, { useState } from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-tabs" style={{ }}>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li style={{ marginLeft: "3pc" }} className="nav-item">
          <a
            style={{ fontWeight: "bold", fontSize: "15px", color: "black" }}
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Anthony DiBlasio
          </a>
        </li>
        <li style={{}} className="nav-item">
          <a
            style={{ fontWeight: "bold" }}
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
