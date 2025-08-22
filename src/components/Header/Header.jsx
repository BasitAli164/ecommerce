"use client";
import { useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import Link from "next/link";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/signup", label: "SignUp" },
  ];
  console.log(searchText);


  const handleSearchData=(searchData)=>{
    console.log("Search Data",searchData)
    /* work after making api*/
  }
  return (
    <header className="">
      <AnnouncementBar />
      <nav className="w-full bg-red-700 container  flex justify-around items-center py-5">
        <div className="max-w-[1000px] border-2 border-black border-dashed  bg-amber-300 flex justify-between items-center gap-32">
          <h1 className="text-2xl font-semibold tracking-[1px]">Exclusive</h1>
          <ul className="flex justify-center items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? "underline font-semibold text-primaryText"
                      : "hover:underline"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-10 border-4 border-green-400">
          <div className="flex justify-center items-center border-1 p-1 border-white border-dashed">
            <input
              className="  outline-none "
              type="text"
              name="searchText"
              id="searchText"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Search className="w-6" onClick={()=>handleSearchData(searchText)}/>
          </div>
          <div className="flex">
            <Heart className="w-6 " />
            <ShoppingCart className="w-6" />
          </div>
        </div>
      </nav>
    </header>
  );
}
