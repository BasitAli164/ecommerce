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
export default function TextCart() {
  return (
   <div className="flex flex-wrap items-center justify-center gap-5 :gap-3 mt-5 mb-10">
        {cartData.map((item) => (
          <div
            key={item.id}
            className="w-[600px] lg:w-[375px] h-[250px] rounded-xl bg-gray-100 p-5 overflow-hidden shadow-2xl"
          >
            <h2 className="text-gray-800 font-semibold text-lg ">{item.title}</h2>
            <p className="text-gray-600 text-justify text-[17px]">{item.description}</p>
          </div>
        ))}
      </div>
  )
}
