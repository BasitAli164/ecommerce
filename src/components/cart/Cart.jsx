
export default function Cart({prodDetail}) {
    console.log("Cart data from Cart component:",prodDetail)
    
  return (
    <div className="w-[270px] h-[350px] mt-10 border-2 border-s-lime-500 border-solid ">
     <div style={{backgroundImage:`url(${prodDetail.image})` ,backgroundPosition:"center", backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="w-[270px]  h-[250px] border-b-2 border-amber-800">
      
     </div>
     <div></div>
    </div>
  )
}
