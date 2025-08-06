import RadioButton from "../button/RadioButton";
import { LucideShoppingCart } from "lucide-react";
import { dammyDataForCarts } from "@/lib/dammyData";

export default function Cart() {
  return (
    <>
      {dammyDataForCarts.map((item) => (
        <div
          key={item.id}
          className="w-[320px] h-[420px]  flex flex-col  justify-center p-2 rounded-3xl shadow bg-gray-200 text-black cursor-pointer"
        >
          <LucideShoppingCart />

          <div
            className="max-w-[300px] h-[300px] bg-center bg-cover bg-no-repeat "
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <div>
            {" "}
            <p className="text-xl font-semibold">{item.title}</p>
            <div className="flex justify-between items-center">
              <p>
                <RadioButton />
              </p>
              <p className="text-lg">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
