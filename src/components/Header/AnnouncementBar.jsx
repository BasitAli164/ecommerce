import Link from 'next/link'
import React from 'react'

export default function AnnouncementBar() {
  return (
    <div>
        <div>
        <div>
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <Link href={'#'}>ShopNow</Link>
        </div>
        <div>
           <select name="English-US" id="en-US">
            <option value="English-GB">English-GB</option>
            <option value="English-GB">English-GB</option>
           </select>
            
        </div>
      
    </div>
    </div>
  )
}
