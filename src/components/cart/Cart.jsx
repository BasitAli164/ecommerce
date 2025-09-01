import { Eye, Heart } from "lucide-react"

export default function Cart({prodDetail}) {
    console.log("Cart data from Cart component:",prodDetail)
    
  return (
    <div className="w-[270px] h-[350px] mt-2 border-2 border-s-lime-500 border-solid ">
     <div style={{backgroundImage:`url(${prodDetail.image})` ,backgroundPosition:"center", backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="w-[270px]  h-[250px] border-b-2 border-amber-800 bg-[#F5F5F5] flex justify-between">
      <div className="bg-[#DB4444] w-[55px] h-[26px] flex justify-center items-center">
        {prodDetail.discount}

      </div>
      <div>
        <div>
          <Heart/>
        </div>
        <div>
          <Eye/>
        </div>
      </div>
      
     </div>
     <div></div>
    </div>
  )
}
