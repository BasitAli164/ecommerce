'use client'
import Cart from '@/components/cart/Cart'
import {  Mail, PhoneCallIcon } from 'lucide-react'
import React from 'react'


export default function Contact() {
  return (
    <div>
      <div>
        <div>
          <div>
            <div><PhoneCallIcon/></div>
            <h2>Call To Us</h2>
          </div>
          <div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>

        </div>
        <div>
          <div>
            <div><Mail/></div>
            <h2>Write To Us</h2>
          </div>
          <div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>
      <div>
        <form action=""></form>
        
      </div>
    </div>
   
      
  )
}
