"use client";
import { useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import Link from "next/link";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function Header() {


  return (
    <header className="w-full border-b border-secondaryText border-solid fixed ">
      <AnnouncementBar />
      <Navbar/>
    </header>
  );
}
