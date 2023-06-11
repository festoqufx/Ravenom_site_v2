import React, { useEffect} from "react";
import './gallery2.css';
import AOS from 'aos';
import 'aos/dist/aos.css';






const Gallery2 = () => {

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
    <h2 style={{ textAlign: 'center'}}>Gallery</h2>

  <div className="range" style={"--p:60"}>
  <div className="range__label">Progress</div>
</div>



    </section>

  )
}


export default Gallery2



