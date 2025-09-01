'use client'
import Cart from '@/components/cart/Cart'
import { useCart } from '@/context/cartContext'
import React from 'react'


export default function Contact() {
  const {cartData}=useCart()
  return (
  <div className=' flex flex-wrap justify-center items-center gap-5 overflow-hidden '>
    {
      cartData.map((item)=>(
        <Cart key={item.id} prodDetail={item}/>
      ))
    }
  </div>
   
      
  )
}
