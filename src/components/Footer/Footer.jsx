"use client";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const accountsLinks = [
  { id: 1, link: "", title: "My Account" },
  { id: 2, link: "", title: "Cart" },
  { id: 3, link: "", title: "Wishlist" },
  { id: 4, link: "", title: "Shop" },
];

const quickLinks = [
  { id: 1, link: "/policy", title: "Privacy Policy" },
  { id: 2, link: "/termsOfUse", title: "Terms of Use" },
  { id: 3, link: "/faq", title: "FAQ" },
  { id: 4, link: "/contact", title: "Contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full bg-bgPrimary text-gray-200 pt-10 pb-6">
      {/* Top Section */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Exclusive / Subscribe */}
        <div>
          <h1 className="text-xl font-bold mb-3">Exclusive</h1>
          <p className="text-sm mb-2">Subscribe</p>
          <p className="text-xs mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-500 rounded-lg overflow-hidden">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-sm text-gray-200 focus:outline-none"
            />
            <button className="bg-red-500 text-white px-2 py-2 text-sm cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Support</h2>
          <p className="text-sm">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</p>
          <p className="text-sm mt-2">exclusive@gmail.com</p>
          <p className="text-sm mt-1">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Account</h2>
          <div className="flex flex-col space-y-2">
            {accountsLinks.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="text-sm hover:text-red-400  transition duration-300 delay-100 ease-in-out"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Link */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Link</h2>
          <div className="flex flex-col space-y-2">
            {quickLinks.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="text-sm hover:text-red-400  transition duration-300 delay-100 ease-in-out"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Download App */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Download App</h2>
          <p className="text-xs mb-4">Save $ with App New User Only</p>
          <div className="flex space-x-4 items-center   mb-4">
            <Link href={""}>
            <img
              src="/footer/QRcode.jpg"
              alt="QR-Code"
              className="w-20 h-20 object-contain border"
            />
            </Link>
            {/* <div className="flex flex-col ">
             <Link href={""}> <img src="/footer/google.png" alt="Google" className="w-20" /></Link>
              <Link href={""}><img src="/footer/apple.png" alt="Apple" className="w-20" /></Link>
            </div> */}
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-3">
            <FacebookIcon className="w-5 h-5 cursor-pointer hover:text-accent transition duration-300 delay-100 ease-in-out" />
            <TwitterIcon className="w-5 h-5 cursor-pointer hover:text-accent transition duration-300 delay-100 ease-in-out" />
            <InstagramIcon className="w-5 h-5 cursor-pointer hover:text-accent transition duration-300 delay-100 ease-in-out" />
            <LinkedinIcon className="w-5 h-5 cursor-pointer hover:text-accent transition duration-300 delay-100 ease-in-out" />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>&copy; Copyright Rimel 2025. All rights reserved.</p>
      </div>
    </footer>
  );
}
