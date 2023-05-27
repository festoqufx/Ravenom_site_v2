import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ReactRotatingText from 'react-rotating-text';
// eslint-disabled-next-line
import './header.css';

const Header = () => {
  var ReactRotatingText = require('react-rotating-text');
  return (
    <header id="home">
      <div className="container header__container">
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
