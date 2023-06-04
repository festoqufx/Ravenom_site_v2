import React, { useEffect } from "react";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import './footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
     });
  }, []);
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer data-aos="zoom-out">
      <h1 style={{color: "black"}}>FOLLOW ME AROUND THE WEB</h1>
      <p>&nbsp;</p>
      
      <div className="footer__socials">
        <a href="#home" target="_blank" rel="noreferrer" ><FaFacebookSquare /></a>
        <a href="#home" target="_blank" rel="noreferrer" ><FaLinkedin /></a>
        <a href="#home" target="_blank" rel="noreferrer" ><FaInstagramSquare /></a>
        <a href="#home" target="_blank" rel="noreferrer" ><FaTwitterSquare /></a>
        <a href="#home" target="_blank" rel="noreferrer" ><FaGithubSquare /></a>
      </div>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; ET {year}. |  FERDINAND BELLEZA ESTOQUE   |   All Rights Reserved.</small>
      </div>
      <p>&nbsp;</p>
      <p>Made with <AiOutlineHeart/> by me.</p>
    </footer>
  )
}
export default Footer