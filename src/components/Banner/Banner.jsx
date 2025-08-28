import React from "react";
import CountDownTime from "../CountDownTimer/CountDownTime";
import Button from "../Button/Button";

export default function Banner() {
  return (
    <div className="w-full sm:max-w-[1000px] h-[400px] px-4 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row sm:items-center gap-40 justify-center mx-auto mt-10 mb-5  bg-bgPrimary text-secondaryText">
      <div className="flex flex-col gap-10">
        <p className="">Categories</p>
        <h1>Enhance Your Music Experience</h1>
        <div>
            <CountDownTime/>
        </div>
        <div>
           <Button btnLink={""} btnPx={20} btnPy={10} btnText={"Buy Now"}/>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-[300px]">
          <img
            src='/Banner/banner.png'
            alt="Banner Image"
            className="w-52 sm:w-[400px] h-[400px] object-contain "
          />
        </div>
    </div>
  );
}
