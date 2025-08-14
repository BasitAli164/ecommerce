'use client'
import React, { useState } from 'react'
import FilterBox from './FilterBox'
import { Filter } from 'lucide-react'

export default function FilterField() {
  const [toggle,setToggle]=useState(false)
  return (
    <div className='w-full mx-auto relative'>
      <div onClick={()=>setToggle(!toggle)} className=' flex max-w-[1400px] p-6 rounded-full bg-gray-100'>
        <Filter  className={`cursor-pointer ${toggle ? 'text-amber-600' : ''}`}/>
          <p className='opacity-30 ml-4'>Filter Your Selections</p>
      </div>
      {toggle && <FilterBox />}
    </div>
  )
}
