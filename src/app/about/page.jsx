import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import React from "react";
import {Store,DollarSign,ShoppingBag} from 'lucide-react'

const data=[
  {
    icon:Store,
    quantity:"10.5k",
    description:"Sallers active our site"
  },
  {
    icon:DollarSign,
    quantity:"33k",
    description:"Mopnthly Product Sale"
  },
  {
    icon:ShoppingBag,
    quantity:"45.5k",
    description:"Customer active in our site"
  },
  {
    icon:,
    quantity:"25k",
    description:"Sallers active our site"
  },
]

export default function About() {
  return (
    <div className="w-full min-h-screen px-6 py-16 bg-white">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
        {/* --- Text Section --- */}
        <div className="flex flex-col text-justify max-w-2xl gap-8">
          <h1 className="text-4xl font-bold tracking-wide text-gray-800">
            Our Story
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Launched in 2015, <span className="font-semibold">Exclusive</span> is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has over 10,500 sellers and 300 brands, serving 3 million customers across the region.
            </p>

            <p>
              Exclusive offers more than 1 million products and continues to grow rapidly. Our platform provides a diverse assortment of items across multiple categories, ranging from consumer electronics to lifestyle products.
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
      <div>
        <div>
          
        </div>
      </div>
      <WhyChooseUs/>
    </div>
  );
}
