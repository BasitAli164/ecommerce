'use client'
import  { useState } from 'react'
import AnnouncementBar from './AnnouncementBar'
import Link from 'next/link'
import { Heart, Search, ShoppingCart } from 'lucide-react'

export default function Header() {
    const [searchText, setSearchText]=useState("")
    console.log(searchText)
  return (
    <header className='w-full'>
    <AnnouncementBar/>
    <nav className='bg-red-700 container  flex justify-around items-center py-5'>
        <div className='max-w-[1000px] border-2 border-black border-dashed  bg-amber-300 flex justify-between items-center gap-10'>
            <h1 className='text-3xl font-semibold'>Exclusive</h1>
            <ul className='flex justify-center items-center gap-4'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/contact'}>Contact</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/signup'}>Sign Up</Link></li>
                
            </ul>
        </div>
        <div className='flex justify-center items-center border-4 border-green-400'>
            <div className='flex justify-center items-center'>
                <input className='border-2 border-black  outline-none ' type="text" name="searchText" id="searchText" onChange={(e)=>setSearchText(e.target.value)}/>
                <Search className='w-6'/>
            </div>
            <div className='flex'>
                <Heart className='w-6 '/>
                <ShoppingCart className='w-6'/>
            </div>
        </div>

    </nav>
      
    </header>
  )
}
