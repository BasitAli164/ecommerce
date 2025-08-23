import { Star } from 'lucide-react'
import React from 'react'

export default function Rating(value,max=5) {
    const stars=[]

    for(i=1;i<=max;i++){
        if(i<=Math.floor(value)){
            stars.push(
                <Star
                key={i}
                fill='currentColor'
                stroke='none'
                className='w-5 h-5 text-yellow-500'
                
                />
            )
        }else if(i-value<i && i>value){
            stars.push(
                <Star
                key={i}
                className='w-5 h-5 text-yellow-500'
                />
            )
        }
    }

  return (
    <div className='flex items-center gap-1'>
      {stars}
    </div>
  )
}
