import React from "react";

export default function NewArrival() {
  return (
    <div className="w-full sm:max-w-[1170px] px-4 sm:px-6 lg:px-8 flex flex-col justify-center mx-auto mt-10 mb-5 ">
      <div className="flex items-center gap-2">
        <div className="w-3 h-8 bg-bgBtn "></div>
        <p className="text-accent font-bold text-lg sm:text-2xl">Fetured</p>
      </div>
      <div className="flex  justify-start sm:justify-between items-center sm:gap-16 lg:gap-32 sm:mt-10">
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold">
          New Arrival
        </h2>
      </div>
      <div className="w-full h-[300px] border border-solid grid grid-cols-2 gap-20 ">
        <div className="bg-bgPrimary ">
          <figure>
            <img src=".jpg" alt="A beautiful view of mountains" />
            <figcaption>A beautiful mountain view during sunrise</figcaption>
          </figure>
        </div>
        <div></div>
      </div>
    </div>
  );
}
