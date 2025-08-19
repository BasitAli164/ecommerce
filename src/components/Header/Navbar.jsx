import { HeartIcon, SearchIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
const menuList = [
  { href: "/", lable: "Home" },
  { href: "/contact", lable: "Contact" },
  { href: "/about", lable: "About" },
  { href: "/signup", lable: "Sign Up" },
];
export default function Navbar() {
  return (
    <nav className="w-full bg-amber-400 flex flex-col justify-center items-center">
      <div className="w-full bg-red-600 flex justify-between items-center">
        <div>
          <h1>Exclusive</h1>
        </div>
        <div className="flex justify-center items-center">
          <input
            type="text"
            name=""
            id=""
            className="border-2 border-white border-solid"
          />
          <SearchIcon />
        </div>
        <div className="flex justify-center items-center">
          <ShoppingCart />
          <HeartIcon />
        </div>
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
