import React ,{createContext,useContext,useState} from 'react'
import { heroData } from '@/data/dummyData';

// Create Context
export const heroContext=createContext();


// Create Provider
export default function HeroProvider({children}) {
    const [index,setIndex]=useState(0)
    console.log("Data from context",index)

    const handleNext=()=>{
        setIndex(prev=>(prev+1)%heroData.length)
    }
    const handlePrevious=()=>{
        setIndex(prev=>(prev-1+heroData.length)%heroData.length)
    }
  return (
    <heroContext.Provider value={{index,handleNext,handlePrevious}}>
        {children}
      
    </heroContext.Provider>
  )
}

// Create Custome hook

export const useHero=()=>{
 return useContext(heroContext)
}