
import { HeartIcon, Menu, SearchIcon, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const menuList = [
  { href: "/", lable: "Home" },
  { href: "/contact", lable: "Contact" },
  { href: "/about", lable: "About" },
  { href: "/signup", lable: "Sign Up" },
];
export default function Navbar() {
      const [togle,setToggle]=useState(false)



 

    const pathname=usePathname()
  return (
    <nav className="w-full bg-amber-400 flex flex-col justify-center items-center gap-1">
      <div className="w-full bg-red-600 flex justify-around items-center py-2">
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl">Exclusive</h1>
        <div className="hidden sm:block">
        
            
              <ul className="flex justify-center items-center gap-4">
            {menuList.map((item) => (
              <li key={item} className="text-lg sm:text-xl">
                <Link href={item.href} className={pathname===item.href?"underline ":""}>{item.lable}</Link>
              </li>
            ))}
          </ul>
            
        
        </div>

        <div className="flex justify-center items-center gap-3 relative">
          <SearchIcon className="size-[16px] sm:size-[20px] md:size-[24px]" />
          <HeartIcon className="size-[16px] sm:size-[20px] md:size-[24px]" />
          <ShoppingCart className="size-[16px] sm:size-[20px] md:size-[24px]" />
          <User className="size-[16px] sm:size-[20px] md:size-[28px]" />
          <Menu className="sm:hidden size-[16px] sm:size-[20px] md:size-[24px]" onClick={()=>setToggle(!togle)}/>
         <div className=" absolute top-0 -right-12 p-8 text-center sm:hidden">
            
             
               <ul>
                 {menuList.map((item) => (
              <li key={item} className="text-lg sm:text-xl">
                <Link href={item.href} className={pathname===item.href?"underline ":""}>{item.lable}</Link>
              </li>
            ))}
              </ul>
             
            
          </div>
        </div>
      </div>

      
    </nav>
  );
}
