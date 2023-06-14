import React, { useEffect } from "react";
import './interest.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import icons_1 from '../../assets/icons/icons_1.png';
import icons_2 from '../../assets/icons/icons_2.png';
import icons_3 from '../../assets/icons/icons_3.png';
import icons_4 from '../../assets/icons/icons_4.png';
import icons_5 from '../../assets/icons/icons_5.png';
import icons_6 from '../../assets/icons/icons_6.png';
import icons_7 from '../../assets/icons/icons_7.png';
import icons_8 from '../../assets/icons/icons_8.png';
import icons_9 from '../../assets/icons/icons_9.png';
import icons_10 from '../../assets/icons/icons_10.png';

import Box from "@mui/material/Box";


const Interest = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
     });
  }, []);
  return (
    <section data-aos="zoom-out-up" id="interest">
      <h2>Hobbies & Interest</h2>
      <p>&nbsp;</p>
      
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >

            <div className="gallery_icons">
            <img src={icons_1} alt=""  />
            <div className="desc">Coding</div>
            </div>


            <div className="gallery_icons">
            <img src={icons_2} alt=""  />
            <div className="desc">Games</div>
            </div>


            <div className="gallery_icons">
            <img src={icons_3} alt=""  />
            <div className="desc">Gym</div>
            </div>


            <div className="gallery_icons">
            <img src={icons_4} alt=""  />
            <div className="desc">Martial&nbsp;arts</div>
            </div>

            <div className="gallery_icons">
            <img src={icons_5} alt=""  />
            <div className="desc">Movies</div>
            </div>


            

          </Box>


          <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >

          


            <div className="gallery_icons">
            <img src={icons_6} alt=""  />
            <div className="desc">Music</div>
            </div>
            
            <div className="gallery_icons">
            <img src={icons_7} alt=""  />
            <div className="desc">Painting</div>
            </div>

            <div className="gallery_icons">
            <img src={icons_8} alt=""  />
            <div className="desc">Photography</div>
            </div>

            <div className="gallery_icons">
            <img src={icons_9} alt=""  />
            <div className="desc">Reading</div>
            </div>

            <div className="gallery_icons">
            <img src={icons_10} alt=""  />
            <div className="desc">Travel</div>
            </div>

          </Box>

            

            <div className="clear"></div>
    </section>
  )
}

export default Interest