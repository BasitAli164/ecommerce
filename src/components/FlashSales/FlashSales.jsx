import React from 'react'
import CountDownTime from '../CountDownTimer/CountDownTime'
import { MoveLeft, MoveRight } from 'lucide-react'
import Cart from '../cart/Cart'
import { useCart } from '@/context/cartContext'


export default function FlashSales() {
  const {cartData}=useCart()
  return (
    <div>
      <div>
      <div>
        <div>
          <div className='w-5 h-8 bg-bgBtn '></div>
          <p className='text-accent font-bold text-xl'>Today's</p>
        </div>
        <div>
          <h2>Flash Sales</h2>
          <CountDownTime/>
        </div>

      </div>
      <div>
        <MoveLeft/>
        <MoveRight/>
      </div>
      
    </div>
    <div>
      <Cart/>
    </div>
    </div>
  )
}
