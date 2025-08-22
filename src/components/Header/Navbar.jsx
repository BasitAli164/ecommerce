import { HeartIcon, SearchIcon, ShoppingBag, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function Navbar() {
    const [searchField,setSearchField]=useState("")
    const pathname=usePathname()


    const menuList=[
        {href:"/",label:"Home"},
        {href:"/contact",label:"Contact"},
        {href:"/about",label:"About"},
        {href:"/signup",label:"Sign Up"},
    ]
    
  return (
    <nav className='w-screen h-20 flex justify-between items-center p-4 bg-amber-500'>
        <div>
            <h1>Exclusiv</h1>
        </div>
        <ul className='flex'>
            {
                menuList.map((item)=>(
                    <li key={item.label}><Link className={pathname===item.href?"underline ":""} href={item.href}>{item.label}</Link></li>
                ))
            }

        </ul>
        <div>
            <input type="text" name="searchfield" id="searchfield" onChange={(e)=>setSearchField(e.target.value)} className='border border-white border-solid' />
            <SearchIcon/>
        </div>
        <div>
            <ShoppingCart/>
            <HeartIcon/>
        </div>


      
    </nav>
  )
}
