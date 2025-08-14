'use client'
import React, { useState } from 'react'
import FilterBox from './FilterBox'
import { Filter } from 'lucide-react'

export default function FilterField() {
  const [toggle,setToggle]=useState(false)
  return (
    <div className='w-full mx-auto'>
      <div className='max-w-[1400px] p-10 rounded-full bg-amber-300'>
        {
        toggle?<FilterBox/>:<Filter onClick={()=>setToggle(!toggle)}/>
     
      }
      </div>

      
    </div>
  )
}
