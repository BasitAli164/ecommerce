import {createContext,useContext,useState} from "react";
import { cartsData } from "@/data/dummyData";


// Create Context

export const CartContext=createContext();

// Create Provider

export const CartProvider=({children})=>{
    const [cartData,setCartData]=useState(cartsData);

    // add function when dynmically doing work


    return (
        <CartContext value={{cartData}}>
            {children}
        </CartContext>

    )

}

// Create Custom Hook

export const useCart=()=>{
    return useContext(CartContext)
}


