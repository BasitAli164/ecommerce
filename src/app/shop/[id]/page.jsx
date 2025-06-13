import React from 'react'

export default async function ProductDetail({params}) {
    const {id}=await params;
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <h1 className=' text-5xl '>Product Detail Page</h1>
      <p>{id}</p>
    </div>
  )
}
