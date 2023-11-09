'use client'
import React from 'react'
import Image from 'next/image'
import papers from '../../assets/paper2.png'
import cbse from '../../assets/boards/cbse.png'
import icse from '../../assets/boards/icse.jpg'
import ap from '../../assets/boards/ap.jpg'
import jac from '../../assets/boards/jacf.jpg'



const page = () => {
  return (
    <>
    <div>
    <div>
      <Image
        src={papers}
        width={1600}
        alt='course'
      />
    </div>

    </div>
    <div className='flex flex-row  text-center font-semibold  justify-evenly  '>
  <div className='w-1/3  flex flex-col my-12 h-auto text-white'>
   
<div className='flex justify-center py-3 my-3 text-center items-center align-bottom text-2xl'>
<Image className="mx-32 max-sm:w-1/2 w-1/3"
  src={cbse}
  alt='cbse'
 
/>

</div>
<div className=' mt-6 text-black text-2xl '>CBSE</div>

<div className='py-2 my-2 bg-sky-600'>Class 10 Mock 1</div>
<div className='py-2 my-2 bg-orange-600'>Class 10 Mock 2</div>
<div className='py-2 my-2 bg-purple-500'>Class 10 Mock 3</div>

<div className='py-2 my-2 bg-yellow-500'>Class 10 Previous Year 2022</div>
<div className='py-2 my-2 bg-cyan-500'>Class 10 Previous Year 2021</div>
<div className='py-2 my-2 bg-red-600'>Class 10 Previous Year 2020</div>


<div className='py-2 my-2 bg-sky-600'>Class 12 Mock 1</div>
<div className='py-2 my-2 bg-orange-600'>Class 12 Mock 2</div>
<div  className='py-2 my-2 bg-purple-500'>Class 12 Mock 3</div>

<div className='py-2 my-2 bg-yellow-500'>Class 12 Previous Year 2022</div>
<div className='py-2 my-2 bg-cyan-500' >Class 12 Previous Year 2021</div>
<div className='py-2 my-2 bg-red-500'>Class 12 Previous Year 2020</div>







  </div>
  <div className='w-1/3 h-76  flex flex-col my-12 h-auto text-white '>

   
  <div className=' py-3 my-3 text-center flex justify-center items-center align-bottom text-2xl'>
<Image className="mx-32 max-sm:w-1/2 w-1/3 text-center"
  src={icse}
  alt='icse'

/>

</div>
<div className=' mt-6 text-black text-2xl ml-4 '>ICSE</div>
<div className='py-2 my-2 bg-sky-600'>Class 10 Mock 1</div>
<div className='py-2 my-2 bg-orange-600'>Class 10 Mock 2</div>
<div className='py-2 my-2 bg-purple-500'>Class 10 Mock 3</div>

<div className='py-2 my-2 bg-yellow-500'>Class 10 Previous Year 2022</div>
<div className='py-2 my-2 bg-cyan-500'>Class 10 Previous Year 2021</div>
<div className='py-2 my-2 bg-red-600'>Class 10 Previous Year 2020</div>


<div className='py-2 my-2 bg-sky-600'>Class 12 Mock 1</div>
<div className='py-2 my-2 bg-orange-600'>Class 12 Mock 2</div>
<div  className='py-2 my-2 bg-purple-500'>Class 12 Mock 3</div>

<div className='py-2 my-2 bg-yellow-500'>Class 12 Previous Year 2022</div>
<div className='py-2 my-2 bg-cyan-500' >Class 12 Previous Year 2021</div>
<div className='py-2 my-2 bg-red-500'>Class 12 Previous Year 2020</div>

  </div>

</div>
<div className=' flex flex-row text-center font-semibold  justify-evenly '>
  <div className='w-1/3 mt-12 flex flex-col  h-auto text-white'>
  
  <div className=' pt-3   text-center flex justify-center items-center align-bottom text-2xl'>
<Image className='mb-2 mx-32 w-1/2'
  src={jac}
  alt='jac'
 
/>

</div>
<div className=' mt-4 text-black text-2xl '>JAC</div>
<div className='py-2 my-2 bg-green-600'>Class 10 Mock 1</div>
<div className='py-2 my-2 bg-orange-600'>Class 10 Mock 2</div>
<div className='py-2 my-2 bg-purple-500'>Class 10 Mock 3</div>

<div className='py-2 my-2 bg-yellow-500'>Class 10 Previous Year 2022</div>
<div className='py-2 my-2 bg-cyan-500'>Class 10 Previous Year 2021</div>
<div className='py-2 my-2 bg-red-600'>Class 10 Previous Year 2020</div>


<div className='py-2 my-2 bg-sky-600'>Class 12 Mock 1</div>
<div className='py-2 my-2 bg-orange-600'>Class 12 Mock 2</div>
<div  className='py-2 my-2 bg-purple-500'>Class 12 Mock 3</div>

<div className='py-2 my-2 bg-yellow-500'>Class 12 Previous Year 2022</div>
<div className='py-2 my-2 bg-cyan-500' >Class 12 Previous Year 2021</div>
<div className='py-2 my-2 bg-red-500'>Class 12 Previous Year 2020</div>

  </div>
  <div className='w-1/3 flex flex-col  my-12 h-auto text-white '>

  <div className=' py-3 flex justify-center  text-center items-center align-bottom text-2xl'>
<Image className="mx-32 w-1/2"
  src={ap}
  alt='ap'

/>

</div>
<div className=' mt-1 text-black text-2xl '>BSEAP</div>
<div className='py-2 my-2 bg-sky-600'>Class 10 Mock 1</div>
<div className='py-2 my-2 bg-orange-600'>Class 10 Mock 2</div>
<div className='py-2 my-2 bg-purple-500'>Class 10 Mock 3</div>

<div className='py-2 my-2 bg-yellow-500'>Class 10 Previous Year 2022</div>
<div className='py-2 my-2 bg-cyan-500'>Class 10 Previous Year 2021</div>
<div className='py-2 my-2 bg-red-600'>Class 10 Previous Year 2020</div>


<div className='py-2 my-2 bg-sky-600'>Class 12 Mock 1</div>
<div className='py-2 my-2 bg-orange-600'>Class 12 Mock 2</div>
<div  className='py-2 my-2 bg-purple-500'>Class 12 Mock 3</div>

<div className='py-2 my-2 bg-yellow-500'>Class 12 Previous Year 2022</div>
<div className='py-2 my-2 bg-cyan-500' >Class 12 Previous Year 2021</div>
<div className='py-2 my-2 bg-red-500'>Class 12 Previous Year 2020</div>
  </div>

</div>
    </>
  )
}

export default page