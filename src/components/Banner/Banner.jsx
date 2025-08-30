import React from "react";
import CountDownTime from "../CountDownTimer/CountDownTime";
import Button from "../Button/Button";

export default function Banner() {
  return (
    <div className="w-full sm:max-w-[1100px] h-auto sm:h-[400px] px-4 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row sm:items-center gap-5 sm:gap-40 justify-center mx-auto mt-10 mb-5  bg-bgPrimary text-secondaryText rounded-sm">
      <div className="flex justify-center items-center sm:justify-normal sm:items-start flex-col gap-5 mb-10 sm:mb-0">
        <p className="text-accent">Categories</p>
        <h1 className="text-xl sm:text-xl lg:text-5xl">
          Enhance Your Music Experience
        </h1>
        <div>
          <CountDownTime />
        </div>
        <div className="sm:mt-7 w-full sm:w-auto flex justify-center sm:justify-start">
          <Button btnLink="" btnPx={30} btnPy={10} btnText="Buy Now" />
        </div>
      </div>
      <div className="flex justify-center items-center min-h-[300px]">
        <img
          src="/Banner/banner.png"
          alt="Banner Image"
          className="w-[300px] sm:w-[600px]  object-contain "
        />
      </div>
    </div>
  );
}
