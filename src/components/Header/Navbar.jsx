import { HeartIcon, SearchIcon, ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [searchField, setSearchField] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  console.log(toggle);

  useEffect(() => {
    const handleSearchBox = () => {
      const width = window.innerWidth;
      console.log(width);

      setWidth(width);
      if (width < 786) {
        console.log("inner");
        setToggle(false);
      }else{
        setToggle(true)
      }
    };
    handleSearchBox();

    window.addEventListener("resize", handleSearchBox);

    return () => window.removeEventListener("resize", handleSearchBox);
  }, [width]);
  const menuList = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/signup", label: "Sign Up" },
  ];

  return (
    <nav className="w-screen flex justify-between px-4 sm:px-0 sm:justify-around items-center py-4 bg-amber-500">
      <h1 className="font-semibold text-lg  md:text-3xl">Exclusive</h1>

      

      <div className="flex justify-center items-center gap-2 ">
        <div className="flex justify-center items-center  ">
          <input
            type="text"
            name="searchfield"
            id="searchfield"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            onClick={() => width<786 && setToggle((prev)=>!prev)}
            className={
              toggle ? "outline-none border border-white border-solid" : "hidden"
            }
          />
          <SearchIcon className="size-4 sm:size-6" />
        </div>
        <ShoppingCart className="size-4 sm:size-6" />
        <HeartIcon className="size-4 sm:size-6" />
      </div>
    </nav>
  );
}
