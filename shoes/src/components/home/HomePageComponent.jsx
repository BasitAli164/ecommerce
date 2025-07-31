import Link from "next/link";
import ButtonComp from "../button/button";

export default function HomePageComponent() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold">Welcome to Our Shop</h1>
        <h4 className="text-lg sm:text-xl lg:text-3xl font-bold">Discover our latest collection</h4>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-center">Explore our wide range of high-quality products. We offer the best selection of goods for <Link href={'/men'} className="font-bold text-xl underline">Men</Link> and <Link href={'/women'} className="font-bold text-xl underline">Women</Link> . Whether you're looking for the latest trends or timeless classics, we have something for everyone. Our commitment to quality ensures that you get the best value for your money.</p>
      </div>
      <ButtonComp bgColor={"#17a589"} btnText={"Shop Now"}/>
    </div>
  )
}
