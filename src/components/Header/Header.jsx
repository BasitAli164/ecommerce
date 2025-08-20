import React from 'react'
import AnnouncementBar from './AnnouncementBar'
import Link from 'next/link'
import { Search } from 'lucide-react'

export default function Header() {
  return (
    <>
    <AnnouncementBar/>
    <header className=''>
        <div>
            <h1>Exclusive</h1>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/contact'}>Contact</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/signup'}>Sign Up</Link></li>
                
            </ul>
        </div>
        <div>
            <div>
                <input type="text" name="searchText" id="searchText" onChange={}
                <Search width={25} height={25}/>
            </div>
        </div>

    </header>
      
    </>
  )
}
