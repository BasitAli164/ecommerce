import React ,{createContext,useState} from 'react'
import { heroData } from '@/data/dummyData';


export const heroContext=createContext();

export default function heroProvider({children}) {
    const [index,setIndex]=useState(0)

    const handleNext=()=>{
        setIndex(prev=>(prev-1+heroData.length)%heroData.length)
    }
    const handlePrevious=()=>{
        setIndex(prev=>(prev-1))
    }
  return (
    <div>
      
    </div>
  )
}
