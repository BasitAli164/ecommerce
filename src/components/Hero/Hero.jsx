import { heroData } from "@/data/dummyData";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import  { useState } from "react";

export default function Hero() {
  const [data, setData] = useState(heroData);
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
         
        >
          <div >
            <div>
              <Image
                src={item.logoImage}
                alt={item.brandName}
                width={75}
                height={75}
                priority
                
              />
              <p>
                {item.brandName}
              </p>
            </div>
            <h1>
             {item.title}
            </h1>
            <div >
              <Link
                
                href={""}
              >
                Shop Now
              </Link>
              <MoveRight className="text-secondaryText size-3 md:size-4 mt-2" />
            </div>
          </div>

          <div className="relative w-[250px] h-[250px] mx-auto md:mt-10 mt-5 sm:mt-8 overflow-hidden">
            <Image
              src={item.mainImage}
              alt={item.brandName}
              fill
              sizes="250px"
              priority
              className="object-contain"
            />
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center gap-5 mt-10">
        <input type="radio" name="color" className="size-2 accent-[#DB4444] " />
        <input type="radio" name="color" className="size-3 accent-[#DB4444]" />
        <input
          type="radio"
          name="color"
          className="size-5 accent-[#DB4444]"
          defaultChecked
        />
        <input type="radio" name="color" className="size-3 accent-[#DB4444]" />
        <input type="radio" name="color" className="size-2 accent-[#DB4444]" />
      </div>
    </div>
  );
}
