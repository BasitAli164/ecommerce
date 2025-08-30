"use client";
import Cart from "@/components/cart/Cart";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import { CartProvider } from "@/context/cartContext";
import HeroProvider from "@/context/heroContext";

function Home() {
  return (
    <>
    <div className="flex flex-col md:flex-row gap-2 md:gap-8 xl:gap-14">
      <Slider/>
      <div className="ml-8 sm:ml-0 w-10/12 flex justify-center items-center overflow-hidden mt-4">
       <HeroProvider>
         <Hero />
       </HeroProvider>
      </div>
    </div>
   


    </>
  );
}

export default Home;
