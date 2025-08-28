import { useCart } from "@/context/cartContext";
import Link from "next/link";
import Cart from "../cart/Cart";
import Button from "../Button/Button";

export default function CurrentMonth() {
  const { cartData } = useCart();
  return (
    <div className="w-full sm:max-w-[1170px] px-4 sm:px-6 lg:px-8 flex flex-col justify-center mx-auto mt-10 mb-5 ">
      <div className="flex items-center gap-2">
        <div className="w-3 h-8 bg-bgBtn "></div>
        <p className="text-accent font-bold text-lg sm:text-2xl">This Month</p>
      </div>
      <div>
        <div className="flex  justify-start sm:justify-between items-center sm:gap-16 lg:gap-32 sm:mt-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold">
            Best Selling Products
          </h2>
          <div className="hidden sm:block">
          <Button btnLink={""} btnPx={20} btnPy={10} btnText={"View All"}/>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[30px] overflow-x-auto scroll-smooth no-scrollbar mt-10">
        {cartData.map((item) => (
          <Cart key={item.id} prodDetail={item} />
        ))}
      </div>
    </div>
  );
}
