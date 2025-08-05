import Image from "next/image";
import RadioButton from "../button/RadioButton";
import { LucideShoppingCart } from "lucide-react";

export const dammyData = [
  {
    id: 1,
    title: "Shoe-1",
    price: 120,
    image: "/CartImage/img1.webp",
    new: "NEW",
  },
  { id: 2, title: "Shoe-2", price: 134, image: "/CartImage/img1.webp" },
  { id: 3, title: "Shoe-3", price: 224, image: "/CartImage/img1.webp" },
  {
    id: 4,
    title: "Shoe-4",
    price: 400,
    image: "/CartImage/img1.webp",
    new: "NEW",
  },
];

export default function Cart() {
  return (
    <>
      {dammyData.map((item) => (
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
