import { useCart } from "@/context/cartContext"

export default function Cart() {
    const {cartData}=useCart()
    console.log("Cart Data is:",cartData)
    
  return (
    <div>
      {
        cartData.map(item=>(
          <div key={item.id}>
            <div>{item.title}</div>
            <div></div>
          </div>
        ))

      }
    </div>
  )
}
