import React from "react";
import CountDownTime from "../CountDownTimer/CountDownTime";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="w-full sm:max-w-[1170px] h-[500px] px-4 sm:px-6 lg:px-8 flex flex-col justify-center mx-auto mt-10 mb-5  bg-amber-100">
      <div>
        <p>Categories</p>
        <h1>Enhance Your Music Experience</h1>
        <div>
            <CountDownTime/>
        </div>
        <div>
            <Link href={''} className="px-">Buy Now</Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}
