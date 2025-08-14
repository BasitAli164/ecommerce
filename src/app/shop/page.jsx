import FilterField from "@/components/filter/FilterField";
import Cart from "@/components/cart/Cart";

export default function Shop() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center  py-10">
      <div className="w-full max-w-7xl  p-6">
        <h1 className="text-4xl font-bold mb-8 mt-16">Shop Page</h1>

        {/* Filter Section */}
        <FilterField />

        {/* Cart Items */}
        <div className="flex flex-wrap gap-6 justify-center mt-10">
          <Cart />
          {/* Add more <Cart /> components here or map through data */}
        </div>
      </div>
    </div>
  );
}
