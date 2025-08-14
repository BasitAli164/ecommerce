'use client'
import React, { useState } from 'react'
import FilterBox from './FilterBox'
import { Filter } from 'lucide-react'

export default function FilterField() {
  const [toggle,setToggle]=useState(false)
  return (
    <div className='w-full mx-auto relative'>
      <div className='max-w-[1400px] p-8 rounded-full bg-gray-100'>
        <Filter onClick={()=>setToggle(!toggle)} className={`cursor-pointer ${toggle ? 'text-amber-600' : ''}`}/>
      </div>
      {toggle && <FilterBox />}
    </div>
  )
}
