import { Heart, Menu, SearchIcon, ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [fieldText, setFieldText] = useState("");
  const pathname = usePathname();
  console.log(fieldText);

  const menulist = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/signup", label: "SignUp" },
  ];

  const filterProducts = () => {
    console.log(fieldText);
    setFieldText("");
    console.log(fieldText, "after");
  };

  return (
    <nav className="w-full bg-amber-200 flex flex-col justify-around items-center p-2 border-b border-gray-400 border-solid">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-lg font-bold">Exclusive</h1>
        <div className="flex gap-2">
          <Heart />
          <ShoppingCart />
          <User />
          <Menu className="md:hidden" />
        </div>
      </div>

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

        <div className="w-[600px] md:w-60 flex justify-between items-center  bg-[#F5F5F5] opacity-70 rounded-full p-1  ">
          <input
            className="outline-none w-full md:w-60 rounded-full   "
            placeholder="What are you looking for?"
            type="text"
            name="searchfield"
            id="searchfield"
            value={fieldText}
            onChange={(e) => setFieldText(e.target.value)}
          />
          <SearchIcon onClick={filterProducts} />
        </div>
      </div>



      {/* mobile menu*/}
    </nav>
  );
}
