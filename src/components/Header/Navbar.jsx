import { HeartIcon, SearchIcon, ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Navbar() {
  const [searchField, setSearchField] = useState("");
  const [toggle,setToggle]=useState(false)
  const pathname = usePathname();

  const menuList = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/signup", label: "Sign Up" },
  ];

  return (
    <nav className="w-screen h-20 flex flex-col sm:flex-row justify-between items-center p-4 bg-amber-500">
      <div>
        <h1>Exclusive</h1>
      </div>
      <ul className="flex">
        {menuList.map((item) => (
          <li key={item.label}>
            <Link
              className={pathname === item.href ? "underline " : ""}
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center border border-white  ">
        <input
          type="text"
          name="searchfield"
          id="searchfield"
          onChange={(e) => setSearchField(e.target.value)}
          onClick={()=>setToggle(!toggle)}
          className="border border-white border-solid"
        />
        <SearchIcon />
      </div>
      <div className="flex justify-center items-center gap-2 ">
        <ShoppingCart />
        <HeartIcon />
      </div>
    </nav>
  );
}
