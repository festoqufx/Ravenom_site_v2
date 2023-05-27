import React, { useEffect } from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ReactRotatingText from 'react-rotating-text'; // eslint-disabled-next-line
import './header.css';
import logo from '../../assets/logo.png';
import iconbanner from '../../assets/icon-banner1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,});
  }, []);
  var ReactRotatingText = require('react-rotating-text');
  return (
    <header id="home">
      <div  data-aos="fade-down" className="container header__container">
        
        <img className="main-logo" src={logo} alt=""/>
        <h1 className='big-text'>FERDINAND ESTOQUE</h1>
        <h5 >a.k.a.</h5>
        <h3 className="text-light">Black Raven</h3>
        <h1> <ReactRotatingText items={[
                        "Web Design",
                        "Web Maintenance",
                        "Responsive development",
                        "Rebranding",
                        "Web Consulting",
                        "Print Design",
                        "Branding",
                        "Web Development",
                        "3D and Motions Graphics",
                    ]}
                    pause={800}
                />
                </h1>
                <p>&nbsp;</p>
                <img className="icon-banner" src={iconbanner} alt=""/>
                <p>&nbsp;</p>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
