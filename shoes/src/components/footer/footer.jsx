// components/Footer.tsx
"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-700 border-t border-gray-700 ">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Basit's Collection</h2>
          <p className="text-sm text-gray-700">
            Step into style with the latest sneakers, casuals, and sports shoes.
            Quality meets comfort at Basit's Collection.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link href="/" className="hover:text-gray-900">Home</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-gray-900">Shop</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-900">Contact</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-900">About</Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link href="/faq" className="hover:text-gray-900  ">FAQs</Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-gray-900 ">Returns & Exchanges</Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-gray-900 ">Shipping Info</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-gray-900 ">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-1">
              <Mail size={16} /> basitdeveloper@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +92 3475495500
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Skardu, Pakistan
            </li>
          </ul>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 text-sm text-center text-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
          <p>
            &copy; {new Date().getFullYear()} Basit's Collection. All rights reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="www.facebook.com" aria-label="Facebook" className="hover:text-gray-900 transition duration-700 delay-100 ease-in-out">
              <Facebook size={18} />
            </Link>
            <Link href="www.x.com" aria-label="Twitter" className="hover:text-gray-900 transition duration-700 delay-100 ease-in-out">
              <Twitter size={18} />
            </Link>
            <Link href="www.instagram.com" aria-label="Instagram" className="hover:text-gray-900 transition duration-700 delay-100 ease-in-out">
              <Instagram size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
