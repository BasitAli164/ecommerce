'use client'
import Button from '@/components/Button/Button'
import {  Mail, PhoneCallIcon } from 'lucide-react'
import React from 'react'


export default function Contact() {
  return (
    <div className='h-screen w-full flex flex-col lg:flex-row justify-center items-center gap-32 '>
      <div className='flex flex-col gap-10 shadow-2xl h-[450px] w-1/3 justify-center rounded-lg'>
        <div className='ml-10'>
          <div className='flex gap-2 items-center'>
            <div className='rounded-full p-3 bg-accent'><PhoneCallIcon size={20} color='#fff'/></div>
            <h2 className='font-semibold'>Call To Us</h2>
          </div>
          <div className='flex flex-col gap-1 mt-2'>
            <p className='text-justify'>We are available 24/7, 7 days a week.</p>
            <p className='text-justify'>Phone: +8801611112222</p>
          </div>

        </div>
        <div className='ml-10'>
          <div className='flex gap-2 items-center'>
            <div className='rounded-full p-3 bg-accent'><Mail size={20} color='#fff'/></div>
            <h2 className='font-semibold'>Write To Us</h2>
          </div>
          <div className='flex flex-col gap-1 mt-2'>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>
      <div>
        <form>
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <div>
            <textarea name="" id=""></textarea>
          </div>
          <div>
            <button className='px-9 py-3 bg-accent text-white'>Send Message</button>
          </div>

        </form>
        
      </div>
    </div>
   
      
  )
}
