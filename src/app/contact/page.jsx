'use client'
import Cart from '@/components/cart/Cart'
import { useCart } from '@/context/cartContext'
import React from 'react'


export default function Contact() {
  const {cartData}=useCart()
  return (
  <>
    {
      cartData.map((item)=>(
        <Cart key={item.id} pordDetail={item}/>
      ))
    }
  </>
   
      
  )
}
