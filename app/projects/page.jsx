import React from "react";
import Image from "next/image";
import projectbanner from "../../assets/projectbanner2.png";

const page = () => {
  return (
    <div>
      <div>
        <Image src={projectbanner} width={1600} height={500} alt="banner" />
      </div>
      <div className="flex flex-row justify-around">
        <div className="bg-sky-800 w-1/3 h-80 mt-12 rounded-lg">
          <div className="text-white text-center pt-6">Major Projects</div>
          <div className="text-white p-7">
            <p>&#8226; Hangman Game</p>
            <p> &#8226; Restaurant Booking Website</p>
            <p>&#8226; Web Scraping Using Beautiful Soup</p>
            <p>&#8226; Twitter Sentiment Analysis.</p>
            <p>&#8226; Library Management System.</p>
            <p>&#8226; Building Chatbots.</p>
            <p>&#8226; Uber Data Analysis</p>
            <p> &#8226; Election Analysis.</p>
            
           
          </div>
        </div>
        <div className="bg-pink-800 w-1/3 h-80 mt-12 rounded-lg">
        <div className="text-white text-center pt-6">Minor Projects</div>
          <div className="text-white p-7">
            <p>&#8226; Hangman Game</p>
            <p> &#8226; Restaurant Booking Website</p>
            <p>&#8226; Web Scraping Using Beautiful Soup</p>
            <p>&#8226; Twitter Sentiment Analysis.</p>
            <p>&#8226; Library Management System.</p>
            <p>&#8226; Building Chatbots.</p>
            <p>&#8226; Uber Data Analysis</p>
            <p> &#8226; Election Analysis.</p>
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
