import { HeartIcon, SearchIcon, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const menuList = [
  { href: "/", lable: "Home" },
  { href: "/contact", lable: "Contact" },
  { href: "/about", lable: "About" },
  { href: "/signup", lable: "Sign Up" },
];
export default function Navbar() {

    const pathname=usePathname()
  return (
    <nav className="w-full bg-amber-400 flex flex-col justify-center items-center gap-1">
      <div className="w-full bg-red-600 flex justify-around items-center py-2">
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl">Exclusive</h1>
        <div>
          <ul className="flex justify-center items-center gap-2">
            {menuList.map((item) => (
              <li key={item} className="text-lg sm:text-xl">
                <Link href={item.href} className={pathname===item.href?"underline ":""}>{item.lable}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center gap-3">
          <SearchIcon className="size-[16px] sm:size-[20px] md:size-[28px]" />
          <HeartIcon className="size-[16px] sm:size-[20px] md:size-[28px]" />
          <ShoppingCart className="size-[16px] sm:size-[20px] md:size-[28px]" />
          <User className="size-[16px] sm:size-[20px] md:size-[28px]" />
        </div>
      </div>
      
    </nav>
  );
}
