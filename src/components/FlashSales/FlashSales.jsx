import React from 'react'
import CountDownTime from '../CountDownTimer/CountDownTime'

export default function FlashSales() {
  return (
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
        
      </div>
      
    </div>
  )
}
