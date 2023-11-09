'use client'
import React from 'react'
import Image from 'next/image'
import contact from '../../assets/contactbanner.png'
import ContactForm from '../../components/ContactForm'

const page = () => {
  return (
    <div>
    <div>
      <Image
        src={contact}
        width={1600}
        alt='course'
      />
    </div>
    <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-sky-800 cursor-pointer text-center mt-24 hover:text-green-700 ">Contact Us</h1>
        
        <ContactForm />
    
    </div>
    </div>
  )
}

export default page;