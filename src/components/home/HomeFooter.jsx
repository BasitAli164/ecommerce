const data = [
  {
    id: 1,
    name: "Urban Explorer Sneakers",
    description: "Lightweight and durable sneakers designed for comfort and city adventures all day long.",
    img: "/HomeCartsImage/img5.webp",
  },
  {
    id: 2,
    name: "Trail Runner Pro",
    description: "High-performance running shoes with superior grip and shock absorption for any terrain.",
    img: "/HomeCartsImage/img6.webp",
  },
  {
    id: 3,
    name: "Everyday Comfort Slip-Ons",
    description: "Breathable slip-on shoes that blend style and comfort for work, travel, or leisure.",
    img: "/HomeCartsImage/img7.webp",
  },
  {
    id: 4,
    name: "Classic Streetwear High-Tops",
    description: "Iconic high-top sneakers with a modern twist, perfect for casual and sporty outfits.",
    img: "/HomeCartsImage/img8.webp",
  },
  {
    id: 5,
    name: "WoolFlex Casuals",
    description: "Soft wool-blend shoes offering warmth, breathability, and all-day cushioning.",
    img: "/HomeCartsImage/img9.webp",
  },
  {
    id: 6,
    name: "BreezeWalk Mesh Trainers",
    description: "Ultra-light mesh trainers designed for maximum airflow and everyday active comfort.",
    img: "/HomeCartsImage/img10.webp",
  },
];



export default function HomeFooter() {
  return (
    <section className="w-full overflow-hidden bg-gray-50  p-5">
      <div className="  flex flex-wrap justify-evenly items-center  gap-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="h-[600px] w-[600px] md:w-[375px] flex flex-col justify-center items-center bg-cover bg-no-repeat transition duration-700 delay-100 ease-in-out transform hover:scale-[1.01] rounded-xl hover:cursor-pointer"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <h1 className="font-semibold  sm:text-lg lg:text-2xl text-gray-300 ">
              {item.name}
            </h1>
            <p className="sm:text-md lg:text-lg font-thin text-center text-gray-100">
              {item.description}
            </p>
          </div>
        ))}
      </div>
   
    </section>
  );
}
