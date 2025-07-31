"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/logo.png";
import { HelpCircleIcon, ShoppingCartIcon, User ,MenuIcon} from "lucide-react";
import { useEffect, useState } from "react";
const menulist = [
  { id: 1, menuName: "Home", link: "/" },
  { id: 2, menuName: "Product", link: "/product" },
  { id: 3, menuName: "Service", link: "/service" },
  { id: 4, menuName: "About", link: "/about" },
  { id: 5, menuName: "Contact", link: "/contact" },
];

export default function Header() {
  const [toggleMenu , setToggleMenu]=useState(false)


  return (
    <div className="w-full flex items-center justify-between bg-[#17a589] px-5">
      <div>
        <Link href={"/"}>
          {" "}
          <Image
            className="hover:cursor-pointer w-20 h-20"
            src={logo}
            alt="Logo"
            
          />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        {menulist.map(({ id, menuName, link }) => (
          <ul key={id}>
            <Link className="font-bold text-lg" href={link}>{menuName}</Link>
          </ul>
        ))}
      </div>
      <div className="flex items-center justify-center gap-5">
        <User size={25} color="white" />
        <HelpCircleIcon size={25} color="white" />
        <ShoppingCartIcon size={25} color="white" />
      </div>
    </div>
  );
}
