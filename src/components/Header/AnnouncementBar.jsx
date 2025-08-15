import Link from 'next/link'
import React from 'react'

export default function AnnouncementBar() {
  return (
    <div className='w-screen  bg-bgPrimary  '>
      <div className='w-full p-4 flex justify-around  items-center  overflow-hidden gap-10'>
        <p className='text-secondaryText text-[10px] md:text-sm  text-center  '>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link href={""} className='border-b-2 border-white border-solid font-semibold text-[10px] md:text-sm ml-2 text-secondaryText  '>Shop Now</Link>
        </p>

        <select className='text-secondaryText border-none outline-none text-[10px] md:text-sm' name="language" id="language">
          <option className='text-primaryText' value="US-Eng">English(US)</option>
          <option className='text-primaryText' value="EN-Eng">English(EN)</option>
          <option className='text-primaryText' value="AU-Eng">English(AU)</option>
          <option className='text-primaryText' value="NZ-Eng">English(NZ)</option>
        </select>
      </div>
      
    </div>
  )
}
