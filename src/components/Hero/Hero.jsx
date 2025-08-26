import { heroData } from "@/data/dummyData";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [data, setData] = useState(heroData);
  return (
    <div className="w-full h-auto flex flex-col  justify-center items-center bg-primaryText text-secondaryText p-4">
      {data.map((item) => (
        <div className="flex justify-center items-center gap-5" key={item.id}>
          <div className="">
            <div className="flex  items-center">
              <Image
                src={item.logoImage}
                alt={item.brandName}
                width={50}
                height={50}
                priority
              />
              <p className="text-[12px] md:text-lg ">{item.brandName}</p>
            </div>
            <h1 className="text-[14px] md:text-2xl font-bold">{item.title}</h1>
            <div className="flex  items-center">
              <Link href={""} className="font-bold underline">Shop Now</Link>
              <MoveRight className="size-5 mt-1" />
            </div>
          </div>

          <div>
            <Image
              src={item.mainImage}
              alt={item.brandName}
              width={250}
              height={250}
              className="mt-10"
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
