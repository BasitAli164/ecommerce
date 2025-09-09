'use client'
import { Mail } from 'lucide-react';
import React, { useState } from 'react'

export default function Footer() {
  const [email,setEmail]=useState("");

  return (
    <div className='w-full h-[300px] '>
      <div>
        <h1>Exclusive</h1>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <div>
          <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          
          
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

      
    </div>
  )
}
