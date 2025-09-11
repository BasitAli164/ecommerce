"use client";

import { ShoppingCart } from "lucide-react";
import React from "react";



export default function CartIcon({ cartCount }) {
  return (
    <div className="relative cursor-pointer">
      <ShoppingCart />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      )}
    </div>
  );
}
