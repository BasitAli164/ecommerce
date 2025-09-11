"use client";

import { User, LogOut, Package, Star, XCircle, UserCog } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Helper: close menu when clicking a link
  const handleLinkClick = () => setOpen(false);

  return (
    <div className="relative" ref={menuRef}>
      {/* User Icon */}
      <button
        onClick={() => setOpen(!open)}
        className={`p-1 rounded-full ${
          open ? "bg-[#DB4444] text-white" : "bg-transparent"
        }`}
      >
        <User />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <ul className="absolute right-0 mt-2 w-56 bg-gradient-to-br from-pink-200 to-gray-200 shadow-lg rounded-md py-2 z-50">
          <li
            className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
            onClick={handleLinkClick}
          >
            <UserCog size={18} /> <Link href="/account">Manage My Account</Link>
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
            onClick={handleLinkClick}
          >
            <Package size={18} /> <Link href="/orders">My Orders</Link>
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
            onClick={handleLinkClick}
          >
            <XCircle size={18} /> <Link href="/cancellations">My Cancellations</Link>
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
            onClick={handleLinkClick}
          >
            <Star size={18} /> <Link href="/reviews">My Reviews</Link>
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-red-500"
            onClick={handleLinkClick}
          >
            <LogOut size={18} /> <button>Logout</button>
          </li>
        </ul>
      )}
    </div>
  );
}
