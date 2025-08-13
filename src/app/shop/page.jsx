import FilterField from "@/components/filter/FilterField";
import Cart from "@/components/cart/Cart";
import HomeFooter from "@/components/home/HomeFooter";

export default function Shop(props) {
  console.log("Search params:",props.searchParams,props.params)
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      {/* Video Hero Section */}
      <div className="w-full h-[80vh] relative">
        <video 
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Discover Your Style</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our curated collection of premium fashion. From casual wear to formal attire, 
            find pieces that reflect your unique personality.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl p-6">
        {/* Filter Section */}
        <FilterField />

        {/* Cart Items */}
        <div className="flex flex-wrap gap-6 justify-center mt-10">
          <Cart />
          {/* Add more <Cart /> components here or map through data */}
        </div>
       <div className="mt-10">
         <HomeFooter/>
       </div>
      </div>
    </div>
  );
}
