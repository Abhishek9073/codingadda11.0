'use client'
import React from 'react'
import Image from 'next/image'
import papers from '../../assets/classes1.png'
import python from '../../assets/course/2.png';
import java from '../../assets/course/1.png';
import db from '../../assets/course/3.png';
import webDes from '../../assets/course/4.png'
import cAndc from '../../assets/course/8.png'
import mca from '../../assets/course/5.png'
import snow from '../../assets/course/7.png'
import tableau from '../../assets/course/6.png'
import workday from '../../assets/course/9.png'

const page = () => {
  return (
    <>
    <div>
    <div className='overflow-hidden'>
      <Image
        src={papers}
        width={1600}
        alt='course'
      />
    </div>












    <div className='text-center text-sky-800 text-3xl font-bold underline'>Courses</div>

        <div>
          <div className="flex flex-col sm:flex-row   justify-center items-center my-12">
            <div className="bg-red-500 hover:scale-105 duration-300 cursor-pointer hover:bg-black py-4 my-4 mx-4 sm:my-2 sm:py-2  rounded-xl text-center text-white align-text-bottom overflow-hidden">
           <Image
            src={python}
            width={340}
            alt="py"
           />
            </div>
            <div className="bg-teal-500 hover:scale-105 duration-300 cursor-pointer hover:bg-black py-4 my-4 mx-4  sm:my-2 sm:py-2 rounded-xl text-center text-white align-text-bottom overflow-hidden">
           <Image
            src={java}
            width={340}
            alt="py"
           />
            </div>
            <div className="bg-orange-500 hover:scale-105 duration-300 cursor-pointer hover:bg-black py-4 my-4 mx-4  sm:my-2 sm:py-2 rounded-xl text-center text-white align-text-bottom overflow-hidden">
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
          <div className="bg-pink-500 hover:scale-105 duration-300 cursor-pointer hover:bg-black py-4 my-4  mx-4  sm:my-2 sm:py-2  rounded-xl text-center text-white align-text-bottom overflow-hidden">
            <Image
            src={webDes}
            width={340}
            alt="py"
           />
            </div>
            <div className="bg-yellow-500 hover:scale-105 duration-300 cursor-pointer hover:bg-black py-4 my-4  mx-4  sm:my-2 sm:py-2 rounded-xl text-center text-white align-text-bottom overflow-hidden">
            <Image
            src={cAndc}
            width={340}
            alt="py"
           />
            </div>
            <div className="bg-green-500 hover:scale-105 duration-300 cursor-pointer hover:bg-black py-4 my-4  mx-4  sm:my-2 sm:py-2 rounded-xl text-center text-white align-text-bottom overflow-hidden">
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
          <div className="bg-purple-500 hover:scale-105 duration-300 cursor-pointer hover:bg-black py-4 my-4  mx-4  sm:my-2 sm:py-2 rounded-xl text-center text-white align-text-bottom overflow-hidden">
            <Image
            src={snow}
            width={340}
            alt="py"
           />
            </div>
            <div className="bg-sky-500 hover:scale-105 duration-300 cursor-pointer hover:bg-black py-4 my-4  mx-4  sm:my-2 sm:py-2 rounded-xl text-center text-white align-text-bottom overflow-hidden">
            <Image
            src={tableau}
            width={340}
            alt="py"
           />
            </div>
            <div className="bg-orange-500 hover:scale-105 duration-300 cursor-pointer hover:bg-black py-4 my-4  mx-4  sm:my-2 sm:py-2 rounded-xl text-center text-white align-text-bottom overflow-hidden">
            <Image
            src={workday}
            width={340}
            alt="py"
           />
            </div>
          </div>
        </div>
    
    </div>


   
    </>
    
  )
}

export default page