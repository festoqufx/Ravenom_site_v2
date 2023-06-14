import React, { useEffect} from "react";
import './svg.css';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Svg = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 200,
      easing: 'ease-in-sine',
      delay: 10,
     });
  }, []);

  return (
    <section data-aos="fade-down-right" id="experience">
    <h2 style={{ textAlign: 'center'}}>SVG</h2>
    <p>&nbsp;</p>



    </section>

  )
}


export default Svg



