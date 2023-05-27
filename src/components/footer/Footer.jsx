import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <a href="#home" className="footer__logo">Ferdinand Estoque</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      
      <a href="#" target="_blank" rel="noreferrer" ><FaFacebookSquare /></a>
      <a href="#" target="_blank" rel="noreferrer" ><FaLinkedin /></a>
      <a href="#" target="_blank" rel="noreferrer" ><FaInstagramSquare /></a>
      <a href="#" target="_blank" rel="noreferrer" ><FaTwitterSquare /></a>
      <a href="#" target="_blank" rel="noreferrer" ><FaGithubSquare /></a>
      
      
      </div>
      <div className="footer__copyright">
        <small>&copy; ET {year}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer