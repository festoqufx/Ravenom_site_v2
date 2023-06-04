import React, { useEffect } from "react";
import './map.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Map = () => {
    useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 2000,
        easing: 'ease-in-sine',
        delay: 100,
       });
    }, []);
  return (
    <section data-aos="zoom-out">

      <h1 style={{textAlign: "center"}}>Map</h1>

    
      <div className="mapouter">
      <div className="gmap_canvas">
      <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=2048&amp;height=800&amp;hl=en&amp;q=TEA garden imus&amp;t=p&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>

    </div>

    </section>
  )
}

export default Map