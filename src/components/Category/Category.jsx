import React, { useRef } from "react";
import { ChevronLeft,ChevronRight } from "lucide-react";

export default function Category() {
    const scrollRef=useRef(null);

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
    <div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-8 bg-bgBtn "></div>
        <p className="text-accent font-bold text-lg sm:text-2xl">Today's</p>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row sm:gap-16 lg:gap-32 sm:mt-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold">
            Flash Sales
          </h2>
          <div className="hidden sm:flex justify-around sm:justify-center items-center gap-4 sm:gap-6">
          <ChevronLeft onClick={scrollLeft} />
          <ChevronRight onClick={scrollRight} />
        </div>
        </div>
      </div>
    </div>
  );
}
