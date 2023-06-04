import React, { useEffect} from "react";
import './gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';
import image5 from '../../assets/5.jpg';
import image6 from '../../assets/6.jpg';
import image7 from '../../assets/7.jpg';
import image8 from '../../assets/8.jpg';
import image9 from '../../assets/9.jpg';
import image10 from '../../assets/10.jpg';
import image11 from '../../assets/11.jpg';
import image12 from '../../assets/12.jpg';
import image13 from '../../assets/13.jpg';
import image14 from '../../assets/14.jpg';


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
    <section data-aos="fade-down-right" id="experience">
    <h2>Gallery</h2>
    <div className="container">
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