

import { shoeSize } from "@/lib/dammyData"

export default function FilterBox() {
  return (
    <div className="w-full border-4 border-red-800 relative">
      <div className="max-w-[1200px] bg-white absolute  top-[-50px] left-[-50px]  text-black">
       <div>
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
      </div>
      
      
    </div>
  )
}
