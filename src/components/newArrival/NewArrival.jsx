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

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10">
        {/* PlayStation 5 */}
        <div className="bg-bgPrimary p-5 rounded-sm shadow-md flex flex-col items-center">
          <img
            src="/new/new1.png"
            alt="PlayStation 5"
            className="w-full max-w-[350px] object-contain"
          />
          <div className="text-secondaryText text-center mt-4">
            <h3 className="text-lg font-semibold">PlayStation 5</h3>
            <p className="text-sm mt-2">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link
              href={""}
              className="inline-block mt-3 text-accent hover:underline"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          {/* Women's Collection */}
          <div className="flex flex-col md:flex-row items-center bg-bgPrimary p-5 rounded-sm shadow-md">
            <div className="text-secondaryText flex-1 md:mt-10 md:ml-10 text-center md:text-left">
              <h3 className="text-lg font-semibold">Women’s Collections</h3>
              <p className="text-sm mt-2">
                Featured woman collections that give you another vibe.
              </p>
              <Link
                href={""}
                className="inline-block mt-3 text-accent hover:underline"
              >
                Shop Now
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/new/new2.jpg"
                alt="Women’s Collections"
                className="w-[300px] md:w-[400px] transform scale-x-[-1] object-contain"
              />
            </div>
          </div>

          {/* Speakers & Perfume */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Speakers */}
            <div className="bg-bgPrimary p-5 rounded-sm shadow-md flex-1 flex flex-col items-center">
              <img
                src="/new/new3.png"
                alt="Speakers"
                className="w-full max-w-[250px] object-contain"
              />
              <div className="text-secondaryText text-center mt-4">
                <h3 className="text-lg font-semibold">Speakers</h3>
                <p className="text-sm mt-2">Amazon wireless speakers</p>
                <Link
                  href={""}
                  className="inline-block mt-3 text-accent hover:underline"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Perfume */}
            <div className="bg-bgPrimary p-5 rounded-sm shadow-md flex-1 flex flex-col items-center">
              <img
                src="/new/new4.png"
                alt="Perfume"
                className="w-full max-w-[200px] object-contain"
              />
              <div className="text-secondaryText text-center mt-4">
                <h3 className="text-lg font-semibold">Perfume</h3>
                <p className="text-sm mt-2">GUCCI INTENSE OUD EDP</p>
                <Link
                  href={""}
                  className="inline-block mt-3 text-accent hover:underline"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
