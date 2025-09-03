import React from "react";
import CountDownTime from "../CountDownTimer/CountDownTime";
import Button from "../Button/Button";

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
           <Button btnLink={""} btnPx={8} btnPy={3} btnText={"Buy Now"}/>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-[300px]">
          <img
            src='/Banner/banner.png'
            alt="Banner Image"
            className="w-52 sm:w-[500px] h-[300px] object-contain "
          />
        </div>
    </div>
  );
}
