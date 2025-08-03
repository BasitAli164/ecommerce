import Image from "next/image";
import RadioButton from "../button/RadioButton";

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
        <div key={item.id} className="w-[250px] h-[330px] p-3 rounded-3xl shadow bg-gray-200 text-black">
            <div className="w-[200px] h-[200px] bg-amber-100 bg-center bg-cover bg-no-repeat " style={{backgroundImage:`url${item.image}`}}>
                
            </div>
            <div className>
                <p>{item.title}</p>
                <div>
                    <RadioButton/>
                    <p>${item.price}</p>
                </div>

            </div>


        </div>
    ))
  }
    
  </>;
}
