import { useCart } from "@/context/cartContext"

export default function Cart() {
    const {cartData}=useCart()
    console.log("Cart Data is:",cartData)
    
  return (
    <div>
      {

      }
    </div>
  )
}
