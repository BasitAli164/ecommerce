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
              <MoveRight  />
            </div>
          </div>

          <div >
            <Image
              src={item.mainImage}
              alt={item.brandName}
              width={10}
              height={10}
              
            />
          </div>
        </div>
      ))}
      <div >
        <input type="radio" name="color" />
        <input type="radio" name="color"/>
        <input
          type="radio"
          name="color"
          
          defaultChecked
        />
        <input type="radio" name="color" />
        <input type="radio" name="color" />
      </div>
    </div>
  );
}
