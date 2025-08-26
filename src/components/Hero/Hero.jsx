import { heroData } from "@/data/dummyData";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [data, setData] = useState(heroData);
  return (
    <div className="max-w-[800px]  w-full   h-auto  mx-4 my-2 sm:my-0 sm:mx-0   flex flex-col  justify-center items-center bg-primaryText text-secondaryText rounded-lg shadow-2xl sm:p-4 overflow-hidden">
      {data.map((item) => (
        <div className="flex flex-col-reverse md:flex-row items-center gap-5 sm:gap-52" key={item.id}>
          <div className="my-2">
            <div className="flex  items-center">
              <img src={item.logoImage}
                alt={item.brandName}
                className="size-10 md:size-20"
                />
              <p className="text-[12px] md:text-lg ">{item.brandName}</p>
            </div>
            <h1 className="text-[14px] md:text-2xl font-bold">{item.title}</h1>
            <div className="flex justify-center  items-center">
              <Link href={""} className="text-[12px] sm:text-base font-bold underline">Shop Now</Link>
              <MoveRight className="size-3 sm:size-5 mt-1" />
            </div>
          </div>

          <div>
            <img src={item.mainImage}
                alt={item.brandName}
                className="size-[120px] md:size-52 mt-10"
                />
          </div>
        </div>
      ))}
      <div>
        <input type="radio" name="color" />
        <input type="radio" name="color" />
        <input type="radio" name="color" defaultChecked />
        <input type="radio" name="color" />
        <input type="radio" name="color" />
      </div>
    </div>
  );
}
