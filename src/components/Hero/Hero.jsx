import { AppleIcon, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="w-[300px] h-[275px] sm:w-[600px] sm:h-[350px] md:w-[892px]  md:h-[344px] bg-bgPrimary mt-10 p-4 md:p-10 mb-10 md:mb-0">
      <div className="flex justify-between items-center">
        <div className="hidden md:flex flex-col  justify-center gap-4 ml-5  ">
          <div className="flex gap-3 justify-left items-center">
            <AppleIcon className="text-secondaryText size-14" />
            <p className="text-lg text-secondaryText">iPhone 14 Series</p>
          </div>
          <h1 className="text-secondaryText text-4xl lg:text-6xl tracking-tight">
            Up to 10% off Voucher
          </h1>
          <div className="flex  gap-2">
            <Link
              className="text-secondaryText  border-b border-gray-400 border-solid"
              href={""}
            >
              Shop Now{" "}
            </Link>
            <MoveRight className="text-secondaryText size-4 mt-2" />
          </div>
        </div>
        <div className="text-center">
          <Image
            src={"/hero/iphon.jpg"}
            alt="Iphone Image"
            width={250}   
            height={250}       
            className="md:mt-10 ml-4 sm:ml-40 md:ml-0 mt-5 sm:mt-8"
          />
        </div>
      </div>
      <div
        className="flex justify-center items-center gap-5 mt-10
      "
      >
        
        <input type="radio" name="green" id="green"  className="size-2 "/>
        <input type="radio" name="green" id="green"  className="size-3 "/>
        <input type="radio" name="green" id="green"  className="size-5 "/>
        <input type="radio" name="green" id="green"  className="size-3 "/>
        <input type="radio" name="green" id="green"  className="size-2 "/>
      </div>
    </div>
  );
}
