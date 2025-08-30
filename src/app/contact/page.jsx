'use client'
import Cart from '@/components/cart/Cart'
import { CartProvider, useCart } from '@/context/cartContext'
import React from 'react'


export default function Contact() {
  const {cartData}=useCart()
  console.log(cartData)
  return (
    <div>
      
    <CartProvider>
      <Cart/>
    </CartProvider>
   
      
    </div>
  )
}
