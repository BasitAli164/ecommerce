import FilterField from "@/components/filter/FilterField";
import Cart from "@/components/cart/Cart";

export default function Shop() {
  return (
    <div className='w-full h-screen flex  flex-col justify-center items-center   '>
      <h1 className='text-6xl font-bold'>Shop Page</h1>
      <div>
        <FilterField/>
      
      </div>
      <div className="flex">
              <Cart/>

      </div>
    </div>
  )
}
