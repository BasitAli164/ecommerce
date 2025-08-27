import React, { useState } from 'react'

export default function CountDownTime() {

    // target date  static
    // const targetDate=new Date("2025-09-05T00:00:00") //! make sure use this when backend and DB integrate


    // set target date dynamically 
    const targetDate=   new Date();
    targetDate.setDate(targetDate.getDate()+3)
    const [timeLeft,setTimeLeft]=useState({
        days:0,
        hours:0,
        minutes:0,
        seconds:0
    })



  return (
    <div>
      
    </div>
  )
}
