
const data=[
    {id:1,name:"Tree Collection",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"/HomeCartsImage/img5.webp"},
    {id:2,name:"Tree Dasher",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"/HomeCartsImage/img6.webp"},
    {id:3,name:"Breezy BestSellers",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"/HomeCartsImage/img7.webp"},
]

const cartData=[
    {id:1,title:"Wear All Day Comfort",description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores natus sed nam "},
    {id:2,title:"Sustainability In Every Step",description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores natus sed nam "},
    {id:3,title:"Materials From The Earth",description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores natus sed nam "},
]
export default function HomeFooter() {
  return (
    <section className="w-full   overflow-hidden bg-gray-300">
        <div className="  p-5 flex flex-wrap justify-evenly items-center  gap-5">
            {
                data.map((item)=>(
                    <div key={item.id} className="h-[600px] w-[500px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat rounded-4xl" style={{backgroundImage:`url(${item.img})`}}>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>

                    </div>
                ))
            }

        </div>
        <div></div>
       
    </section>
  )
}
