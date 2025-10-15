import React from 'react'

export default function About() {
  return (
    <div className='w-full  h-screen '>
     <div className='flex justify-center items-center gap-10 mt-20'>
       <div className='flex justify-center flex-col text-justify w-[800px] gap-10 ml-20'>
         <h1>Our Story</h1>
        <div>
          <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</p>
        </div>
       </div>
        <div>
        <img src="/about/about1.jpg" alt="joy-of-shopping" className='w-[600px] ' />
      </div>
      </div>
    </div>
  )
}
