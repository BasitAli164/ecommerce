const data = [
  {
    id: 1,
    name: "Tree Collection",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "/HomeCartsImage/img5.webp",
  },
  {
    id: 2,
    name: "Tree Dasher",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "/HomeCartsImage/img6.webp",
  },
  {
    id: 3,
    name: "Breezy BestSellers",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit ",
    img: "/HomeCartsImage/img7.webp",
  },
];


export default function HomeFooter() {
  return (
    <section className="w-full overflow-hidden bg-gray-300  p-5">
      <div className="  flex flex-wrap justify-evenly items-center  gap-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="h-[600px] w-[600px] md:w-[375px] flex flex-col justify-center items-center bg-cover bg-no-repeat transition duration-700 delay-100 ease-in-out transform hover:scale-[1.01] rounded-xl hover:cursor-pointer"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <h1 className="font-bold sm:text-2xl lg:text-4xl text-gray-300 ">
              {item.name}
            </h1>
            <p className="sm:text-lg lg:text-xl font-thin text-center text-gray-100">
              {item.description}
            </p>
          </div>
        ))}
      </div>
   
    </section>
  );
}
