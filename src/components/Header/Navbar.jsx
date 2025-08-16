import { Heart, Menu, SearchIcon, ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const[fieldText,setFieldText]=useState("")
  const pathname = usePathname();
      console.log(fieldText)

  const menulist = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/signup", label: "SignUp" },
  ];

  const filterProducts=()=>{
    console.log(fieldText)
   setFieldText("")
   console.log(fieldText,"after")

  }

  return (
    <nav className="w-full h-12 flex justify-around items-center p-4 border-b">
      <h1 className="text-lg font-bold">Exclusive</h1>

      <ul className="hidden sm:flex gap-5">
        {menulist.map((item) => (
          <li key={item.href} className="">
            <Link href={item.href} className={pathname===item.href?"border-b-2 border-gray-400":""}>{item.label}</Link>
          </li>
        ))}
      </ul>

     <div className="flex gap-8">
       <div className="flex bg-[#F5F5F5] opacity-70 rounded-md p-1  ">
        <input
          className="outline-none border-none hidden sm:inline"
          placeholder="What are you looking for?"
          type="text"
          name=""
          id=""
          value={fieldText}
          onChange={(e)=>setFieldText(e.target.value)}
        />
        <SearchIcon onClick={filterProducts}/>
      </div>
      <div className="flex gap-2">
        <Heart />
        <ShoppingCart />
        <User />
        <Menu className="sm:hidden" />
      </div>
     </div>
    </nav>
  );
}
