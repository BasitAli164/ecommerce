import { AppleIcon, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="w-[400px] md:w-[892px]  md:h-[344px] bg-bgPrimary mt-10 p-2 md:p-10">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="flex flex-col  justify-center gap-4 ml-5  ">
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
            width={400}
            height={300}
            className="mt-10"
          />
        </div>
      </div>
      <div
        className="flex justify-center items-center gap-5
      "
      >
        
        <input type="radio" name="green" id="green"  className="size-5 "/>
        <input type="radio" name="green" id="green"  className="size-5 "/>
        <input type="radio" name="green" id="green"  className="size-5 "/>
        <input type="radio" name="green" id="green"  className="size-5 "/>
        <input type="radio" name="green" id="green"  className="size-5 "/>
      </div>
    </div>
  );
}
