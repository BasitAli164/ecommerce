import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { heroData } from "@/data/dummyData";
import { useState } from "react";

export default function Hero() {
  const [data, setData] = useState(heroData);
  console.log(data);

  const handleNext = () => {};
  return (
    <div className="max-w-[892px] w-full h-auto bg-bgPrimary mt-10 p-4 md:p-10 mb-10 md:mb-0 mx-auto rounded-sm">
      {data.map((item) => (
        <div key={item.id} className="flex flex-col-reverse md:flex-row justify-between items-center flex-wrap">
          <div className=" flex flex-col justify-center gap-4 ml-5">
            <div className="flex gap-3 items-center">
              <Image
                src={item.logoImage}
                alt={item.brandName}
                width={75}
                height={75}
                priority
                className="object-contain"
              />
              <p className="text-sm md:text-lg text-secondaryText">
              {item.brandName}
              </p>
            </div>
            <h1 className="text-secondaryText text-lg md:text-4xl lg:text-6xl tracking-tight">
             {item.title}
            </h1>
            <div className="flex gap-2">
              <Link
                className="text-secondaryText border-b border-gray-400 border-solid text-[12px] md:text-sm"
                href={""}
              >
                Shop Now
              </Link>
              <MoveRight className="text-secondaryText size-3 md:size-4 mt-2" />
            </div>
          </div>

          <div className="relative w-[250px] h-[250px] mx-auto md:mt-10 mt-5 sm:mt-8">
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
