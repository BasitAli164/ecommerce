import React from 'react'
import CountDownTime from '../CountDownTimer/CountDownTime'
import { MoveLeft, MoveRight } from 'lucide-react'
import Cart from '../cart/Cart'
import { useCart } from '@/context/cartContext'


export default function FlashSales() {
  const {cartData}=useCart()
  return (
    <div className='max-w-[1170px] flex flex-col justify-center mx-auto mt-32'>
      <div className='flex justify-between items-center'>
      <div>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-8 bg-bgBtn '></div>
          <p className='text-accent font-bold text-2xl'>Today's</p>
        </div>
        <div className='flex gap-32 mt-10'>
          <h2 className='text-[36px] font-semibold'>Flash Sales</h2>
          <CountDownTime/>
        </div>

      </div>
      <div>
        <MoveLeft/>
        <MoveRight/>
      </div>
      
    </div>
    <div className='flex gap-[30px]'>
      {
        cartData.map((item)=>(
          <Cart key={item.id} prodDetail={item}/>
        ))
      }
    </div>


    <div>
      <button className='px-10 py-4 bg-bgBtn text-center'>View All Products</button>
    </div>
    </div>
  )
}
