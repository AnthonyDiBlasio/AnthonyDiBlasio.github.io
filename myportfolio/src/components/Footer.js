
import React from 'react';

import '../index.css'
export default function Footer() {
  return (
    <div  className="footer-basic">
    <footer>
        <div className="social"></div>
        <ul className="list-inline">
            <li className="list-inline-item"><a href="#home">Anthony DiBlasio</a></li>
            <li className="list-inline-item"><a href="#about">About</a></li>
            <li className="list-inline-item"><a href="#projects">Projects</a></li>
            <li className="list-inline-item"><a href="#contact">Contact me</a></li>
        </ul>
        <p className="copyright">copyright &copy; anthonydiblasio.github.io 2023</p>
    </footer>
    </div>
  );
}