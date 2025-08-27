  "use client"
  import React,{useRef} from 'react'
  import CountDownTime from '../CountDownTimer/CountDownTime'
  import { MoveLeft, MoveRight } from 'lucide-react'
  import Cart from '../cart/Cart'
  import { useCart } from '@/context/cartContext'
  import Link from 'next/link'


  export default function FlashSales() {
    // Create a ref for the scrollable container
    const scrollRef=useRef(null)
    const {cartData}=useCart()

    // Functions to scroll left/right
    
    const scrollLeft=()=>{
      if(scrollRef.current){
        scrollRef.current.scrollBy({left:-300,behavior:"smooth"})
      }
    }
    const scrollRight=()=>{
      if(scrollRef.current){
        scrollRef.current.scrollBy({left:300,behavior:"smooth"})
      }
    }


    return (
      <div className='max-w-[1170px] flex flex-col justify-center mx-auto mt-32 mb-10' >
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
        <div className='flex justify-center items-center gap-8'>
          <MoveLeft onClick={scrollLeft}/>
          <MoveRight onClick={scrollRight}/>
        </div>
        
      </div>
      <div 
      ref={scrollRef} // connect with ref here
      className='flex gap-[30px] mt-10 overflow-x-auto scroll-smooth no-scrollbar' >
        {
          cartData.map((item)=>(
            <Cart key={item.id} prodDetail={item}/>
          ))
        }
      </div>


      <div className='flex justify-center items-center'>
        <Link href={""} className='px-10 py-3 bg-bgBtn text-center'>View All Products</Link>
      </div>
      </div>
    )
  }
