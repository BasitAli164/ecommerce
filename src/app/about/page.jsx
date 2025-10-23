"use client";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import React, { useState } from "react";
import { Store, DollarSign, ShoppingBag, Coins } from "lucide-react";

const data = [
  {
    id: 1,
    icon: Store,
    quantity: "10.5k",
    description: "Sellers active on our site",
  },
  {
    id: 2,
    icon: DollarSign,
    quantity: "33k",
    description: "Monthly Product Sale",
  },
  {
    id: 3,
    icon: ShoppingBag,
    quantity: "45.5k",
    description: "Customers active on our site",
  },
  {
    id: 4,
    icon: Coins,
    quantity: "25k",
    description: "Annual gross sale in our site",
  },
];

export default function About() {
  const [activeId, setActiveId] = useState(data[1].id);
  return (
    <div className="w-full min-h-screen px-6 py-16 bg-white">
      <div className="flex flex-col sm:flex-row md:flex-row justify-center items-center gap-12 md:gap-20">
        {/* --- Text Section --- */}
        <div className="flex flex-col text-justify max-w-2xl gap-8">
          <h1 className="text-4xl font-bold tracking-wide text-gray-800">
            Our Story
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Launched in 2015, <span className="font-semibold">Exclusive</span>{" "}
              is South Asia’s premier online shopping marketplace with an active
              presence in Bangladesh. Supported by a wide range of tailored
              marketing, data, and service solutions, Exclusive has over 10,500
              sellers and 300 brands, serving 3 million customers across the
              region.
            </p>

            <p>
              Exclusive offers more than 1 million products and continues to
              grow rapidly. Our platform provides a diverse assortment of items
              across multiple categories, ranging from consumer electronics to
              lifestyle products.
            </p>
          </div>
        </div>

        {/* --- Image Section --- */}
        <div className="flex justify-center">
          <img
            src="/about/about1.jpg"
            alt="joy-of-shopping"
            className="w-full max-w-xl shadow-md object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row ml-5 items-center gap-8 mt-40 ">
        {data.map((item) => (
          <div
            key={item.id}
            className={`w-52 h-40 border flex flex-col items-center justify-center cursor-pointer transition duration-700 delay-100 ease-in-out rounded-sm
             ${
               activeId == item.id
                 ? "bg-accent text-secondaryText"
                 : "hover:bg-accent hover:text-secondaryText"
             }
              
              `}
            onMouseEnter={() => setActiveId(item.id)}
          >
            <p className="mb-2">
              <item.icon
                className={`w-10 h-10 shadow-2xl ${
                  activeId
                    ? "text-primaryText"
                    : "text-gray-700 group-hover:text-primaryText"
                }`}
              />
            </p>
            <h4 className="font-bold text-xl">{item.quantity}</h4>
            <p className="mt-2 text-sm text-center">{item.description}</p>
          </div>
        ))}
      </div>
      <WhyChooseUs />
    </div>
  );
}
