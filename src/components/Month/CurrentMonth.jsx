import Link from 'next/link'
import React from 'react'

export default function CurrentMonth() {
  return (
    <div className="w-full sm:max-w-[1170px] px-4 sm:px-6 lg:px-8 flex flex-col justify-center mx-auto mt-10 mb-5 border-b">
        <div className="flex items-center gap-2">
        <div className="w-3 h-8 bg-bgBtn "></div>
        <p className="text-accent font-bold text-lg sm:text-2xl">This Month</p>
      </div>
      <div>
        <div className="flex  justify-start sm:justify-between items-center sm:gap-16 lg:gap-32 sm:mt-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold">
           Best Selling Products
          </h2>
            <div>
                <Link href={""} className='px-6 py-3 text-center bg-bgBtn text-secondaryText  rounded-sm'>View All</Link>
            </div>
        </div>
      </div>
      
    </div>
  )
}
