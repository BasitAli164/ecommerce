import { useState,createContext,useContext } from "react";


export const wishlistContext=createContext();

export default wishlistProvider=({children})=>{
    const [wishlistData,setWishlistData]=useState()


    return <wishlistContext.Provider >
        {children}
    </wishlistContext.Provider>

}