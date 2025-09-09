import React, { useState } from 'react'

export default function Footer() {
  const [email,setEmail]=useState("");

  return (
    <div className='w-full h-[300px] bg-bgPrimary'>
      <div>
        <h1>Exclusive</h1>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <div>
          <input type="text" name="" id="" value={email} onChange={(e)=>setEmail()}/>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

      
    </div>
  )
}
