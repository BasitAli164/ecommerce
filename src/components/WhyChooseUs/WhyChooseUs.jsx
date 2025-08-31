import {   HeadphonesIcon, ShieldCheck, TruckIcon } from 'lucide-react'
import React from 'react'

export default function WhyChooseUs() {
  return (
    <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-32 my-20'  >
        <div className='flex flex-col justify-center items-center gap-1'>
            <div className='bg-bgPrimary p-5 text-center text-secondaryText rounded-full'>
            <TruckIcon className='size-10'/>
            </div>
            <h2 className='text-sm sm:text-lg font-semibold text-center'>FREE AND FAST DELIVERY</h2>
            <p className='text-center'>Free delivery for all orders over $140</p>
        </div>
        
        <div className='flex flex-col justify-center items-center gap-1'>
            <div className='bg-bgPrimary p-5 text-center text-secondaryText rounded-full'>
            <HeadphonesIcon className='size-10'/>
            </div>
            <h2 className='text-sm sm:text-lg font-semibold text-center'>24/7 CUSTOMER SERVICE</h2>
            <p className='text-center'>Friendly 24/7 customer support</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-1'>
            <div className='bg-bgPrimary p-5 text-center text-secondaryText rounded-full'>
            <ShieldCheck className='size-10'/>
            </div>
            <h2 className='text-sm sm:text-lg font-semibold text-center'>MONEY BACK GUARANTEE</h2>
            <p className='text-center'>We reurn money within 30 days</p>
        </div>
      
    </div>
  )
}
