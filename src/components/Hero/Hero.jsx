import React, { useEffect, useState } from "react";
import { heroData } from "@/data/dummyData";
import Link from "next/link";
import { MoveLeft, MoveRight } from "lucide-react";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const handleNext=()=>{
    setIndex(prev=>(prev+1)%heroData.length)

  }
  
  const handlePrevious=()=>{
    setIndex(prev=>(prev-1+heroData.length)%heroData.length)
  }


  useEffect(()=>{
    const interval=setInterval(() => {
      setIndex(prev=>(prev+1)%heroData.length)
    }, 30000);

    return ()=>clearInterval(interval)
  },[])


  const item=heroData[index]
  return (
    <div className=" max-w-[90%] w-full  sm:p-5  rounded-sm shadow-2xl bg-bgPrimary text-secondaryText">
      
        <div
          key={item.id}
          className="w-full flex flex-col-reverse sm:flex-row sm:gap-10 overflow-hidden"
        >
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className=" flex items-center">
              <img
                src={item.logoImage}
                alt={item.brandName}
                className="w-10 sm:w-16 "
              />
              <p className="text-12 sm:text-lg">{item.brandName}</p>
            </div>
            <div className="flex flex-col items-center  justify-center mb-10 sm:0 gap-4">
              <h1 className="text-lg sm:text-4xl text-center">
               {item.title}
              </h1>
              <div className="flex items-center gap-1">
                <Link className="underline sm:text-lg" href={""}>
                  Shop Now
                </Link>
                <MoveRight className="size-3 sm:size-5" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={item.mainImage}
              alt={item.brandName}
              className="w-52 sm:w-[500px]  "
            />
          </div>
        </div>
      

      <div className="flex justify-between mx-5 items-center ">
        <MoveLeft onClick={handlePrevious}  className="cursor-pointer"/>
        <MoveRight onClick={handleNext}  className="cursor-pointer"/>
      </div>
    </div>
  );
}
