'use client'
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logofinal.png";

const Header = () => {
  return (
    <>
      <div className="w-full h-20 ">
        <div className="container mx-auto px-4 h-full ">
          <div className="flex justify-between items-center h-full ">
          <div  className="max-md:pl-16 ">
          <Link href="/home">
          <Image
          src= {logo}
          alt="logo"
          width={180} />
          </Link>

          </div>
            <ul className="hidden md:flex gap-x-6 text-sky-700 text-base max-lg:text-xs">
              <li className=" hover:text-black px-2 hover:scale-105 hover:bg-amber-400 h-6 max-lg:px-0 s rounded-md  duration-200 ">
                <Link href="/home">
                  Home
      
                </Link>
              </li>
              <li className=" hover:text-black px-2 hover:scale-105 hover:bg-amber-400 h-6 max-lg:px-0 s rounded-md  duration-200 ">
                <Link href="/projects">
                  <p>CS Projects</p>
                  
                </Link>
              </li>
              <li className=" hover:text-black px-2 hover:scale-105 hover:bg-amber-400 h-6 max-lg:px-0 s rounded-md  duration-200 ">
                <Link href="/courses">
                  <p>Courses</p>
                </Link>
              </li>
              <li className=" hover:text-black px-2 hover:scale-105 hover:bg-amber-400 h-6 max-lg:px-0 s rounded-md  duration-200 ">
                <Link href="/papers">
                  <p>Exam Paper</p>
                </Link>
              </li>
              <li className=" hover:text-black px-2 hover:scale-105 hover:bg-amber-400 h-6 max-lg:px-0 s rounded-md  duration-200 ">
                <Link href="/design">
                  <p>Website Design</p>
                </Link>
              </li>
              <li className=" hover:text-black px-2 hover:scale-105 hover:bg-amber-400 h-6 max-lg:px-0 s rounded-md  duration-200 ">
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>

              <li>

              <input className="w-28 h-7 text-white bg-sky-800 rounded-xl text-sm border-green-700 border-3 "  type="search" name="search" id="" placeholder ="search" />
             
              
         
              
              </li>
            </ul>
        
          </div>
        </div>
      </div>
    </>
  );
};


export default Header;