"use client";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import React, { useState } from "react";
import { aboutPageData, teamDetailInAboutPage } from "@/data/dummyData";


export default function About() {
  const [activeId, setActiveId] = useState(aboutPageData[1].id);
  return (
    <div className="w-full min-h-screen px-6 py-16 bg-white">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
        {/* --- Text Section --- */}
        <div className="flex flex-col text-justify max-w-xl gap-8">
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
            className="hidden md:inline w-full mt-20 min-w-[300px] max-w-[500px] h-auto shadow-md object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row ml-28  items-center gap-20 mt-10 md:mt-40 ">
        {aboutPageData.map((item) => (
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
      <div className="flex flex-col sm:flex-row ml-28 items-center gap-20 mt-10
      md:mt-40">
        <div className="flex gap-4">
          {
            teamDetailInAboutPage.map((item)=>(
              <div key={item.id}  className="w-[370px] h-[564px] ">
                <div className="w-full h-[430px] border-2 flex justify-center items-center">
                  <img src={item.img} alt={item.teamName} className="w-[294px] h-[397px]" />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p>{item.teamName}</p>
                  <p>{item.prof}</p>
                  <p className="flex gap-2">
                    {item.icon.map((Icon,index)=>(
                    <span key={index}><Icon/></span>
                  ))}
                  </p>
                </div>

              </div>
            ))
          }
          
        </div>

      </div>
      <WhyChooseUs />
    </div>
  );
}
