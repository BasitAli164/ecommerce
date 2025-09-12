"use client";

import { Heart, Menu, SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import UserMenu from "./UserMenu";
import CartIcon from "./CartIcon";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [fieldText, setFieldText] = useState("");
  const pathname = usePathname();

  const menulist = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/signup", label: "SignUp" },
  ];

  const filterProducts = () => {
    console.log(fieldText);
    setFieldText("");
  };

  return (
    <nav className="w-full flex flex-col justify-around items-center p-2">
      {/* Top Section */}
      <div className="w-full flex justify-between items-center">
        <h1 className="text-lg font-bold">Exclusive</h1>
        <div className="flex gap-4 items-center">
          <Link href={'/wishlist'}>
           
            <Heart />
          </Link>
          <CartIcon cartCount={3} /> {/* Example: cart has 3 items */}
          <UserMenu />
          <Menu
            className="md:hidden cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {/* Links + Search */}
      <div className="w-full flex justify-center items-center gap-28 mt-4">
        <ul className="hidden md:flex gap-5">
          {menulist.map((item) => (
            <li key={item.href} className="text-lg">
              <Link
                href={item.href}
                className={
                  pathname === item.href ? "border-b-2 border-gray-400" : ""
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Box */}
        <div className="w-[600px] md:w-60 flex justify-between items-center bg-[#e9e9e9] opacity-70 rounded-sm p-1">
          <input
            className="outline-none w-full md:w-60 rounded-sm bg-transparent"
            placeholder="What are you looking for?"
            type="text"
            name="searchfield"
            id="searchfield"
            value={fieldText}
            onChange={(e) => setFieldText(e.target.value)}
          />
          <SearchIcon onClick={filterProducts} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <ul className="flex flex-col gap-3 mt-2">
          {menulist.map((item) => (
            <li key={item.href} className="text-md list-none">
              <Link
                href={item.href}
                className={
                  pathname === item.href ? "border-b-2 border-gray-400" : ""
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
