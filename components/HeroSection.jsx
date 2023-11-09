'use client'

import React, { Component } from "react";
import banner1 from '../assets/banner4.png';
import banner2 from '../assets/banner5.png';
import banner3 from '../assets/banner6.png'
import Image from "next/image";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function HeroSction() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <>


    <Slider {...settings}>
      <div>
      <Image
      src={banner1}
      width={1600}
      
      alt="major and minor projects"
    />
      </div>
      <div>
      <Image
      src={banner2}
      width={1600}

      alt="online and offline courses"
    />
      </div>
      <div>
      <Image
      src={banner3}
      width={1600}
   
      alt="website"
    />
      </div>
    
    </Slider>
   
  
    </>

   
  );
}