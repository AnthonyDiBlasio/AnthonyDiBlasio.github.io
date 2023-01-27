import React from 'react';




function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style={{marginTop:"3pc"}} className="nav nav-tabs">
      <li style={{marginLeft:"3pc" }} className="nav-item">
        <a style={{fontWeight:"bold",fontSize:"15px",color:"black"}}
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Anthony DiBlasio
        </a>
      </li>
      <li style={{marginLeft:"5pc",}}className="nav-item">
        <a style={{fontWeight:"bold"}}
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
  );
}

export default NavTabs;
