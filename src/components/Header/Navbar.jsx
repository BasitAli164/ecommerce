import { HeartIcon, SearchIcon, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
const menuList = [
  { href: "/", lable: "Home" },
  { href: "/contact", lable: "Contact" },
  { href: "/about", lable: "About" },
  { href: "/signup", lable: "Sign Up" },
];
export default function Navbar() {
  return (
    <nav className="w-full bg-amber-400 flex flex-col justify-center items-center gap-1">
      <div className="w-full bg-red-600 flex justify-around items-center py-2">
       
          <h1 className="font-bold text-lg sm:text-xl md:text-3xl">Exclusive</h1>
        
        <div className="flex justify-center items-center gap-3">
          <ShoppingCart className="size-[16px] sm:size-[20px] md:size-[28px]" />
          <HeartIcon className="size-[16px] sm:size-[20px] md:size-[28px]" />
          <User className="size-[16px] sm:size-[20px] md:size-[28px]" />
        </div>
      </div>
      <div className="flex justify-center items-center">
          <input
            type="text"
            name=""
            id=""
            className=" max-w-54 border-2 border-white border-solid"
          />
          <SearchIcon />
        </div>
      <div>
        <ul className="flex">
          {menuList.map((item) => (
            <li key={item}>
              <Link href={item.href}>{item.lable}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
