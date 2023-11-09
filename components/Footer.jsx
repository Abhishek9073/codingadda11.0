'use client'
import React from 'react'
import Image from "next/image"
import telegram from '../assets/telegram.png';
import youtube from '../assets/youtube.png';
import facebook from '../assets/facebook.png';
import gmail from '../assets/gmail1.png'
import playstore from '../assets/playstore.png'
import call from '../assets/telephone.png'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'
import Link from 'next/link'
import map from '../assets/map.png'


const Footer = () => {
  return (
  <div className="bg-gray-700 justify-center items-center mt-16">
  <div className='flex flex-col sm:flex-row justify-around max-sm:items-center pt-10'>
  <div className='w-1/4  '>
      <h1 className='text-sky-500 text-2xl text-left underline max-sm:text-lg'>Social links:</h1>
      <div className='pt-8  flex flex-row '>
    <Link href="https://t.me/+oOqPQbYTfb42ZGVl" target="_blank">
    <Image className='mr-2 cursor-pointer'
      src={telegram}
      alt='telegram'
      width={38}
     
     />
   
    </Link>
   
    <Link href="https://www.youtube.com/@codingadda." target="_blank">

    <Image className='mx-2'
      src={youtube}
      alt='youtube'
      width={38}
     
     />
    </Link>

    <Link  href="https://www.facebook.com/people/Coding-Adda/100092341893235/?mibextid=ZKlF025XJ6KyrSs8" target="_blank">
    <Image className='mx-2'
      src={facebook}
      alt='facebook'
      width={38}
     
     />
    </Link>
     
     


      </div>


      <div className='pt-8  flex flex-row '>
      


      <Link href="https://instagram.com/codingadda_?igshid=MmVlMjlkMTBhMg==" target='_blank'>

      <Image className='mr-2'
       src={instagram}
       alt='instagram'
       width={40}
      
      />
      </Link>



     <Link  href="mailto:contact@codingadda.in" target='_blank'>


       <Image className='mx-2'
       src={gmail}
       alt='youtube'
       width={38}
      
      />
     </Link>

    <Link href="https://whatsapp.com/channel/0029Va5BhNLGufIsKNSh2v22" target="_blank"> 
       <Image className='mx-2'
       src={whatsapp}
       alt='facebook'
       width={38}
      
      />

    </Link>

 
 
       </div>
       <div className='max-sm:text-xs'>
       <div className='w-56 mt-16 text-white text-sm flex flex-row items-center gap-3'>
       <div>

       <Link href="https://play.google.com/store/apps/details?id=com.codingadda.betacodingadda&hl=en_US" target='_blank' 
>

       <Image className='mb-2'
        src={playstore}
        width={32}
        alt='playstore'
       />
       </Link>
       </div>
       <Link href="https://play.google.com/store/apps/details?id=com.codingadda.betacodingadda&hl=en_US" target='_blank'>

       <div> Download our App</div>
       </Link>

      
      
       </div>
       <div className='w-56 mt-5 text-white text-sm flex flex-row items-center gap-3'>
       <div>
       <Image className='mb-2 -ml-1'
        src={call}
        width={36}
        alt='telephone'
       />
       </div>
       <div>Call- +91 76676 41596 </div>

      
      
       </div>

       <div className='w-56 mt-5 text-white text-sm flex flex-row items-center gap-3'>
       <div>
       <Image className='mb-2 -ml-1'
        src={whatsapp}
        width={38}
        alt='whatspp'
       />
       </div>
       <div>Msg +91 76676 41596</div>

      
      
       </div>

       </div>

       




  </div>


    <div className='w-auto h-76 rounded-2xl max-sm:w-56 max-sm:h-44 my-6 bg-orange-500 overflow-hidden'>
    <Image className=' h-76 rounded-2xl max-sm:w-56'
      src={map}
      width={450}
      alt='map'
   
    
    />


    </div>
  </div>





  <div className='flex flex-row max-sm:text-sm max-sm:justify-center max-sm:items-center max-sm:flex-col justify-around pt-10'>
  <div className='w-1/3 h-60 text-center border-gray-500 max-sm:border-gray-700 border-r-2'>
    <div className='text-lg text-sky-500 underline mt-8 cursor-default'>Computer Science</div>
    <div className='text-gray-300 pt-4 pb-2' >
    <Link href="/projects" target='_blank'>
       Major Projects  
    </Link>
    </div>
    <div  className='text-gray-300 py-2'>
    <Link href="/projects" target='_blank'>
       Minor Projects  
    </Link>
      
    </div>
    <div  className='text-gray-300 py-2 '>
    <Link href="/courses" target='_blank'>
      Online Classes 
    </Link></div>




  </div>
  <div className='w-1/3 h-60 text-center border-gray-500 max-sm:border-gray-700 border-r-2'>
  <div className='text-lg text-sky-500 underline mt-8 cursor-default'>School & Academics</div>
    <div className='text-gray-300 pt-4 pb-2' >
    
    <Link href="/papers" target='_blank'>
      Exam papers (Class 10-12)
    </Link>
    </div>
    <div  className='text-gray-300 py-2'>
    <Link href="/courses" target='_blank'>
    Offline Classes
    </Link>
    
    </div>
    <div  className='text-gray-300 py-2'>
    <Link href="/courses" target='_blank'>
    Online Classes
    </Link>
    
   </div>
  </div>

    <div className='w-1/3 h-60 text-center '>
    <div className='text-lg text-sky-500 underline mt-8 cursor-default'>Website Design</div>
    <div className='text-gray-300 pt-4 pb-2' > 
    <Link href="/design">
    Get Your Website
    </Link>
    
    </div>
    <div  className='text-gray-300 py-2'>
    <Link href="/design">
    Custom Website Design
    </Link>
    </div>
    <div  className='text-gray-300 py-2'>
    <Link href="/design">
    Mobile App Template

    </Link>
    
    </div>
    </div>

  </div>
    <div className='h-16 bg-black mt-10 text-white flex flex-row cursor-default'>
    <div className='text-center pl-5 mt-4 w-1/5  text-sm text-gray-300 max-lg:text-xs  border-r-2 border-sky-800 h-8'>
    &copy; 2023 Coding Adda. All Rights Reserved 
    </div>
    <div className='text-center max-lg:text-xs mt-4 w-1/5  text-sm text-gray-300  border-r-2 border-sky-800 h-8'>
    Disclaimer
    </div>
    <div className='text-center max-lg:text-xs mt-4 w-1/5  text-sm text-gray-300 border-r-2 border-sky-800 h-8'>
    Privacy Policy
    </div>
    <div className='text-center max-lg:text-xs mt-4 w-1/5  text-sm text-gray-300 border-r-2 border-sky-800 h-8'>
    Terms & Conditions
    </div>
    <div className='text-center max-lg:text-xs mt-4 w-1/5  text-sm text-gray-300 border-r-2 border-sky-800 h-8 '>
    Call Us On +91 76675 41596
    </div>
    
    
    </div>
  </div>
  )
}

export default Footer;