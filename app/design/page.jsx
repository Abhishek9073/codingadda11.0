'use client'
import React from 'react'
import Image from 'next/image'
import webdesign from '../../assets/webdesign.png'

const page = () => {
  return (
    <div>
    <div>
      <Image
        src={webdesign}
        width={1600}
        alt='course'
      />
    </div>
    <div className='w-auto justify-around flex flex-row text-2xl text-center font-semibold text-white bg-sky-700 '>

<div className='bg-orange-700 w-1/3 p-4 m-4'>
    <div className='bg-pink-600' > School website </div>
     <div className='bg-sky-600'> Portfolio website </div>
    <div className='bg-yellow-600'> Blog website </div>

</div>
    <div className='bg-cyan-800 w-1/3 m-4 p-4'>
    <div className='bg-pink-600'> chat website </div>
    <div className='bg-sky-600'> Business website </div>
    <div className='bg-yellow-600'> Institute website </div>

    </div>
    </div>
   



    </div>
  )
}

export default page