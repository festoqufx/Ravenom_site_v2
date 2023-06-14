import React, { useEffect, useCallback } from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import logo from '../../assets/logo.png';
import iconbanner from '../../assets/wing.png';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
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

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <header id="home" >

<div style={{ width: "100%", height: "749px", position: "absolute", top: "0", left: "0", zIndex: "5"}}>
<Particles
        style={{ width: "100%", height: "1000px"}}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          background: {
            // color: {
            //   value: "#0d47a1",
            // },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",

                distance: 400,
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 120,
              enable: true,
              opacity: 0.6,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
</div>

      <div  data-aos="fade-down" className="container header__container parallax">
   



        <img className="main-logo" src={logo} alt=""/>
        <h1 className='big-text'>FERDINAND ESTOQUE</h1>
        <p>&nbsp;</p>

        <h5 >a.k.a.</h5>
        <h2 className="text-light">Black Raven</h2>

        <p>&nbsp;</p>
                <img className="icon-banner" src={iconbanner} alt=""/>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
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
                <p>&nbsp;</p><p>&nbsp;</p>




               






<div class="scroll-downs">
  <div class="mousey">
    <div class="scroller">
        <a href="#contact" className="scroll__down1">
      
         &nbsp;
        </a>
    </div>
  </div>
</div>

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
