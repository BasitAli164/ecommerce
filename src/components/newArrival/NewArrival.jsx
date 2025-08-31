import Link from "next/link";
import React from "react";

export default function NewArrival() {
  return (
    <div className="w-full sm:max-w-[1170px] px-4 sm:px-6 lg:px-8 flex flex-col justify-center mx-auto mt-10 mb-5 ">
      <div>
        <div className="flex items-center gap-2">
        <div className="w-3 h-8 bg-bgBtn "></div>
        <p className="text-accent font-bold text-lg sm:text-2xl">Fetured</p>
      </div>
      <div className="flex  justify-start sm:justify-between items-center sm:gap-16 lg:gap-32 sm:mt-10">
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold">
          New Arrival
        </h2>
      </div>
      </div>


      <div className="grid grid-cols-2 gap-10">
        <div>
            <div>
                <img src="/new/new1.png" alt="Black and White version of the PS5 coming out on sale." />
            </div>
            <div>
                <h3>PlayStation 5</h3>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <Link href={""}>Shop Now</Link>
            </div>
        </div>
        <div>
            <div></div>
            <div></div>
        </div>

      </div>
      
    </div>
  );
}
