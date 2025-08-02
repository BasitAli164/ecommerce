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

const cartData = [
  {
    id: 1,
    title: "Wear All Day Comfort",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores natus sed nam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, vero ducimus assumenda veritatis nemo possimus ut iusto itaque ea eos! Quod vitae perspiciatis vel neque culpa ullam optio ipsum officiis. ",
  },
  {
    id: 2,
    title: "Sustainability In Every Step",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores natus sed nam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, vero ducimus assumenda veritatis nemo possimus ut iusto itaque ea eos! Quod vitae perspiciatis vel neque culpa ullam optio ipsum officiis. ",
  },
  {
    id: 3,
    title: "Materials From The Earth",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores natus sed nam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, vero ducimus assumenda veritatis nemo possimus ut iusto itaque ea eos! Quod vitae perspiciatis vel neque culpa ullam optio ipsum officiis. ",
  },
];
export default function HomeFooter() {
  return (
    <section className="w-full overflow-hidden bg-gray-300  p-5">
      <div className="  flex flex-wrap justify-evenly items-center  gap-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="h-[600px] w-[600px] md:w-[400px] flex flex-col justify-center items-center bg-cover bg-no-repeat transition duration-700 delay-100 ease-in-out transform hover:scale-[1.01] rounded-4xl hover:cursor-pointer"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <h1 className="font-bold sm:text-2xl lg:text-4xl text-gray-300 ">
              {item.name}
            </h1>
            <p className="sm:text-lg lg:text-xl font-thin text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-around gap-5 :gap-3 mt-5">
        {
            cartData.map((item)=>(
                <div key={item.id} className="w-[480px] h-[250px] rounded-xl bg-gray-200 p-5">
                    <h2 className="text-gray-800 font-semibold ">{item.title}</h2>
                    <p className="text-gray-600 text-justify">{item.description}</p>

                </div>
                
            ))
        }
      </div>
    </section>
  );
}
