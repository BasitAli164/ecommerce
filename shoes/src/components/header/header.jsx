"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  HelpCircleIcon,
  ShoppingCartIcon,
  User,
  MenuIcon,
} from "lucide-react";

import logo from "../../../public/logo/logo.png";

const MENU_ITEMS = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Shop", link: "/Shop" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Contact", link: "/contact" },
];

const PROMO_MESSAGES = [
  "Get 20% off your first purchase!",
  "Exclusive offers available now!",
  "Free Shipping on orders over 50 PKR!",
];

export default function Header() {
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Only run ticker on homepage
  useEffect(() => {
    if (pathname !== "/") return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % PROMO_MESSAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [pathname]);

  // Hide header on non-home pages
  if (pathname !== "/" && pathname!=='/login' && pathname!=='/signup') return null;

  return (
    <header className="fixed w-full z-50">
      {/* Promo Bar */}
      <div className="w-full bg-[#7dcea0] text-center py-1 text-sm sm:text-base font-medium">
        <p>{PROMO_MESSAGES[index]}</p>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-[#17a589] flex items-center justify-between px-4 sm:px-6 py-2">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={logo}
            alt="Company Logo"
            width={80}
            height={80}
            className="w-10 h-10 sm:w-20 sm:h-20 object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 items-center">
          {MENU_ITEMS.map(({ id, name, link }) => (
            <li key={id}>
              <Link
                href={link}
                className="text-white text-lg font-semibold hover:underline"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons and Menu */}
        <div className="flex items-center gap-4 text-white">
          {/* Desktop Icons */}
          <div className="hidden sm:flex gap-4 items-center">
            <User className="w-6 h-6 cursor-pointer" />
            <HelpCircleIcon className="w-6 h-6 cursor-pointer" />
            <ShoppingCartIcon className="w-6 h-6 cursor-pointer" />
          </div>

          {/* Mobile Icons: User + Menu */}
          <div className="sm:hidden flex items-center gap-4 relative">
            <User className="w-6 h-6 cursor-pointer" />
            <MenuIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <ul className=" flex flex-col justify-center items-center  gap-4 absolute top-10 -right-4 w-52 bg-[#17a589] shadow-lg rounded p-2 space-y-2 z-50">
                {MENU_ITEMS.map(({ id, name, link }) => (
                  <li key={id}>
                    <Link
                      href={link}
                      className="block text-gray-50 text-base font-medium hover:underline"
                      onClick={() => setMenuOpen(false)}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
