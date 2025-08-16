import { Heart, SearchIcon, ShoppingCart } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {

  const [toggle ,setToggle]=useState(false)
  const pathname=usePathname()
const menulist=[
  {href:"/",label:"Home"},
  {href:"/contact",label:"Contact"},
  {href:"/about",label:"About"},
  {href:"/signup",label:"SignUp"},

]



  return (
    <nav className='flex bg-amber-300'>
      <div>
        <h1>Exclusive</h1>
      </div>
      <div>
        <ul>
        {
          menulist.map((item)=>(
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))
        }
        </ul>

      </div>
      <div>
        <input type="text" name="" id="" />
        <SearchIcon/>
      </div>
      <div>
        {
          pathname==='/signup' || pathname==='/signin'?<>
          </>:<><Heart/>
        <ShoppingCart/></>
        }

      </div>


      
    </nav>
  )
}
