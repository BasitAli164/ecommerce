"use client";
import { useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import Link from "next/link";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const [toggle,setToggle]=useState(false)
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/signup", label: "SignUp" },
  ];

  const handleSearchData = (searchData) => {
    console.log("Search Data", searchData);
    /* work after making api*/
  };

  return (
    <header className="border-b border-secondaryText border-solid">
      <AnnouncementBar />
      <nav className="w-full flex   justify-between items-center p-8">
        <div className="flex gap-20">
          <h1 className="font-bold text-2xl text-secondaryText">Exclusive</h1>
          <ul className=" gap-5 hidden sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active-link" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex">
          <div className="flex">
            <input
              type="text"
              name="searchText"
              id="searchText"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Search onClick={() => handleSearchData(searchText)} />
          </div>
          <div className="flex">
            <Heart />
            <ShoppingCart />
          </div>
        </div>
      </nav>
    </header>
  );
}
