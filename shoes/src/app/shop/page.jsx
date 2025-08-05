import FilterField from "@/components/filter/FilterField";
import Cart from "@/components/cart/Cart";

export default function Shop() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center border-4 border-red-800 py-10">
      <div className="w-full max-w-7xl text-center border-4 border-green-800 p-6">
        <h1 className="text-6xl font-bold mb-8">Shop Page</h1>

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
