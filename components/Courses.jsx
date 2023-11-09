"use client";

import React from "react";
// Import css files
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import python from '../assets/course/2.png';
import java from '../assets/course/1.png';
import db from '../assets/course/3.png';
import webDes from '../assets/course/4.png'
import cAndc from '../assets/course/8.png'
import mca from '../assets/course/5.png'
import snow from '../assets/course/7.png'
import tableau from '../assets/course/6.png'
import workday from '../assets/course/9.png'
import Link from "next/link";



import Slider from "react-slick";

export default function Courses() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      
      <Link href="/courses" >
      <Slider {...settings}>

        <div>
          <div className="flex flex-col sm:flex-row   justify-center items-center ">
            <div className="bg-red-500 py-4 my-4 mx-4 sm:my-2 sm:py-2  rounded-xl text-center text-white align-text-bottom overflow-hidden">
           <Image
            src={python}
            width={340}
            alt="py"
           />
            </div>
            <div className="bg-teal-500 py-4 my-4 mx-4  sm:my-2 sm:py-2 rounded-xl text-center text-white align-text-bottom overflow-hidden">
           <Image
            src={java}
            width={340}
            alt="py"
           />
            </div>
            <div className="bg-orange-500 py-4 my-4 mx-4  sm:my-2 sm:py-2 rounded-xl text-center text-white align-text-bottom overflow-hidden">
            <Image
            src={db}
            width={340}
            alt="py"
           />
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row   justify-center items-center ">
          <div className="bg-pink-500 py-4 my-4  mx-4  sm:my-2 sm:py-2  rounded-xl text-center text-white align-text-bottom overflow-hidden">
            <Image
            src={webDes}
            width={340}
            alt="py"
           />
            </div>
            <div className="bg-yellow-500 py-4 my-4  mx-4  sm:my-2 sm:py-2 rounded-xl text-center text-white align-text-bottom overflow-hidden">
            <Image
            src={cAndc}
            width={340}
            alt="py"
           />
            </div>
            <div className="bg-green-500 py-4 my-4  mx-4  sm:my-2 sm:py-2 rounded-xl text-center text-white align-text-bottom overflow-hidden">
            <Image
            src={mca}
            width={340}
            alt="py"
           />
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col  sm:flex-row    justify-center items-center ">
          <div className="bg-purple-500 py-4 my-4  mx-4  sm:my-2 sm:py-2 rounded-xl text-center text-white align-text-bottom overflow-hidden">
            <Image
            src={snow}
            width={340}
            alt="py"
           />
            </div>
            <div className="bg-sky-500 py-4 my-4  mx-4  sm:my-2 sm:py-2 rounded-xl text-center text-white align-text-bottom overflow-hidden">
            <Image
            src={tableau}
            width={340}
            alt="py"
           />
            </div>
            <div className="bg-orange-500 py-4 my-4  mx-4  sm:my-2 sm:py-2 rounded-xl text-center text-white align-text-bottom overflow-hidden">
            <Image
            src={workday}
            width={340}
            alt="py"
           />
            </div>
          </div>
        </div>
      </Slider>
        </Link>
    </>
  );
}
