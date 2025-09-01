import React, { useRef, useState } from "react";
import { ChevronLeft,ChevronRight } from "lucide-react";
import { categoryData } from "@/data/dummyData";

export default function Category() {
    const scrollRef=useRef(null);
    const [acticeId,setActiveId]=useState(categoryData[5].id)


    const scrollLeft=()=>{
        if(scrollRef.current){
            scrollRef.current.scrollBy({left:-300,behavior:"smooth"})
        }
    }
    const scrollRight=()=>{
        if(scrollRef.current){
            scrollRef.current.scrollBy({left:300,behavior:"smooth"})
        }
    }
  return (
    <div className="w-full sm:max-w-[1170px] px-4 sm:px-6 lg:px-8 flex flex-col justify-center mx-auto mt-10 mb-5 border-b">
      <div className="flex items-center gap-2">
        <div className="w-3 h-8 bg-bgBtn "></div>
        <p className="text-accent font-bold text-lg sm:text-2xl">Categories</p>
      </div>
      <div>
        <div className="flex  justify-start sm:justify-between items-center sm:gap-16 lg:gap-32 sm:mt-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold">
            Browse By Category
          </h2>
          <div className="hidden sm:flex justify-around sm:justify-center items-center gap-4 sm:gap-6">
          <ChevronLeft onClick={scrollLeft} />
          <ChevronRight onClick={scrollRight} />
        </div>
        </div>
      </div>
        <div
        ref={scrollRef}
         className="flex justify-center items-center gap-5 p-5 mb-10 overflow-x-auto scroll-smooth no-scrollbar">
            {
            categoryData.map((item)=>(
                <div
                 key={item.id} 
                 onMouseEnter={()=>setActiveId(item.id)}
                 className={`w-40 h-40 flex-shrink-0  flex justify-center items-center border-[1px] p-5  cursor-pointer transition-all duration-700 ease-in-out delay-100 ${acticeId===item.id ?"bg-accent text-secondaryText":"hover:bg-accent hover:text-secondaryText"}`}>
                    <h3 className="text-sm sm:text-lg lg:text-xl">{item.categoryName}</h3>                    
                </div>
            ))
        }
        </div>
    </div>
  );
}
