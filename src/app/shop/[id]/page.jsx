import { shoeColors } from "@/lib/dammyData";
export default async function ProductDetail({params}) {
    const {id}=await params;
  return (
   <div className="w-full flex justify-center items-center">
     <div className='max-w-[1400px] flex items-center justify-center gap-20 bg-gray-800 '>
     <div className="">
        {
            shoeColors.map((item,index)=>(
                <div key={index} className={`w-20 h-20 bg-[${item}] border `}></div>
            ))
        }
     </div>
     <div className="border-2 w-96 h-96 "></div>
     <div className="border-2 w-96 h-96 "></div>
    </div>
   </div>
  )
}
