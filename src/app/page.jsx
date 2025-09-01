"use client";
import Cart from "@/components/cart/Cart";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import HeroProvider from "@/context/heroContext";
import { useCart } from "@/context/cartContext";

function Home() {
  const {cartData}=useCart()
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
     <div className=' flex flex-wrap justify-center items-center gap-5 overflow-hidden '>
        {
          cartData.map((item)=>(
            <Cart key={item.id} prodDetail={item}/>
          ))
        }
      </div>
   


    </>
  );
}

export default Home;
