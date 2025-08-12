"use client";
import Link from "next/link";
import ButtonComp from "../button/Herobutton";
import { useEffect, useState } from "react";
import Image from "next/image";
import HomePageCart from "./HomePageCart";
import HomeFooter from "./HomeFooter";
import Cart from "../cart/Cart";

const bgImages = [
  "/backgroundImage/bg0.avif",
  "/backgroundImage/bg1.avif",
  "/backgroundImage/bg2.avif",
  "/backgroundImage/bg3.avif",
];

const images = [
  "/HomeCartsImage/img1.webp",
  "/HomeCartsImage/img2.webp",
  "/HomeCartsImage/img3.webp",
  "/HomeCartsImage/img4.webp",
];
const hoverImages = [
  "/HomeCartsImage/HoverImage/img1.webp",
  "/HomeCartsImage/HoverImage/img2.jpg",
  "/HomeCartsImage/HoverImage/img3.webp",
  "/HomeCartsImage/HoverImage/img4.webp",
];

const btnText = ["BestSellers", "New Arrivals", "Mens", "Womens"];

export default function HomePageComponent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-screen relative overflow-hidden">
        {/* Background Images */}
        {bgImages.map((bg, i) => (
          <Image
            key={i}
            src={bg}
            alt={`bg-${i}`}
            fill
            className={`absolute top-0 left-0 object-cover object-center transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-5 bg-black/50 px-4 text-gray-400 text-center ">
          <div className="flex flex-col justify-center items-center gap-2 max-w-5xl">
            <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold">
              Welcome to Our Shop
            </h1>
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Discover our latest collection
            </h4>
            <p className="text-md sm:text-lg lg:text-xl xl:text-2xl">
              Explore our wide range of high-quality products. We offer the best
              selection of goods for{" "}
              <Link href={"/men"} className="font-bold text-xl underline">
                Men
              </Link>{" "}
              and{" "}
              <Link href={"/women"} className="font-bold text-xl underline">
                Women
              </Link>
              . Whether you're looking for the latest trends or timeless
              classics, we have something for everyone. Our commitment to
              quality ensures that you get the best value for your money.
            </p>
          </div>
          <ButtonComp btnText={"Shop Now"} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-300 p-5 gap-5 overflow-hidden">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-700 text-center">
          Explore Our Shoes
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-5 ">
          <HomePageCart
            btnText="BestSellers"
            img="/HomeCartsImage/img1.webp"
            link="/bestsellers"
          />

          <HomePageCart
            btnText="New Arrivals"
            img="/HomeCartsImage/img2.webp"
            link="/newarrivals"
          />
          <HomePageCart
            btnText="Mens"
            img="/HomeCartsImage/img3.webp"
            link="/mens"
          />
          <HomePageCart
            btnText="Womens"
            img="/HomeCartsImage/img4.webp"
            link="/womens"
          />
        </div>
      </div>
      <div>
        <HomeFooter/>
       
      </div>
    </>
  );
}
