import Button from '@/components/Button/Button'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col gap-4 lg:gap-6'>
        <h2 className='text-4xl lg:text-6xl xl:text-8xl text-black'>404 Not Found</h2>
        <p className='text-[10px] lg:text-lg text-center'>Your visited page not found. You may go home page.</p>
        <Button bgColor={"#DB4444"} btnLink={"/"} textColor={"#fff"} btnText={"Back to Home Page"} btnPx={24} btnPy={8}/>


      
    </div>
  )
}

export default NotFound
