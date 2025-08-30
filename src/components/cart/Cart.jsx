
export default function Cart({prodDetail}) {
    console.log("Cart data from Cart component:",prodDetail)
    
  return (
    <div>
     <div style={{backgroundImage:`${prodDetail.image}` ,backgroundPosition:"center", backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="w-10 h-10">
      
     </div>
     <div></div>
    </div>
  )
}
