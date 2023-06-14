import React, { useEffect} from "react";
import './gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';
import image6 from '../../assets/6.png';
import image7 from '../../assets/7.png';
import image8 from '../../assets/8.png';
import image9 from '../../assets/9.png';
import image10 from '../../assets/10.png';
import image11 from '../../assets/11.png';
import image12 from '../../assets/12.png';
import image13 from '../../assets/13.png';
import image14 from '../../assets/14.png';


const Gallery = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 200,
      easing: 'ease-in-sine',
      delay: 10,
     });
  }, []);
  return (
    <section data-aos="fade-down-right" id="Web Portfolio">
    <h2>Portfolio</h2>
    <h5>Scroll the images to the left</h5>
    <p>&nbsp;</p>
    <div className="container_box">
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img src={image5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image10} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image11} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image12} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image13} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image14} alt="" />
        </SwiperSlide>
      </Swiper>
      </>
      </div>
    </section>
  )
}



export default Gallery