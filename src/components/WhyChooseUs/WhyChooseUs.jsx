import {   HeadphonesIcon, ShieldCheck, TruckIcon } from 'lucide-react'
import React from 'react'

export default function WhyChooseUs() {
  return (
    <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-32 my-20'  >
        <div className='flex flex-col justify-center items-center gap-1'>
            <div>
            <TruckIcon/>
            </div>
            <h2>FREE AND FAST DELIVERY</h2>
            <p>Free delivery for all orders over $140</p>
        </div>
        
        <div className='flex flex-col justify-center items-center gap-1'>
            <div>
            <HeadphonesIcon/>
            </div>
            <h2>24/7 CUSTOMER SERVICE</h2>
            <p>Friendly 24/7 customer support</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-1'>
            <div>
            <ShieldCheck/>
            </div>
            <h2>MONEY BACK GUARANTEE</h2>
            <p>We reurn money within 30 days</p>
        </div>
      
    </div>
  )
}
