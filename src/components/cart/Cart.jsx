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
          <LucideShoppingCart  className="hover:text-amber-600 transition duration-300 delay-50"/>

          <div
            className="max-w-[300px] h-[300px] bg-center bg-cover bg-no-repeat "
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <div className="flex justify-between items-center">
            {" "}
            <p className="text-xl font-semibold">{item.title}</p>
            <p className="text-lg">${item.price}</p>
          </div>
        </div>
      ))}
    </>
  );
}
