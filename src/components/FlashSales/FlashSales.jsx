"use client";
import React, { useRef } from "react";
import CountDownTime from "../CountDownTimer/CountDownTime";
import { ChevronLeft, ChevronRight, Eye, Heart } from "lucide-react";
import Cart from "../cart/Cart";
import { useCart } from "@/context/cartContext";
import Button from "../Button/Button";

export default function FlashSales() {
  // Create a ref for the scrollable container
  const scrollRef = useRef(null);
  const { cartData } = useCart();

  // Functions to scroll left/right

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full sm:max-w-[1170px] px-4 sm:px-6 lg:px-8 flex flex-col justify-center mx-auto mt-10 mb-5 border-b">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-8 bg-bgBtn "></div>
            <p className="text-accent font-bold text-lg sm:text-2xl">Today's</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-16 lg:gap-32 sm:mt-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold">
              Flash Sales
            </h2>
            <CountDownTime />
          </div>
        </div>
        <div className="hidden sm:flex justify-around sm:justify-center items-center gap-4 sm:gap-6">
          <ChevronLeft onClick={scrollLeft} />
          <ChevronRight onClick={scrollRight} />
        </div>
      </div>
      <div
        ref={scrollRef} // connect with ref here
        className="flex gap-[30px] mt-10 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {cartData.map((item) => (
          <Cart key={item.id} prodDetail={item}  icons={[Heart, Eye]}  />
        ))}
      </div>

      <div className="flex justify-center items-center my-10">
        
        <Button btnLink={""} btnPx={50} btnPy={12} btnText={"View All Products"}/>
      </div>
    </div>
  );
}
