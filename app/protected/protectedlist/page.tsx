import BackButtonDemo from '@/components/backButton'
import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <div>
   <BackButtonDemo/>   
   <div className=" bg-ethBlack-950 w-full h-full p-8 grid grid-cols-3 gap-4 ">
      {/* Create an array with 100 elements and map over it */}
      {Array.from({ length: 100 }).map((_, index) => (
        <div className="px-4 mt-4 flex justify-center" key={index}>
          <div className="p-4 rounded-full circle-outer">
            <div className="w-full h-full rounded-full circle-inner">
              <p className='text-center font-bold text-lg text-ethYellow-600'>{index + 1}</p>
              <Link href="/protected/protectedlist"></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Page
