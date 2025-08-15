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

        <select name="language" id="language">
          <option value="US-Eng">English(US)</option>
          <option value="EN-Eng">English(EN)</option>
          <option value="AU-Eng">English(AU)</option>
          <option value="NZ-Eng">English(NZ)</option>
        </select>
      </div>
      
    </div>
  )
}
