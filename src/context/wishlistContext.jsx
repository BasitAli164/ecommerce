
'use client'
import { wishListData } from "@/data/dummyData";
import { useState,createContext,useContext } from "react";


export const wishlistContext=createContext();

export  const wishlistProvider=({children})=>{
    const [wishlistData,setWishlistData]=useState(wishListData)


    return <wishlistContext.Provider value={{wishlistData}} >
        {children}
    </wishlistContext.Provider>

}


// custome hook
export const useWishlist=()=>{
    return useContext(wishlistContext)
}