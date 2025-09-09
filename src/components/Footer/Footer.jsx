"use client";
import Link from "next/link";
import React, { useState } from "react";


const links=[
  {id:1,link:'',title:"My Account"},
  {id:2,link:'',title:"Cart"},
  {id:3,link:'',title:"Wishlist"},
  {id:4,link:'',title:"Shop"}
]


export default function Footer() {
  const [email, setEmail] = useState("");


  return (
    <div className="w-full h-[300px] ">
      <div>
        <h1>Exclusive</h1>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div>
        <h2>Support</h2>
        <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div>
        <h2>Account</h2>
        {
          links.map((item)=>(
            <Link key={item.id} href={item.link}>{item.title}</Link>
          ))
        }
        
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
