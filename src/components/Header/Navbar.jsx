import { Heart, Menu, SearchIcon, ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  const menulist = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/signup", label: "SignUp" },
  ];

  return (
    <nav className="w-full h-12 flex justify-around items-center p-4 bg-amber-100">
      <h1>Exclusive</h1>

      <ul className="flex bg-red-400">
        {menulist.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <div className="flex bg-gray-300">
        <input
          className="border border-solid border-fuchsia-600"
          type="text"
          name=""
          id=""
        />
        <SearchIcon />
      </div>
      <div className="flex bg-green-300">
        <Heart />
        <ShoppingCart />
        <User />
        <Menu />
      </div>
    </nav>
  );
}
