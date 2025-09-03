"use client";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import HeroProvider from "@/context/heroContext";
import { useCart } from "@/context/cartContext";
import FlashSales from "@/components/FlashSales/FlashSales";
import Category from "@/components/Category/Category";
import CurrentMonth from "@/components/Month/CurrentMonth";
import Banner from "@/components/Banner/Banner";

function Home() {
  const { cartData } = useCart();
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 md:gap-8 xl:gap-14">
        <Slider />
        <div className="ml-8 sm:ml-0 w-10/12 flex justify-center items-center overflow-hidden mt-4">
          <HeroProvider>
            <Hero />
          </HeroProvider>
        </div>
      </div>
    
        <FlashSales />
        <Category/>
        <CurrentMonth/>
        <Banner/>
      
    </>
  );
}

export default Home;
