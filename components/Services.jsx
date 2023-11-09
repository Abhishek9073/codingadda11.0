'use client'

import React from 'react'
import Image from 'next/image'
import service1 from '../assets/3.png'
import service2 from '../assets/2.png'
import service3 from '../assets/1.png'
import Link from 'next/link'

const Services = () => {
  return (
    <>

    
    <div className='flex flex-col sm:flex-row justify-center items-center '>
    <div className=' w-1/2 my-6 py-6  mx-4 h-1/3 bg-orange-500  sm:rounded-xl sm:h-1/3 sm:bg-orange-600 sm:w-1/4 text-center hover:scale-105 cursor-pointer duration-300  text-white align-text-bottom rounded-xl overflow-hidden '>
     <Link href="/projects">

      <Image
      src={service1}
      width={360}
      height={250}
      alt='major and minor projects'
      />
     </Link>
    </div>
     
    <div className='w-1/2 my-6 py-6 mx-4  h-1/3 bg-sky-500 sm:rounded-xl sm:h-1/3 sm:bg-sky-600 sm:w-1/4 text-center hover:scale-105 cursor-pointer duration-300  text-white align-text-bottom rounded-xl overflow-hidden'>

    <Link href="/courses">

    <Image
      src={service2}
      width={360}
      height={250}
      alt='courses online and offline'
      />
    </Link>
      </div>
    
  <div className=' w-1/2 my-6 py-6  mx-4 h-1/3 bg-purple-500 sm:rounded-xl sm:h-1/3 sm:bg-purple-600 sm:w-1/4 text-center hover:scale-105 cursor-pointer duration-300  text-white align-text-bottom rounded-xl overflow-hidden '>
  <Link href="/design">

    <Image
      src={service3}
      width={360}
      height={250}
      alt='website design'
      />
    </Link>
     </div>
    </div>
    </>
  )
}

export default Services