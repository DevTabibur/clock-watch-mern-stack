import React from 'react';
import './Banner.css';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Slider1 from '../../../assets/images/banner1.jpg';
import Slider2 from '../../../assets/images/banner2.jpg';

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='mainSwiper'>
          <div className="slider-inner-info">
            <p>Modern Design</p>
            <h1>Zuo pure collection sale of 50%</h1>
            <button className='slider-btn'>SHOP NOW</button>
          </div>
          <img src={Slider1} alt="slider__1" />
        </SwiperSlide>

        <SwiperSlide className='mainSwiper'>
          <div className="slider-inner-info">
            <p>Modern Design</p>
            <h1>Zuo pure collection sale of 50%</h1>
            <button className='slider-btn'>SHOP NOW</button>
          </div>
          <img src={Slider2} alt="slider__1" />
        </SwiperSlide>


      </Swiper>
    </>
  )
}

export default Banner