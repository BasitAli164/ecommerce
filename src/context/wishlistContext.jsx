
    'use client'
    import { wishListData } from "@/data/dummyData.js";
    import { useState,createContext,useContext } from "react";


    export const WishlistContext=createContext();

    export  const WishlistProvider=({children})=>{
        const [wishlistData,setWishlistData]=useState(wishListData)


        return <WishlistContext.Provider value={{wishlistData}} >
            {children}
        </WishlistContext.Provider>

    }


    // custome hook
    export const useWishlist=()=>{
        return useContext(WishlistContext)
    }