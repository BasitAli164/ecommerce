"use client";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";

export default function Header() {


  return (
    <header className="w-full border-b border-gray-200 border-solid  ">
      <AnnouncementBar />
      <Navbar/>
    </header>
  );
}
