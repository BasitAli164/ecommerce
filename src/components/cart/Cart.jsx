
export default function Cart({prodDetail}) {
    console.log("Cart data from Cart component:",prodDetail)
    
  return (
    <div className="border-2 border-s-lime-500 border-solid ">
     <div style={{backgroundImage:`url(${prodDetail.image})` ,backgroundPosition:"center", backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="w-32 h-60">
      
     </div>
     <div></div>
    </div>
  )
}
