

import { shoeSize } from "@/lib/dammyData"
import { productTypes } from "@/lib/dammyData"

export default function FilterBox() {
  return (
    <div className="w-full  relative">
      <div className="w-full max-w-[1400px] border-4 border-red-900 bg-white absolute  top-[-50px] text-black flex">
       <div className="">
         <h3>Size</h3>
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
        <h3>Product Types</h3>
        <div>
          {
            productTypes.map((item,index)=>(
              <div key={index}>
                <input type="checkbox" name="" id="" />
                <p>{item}</p>
              </div>
            ))
          }
        </div>


       </div>
      </div>
      
      
    </div>
  )
}
