

import { shoeSize } from "@/lib/dammyData"
import 

export default function FilterBox() {
  return (
    <div className="w-full  relative">
      <div className="max-w-[1200px] bg-white absolute  top-[-50px] left-[-50px]  text-black">
       <div className="">
         <h1>Size</h1>
        <p>Most of our shoes only come in full sizes. If you're a half size, select your nearest whole size too.</p>
        <ul>
          {
          shoeSize.map((size,index)=>(
            <li>{size}</li>
            
          ))
        }
        </ul>

       </div>
       <div>

       </div>
      </div>
      
      
    </div>
  )
}
