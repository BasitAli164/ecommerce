import Image from "next/image";
import React, { useState } from "react";
import { heroData } from "@/data/dummyData";
import Link from "next/link";
import { MoveLeft, MoveRight } from "lucide-react";

export default function Hero() {
  const [data, setData] = useState(heroData);
  return (
    <div className=" max-w-[90%] w-full  sm:p-5  rounded-sm shadow-2xl bg-bgPrimary text-secondaryText">
    
        {data.map((item) => (
          <div key={item.id} className="w-full flex flex-col-reverse sm:flex-row overflow-hidden">
            <div className="flex flex-col gap-2 justify-center items-center">
             <div className=" flex items-center">
               <img
                src={item.logoImage}
                alt={item.brandName}
                className="w-16 "
              />
              <p className="text-base sm:text-lg">{item.brandName}</p>
             </div>
             <div className="flex flex-col items-center  justify-center mb-10 sm:0 gap-4">
              <h1 className="text-xl sm:text-4xl text-left">Up to 10% off Voucher</h1>
              <div className="flex items-center gap-1">
                <Link className="underline sm:text-lg" href={""}>Shop Now</Link>
                <MoveRight className="size-3 sm:size-5" />
              </div>
             </div>

            </div>
            <div className="flex justify-center">
              <img src={item.mainImage} alt={item.brandName}  className="w-52 sm:w-[500px]  " />
            </div>

          </div>
        ))}
      
      <div className="flex justify-between mx-10 items-center ">
        <MoveLeft/>
        <MoveRight/>
      </div>
    </div>
  );
}


