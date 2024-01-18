//Navtabs.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {  faFileAlt } from '@fortawesome/free-solid-svg-icons';



import '../index.css';

function NavTabs() {
  const socialLinks = [
    { link: "https://github.com/AnthonyDiBlasio", icon: faGithub },
    { link: "https://docs.google.com/document/d/19dz01Knl24N503VwSuvD84Nkmgfk6e8UxsTLOKc1kyE/edit?usp=sharing", icon:faFileAlt },
    { link: "https://www.linkedin.com/in/anthony-diblasio/", icon: faLinkedin },
  ];

  return (
    <div style={styles.navbar}>
      <div>
        <Link to="/" style={styles.link}>
          Anthony DiBlasio
        </Link>
      </div>

      <div style={styles.rightLinks}>
        {socialLinks.map((item, index) => (
          <a key={index} href={item.link} style={styles.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={item.icon} />
          </a>
        ))}
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  container: {
    margin: 'auto',
    maxWidth: '1200px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  link: {
    color: '#333',
    fontSize: '18px',
    marginRight: '20px',
    padding: '5px',
    textDecoration: 'none',
  },
  rightLinks: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default NavTabs;
