import Button from '@/components/Button/Button'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h2 className='text-9xl text-black'>404 Not Found</h2>
        <p className='text-lg'>Your visited page not found. You may go home page.</p>
        <Button bgColor={"#DB4444"} btnLink={"/"} textColor={"#fff"} btnText={"Back to Home Page"} btnPx={24} btnPy={8}/>


      
    </div>
  )
}

export default NotFound
