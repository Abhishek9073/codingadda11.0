"use client";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rev1 from "../assets/rev7.png";
import rev2 from "../assets/rev5.png";
import rev3 from "../assets/rev6.png";
import rev4 from "../assets/rev3.png";
import rev5 from "../assets/rev2.png";
import rev6 from "../assets/rev4.png";


import Image from "next/image";

import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500,
  };
  return (
    <Slider {...settings}>
    <div>
      <div className="flex flex-row justify-center ">
        <Image src={rev1} width={600} height={400} alt="review1" />
       
      </div>

    </div>

    <div>
      <div className="flex flex-row justify-center ">
      <Image src={rev2} width={600} height={400} alt="review1" />
     
      </div>

    </div>

    <div>
      <div className="flex flex-row justify-center ">
      <Image src={rev3} width={600} height={400} alt="review1" />
     
      </div>

    </div>

    <div>
      <div className="flex flex-row justify-center ">
      <Image src={rev4} width={600} height={400} alt="review1" />
     
      </div>

    </div>

    <div>
      <div className="flex flex-row justify-center ">
      <Image src={rev5} width={600} height={400} alt="review1" />
     
      </div>

    </div>

    <div>
      <div className="flex flex-row justify-center ">
      <Image src={rev6} width={600} height={400} alt="review1" />
     
      </div>

    </div>

    </Slider>
  );
}
