"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/logo.png";
import { HelpCircleIcon, ShoppingCartIcon, User ,MenuIcon} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const menulist = [
  { id: 1, menuName: "Home", link: "/" },
  { id: 2, menuName: "Product", link: "/product" },
  { id: 3, menuName: "Service", link: "/service" },
  { id: 4, menuName: "About", link: "/about" },
  { id: 5, menuName: "Contact", link: "/contact" },
];

const listItem=[
  "Get 20% off your first purchase!",
  "Exclusive offers available now!",
  "Free Shipping on orders over 50pkr!"
]
export default function Header({searchParams}) {
  const [toggleMenu , setToggleMenu]=useState(false)
  const [index, setIndex]=useState(0)
  const pathName=usePathname()
  console.log("Path is: ",pathName)
  console.log("toggel: ",toggleMenu)



  useEffect(()=>{
    if(pathName!=='/')return;
    const interval=setInterval(()=>{
      setIndex((prev)=>(prev+1)%listItem.length)
    },5000)

    return ()=> clearInterval(interval)
  },[pathName])


  if(pathName!=="/") return null;
  return (
    <>
     <div className="w-full bg-[#7dcea0] flex justify-center items-center p-1">
      <p>{listItem[index]}</p>
    </div>
    <div className="w-full flex items-center justify-evenly sm:justify-between bg-[#17a589] sm:px-5">
      <div>
        <Link href={"/"}>
          {" "}
          <Image
            className="hover:cursor-pointer w-10 h-10 sm:w-20 sm:h-20"
            src={logo}
            alt="Logo"
            
          />
        </Link>
      </div>
     <div className="flex justify-center items-center">
       <div className="flex items-center justify-center gap-5">
        {menulist.map(({ id, menuName, link }) => (
          <ul key={id}>
            <Link className="font-bold text-lg hidden sm:block hover:underline" href={link}>{menuName}</Link>
          </ul>
        ))}
      </div>
      <div className="relative sm:hidden">
        <MenuIcon className="sm:hidden cursor-pointer transition duration-700 delay-100 ease-in-out " onClick={()=>setToggleMenu(!toggleMenu)}/>
          {
            toggleMenu &&(
              <div className="bg-red-400 w-40 h-20 absolute top-8 -left-18 ">
                {menulist.map(({ id, menuName, link }) => (
          <ul key={id} className="text-center">
            <Link className="font-bold text-lg hover:underline  " href={link}>{menuName}</Link>
          </ul>
        ))}
              </div>

            )
          }
      </div>
     </div>
      <div className="flex items-center justify-center gap-2 sm:gap-5">
        <User className="w-5 h-5 text-white sm:w-7 sm:h-7 hover:cursor-pointer" />
        <HelpCircleIcon className="w-5 h-5 text-white sm:w-7 sm:h-7 hover:cursor-pointer" />
        <ShoppingCartIcon className="w-5 h-5 text-white sm:w-7 sm:h-7 hover:cursor-pointer" />
      </div>
    </div>
   
    </>
  );
}
