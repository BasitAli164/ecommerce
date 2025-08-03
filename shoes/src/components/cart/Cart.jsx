import Image from "next/image";

const dammyData=[
    {id:1,title:"Shoe-1",price:120,image:"/HomeCartsImage/img1.webp"},
    {id:1,title:"Shoe-2",price:134,image:  "/HomeCartsImage/img2.webp"},
    {id:1,title:"Shoe-3",price:224,image:  "/HomeCartsImage/img3.webp"},
    {id:1,title:"Shoe-4",price:400,image:  "/HomeCartsImage/img4.webp"},
]

export default function Cart() {
  return <>
  {
    dammyData.map((item)=>(
        <div key={item.id} className="w-[250px] h-[330px] p-3 rounded-3xl shadow bg-gray-200">
            <div>
                <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                />
            </div>
            <div>

            </div>


        </div>
    ))
  }
    
  </>;
}
