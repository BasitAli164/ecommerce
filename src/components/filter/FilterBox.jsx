import { shoeSize } from "@/lib/dammyData";
import { productTypes } from "@/lib/dammyData";
import { shoeColors } from "@/lib/dammyData";
import RadioButton from "../button/RadioButton";

export default function FilterBox() {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1400px] border-2 border-amber-300 bg-white mt-2 p-4 rounded-lg shadow-lg text-black">
        <div className="flex gap-8">
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Size</h3>
            <p className="text-sm mb-3">
              Most of our shoes only come in full sizes. If you're a half size,
              select your nearest whole size too.
            </p>
            <ul className="flex flex-wrap gap-2">
              {shoeSize.map((size, index) => (
                <li
                  key={index}
                  className="px-3 py-1 border border-gray-200 rounded cursor-pointer hover:bg-amber-100"
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Product Types</h3>
            <div className="space-y-2">
              {productTypes.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-amber-600"
                    id={`type-${index}`}
                  />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="">
              <h3 className="font-semibold mb-2">Colors</h3>
              <div className="space-y-2 space-x-[43px]">
                <RadioButton />
              </div>
            </div>
            <div className="flex flex-col ">
              <h3 className="font-semibold mb-2 mt-2">Price</h3>
              <div className="border-4 border-red-700 flex justify-center items-center gap-5">
                <div className="flex gap-4 mb-5">
                  <p>From</p>
                  <input type="number" name="" id="" />
                </div>
                <div>
                  <p>To</p>
                  <input type="number" name="" id="" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
