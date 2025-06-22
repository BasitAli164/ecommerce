import Link from "next/link";
import ButtonComp from "../button/button";
import bg0 from '../../../public/backgroundImage/bg0.avif'
import bg1 from '../../../public/backgroundImage/bg1.avif'
import bg2 from '../../../public/backgroundImage/bg2.avif'
import bg3 from '../../../public/backgroundImage/bg3.avif'
import { useEffect, useState } from "react";

const bgImages=[bg0,bg1,bg2,bg3]
export default function HomePageComponent() {
  const [index,setIndex]=useState(0)
  useEffect(()=>{
    const interval=setInterval(()=>{
      setIndex(prev=>(prev+1)%bgImages.length)
    },3000)
  },[])
  return (
    <div className={`w-full h-screen flex flex-col justify-center items-center gap-5`}>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-center">Welcome to Our Shop</h1>
        <h4 className="text-xl md:text-2xl lg:text-3xl text-center font-bold">Discover our latest collection</h4>
        <p className="text-md sm:text-lg lg:text-xl xl:text-2xl text-center">Explore our wide range of high-quality products. We offer the best selection of goods for <Link href={'/men'} className="font-bold text-xl underline">Men</Link> and <Link href={'/women'} className="font-bold text-xl underline">Women</Link> . Whether you're looking for the latest trends or timeless classics, we have something for everyone. Our commitment to quality ensures that you get the best value for your money.</p>
      </div>
      <ButtonComp bgColor={"#17a589"} btnText={"Shop Now"}/>
    </div>
  )
}
