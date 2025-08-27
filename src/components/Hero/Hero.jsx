import React, { useEffect, useState } from "react";
import { heroData } from "@/data/dummyData";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { useHero } from "@/context/heroContext";

export default function Hero() {
  const { index, handleNext, handlePrevious } = useHero();

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const item = heroData[index];
  return (
    <div className=" max-w-[90%] w-full  sm:p-5  rounded-sm shadow-2xl bg-bgPrimary text-secondaryText min-h-[400px]">
      <div
        key={item.id}
        className="w-full flex flex-col-reverse sm:flex-row sm:gap-10 overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="flex flex-col gap-2 justify-center items-center min-h-[200px]">
          <div className=" flex items-center">
            <img
              src={item.logoImage}
              alt={item.brandName}
              className="w-10 sm:w-16 "
            />
            <p className="text-12 sm:text-lg">{item.brandName}</p>
          </div>
          <div className="flex flex-col items-center  justify-center mb-10 sm:0 gap-4">
            <h1 className="text-lg sm:text-4xl text-center">{item.title}</h1>
            <div className="flex items-center gap-1">
              <Link className="underline sm:text-lg" href={""}>
                Shop Now
              </Link>
              <MoveRight className="size-3 sm:size-5 mt-1" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center min-h-[300px]">
          <img
            src={item.mainImage}
            alt={item.brandName}
            className="w-52 sm:w-[500px] h-[300px] object-contain "
          />
        </div>
      </div>

      <div className="hidden sm:flex justify-between mx-5 items-center ">
        <ChevronLeft onClick={handlePrevious} className="cursor-pointer" />
        <ChevronRight onClick={handleNext} className="cursor-pointer" />
      </div>
    </div>
  );
}
