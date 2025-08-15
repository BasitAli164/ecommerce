import Link from 'next/link'
import React from 'react'

export default function AnnouncementBar() {
  return (
    <div className='w-screen h-12'>
      <div>
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link href={""}>Shop Now</Link>
        </p>
      </div>
      
    </div>
  )
}
